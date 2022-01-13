<template>
  <header>
    <div class="logo">
      <a href="">LOGO</a>
    </div>
    <div class="header_menu">
      <a href="">ABOUT </a>
      <a href="">REVIEW </a>
      <button class="shopButton">
        <router-link class="router-link" to="/">SHOP</router-link>
      </button>
    </div>
    <div class="user_menu">
      <button class="cartButton" @click="openCart">
        <img class="imgCart" src="@/assets/images/shopping-cart11.png" />({{
          $store.state.cart
        }})
      </button>
      <button class="cartButton" @click="openLog">
        <img src="@/assets/images/profile.png" />
      </button>
      <comp_Cart v-model:cartpopup="cartpopup"> </comp_Cart>
      <comp_Entrance v-model:loginpopup="loginpopup"></comp_Entrance>
    </div>
  </header>
</template>

<script>
import comp_Entrance from "@/components/comp_Entrance.vue";
import comp_Cart from "@/components/comp_Cart.vue";
export default {
  components: {
    comp_Cart,
    comp_Entrance,
  },

  data() {
    return {
      cartpopup: false,
      loginpopup: false,
      px: 0,
    };
  },
  methods: {
    openCart() {
      this.px = 16;
      this.cartpopup = true;
      document.body.classList.add("modal-open");
    },
    openLog() {
      this.px = 16;
      this.loginpopup = true;
      document.body.classList.add("modal-open");
    },
  },
};
</script>

<style>
.router-link {
  color: black;
}
.shopButton {
  background: none;
  border: none;
  font-size: 20px;
}
.shopButton:hover {
  transform: translateY(-2px);
  background: none;
  border: none;
  font-size: 20px;
}
header {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: pink;
}
.header_menu {
  margin: 15px;
}
.logo {
  margin: 15px;
}
.user_menu {
  margin: 15px;
}
.cartButton {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
.imgCart {
  width: 30px;
  margin-top: 10px;
}
.cartButton:hover {
  transform: translateY(-2px);
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
.cartButton:hover {
  transform: translateY(-2px);
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
</style>