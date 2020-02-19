<template>
  <div>
    
    <h2>Novo cadastro para: {{ pet }}</h2>

    <fieldset>
        <label>Nome do Pet</label>
        <input type="text" v-model="pet">
        <br>

        <label>Dono</label>
        <input type="text" v-model="dono">
        <br>

        <button @click="cadastro">Cadastrar</button>
    </fieldset>

    <table>
        <thead>
            <tr>
                <th>Pet</th>
                <th>Dono</th>
                <th>Açoes</th>
            </tr>
        </thead>

        <tbody>
            <tr v-for="(item, idx) in lista" :key="idx">
                <td>{{ item.pet }}</td>
                <td>{{ item.dono }}</td>
                <td @click="deletar(idx)" class="deletar">[x]</td>
            </tr>
        </tbody>
    </table>

  </div>
</template>

<script>
export default {
    data: function ()
    {
        return {
            lista: [
                {"pet": "Bob", "dono": "Pedro"},
                {"pet": "Lulu", "dono": "Maira"}
            ],
            pet: "",
            dono: ""
        }
    },

    methods:{
        cadastro: function(){
            var item = {
                "pet": this.pet,
                "dono": this.dono
            }
            this.lista.push(item);
            this.pet = "";
            this.dono = "";
        }, 

        deletar: function(val)
        {
            this.lista.splice(val, 1);
        }
    }
}
</script>

<style>
    label {
        width: 100px;
        display: inline-block;
    }

    fieldset {
        width: 50%;
    }

    table{
        width: 50%;
        margin-top: 15px;
        border: 1px solid;
        border-collapse: collapse;
    }

    td, th {
        border: 1px solid;
        padding: 4px;
    }

    thead {
        background-color: silver;
    }

    .deletar {
        color: red;
        cursor: pointer;
    }

</style>