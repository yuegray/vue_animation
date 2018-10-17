<script src="https://cdnjs.cloudflare.com/ajax/libs/velocity/1.2.3/velocity.min.js"></script>
<template>
    <div>
        <button @click="show = !show">动画钩子</button>
        <button @click="dianji"></button>
        <transition
            v-on:before-enter="beforeEnter"
            v-on:enter="enter"
            v-on:leave="leave"
            v-bind:css="false"
        ></transition>
    </div>
</template>

<script>
export default {
    data () {
        return {
            show: true
        }
    },
     mounted: {
     }
}
</script>
