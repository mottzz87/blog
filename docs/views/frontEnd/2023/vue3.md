---
title: Vue3开发基础
date: 2023-08-04
tags:
 - vue    
categories: 
 - frontEnd
---

首先是向下兼容，Vue3 支持大多数 Vue2 的特性。甚至就拿 Vue2 的语法开发 Vue3，也是没有任何问题的。

## 1、composition-api
  相比于Options Api,Composition Api有哪些优势：
  - 在逻辑组织和逻辑复用方面，Composition API是优于Options API，因为Composition API几乎是函数，会有更好的类型推断。
  - Composition API对 tree-shaking 友好，代码也更容易压缩。
  - Composition API中见不到this的使用，减少了this指向不明的情况
  
## 2、生命周期
  - setup() :开始创建组件之前，在beforeCreate和created之前执行。创建的是data和method
  - onBeforeMount() : 组件挂载到节点上之前执行的函数。
  - onMounted() : 组件挂载完成后执行的函数。
  - onBeforeUpdate(): 组件更新之前执行的函数。
  - onUpdated(): 组件更新完成之后执行的函数。
  - onBeforeUnmount(): 组件卸载之前执行的函数。
  - onUnmounted(): 组件卸载完成后执行的函数
  - onActivated(): 被包含在中的组件，会多出两个生命周期钩子函数。被激活时执行。
  - onDeactivated(): 比如从 A 组件，切换到 B 组件，A 组件消失时执行。
  - onErrorCaptured(): 当捕获一个来自子孙组件的异常时激活钩子函数。

## 3、proxy、reactive
> 定义: 接收一个普通对象然后返回该普通对象的响应式代理。等同于 2.x 的 Vue.observable()

```js
const obj = reactive({ count: 0 })
```
响应式转换是“深层的”：会影响对象内部所有嵌套的属性。基于 `ES2015` 的 `Proxy` 实现，返回的代理对象不等于原始对象。建议仅使用代理对象而避免依赖原始对象。

### 正文

Vue3中响应数据核心是 `reactive` ， `reactive` 中的实现是由 `proxy` 加 `effect` 组合，先来看一下 `reactive` 方法的定义

```js
export function reactive<T extends object>(target: T): UnwrapNestedRefs<T>
export function reactive(target: object) {
  // if trying to observe a readonly proxy, return the readonly version.
  // 如果目标对象是一个只读的响应数据,则直接返回目标对象
  if (target && (target as Target).__v_isReadonly) {
    return target
  }

  // 否则调用  createReactiveObject 创建 observe
  return createReactiveObject(
    target, 
    false,
    mutableHandlers,
    mutableCollectionHandlers
  )
}
```

`createReactiveObject` 创建 observe 

```js
// Target 目标对象
// isReadonly 是否只读 
// baseHandlers 基本类型的 handlers
// collectionHandlers 主要针对(set、map、weakSet、weakMap)的 handlers
function createReactiveObject(
  target: Target,
  isReadonly: boolean,
  baseHandlers: ProxyHandler<any>,
  collectionHandlers: ProxyHandler<any>
) {
  // 如果不是对象
  if (!isObject(target)) {
    // 在开发模式抛出警告，生产环境直接返回目标对象
    if (__DEV__) {
      console.warn(`value cannot be made reactive: ${String(target)}`)
    }
    return target
  }
  // target is already a Proxy, return it.
  // exception: calling readonly() on a reactive object
  // 如果目标对象已经是个 proxy 直接返回
  if (target.__v_raw && !(isReadonly && target.__v_isReactive)) {
    return target
  }
  // target already has corresponding Proxy
  if (
    hasOwn(target, isReadonly ? ReactiveFlags.readonly : ReactiveFlags.reactive)
  ) {
    return isReadonly ? target.__v_readonly : target.__v_reactive
  }
  // only a whitelist of value types can be observed.

  // 检查目标对象是否能被观察, 不能直接返回
  if (!canObserve(target)) {
    return target
  }

  // 使用 Proxy 创建 observe 
  const observed = new Proxy(
    target,
    collectionTypes.has(target.constructor) ? collectionHandlers : baseHandlers
  )

  // 打上相应标记
  def(
    target,
    isReadonly ? ReactiveFlags.readonly : ReactiveFlags.reactive,
    observed
  )
  return observed
}

// 同时满足3个条即为可以观察的目标对象
// 1. 没有打上__v_skip标记
// 2. 是可以观察的值类型
// 3. 没有被frozen
const canObserve = (value: Target): boolean => {
  return (
    !value.__v_skip &&
    isObservableType(toRawType(value)) &&
    !Object.isFrozen(value)
  )
}

// 可以被观察的值类型
const isObservableType = /*#__PURE__*/ makeMap(
  'Object,Array,Map,Set,WeakMap,WeakSet'
)
```

### 结语

看到这里我们大概清楚 `reactive` 是做为整个响应式的入口，负责处理目标对象是否可观察以及是否已被观察的逻辑，最后使用 `Proxy` 进行目标对象的代理，对 `es6` `Proxy` 概念清楚的同学应该 `Proxy` 重点的逻辑处理在 `Handlers` , 接下来我们就一起去看看各种 `Handlers`

## 4、proxy、ref

> 接受一个参数值并返回一个响应式且可改变的 ref 对象。ref 对象拥有一个指向内部值的单一属性 .value。

```js
const count = ref(0)
console.log(count.value) // 0

count.value++
console.log(count.value) // 1
```

### 正文

`ref` 跟 `reactive` 都是响应系统的核心方法，作为整个系统的入口  

可以将 `ref` 看成 `reactive` 的一个变形版本，这是由于 `reactive` 内部采用 [Proxy](/es6/) 来实现，而  `Proxy` 只接受对象作为入参，这才有了 `ref` 来解决值类型的数据响应，如果传入 `ref` 的是一个对象，内部也会调用 `reactive` 方法进行深层响应转换 

#### Ref 是如何创建的

我们还是先从定义抓起，`ref` 接收一个可选的 `unknown` 做为入参，接着直接调用 `createRef`

`createRef` 先判断 `value` 是否已经是一个 `ref`, 如果是则直接返回，如果不是接着判断是不是浅观察，如果是浅观察直接构造一个 `ref` 返回，不是则将 `rawValue` 转换成 `reactive` 再构造一个 `ref` 返回 

```js
export function ref(value?: unknown) {
  return createRef(value)
}

/**
 * @description: 
 * @param {rawValue} 原始值 
 * @param {shallow} 是否是浅观察 
 */
function createRef(rawValue: unknown, shallow = false) {
  // 如果已经是ref直接返回
  if (isRef(rawValue)) {
    return rawValue
  }

  // 如果是浅观察直接观察，不是则将 rawValue 转换成 reactive ,
  // reactive 的定义在下方 
  let value = shallow ? rawValue : convert(rawValue)

  // ref 的结构
  const r = {
    // ref 标识
    __v_isRef: true,
    get value() {
      // 依赖收集
      track(r, TrackOpTypes.GET, 'value')
      return value
    },
    set value(newVal) {
      if (hasChanged(toRaw(newVal), rawValue)) {
        rawValue = newVal
        value = shallow ? newVal : convert(newVal)
        // 触发依赖
        trigger(
          r,
          TriggerOpTypes.SET,
          'value',
          __DEV__ ? { newValue: newVal } : void 0
        )
      }
    }
  }
  return r
}

// 如是是对象则调用 reactive, 否则直接返回 
const convert = <T extends unknown>(val: T): T =>
  isObject(val) ? reactive(val) : val
```

## 5、setup语法糖
  单文件组件 Composition API 语法糖，我们知道
  - 组件引入了还要注册
  - 属性和方法需要在setup下返回，过于冗余  
::: tip 
vue3.x为我们提供了script setup语法糖，大大减少了不必要的页面逻辑
::: 
  - 更少的模板代码，更简洁的文件结构
  - 能够使用纯 Typescript 声明 props 和抛出事件
  - 更好的运行时性能 (其模板会被编译成与其同一作用域的渲染函数，没有任何的中间代理)
  - 更好的 IDE 类型推断性能 (减少语言服务器从代码中抽离类型的工作)
## 6、vue-router
因为component API的缘故，组件总彻底摒弃this，所以无法像在 `vue2` 中那样通this.router来获取和操作路由。
在 `Vue3` 中，我们可以试用hooks来满足，如useRouter，useRoute等钩子函数

```js
import {onMounted} from 'vue'
import {useRoute, useRouter} from "vue-router";

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    
    onMounted(() => {
      const {id = ''} = route.params
    })

    function pushWithQuery(query) {
      router.push('/index')
    }
  },
}
```

## 7、vuex
和vue-router同理，这里用到vuex的hooks --- `useStore`

```js
import { useStore } from 'vuex'

export default {
  setup() {
    const store = useStore()
    
    onMounted(() => {
      const data = store.state.someData
    })
    
    const handleClick = () => {
        store.commit('CHANGE_DATA', { a: 1})
    }
  },
}
```

## 8、其他
  - Teleport：传送门
  ```vue
  <!-- 外部节点 -->
  <div id="modal"></div>
  <!-- 传送 -->
  <teleport to="#modal">
      <div v-if="visible" class="modal-wrap">
        <div class="modal-msg">我是一个 modal 文案</div>
      </div>
  </teleport>
  ```

  - Fragment：Vue3.x 中，允许直接写多个根节点
  ```vue
  <template>
    <span></span>
    <span></span>
  </template>
  ```