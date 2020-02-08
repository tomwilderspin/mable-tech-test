<template>
  <b-container>
    <b-row>
      <b-col>
        <github-logo class="mb-4"/>
        <input-drop-down
          class="m-auto"
          style="max-width: 400px;"
          placeholder-text="Enter User's Name"
          @search="onSearch"
        />
      </b-col>
    </b-row>
    <b-row class="px-2 my-3">
      <b-col class="d-flex flex-wrap justify-content-center">
        <profile-tile
          v-for="(user, index) in userList"
          :key="index"
          :name="user.login"
          :imageSrc="user.avatar_url"
          class="m-1"
          @select="onTileClick"
        />
      </b-col>
    </b-row>
  </b-container>
</template>
<script>
import { mapState } from 'vuex';

import InputDropDown from '../components/InputDropDown.vue';
import GithubLogo from '../components/GithubLogo.vue';
import ProfileTile from '../components/user/ProfileTile.vue';

export default {
  name: 'home',
  components: {
    InputDropDown,
    GithubLogo,
    ProfileTile,
  },
  computed: {
    ...mapState({
      userList: state => state.users,
    }),
  },
  methods: {
    onSearch(searchTerm) {
      this.$store.dispatch('searchUsers', searchTerm);
    },
    onTileClick(userName) {
      this.$store.commit('SET_SELECTED_USER', null);
      this.$router.push({ path: `/users/${userName}` });
    },
  },
};
</script>
