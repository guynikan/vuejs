export default {
  //Eu posso adicionar validações de tipos nas minhas props
  //Além da validação, eu posso informar se minha prop é requerida e
  //até mesmo definir um valor default
  props: {
    item: String,
  },

  template: `
  <li>{{item}}</li>
  `,
};
