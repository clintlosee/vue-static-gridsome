<template>
  <div>
    <h1>Layout TWO!</h1>
    <slot />
    <button @click="latest = !latest">Toggle Latest</button>
    <LatestPosts v-if="latest" />
  </div>
</template>

<script>
import LatestPosts from '../components/LatestPosts'

export default {
  components: {
    LatestPosts
  },

  props: ['latest']
}

</script>

<style lang="scss" scoped>

</style>