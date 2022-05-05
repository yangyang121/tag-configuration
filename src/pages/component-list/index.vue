<template>
  <div class="component-list">Component List</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "ComponentList",
  computed: {
    ...mapState({
      t: (state) => state.component.title,
    }),
  },
  created() {
    console.log(this.t);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
