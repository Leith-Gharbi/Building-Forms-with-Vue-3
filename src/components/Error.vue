<template>
  <div>
    <div class="alert alert-danger" v-if="message">{{ message }}</div>
  </div>
</template>
<script>
export default {
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  setup() {
    //console.log(props.message);
    return {};
  },
};
</script>
