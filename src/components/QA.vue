<template>
  <div class="qa">
    <h1 v-if="!mcqs">Loading...</h1>
    <div v-if="mcqs" class="questBox">
      <Question :question="mcqs[idx].question"></Question>
      <Options :options="mcqs[idx].options" @getAns="getAnswer"></Options>
    </div>
    <div>
      <Button v-if="nextBtn" @click="nextFunc"> Next</Button>
      <Button v-if="!nextBtn & !showResult" @click="showResult = true">
        Show Reult
      </Button>
      <Button v-if="showResult" @click="reset">Reset</Button>
    </div>
    <div v-show="showResult">
      <h3>Correct Answers : {{ correct }}</h3>
      <h3>Wrong Answers : {{ wrong }}</h3>
    </div>
  </div>
</template>

<script>
import Question from "./Question.vue";
import Options from "./Options.vue";
import Button from "./Button.vue";
export default {
  name: "QA",
  props: ["mcqs"],
  data() {
    return {
      idx: 0,
      answer: "",
      correct: 0,
      wrong: 0,
      nextBtn: true,
      showResult: false,
    };
  },

  components: {
    Question,
    Options,
    Button,
  },

  methods: {
    getAnswer(answer) {
      this.answer = answer;
    },

    checkAnswer() {
      if (this.answer == "") {
        return false;
      }
      if (this.answer == this.mcqs[this.idx].answer) {
        this.correct++;
      } else {
        this.wrong++;
      }
      return true;
    },

    nextFunc() {
      if (!this.checkAnswer()) {
        alert("Please Select One Option");
        return;
      }
      if (this.idx == this.mcqs.length - 1) {
        this.nextBtn = false;
        return;
      }
      this.idx++;
      this.answer = "";
    },

    reset() {
      this.idx = 0;
      (this.answer = ""), (this.correct = 0);
      this.wrong = 0;
      this.nextBtn = true;
      this.showResult = false;
    },

    getID() {
      this.$emit("getId", this.mcqs[this.idx].id);
    },
  },
};
</script>

<style>
.qa {
  margin: 0 auto;
  max-width: 800px;
  min-width: 400px;
}

.questBox {
  background: #4a4e69;
  padding: 10px 20px;
  border-radius: 10px;
}

.btn {
  margin: 1.5rem 0;
  padding: 10px 30px;
  border-radius: 20px;
  background-color: #f2e9e4;
  color: #4a4e69;
  font-size: 1.5rem;
  font-weight: bolder;
  cursor: pointer;
}
.btn:hover {
  background-color: #4a4e69;
  color: #f2e9e4;
}
</style>