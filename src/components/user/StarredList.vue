<template>
  <div class="d-flex justify-content-center w-100">
    <b-col class="d-flex flex-wrap justify-content-center">
      <p v-if="starsList.length === 0">No Starred Repos</p>
      <b-card
        v-for="(star, index) in starsList"
        :key="index"
        :header="star.full_name"
        class="m-2 card-item"
        border-variant="dark"
        header-bg-variant="light"
        align="center"
      >
        <p>{{ star.description }}</p>
        <p>Owner: {{ star.owner.login }}</p>
        <p>Stars: {{ star.stargazers_count }}</p>
      </b-card>
    </b-col>
  </div>
</template>

<script>
export default {
  name: 'StarredList',
  props: {
    starsList: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.card-item {
  max-width: 250px;
}
</style>
