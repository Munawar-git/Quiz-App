<template>
  <h3 class="box">{{ question }}</h3>
</template>

<script>
export default {
  name: "Question",
  props: ["question"],
};
</script>

<style>
.box {
  background: #c9ada7;
  margin: 10px auto;
  padding: 10px;
  border-radius: 20px 20px 0 0;
}
</style>