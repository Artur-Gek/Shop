<template>
  <p>Chooze a size:</p>
  <p>
    <button
      v-if="$store.state.size == 'S' || $store.state.size == 0"
      v-on:click="$store.commit('choseSize1')"
      class="size_product"
    >
      S
    </button>
    <button
      v-else
      v-on:click="$store.commit('choseSize1Plus')"
      class="size_product"
      style="opacity: 0.3"
    >
      S
    </button>
    <button
      v-if="$store.state.size == 'M' || $store.state.size == 0"
      v-on:click="$store.commit('choseSize2')"
      class="size_product"
    >
      M
    </button>
    <button
      v-else
      v-on:click="$store.commit('choseSize2Plus')"
      class="size_product"
      style="opacity: 0.3"
    >
      M
    </button>
    <button
      v-if="$store.state.size == 'L' || $store.state.size == 0"
      v-on:click="$store.commit('choseSize3')"
      class="size_product"
    >
      L
    </button>
    <button
      v-else
      v-on:click="$store.commit('choseSize3Plus')"
      class="size_product"
      style="opacity: 0.3"
    >
      L
    </button>
  </p>
  <p>
    Quantity:
    <button
      :disabled="$store.state.size == 0 || $store.state.quantity == 0"
      v-on:click="$store.commit('decrementQuantity')"
      class="size_product"
    >
      -
    </button>
    <button class="size_product">{{ $store.state.quantity }}</button>
    <button
      :disabled="$store.state.size == 0"
      v-on:click="$store.commit('incrementQuantity')"
      class="size_product"
    >
      +
    </button>
  </p>
</template>

<script>
/*import cart_mixin from "@/mixins/cart_mixin.js";*/
export default {
  /*mixins: [cart_mixin],*/
  methods: {
    AddToCart() {
      this.cart = this.int + this.cart;
      this.quantity = 0;
      this.size = 0;
    },
  },
};
</script>

<style>
.size_product {
  border-radius: 50%;
  border: none;
  background-color: lightsteelblue;

  font-size: 20px;
  cursor: pointer;
}
.size_product:hover {
  border-radius: 50%;
  border: none;
  background-color: rgb(204, 224, 253);
  transform: translateY(-3px);
  font-size: 20px;
  cursor: pointer;
}
</style>