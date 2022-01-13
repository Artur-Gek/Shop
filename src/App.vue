<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>


<style>
body.modal-open {
  overflow: hidden;
}
body {
  margin: 0%;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  font-size: 20px;
}
body::-webkit-scrollbar {
  width: 0px;
  background-color: #f9f9fd;
}
/*body::-webkit-scrollbar-thumb {
  border-radius: 100px;
  background-color: grey;
}
body::-webkit-scrollbar-thumb:hover {
  border-radius: 100px;
  background-color: rgb(175, 175, 175);
}
body::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);

  background-color: #f9f9fd;
}*/
a {
  text-decoration: none;
}
</style>
