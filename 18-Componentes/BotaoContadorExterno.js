export default {
  name: "BotaoContadorExterno",
  data() {
    return {
      total: 0,
    };
  },
  template: `<button @click="total++">Total: {{total}}</button>`,
};
