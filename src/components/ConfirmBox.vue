<template>
  <div>
    <button @click="showConfirmBox = true">Show Confirm Box</button>
    <div v-if="showConfirmBox" class="confirm-box-overlay">
      <div class="confirm-box">
        <div class="confirm-box-message">Are you sure you want to do this?</div>
        <div class="confirm-box-buttons">
          <button @click="confirmAction">Yes</button>
          <button @click="hideConfirmBox">No</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showConfirmBox: false,
    };
  },
  methods: {
    confirmAction() {
      console.log("User clicked Yes");
      this.hideConfirmBox();
    },
    hideConfirmBox() {
      this.showConfirmBox = false;
    },
  },
};
</script>

<style>
.confirm-box-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.confirm-box {
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.confirm-box-message {
  margin-bottom: 20px;
}

.confirm-box-buttons {
  display: flex;
  justify-content: flex-end;
}

.confirm-box-buttons button {
  margin-left: 10px;
  padding: 5px 10px;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
}
</style>