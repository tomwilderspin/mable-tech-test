<template>
  <b-container v-if="user" class="mt-2">
    <b-row>
      <b-col>
        <b-img
              :alt="`${user.name} avatar`"
              :src="user.avatar_url"
              fluid
              class="p-2 rounded-circle image-container"
            >
          </b-img>
          <div>
            <h1 class="mt-2 mb-0">{{ user.name }}</h1>
            <p class="mt-0">{{ user.login }}</p>
          </div>
        </b-col>
    </b-row>
    <b-row class="justify-content-center">
      <div class="d-flex justify-content-between mt-3 w-100 px-3" style="max-width: 400px;">
        <div class="text-center">
          <p class="mb-0">{{ user.followers }}</p>
          <p><b>followers</b></p>
        </div>
        <div class="text-center">
          <p class="mb-0">{{ user.following }}</p>
          <p><b>following</b></p>
        </div>
        <div class="text-center">
          <p class="mb-0">{{ user.public_repos }}</p>
          <p><b>Repositories</b></p>
        </div>
      </div>
    </b-row>
  </b-container>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'User',
  computed: {
    ...mapState({
      user: state => state.selectedUser,
    }),
  },
  mounted() {
    const { id = '' } = this.$route.params;
    this.$store.dispatch('getUserProfile', id);
  },
};
</script>

<style lang="scss" scoped>
.image-container {
  max-width: 240px;
}
</style>
