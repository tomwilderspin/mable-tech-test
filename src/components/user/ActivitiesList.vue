<template>
  <div class="d-flex justify-content-center w-100">
    <b-col class="d-flex flex-wrap justify-content-center">
      <p v-if="activityList.length === 0">No Activity</p>
      <b-card
        v-for="(activity, index) in activityList"
        :key="index"
        :header="`Event: ${activity.type}`"
        class="m-2 card-item"
        border-variant="dark"
        header-bg-variant="light"
        align="center"
      >
        <p>Repository</p>
        <p>{{ activity.repo.name }}</p>
      </b-card>
    </b-col>
  </div>
</template>

<script>
export default {
  name: 'ActivitiesList',
  props: {
    activityList: {
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
