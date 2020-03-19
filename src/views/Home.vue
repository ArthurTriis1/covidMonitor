<template>
  <div class='display'>
      <h1>Monitor de Covid19 em Vue</h1>
      <select v-model="selected" class="comboBox">
        <option v-for='pais in paises' :key='pais' :value="pais">{{pais}}</option>
      </select>
      
      <router-link :to="'/data/'+ selected" class="btMonitorar">Monitorar</router-link>
  </div>
</template>

<script>
import {covidAPI} from '../services/covidAPI'
//import axios from 'axios'

export default {
    data(){
        return{
            paises: '',
            selected: ''
        }
    },
    mounted(){
        covidAPI.get('/countries').then(resp =>{
           this.paises = resp.data.map(item => {return item.country})
        })
    }
}
</script>

<style>
  .display{
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .comboBox{
    min-width: 500px;
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
</style>
