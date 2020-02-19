<template>
  <div id="app">

    <b-navbar type="dark" variant="success">
      <b-navbar-brand >App de Pet</b-navbar-brand>

      <b-navbar-nav>
        <b-nav-item href="#" @click="exibeListagem = false">Agendar</b-nav-item>      
      </b-navbar-nav>

    </b-navbar>

    <b-container>
      <b-row class="col-md-12">
        
        <div v-if="exibeListagem">
          <b-card title="Listagem de Agendamentos" >
            
            <b-table striped hover :items="agendamentos" :fields="colunas"></b-table>
            
          </b-card>    
        </div>

        <div v-else>
           <Agendamento></Agendamento>
        </div>

      </b-row>
    </b-container>

  </div>
</template>

<script>

import Agendamento from "./components/Agendamento"

export default {
  name: 'App',

    components:{Agendamento},

    data()
    {
       return {
         exibeListagem: true,
         colunas: [
           {key: "datahora", label: "Data e Hora", sortable: true},
           {key: "nome", label: "Nome do Pet", sortable: true},
           {key: "servico", label: "Serviço"},
         ],
         agendamentos: [
           
           {"datahora": "10-10-2010 10:30", "nome":"Rex", "servico": "banho e tosa"},
           {"datahora": "10-10-2010 10:10", "nome":"Lulu", "servico": "banho"},
         ],

         
       }
    },

   
  
}
</script>

<style>

</style>
