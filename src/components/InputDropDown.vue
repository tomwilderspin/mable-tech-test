<template>
  <b-input-group class="mt-3">
    <b-form-input v-model="inputText" :placeholder="placeholderText" @keyup.enter="onClick"/>
    <b-input-group-append>
      <b-button variant="success" @click="onClick">Search</b-button>
    </b-input-group-append>
  </b-input-group>
</template>

<script>
export default {
  name: 'InputDropDown',
  props: {
    placeholderText: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      inputText: '',
    };
  },
  methods: {
    onClick() {
      this.$emit('search', this.inputText);
    },
  },
};
</script>
