<template>
  <div id="app">

    <ModalPrincipal>
    <template v-slot:header>
      <h1>Esse é o header</h1>
    </template>
    <p>Esse é um teste</p>
    <button>Comprar</button>

<!--
   -
   -    Eu consigo também, com o uso do v-slot, passar uma prop do filho
   -    para o meu pai. Para utilizar minha prop recebida do meu filho eu
   -    tenho a seguinte sintaxe: v-slot:nomeSlot="nomeProp"
   -    Em que o nomeProp pode ser definido como qualquer nome que eu
   -    queira. Importante ressaltar também que o objeto recebido é
   -    alocado dentro de um objeto com o nome dado a nomeProp.
   -    Ou seja, se eu passo um obj chamado user e no meu pai eu defino
   -    que ele se chamará user também, eu precisarei então acessar user
   -    dentro de user.
   -->
    <!--
       -<template v-slot:default="user">
       -  {{user.user.name}}
       -</template>
       -->

       <!--
          -Além do uso comum eu posso também simplesmente desestruturar
          -meu obj, assim não preciso ter um sintaxe complicada para
          -acessar o obj que eu desejo
          -->
    <template v-slot:default="{user}">
      {{user}}
    </template>
    <!--Eai para que eu possa utilizar então meu slot nomeado eu preciso-->
    <!--passar pra diretiva v-slot o seu nome-->
    <template v-slot:body>
      <p>Esse é o body</p>
    </template>
    <!--Um atalho para a diretiva v-slot é o #-->
    <template #footer>
      <p>Esse é o footer</p>
    </template>
    </ModalPrincipal>
  </div>
</template>

<script>
import ModalPrincipal from './components/ModalPrincipal.vue'

export default {
  name: 'App',
  components: {
    ModalPrincipal
  }
}
</script>

<style>
</style>
