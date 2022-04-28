<template>
  <div class="hello">
    <a-button-group>
      <a-button>Cancel</a-button>
      <a-button type="primary"> OK </a-button>
    </a-button-group>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
