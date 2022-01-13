<template>
  <div>
    <comp_Header />
    <div class="container">
      <div class="block">
        <div class="shop_product_under">
          <img class="shop_product_up" src="@/assets/images/белаякружка.png" />
        </div>
        <div class="info_product">
          <h3>1000 RUB</h3>
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident"
          <comp_Quantity />
          <p>
            <button
              v-on:click="$store.commit('AddToCartC')"
              class="addToCart"
              :disabled="$store.state.quantity == 0"
            >
              ADD TO CART-->
            </button>
          </p>
        </div>
      </div>
      <div class="recomended">
        <h3>RECOMMENDED FOR PURCHASE</h3>
      </div>
      <div class="block_shop_product">
        <div class="shop_product_under">
          <router-link to="/hat"
            ><img class="shop_product" src="@/assets/images/белаяшапка.jpg" />
            Шапка с логотипом</router-link
          >
        </div>
        <div class="shop_product_under">
          <router-link to="/tshort"
            ><img
              class="shop_product"
              src="@/assets/images/белаяфутболка.jpg"
            />
            Футболка с логотипом</router-link
          >
        </div>
      </div>
    </div>
    <comp_futer />
  </div>
</template>

<script>
import comp_Header from "@/components/comp_Header.vue";
import comp_Quantity from "@/components/comp_Quantity.vue";
import comp_futer from "@/components/comp_futer.vue";
export default {
  components: {
    comp_Header,
    comp_Quantity,
    comp_futer,
  },
};
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0px auto;
}

.block {
  display: flex;
  margin-top: 100px;
  max-width: 1200px;
}
.shop_product_up {
  text-align: center;
}
.shop_product {
  text-align: center;
}
.shop_product:hover {
  transform: translateY(-10px);
  text-align: center;
}
.info_product {
  text-align: center;
}
.recomended {
  text-align: center;
  margin-top: 150px;
}
.block_shop_product {
  display: flex;
  justify-content: center;
  margin-top: 100px;
  max-width: 1200px;
  margin-bottom: 100px;
}
.shop_product_under {
  max-width: 420px;
  text-align: center;
}
.addToCart {
  background-color: lightsteelblue;
  padding: 10px;
  border-radius: 50px;
  font-size: 15px;
  cursor: pointer;
  border: none;
}
.addToCart:hover {
  background-color: rgb(204, 224, 253);
  padding: 10px;
  border-radius: 50px;
  font-size: 15px;
  cursor: pointer;
  border: none;
}
@media (max-width: 800px) {
  .shop_product_up {
    text-align: center;
    width: 320px;
  }
  .block_shop_product {
    display: block;
    justify-content: left;
  }
  .block {
    display: block;
  }
  .shop_product {
    max-width: 320px;
    padding: 35px;
  }
  .shop_product_under {
    max-width: 320px;
    padding: 35px;
    margin: 0px auto;
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