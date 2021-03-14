export default {
  props: ["dados"],

  //Com o v-for é possível iterar sobre props de um obj também.
  //Pois com ele eu consigo pegar o dado em si e a chave
  template: `
	<ul>
	<li v-for="dado, key in dados">
	<p>
		{{key}}: {{dado}}
	</p>
	</li>
	</ul>
	`,
};
