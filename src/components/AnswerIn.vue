<template>
  <div class="answer">
    <label for="answer">Select Correct Answer </label>

    <select v-model="answer" required>
      <option disabled value="">Please select one</option>
      <option>A</option>
      <option>B</option>
      <option>C</option>
      <option>D</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "AnswerIn",
  data() {
    return {
      answer: "",
    };
  },
  methods: {
    getAnswer() {
      this.$emit("getAns", this.answer);
    },
  },
};
</script>

<style>
.answer select {
  background: #f2e9e4;
  font-size: 1.25rem;
}
</style>