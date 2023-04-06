<template>
  <div class="addQuest">
    <h3>Please add the question, the 4 options and correct answer below...</h3>
    <Form></Form>
  </div>
</template>

<script>
import Form from "../components/Form.vue";
export default {
  name: "Add",
  components: {
    Form,
  },
};
</script>

<style>
.addQuest {
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
</style>