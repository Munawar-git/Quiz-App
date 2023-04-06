<template>
  <h1 v-if="error.status">{{ error.message }}</h1>
  <div v-if="!error.status">
    <h1>Multiple Choice Questions</h1>
    <QA :mcqs="mcqsRnd" ref="QA" />
  </div>
</template>

<script>
import QA from "../components/QA.vue";
import Fetch from "../mixins/fetch.js";
export default {
  name: "Home",
  mixins: [Fetch],
  data() {
    return {
      mcqs: "",
      error: { status: false, message: "" },
      id: "",
    };
  },
  components: {
    QA,
  },

  computed: {
    mcqsRnd: function () {
      return this.mcqs.sort(() => Math.random() - 0.5);
    },
  },
};
</script>

<style>
body {
  box-sizing: border-box;
  background: #f2e9e4;
}
h1 {
  color: #4a4e69;
}
</style>