<template>
  <button class="btn_cmp">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Button",
};
</script>

<style>
.btn_cmp {
  margin: 1.5rem 0;
  padding: 10px 30px;
  border-radius: 20px;
  background-color: #4a4e69;
  border: 2px solid #f2e9e4;
  color: #f2e9e4;
  font-size: 1.5rem;
  font-weight: bolder;
  cursor: pointer;
}
.btn_cmp:hover {
  background-color: #f2e9e4;
  border: 2px solid #4a4e69;
  color: #4a4e69;
}
</style>