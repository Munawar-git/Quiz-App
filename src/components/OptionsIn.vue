<template>
  <div class="options">
    <p>Options:</p>
    <ol type="A">
      <li>
        <input v-model="opts.A" type="text" placeholder="1st Option" required />
      </li>
      <li>
        <input v-model="opts.B" type="text" placeholder="2nd Option" required />
      </li>
      <li>
        <input v-model="opts.C" type="text" placeholder="3rd Option" required />
      </li>
      <li>
        <input v-model="opts.D" type="text" placeholder="4th Option" required />
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: "OptionsIn",
  data() {
    return {
      opts: { A: "", B: "", C: "", D: "" },
    };
  },
  methods: {
    getOptions() {
      this.$emit("getOpts", this.opts);
    },
  },
};
</script>

<style>
</style>