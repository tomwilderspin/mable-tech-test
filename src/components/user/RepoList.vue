<template>
  <div class="d-flex justify-content-center w-100">
    <b-col class="d-flex flex-wrap justify-content-center">
      <p v-if="repoList.length === 0">No Repos</p>
      <b-card
        v-for="(repo, index) in repoList"
        :key="index"
        :header="repo.name"
        class="m-2 card-item"
        border-variant="dark"
        header-bg-variant="light"
        align="center"
      >
        <p>Stars: {{repo.stargazers_count}}</p>
        <p>Issues: {{ repo.open_issues }}</p>
        <p>Forks: {{ repo.forks }}</p>
      </b-card>
    </b-col>
  </div>
</template>

<script>
export default {
  name: 'RepoList',
  props: {
    repoList: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.card-item {
  width: 250px;

}
</style>
