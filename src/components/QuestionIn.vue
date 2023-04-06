<template>
  <div class="quest">
    <label for="question">Question: </label
    ><input
      id="question"
      type="text"
      placeholder="Please enter the question here.."
      v-model="question"
      required
    />
  </div>
</template>

<script>
export default {
  name: "QuestionIn",
  data() {
    return {
      question: "",
    };
  },
  methods: {
    getQuestion() {
      this.$emit("getQuest", this.question);
    },
  },
};
</script>

<style>
.quest {
  min-width: 200px;
}
#question {
  margin: 0, 20px;
  width: 70%;
}
</style>