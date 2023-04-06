<template>
  <div v-if="true" class="add">
    <h3>Please add the question, the 4 options and correct answer below...</h3>
    <form class="questForm" @submit.prevent="submit">
      <QuestionIn ref="QuestionIn" @getQuest="getQuest" />
      <OptionsIn ref="OptionsIn" @getOpts="getOpts" />
      <AnswerIn ref="AnswerIn" @getAns="getAns" />
      <Button>Submit</Button>
    </form>
  </div>
</template>

<script>
import QuestionIn from "../components/QuestionIn.vue";
import OptionsIn from "../components/OptionsIn.vue";
import AnswerIn from "../components/AnswerIn.vue";
import Button from "../components/Button.vue";
export default {
  name: "Add",
  data() {
    return {
      mcq: { id: "", question: "", options: {}, answer: "" },
    };
  },
  components: {
    QuestionIn,
    OptionsIn,
    AnswerIn,
    Button,
  },
  methods: {
    submit() {
      this.$refs.QuestionIn.getQuestion();
      this.$refs.OptionsIn.getOptions();
      this.$refs.AnswerIn.getAnswer();
      this.addMcq(this.mcq);
    },

    getQuest(question) {
      console.log(question);
      this.mcq.question = question;
    },
    getOpts(options) {
      this.mcq.options = options;
    },
    getAns(answer) {
      this.mcq.answer = this.mcq.options[answer];
    },

    async addMcq(obj) {
      const requestOptions = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(obj),
      };
      const response = await fetch(
        "http://localhost:3000/mcqs",
        requestOptions
      );
      const data = await response.json();
      console.log(response);
    },
  },
};
</script>

<style>
.add {
  background: #4a4e69;
  margin: 0 auto;
  padding: 1rem;
  max-width: 1000px;
  min-width: 400px;
  border-radius: 10px;
  font-size: 25px;
  font-weight: bold;
  color: #f2e9e4;
}
.questForm {
  padding: 1rem;
  text-align: left;
}

.questForm input {
  background: #f2e9e4;
  font-size: 1.25rem;
}
</style>