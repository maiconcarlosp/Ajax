<template>
    <b-card title="Solicitação de Serviços" >
             
        <b-form>
        
        <b-form-group label="Data e Hora">
            <b-form-datepicker></b-form-datepicker>
        </b-form-group>

        <b-form-group label="Nome do Pet">
            <b-form-input></b-form-input>
        </b-form-group>

        <b-form-group label="Nome do Dono">
            <b-form-input></b-form-input>
        </b-form-group>

        <b-form-group label="Serviço">
            <b-form-select :options="servicos" ></b-form-select>
        </b-form-group>

        <b-form-group label="Telefone de Contato">
            <b-form-input></b-form-input>
        </b-form-group>

        <b-button variant="danger" @click="$parent.exibeListagem = true">Cancelar</b-button>
        <b-button variant="success" @click="cadastrar">Enviar</b-button>

        </b-form>

    </b-card>
</template>

<script>
export default {
    name: "Agendamento",

    data(){
        return {
            servicos: ["Banho", "Tosa", "Vacinas", "Consulta"]
        }
    },

    methods: {
      
      cadastrar()
      {

      }

    }
}
</script>

<style>

</style>