<template>
  <footer>
    <div class="container">
      <div class="block">
        <div class="one">
          <div>name of the company★</div>
          <div>street: Red square Moscow</div>
        </div>
        <div class="two">★</div>
        <div>
          <div>phone: 8-888-888-888</div>
          <div>email:dgsf•njk@gmail.com</div>
        </div>
      </div>
      <hr />
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.logo {
  height: 120px;
}
.two {
  font-size: 120px;
}
.container {
  max-width: 1200px;
  margin: 0px auto;
}

.block {
  display: flex;
  margin-top: 100px;
  max-width: 1200px;
  justify-content: space-between;
}
footer {
  min-height: 300px;
  background-color: rgb(70, 70, 85);
  margin-top: 300px;
  padding: 5px;
  line-height: 40px;
}
@media (max-width: 768px) {
  footer {
    margin-top: 200px;
  }
  .block {
    display: block;
    margin-top: 100px;
    max-width: 1200px;
    text-align: center;
  }
  .two {
    margin: 50px 0 50px 0;
  }
}
</style>