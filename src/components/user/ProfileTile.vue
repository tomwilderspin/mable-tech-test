<template>
  <div class="p-2 container overflow-hidden" @click="onClick">
    <img
      :alt="`${name} profile pic`"
      :src="imageSrc"
      width="100"
      class="rounded-circle my-1"
    />
    <h3 class="mt-2">{{ name }}</h3>
  </div>
</template>

<script>
export default {
  name: 'ProfileTile',
  props: {
    name: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
      required: true,
    },
  },
  methods: {
    onClick() {
      this.$emit('select', this.name);
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  border: 4px solid black;
  border-radius: 6px;
  max-width: 126px;
  cursor: pointer;
}
</style>
