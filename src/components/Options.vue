<template>
  <div class="optBox">
    <div v-for="option in options" :key="option" class="opt">
      <input type="radio" :value="option" name="question" v-model="answer" />
      <label>{{ option }}</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "Options",
  props: { options: Object, getAns: Function },
  data() {
    return {
      answer: "",
    };
  },
  methods: {
    emitFunction(answer) {
      this.$emit("getAns", answer);
    },
  },
  watch: {
    answer: function () {
      this.emitFunction(this.answer);
    },
  },
};
</script>

<style>
.optBox {
  background: #f2e9e4;
  margin: 10px auto;
  padding: 0.75em;
  border-radius: 0 0 20px 20px;
}
.opt {
  font-size: larger;
  font-weight: bold;
  color: #4a4e69;
}
</style>