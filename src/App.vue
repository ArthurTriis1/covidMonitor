<template>
  <div id="app" >
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/about">Sobre</router-link>
    </div>
    <router-view/>
    <h4 class="info">Os dados apresentados podem estar desatualizados em relação aos dados oficiais de cada país</h4>
  </div>
</template>

<script>

export default {

}
</script>

<style>
*{
  outline: none;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;

}

#nav {
  display:flex;
  border-radius: 5px;
  border: 1px solid rgb(75, 129, 177);
  margin-bottom: 40px;
  margin-top: 15px;
  height:fit-content;
}

#nav a {
  padding: 15px;
  font-weight: bold;
  border: 1px solid rgb(75, 129, 177);
  text-decoration: none;
  color: rgb(75, 129, 177);

}

#nav a.router-link-exact-active {
  background-color: rgb(75, 129, 177);
  color: #fff;

}


.info{
  margin-top: 20px;
  font-style: italic;
}
</style>
