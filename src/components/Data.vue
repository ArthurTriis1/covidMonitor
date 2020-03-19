<template>
    <div class="data">
        <h1>{{type}}</h1>
        
        <br><h2>{{value}}</h2>
        <br>
        <h3 v-if="globalValue">+{{(100*(( globalValue - (globalValue-value))/globalValue)).toFixed(2)}}%</h3>
        
    </div>
  
</template>

<script>
export default {
    props:['type', 'value', 'globalValue']
 
}
</script>

<style>
    .data{
        padding: 25px;
        background-color: rgba(211, 211, 211, 0.246);
        border-radius: 8px;
        margin: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-width: 200px;
        
    }
    
</style>