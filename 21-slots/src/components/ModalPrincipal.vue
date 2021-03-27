<template>
  <div class="modal">
    <slot name="header"></slot>
    <!--
       -Ao usar a tag slot dentro do meu componente, qualquer coisa
       -passada como filho (ou seja, dentro das tags do componente) lá
       -onde ele estiver sendo usado, será renderizado aqui dentro no
       -lugar do slot
       -->
    <slot :user="user"></slot>

    <!--Além disso, eu posso usar mais de um slot dentro do meu-->
    <!--componente. Pra isso eu preciso então nomear meus slots.-->
    <slot name="body"></slot>
     <h1>Esse é o modal</h1>
     <slot name="footer"></slot>
  </div>


</template>

<script>
export default {
  name: "ModalPrincipal",
  data(){
    return {
      user: {
        name: "André"
      }
    }
  }
}
</script>
