<template>
  <ul class="mainDelBox">
    <li class="questList" v-for="(mcq, index) in mcqs" :key="index">
      <span class="quest">{{ mcq.question }}</span>
      <span class="cross" @click="deleteItem(index)">X</span>
    </li>
  </ul>
</template>

<script>
import ConfirmBox from "../components/ConfirmBox.vue";
import Fetch from "../mixins/fetch";

export default {
  name: "Delete",
  data() {
    return {
      mcqs: {},
      error: { status: false, message: "" },
      del: false,
    };
  },
  components: {
    ConfirmBox,
  },
  mixins: [Fetch],
  methods: {
    alertBox(index) {
      console.log("This is an alert box form " + index);
    },
    async deleteItem(index) {
      let del = confirm("Are you sure? \nDo you want to delete?");
      if (!del) {
        return;
      }
      let id = this.mcqs[index].id;
      console.log(id);
      let fetchLink = "http://localhost:3000/mcqs/";
      let response = await fetch(fetchLink + id, {
        method: "DELETE",
      });
      let res = await this.getMcqs(fetchLink);
      this.mcqs = res.mcqs;

      if (res.error) {
        this.error.status = !res.error.ok;
        this.error.message = res.error.status + ": " + error.statusText;
      }
    },
  },
};
</script>

<style>
.mainDelBox {
  background: #4a4e69;
  padding: 10px;
}
.questList {
  background: #f2e9e4;
  margin: 10px;
  padding: 10px;
  border-radius: 5px;
  list-style: none;
  text-align: left;

  display: flex;
  justify-content: space-between;
}

.cross {
  margin-right: 10%;
  padding: 3px;
  border: 1px blue solid;
  text-align: left;
  cursor: pointer;
}
</style>