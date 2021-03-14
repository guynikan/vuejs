export default {
  name: "MercadoHoje",
  data() {
    return {
      dados: null,
    };
  },

  template: `
  <div v-if="dados">
  <h1>{{dados.companyName}}</h1>
  <h2>{{dados.marketCap}}</h2>
  </div>
  `,

  created() {
    this.fetchResponse();
  },

  methods: {
    async fetchResponse() {
      let response = await fetch(
        "https://cloud.iexapis.com/stable/stock/aapl/quote?token=pk_332206336deb49d597eb73904f09a1ee"
      );
      let json = await response.json();
      console.log(json);
      this.dados = json;
    },
  },
};
