<template>
  <div>
    <h2>Novo cadastro para: {{pet}}</h2>
    <fieldset>
      <label>Nome do Pet</label>
      <input type="text" v-model="pet" />
      <br />
      <label>Proprietário</label>
      <input type="text" v-model="dono" />
      <br />
      <br />
      <button @click="cadastro">Cadastrar</button>
    </fieldset>
    <table>
      <thead>
        <tr>
          <th>Pet</th>
          <th>Proprietário</th>
          <th>Deletar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, idx) in lista" :key="idx">
          <td>{{item.pet}}</td>
          <td>{{item.dono}}</td>
          <td @click="deletar(idx)" class="deletar">[X]</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data: function() {
    return {
      lista: [
        { pet: "Bob", dono: "Pedro" },
        { pet: "Lulu", dono: "Maira" }
      ],
      pet: "",
      dono: ""
    }
  },
  methods: {
    cadastro: function() {
      // console.log("clicou");
      var item = {
        pet: this.pet,
        dono: this.dono
      };
      // this no caso do VUE quase sempre se refere ao 'data'
      this.lista.push(item);
      this.pet = "";
      this.dono = ""
    },
    deletar: function(val) {
    //   console.log("deletar " + val);
    this.lista.splice(val,1);
  }
}
}
</script>
<style>
fieldset {
  width: 50%;
}
label {
  width: 100px;
  display: inline-block;
  padding-top: 5px;
}
table {
  width: 50%;
  margin-top: 15px;
  border: 1px solid;
  border-collapse: collapse; /* deixa as bordas juntas */
}
thead {
  width: 100px;
  border: 1px solid;
  background-color: silver;
}
td,th {
  /* text-align: center; */
  border: 1px solid;
  padding: 4px;
}
.deletar {
    width: 30px;
    color: red;
    text-align: center;
    cursor: pointer;
}
</style>