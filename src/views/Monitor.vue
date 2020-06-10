<template>
    <div style='width:100%'>
        <h1>{{country}}</h1>
        <h4>Atualizado em: {{updated}}</h4>
        <div class="datas">
            <data-used type='Casos' :value='data.cases'/>
            <data-used type='Casos Hoje' :value='data.todayCases' :globalValue='data.cases'/>
            <data-used type='Mortes' :value='data.deaths'/>
            <data-used type='Mortes Hoje' :value='data.todayDeaths' :globalValue='data.deaths'/>
            <data-used type='Recuperados' :value='data.recovered'/>
        </div>
    </div>
</template>

<script>
import {covidAPI} from '../services/covidAPI'
import data from '../components/Data'

export default {
    components:{'data-used': data},
    data(){
        return{
            country: this.$route.params.country,
            data: {"country":"Carregando...","cases":'Carregando...',todayCases:'Carregando...',"deaths":'Carregando...',"todayDeaths":'Carregando...',"recovered":'Carregando...',"active":'Carregando...',"critical":'Carregando...',"casesPerOneMillion":'Carregando...'},
            updated: "Carregando..."
        }
    },
    mounted(){
        this.getData();
        setInterval(()=>{
            this.getData()
        }, 10000)
    },
    methods:{
        async getData(){
            await covidAPI.get(`/v2/countries/${this.country}`)
                            .then(resp=>{
                                this.data = resp.data
                                const date = new Date(resp.data.updated);
                                this.updated = date.getDate() + "/" + date.getMonth() + "-" + date.getHours() +":"+ date.getMinutes()

                            })
        }
    }

}
</script>

<style>
    .datas{
        margin-top: 30px;
        flex: 1;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;   
        justify-content:space-around;
        align-items: center;
        width: 100%;
    }

</style>