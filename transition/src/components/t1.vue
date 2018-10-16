<template>
    <div class="demo">
        <button @click="show = !show">点击</button>
        <transition name="slide-fade">
            <p v-if="show">t1</p>
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
    .slide-fade-enter-active {
        transition: all 3s ease;
    }
    .slide-fade-leave-active {
        transition: all 2s ease;
    }
    .slide-fade-enter {
        transform: translateX(-200px);
        opacity: 0;
    }
    .slide-fade-leave-to {
        transform: translateX(100px);
        opacity: 0;
    }
</style>

//css 过渡
