<template>
  <div class='display'>
      <h1>Monitor de corona vírus</h1>
      <h2>{{valueDefault}}</h2>
      <select v-model="selected" class="comboBox" >
        <option v-for='pais in paises' :key='pais' :value="pais">{{pais}}</option>
      </select>
      

      <router-link v-if="selected"  :to="'/data/'+ selected" class="btMonitorar">Monitorar</router-link>
      
  </div>
</template>

<script>
import {covidAPI} from '../services/covidAPI'
//import axios from 'axios'

export default {
    data(){
        return{
            paises: '',
            selected: '',
            valueDefault: 'Loading...'
        }
    },
    mounted(){
        covidAPI.get('/v2/countries').then(resp =>{
           this.paises = resp.data.map(item => {return item.country}).sort()
           this.valueDefault = "Selecione um país:"
        })
    }
}
</script>

<style>
  .display{
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    width: 100%;
  }
  .comboBox{
    min-width: 50%;
    max-width: 90%;
    height: 50px;
    margin: 30px;
    border-radius: 25px;
    padding-left: 20px;
    background-color: rgb(75, 129, 177);
    color: #FFF;
    font-size: 1.5em;

  }

  .comboBox:hover{
    background-color: rgb(75, 129, 177);
  }
  
  .btMonitorar{
    font-style: normal;
    text-decoration: none;
    padding: 10px;
    border-radius: 5px;
    border: 2px solid rgb(52, 96, 134);
    color: rgb(52, 96, 134);
    font-family: 'Roboto', 'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: 1.5em;
    transition: 0.3s all ease-in;
    appearance: none;
  }

  .btMonitorar option{
      background-color: aquamarine;
  }

  .btMonitorar:hover{
    color: #FFF;
    background-color: rgb(52, 96, 134);
    padding: 15px
    
  }
  h2{
    margin: 10px 0 0px 0;
  }
  h1{
    padding: 0 10px;
    margin: 0, 10px;

  }
</style>
