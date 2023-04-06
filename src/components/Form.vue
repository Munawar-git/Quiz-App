<template>
  <form class="questForm" @submit.prevent="submitMcq">
    <div class="questDiv">
      <label>Question: </label>
      <input class="questIp" type="text" required v-model="newMcq.question" />
    </div>
    <p>Options:</p>
    <ol type="A" class="optDiv">
      <li>
        <input
          type="text"
          placeholder="1st Option"
          required
          v-model="newMcq.options.A"
        />
      </li>
      <li>
        <input
          type="text"
          placeholder="2nd Option"
          required
          v-model="newMcq.options.B"
        />
      </li>
      <li>
        <input
          type="text"
          placeholder="3rd Option"
          required
          v-model="newMcq.options.C"
        />
      </li>
      <li>
        <input
          type="text"
          placeholder="4th Option"
          required
          v-model="newMcq.options.D"
        />
      </li>
    </ol>
    <div class="ansDiv">
      <label>Select the Correct Answer </label>
      <select required v-model="crrtAns">
        <option disabled value="">Please select one</option>
        <option>A</option>
        <option>B</option>
        <option>C</option>
        <option>D</option>
      </select>
    </div>
    <Button>Submit</Button>
  </form>
</template>

<script>
import Button from "../components/Button.vue";
export default {
  name: "Form",
  components: {
    Button,
  },
  data() {
    return {
      crrtAns: "",
      newMcq: {
        id: "",
        question: "",
        options: { A: "", B: "", C: "", D: "" },
        answer: "",
      },
    };
  },
  methods: {
    submitMcq() {
      this.newMcq.answer = this.newMcq.options[this.crrtAns];
      console.log(this.newMcq);
      this.addMcq(this.newMcq);
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
.questDiv {
  min-width: 200px;
}
.questIp {
  margin: 0, 20px;
  width: 70%;
}
.ansDiv select {
  background: #f2e9e4;
  font-size: 1.25rem;
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