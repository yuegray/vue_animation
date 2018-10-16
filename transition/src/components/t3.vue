<script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js"></script>
<template>
    <div class="t3">
        <button @click="show =! show">javascript钩子</button>
        <transition
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            @after-enter="afterEnter"
            @enter-cancelled="enterCancelled"

            @before-leave="beforeLeave"
            v-on:leave="leave"
            @after-leave="afterLeave"
            @leave-cancelled="leaveCancelled"
            v-bind:css="false"
        >
            <p v-if="show">javascript钩子完成动画</p>
        </transition>
    </div>
</template>

<script>
export default {
  data () {
    return {
      show: true
    }
  },
  methods: {
    beforeEnter: function (el) {
      el.style.transform="translate(100px,0)";
    },
    enter: function (el, done) {
        el.offsetWidth;
        el.style.transform="translate(0, 0)";
        done();
    },
    afterEnter: function (el) {
        el.style.opacity=0.3
    },
    enterCancelled: function (el) {
        el.style.fontSize='40px'
    }
  }
}
</script>

<style scoped>

</style>
