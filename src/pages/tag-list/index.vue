<template>
  <div class="tag-list">Tag list</div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "TagList",
  computed: {
    ...mapState({
      t: (state) => state.tag.title,
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
