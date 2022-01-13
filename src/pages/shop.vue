<template>
  <div>
    <comp_Cart />
    <comp_Header />
    <div class="container">
      <div class="block">
        <div class="shop_product">
          <router-link to="/cap"
            ><img class="shop_product" src="@/assets/images/белаякружка.png" />
            Кружка с логотипом</router-link
          >
        </div>
        <div class="shop_product">
          <router-link to="/tshort"
            ><img
              class="shop_product"
              src="@/assets/images/белаяфутболка.jpg"
            />
            Футболка с логотипом</router-link
          >
        </div>
        <div class="shop_product">
          <router-link to="/hat"
            ><img class="shop_product" src="@/assets/images/белаяшапка.jpg" />
            Шапка с логотипом</router-link
          >
        </div>
      </div>
    </div>
    <comp_futer />
  </div>
</template>

<script>
import comp_Header from "@/components/comp_Header.vue";
import comp_Cart from "@/components/comp_Cart.vue";
import comp_futer from "@/components/comp_futer.vue";

export default {
  components: {
    comp_Header,
    comp_Cart,
    comp_futer,
  },
};
</script>

<style scoped>
.shop_product {
  text-align: center;
}
.shop_product:hover {
  transform: translateY(-10px);
  text-align: center;
}
.container {
  max-width: 1200px;
  margin: 0px auto;
}

.block {
  display: flex;
  margin-top: 100px;
  max-width: 1200px;
}
@media (max-width: 1024px) {
  .block {
    display: block;
  }
  .shop_product {
    max-width: 320px;
    padding: 0px;
    text-align: center;
    margin: 0px auto;
  }
  .shop_product_under {
    max-width: 320px;
    padding: 0px;
  }
}
@media (max-width: 425px) {
  .shop_product {
    padding: 0px;
  }
  .shop_product_under {
    padding: 0px;
  }
}
</style>