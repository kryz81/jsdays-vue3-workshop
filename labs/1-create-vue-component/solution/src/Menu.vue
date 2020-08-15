<template>
  <ul>
    <li><a href="">Home</a></li>
    <li><a href="">About me</a></li>
    <li><a href="">Projects</a></li>
    <li><a href="">Contact</a></li>
  </ul>
</template>

<script>
export default {
  name: "Menu",
};
</script>

<style scoped>
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}

ul li {
  display: inline;
  padding: 0 15px;
}

ul li a {
  color: green;
  font-weight: bold;
}

ul li:last-child a {
  color: blue;
}
</style>
