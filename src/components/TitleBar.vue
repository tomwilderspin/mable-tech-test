<template>
  <div class="title-container d-flex justify-content-center p-2">
    <h1 class="m-0">{{titleText}}</h1>
  </div>
</template>

<script>
export default {
  name: 'TitleBar',
  props: {
    titleText: {
      type: String,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.title-container {
  background-color: black;
  color: white;
}
</style>
