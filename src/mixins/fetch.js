export default {
  async created() {
    let fetchLink = "http://localhost:3000/mcqs";

    let res = await this.getMcqs(fetchLink);
    this.mcqs = res.mcqs;

    if (res.error) {
      this.error.status = !res.error.ok;
      this.error.message = res.error.status + ": " + error.statusText;
    }
  },
  methods: {
    async getMcqs(fetchLink) {
      let mcqs = "";
      let error = "";
      try {
        const response = await fetch(fetchLink);
        if (!response.ok) {
          throw response;
        }
        mcqs = await response.json();
      } catch (err) {
        error = err;
      }
      return { mcqs, error };
    },
  },
};
