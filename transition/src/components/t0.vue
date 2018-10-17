<template>
    <div class="demo">
        <button v-on:click="show = !show">点击</button>
        <transition name="fade">
            <p v-if="show">动画</p>
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
    .fade-enter-active, .fade-leave-active {
        transition: opacity .5s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>

// demo
