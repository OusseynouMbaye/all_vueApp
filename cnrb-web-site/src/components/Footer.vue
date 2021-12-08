<template>
  <div class="nav">
    <img src="../assets/logoCnrb.jpg"  />

    <a href="#">nous contacter</a>
    <a href="#">facebok icon</a>
    <a href="#">Insta club</a>
  
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>
<style scoped>
.nav {
  background: #333;
  overflow: hidden;
}
.nav a {
  float: left;
  color: #f2f2f2;
  padding: 14px 16px;
  text-align: center;
  font-size: 17px;
  text-decoration: none;
  margin: 5px;
}
.nav img{
  float: left;
  width: 61px;
}
.nav h3{
  float:right;
  color: #f2f2f2;
  padding: 14px 16px;
  text-align: center;
  font-size: 17px;
  text-decoration: none;
  margin: 5px;
}
.nav a:hover{
  background: aquamarine;
  color: #333;
}
</style>