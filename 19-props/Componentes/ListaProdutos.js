import ItemLista from "./ItemLista.js";

export default {
  name: "ListaProdutos",
  props: ["lista", "titulo"],
  components: {
    ItemLista,
  },
  data() {
    return {};
  },

  //Quando eu tiver um for, eu sempre vou precisar declarar o atributo key
  template: `
  <div>
  <h1>{{titulo}}</h1>
	<ul>
  <item-lista v-for="item, index in lista" :item="item" :key="index"></item-lista>
	</ul>
  </div>
	`,
};
