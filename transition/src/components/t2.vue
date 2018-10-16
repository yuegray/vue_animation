<template>
    <div class="t2">
        <button @click="show = !show">css动画</button>
        <transition name="bounce">
            <p v-if="show">CSS 动画用法同 CSS 过渡，区别是在动画中 v-enter 类名在节点插入 DOM 后不会立即删除，而是在 animationend 事件触发时删除。</p>
        </transition>

    </div>
</template>

<script>
export default {
  data () {
    return {
      show: true
    }
  }
}
</script>

<style scoped>
    .bounce-enter-active {
        animation: bounce-in .5s;
    }
    .bounce-leave-active {
        animation: bounce-in .5s reverse;
    }
    @keyframes bounce-in {
        0% {
            transform: scale(0.2)
        }
        50% {
            transform: scale(1.5)
        }
        100% {
            transform: scale(1)
        }
    }
</style>
