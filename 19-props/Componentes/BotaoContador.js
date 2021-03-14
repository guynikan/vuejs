export default {
  /*
   *Quando eu tenho uma prop que foi passado pro meu componente
   *através do v-bind, eu não posso modificá-la no meu componente
   *filho. Para fazer modificações, eu preciso atribuir minha prop
   *a uma data do meu componente filho e então usar a data.
   *Assim minha prop se mantém imutável mas eu ainda posso alterar
   *o valor
   */
  props: {
    valor: Number,
  },
  data() {
    //Porém dessa forma, se eu atualizar o valor dessa prop no pai
    //o seu valor não será atualizado no filho
    return {
      valorAtual: this.valor,
    };
  },

  template: `
  <button @click="valorAtual++">Total: {{ valorAtual }}</button>
  `,
};
