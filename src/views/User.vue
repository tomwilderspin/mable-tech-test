<template>
  <b-container>
    <b-img
        :alt="`${user.name} avatar`"
        :src="user.avatar_url"
        width="150"
        class="rounded-circle"
      >
    </b-img>
    <h2 class="mt-3">{{ user.name }}</h2>
    <b-row>
      poop
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
