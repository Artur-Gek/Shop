<template>
  <div>
    <transition name="slide-fade">
      <div class="popup" v-if="cartpopup == true" @click.stop="hideDialog">
        <button class="popup_area"></button>

        <div class="popup_body">
          <div @click.stop class="popup_content">
            <div v-if="$store.state.items != ''" class="popup_text">
              <slot />
              <div class="nexttowar">
                <b class="header_cart">В корзине следующие товары:</b>
              </div>
              <transition-group name="list">
                <div v-for="item in $store.state.items" :key="item">
                  <b class="about popup_information"
                    ><bottom
                      class="del2"
                      v-on:click="$store.commit('Clear', item)"
                      >x</bottom
                    >
                    <div class="towar">
                      <img
                        v-if="item.imgN == 'cap'"
                        class="cartimg"
                        src="@/assets/images/белаякружка.png"
                      />
                      <img
                        v-else-if="item.imgN == 'hat'"
                        class="cartimg"
                        src="@/assets/images/белаяшапка.jpg"
                      />
                      <img
                        v-else-if="item.imgN == 't - short'"
                        class="cartimg"
                        src="@/assets/images/белаяфутболка.jpg"
                      />
                    </div>
                    <div class="inf_towar">
                      <div>size: {{ item.cartSizeN }}</div>
                      <div>quantity: {{ item.cartQuantityN }}</div>
                      <div>{{ item.allcostN }} rub</div>
                    </div>
                  </b>
                  <hr />
                  <!--<button v-on:click="$store.commit('Clear', item)" class="del">
                  Удалить из корзины
                </button>-->
                </div></transition-group
              >
              <button class="oplatit">Pay</button>
            </div>
            <div v-else>
              <b class="zero"
                >Корзина сейчас пуста, добавьте в неё что-нибудь!</b
              >
            </div>
          </div>
        </div>
      </div>
      <div v-else></div>
    </transition>
  </div>
</template>

<script>
/*import cart_mixin from "@/mixins/cart_mixin.js";*/

export default {
  components: {},

  props: {
    cartpopup: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    hideDialog() {
      this.$emit("update:cartpopup", false);
      document.body.classList.remove("modal-open");
    },
  },
};
</script>

<style scoped>
.list-item {
  display: inline-block;
  margin-right: 10px;
}
.list-enter-active,
.list-leave-active {
  transition: all 0.3s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.del2 {
  border: 2px solid lightcoral;
  border-radius: 100px;
  font-size: 15px;
  height: 23px;
  padding: 5px 11px 5px 11px;
  margin-left: 3px;
  cursor: pointer;
}
.del2:focus {
  outline: 1px dashed #fff;
  outline-offset: -3px;
  border: 2px solid lightcoral;
  border-radius: 100px;
  font-size: 15px;
  height: 23px;
  padding: 5px 11px 5px 11px;
  margin-left: 3px;
  cursor: pointer;
}
.del2:hover {
  background-color: rgb(255, 145, 145);
  border: 2px solid lightcoral;
  border-radius: 100px;
  font-size: 15px;
  height: 23px;
  padding: 5px 11px 5px 11px;
  margin-left: 3px;
  cursor: pointer;
}
.inf_towar {
  margin: 10px;
  padding: 5px;
  padding-top: 23px;
  text-align: center;
  padding-left: 30px;
}
.nexttowar {
  padding: 10px;
  text-align: center;
  margin-bottom: 10px;
}
.popup_text {
  overflow-x: hidden;
  overflow-y: auto;
  height: 98%;
}
.popup_text::-webkit-scrollbar {
  width: 0;
}
.about {
  display: flex;

  border: 50px;
  width: 100%;
  height: 100%;
  position: relative;
  left: 0;
  z-index: 3;
  color: black;
  overflow: auto;
  font-size: 15px;
}

.popup {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  top: 0;
  left: 0px;
  right: 0;
  bottom: 0;
  z-index: 99;
  display: flex;
  justify-content: right;
  overflow: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  flex-flow: column nowrap;
}

.popup_body {
  height: 81%;
  display: flex;
  justify-content: right;
  margin-right: 10px;
  margin-top: 80px;
}
.popup_content {
  background-color: white;
  padding-top: 20px;
  position: relative;
  z-index: 3;
  text-align: center;
  max-width: 320px;
  transition: all 0.5s ease 0s;
  border-radius: 30px;
}

.popup_area {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
}
.img_about_popup {
  position: relative;
  z-index: 2;
}
.del {
  border: none;
  background-color: lightcoral;
  font-size: 20px;
  padding: 10px;
  cursor: pointer;
  width: 100%;
}
.oplatit {
  background-color: lightblue;
  color: black;
  padding: 10px;
  cursor: pointer;
  font-size: 20px;
  border: none;
  width: 100%;
  margin-bottom: 15px;
}
.oplatit:hover {
  background-color: rgb(189, 235, 250);
  color: black;
  padding: 10px;
  cursor: pointer;
  font-size: 20px;
  border: none;
  width: 100%;
  margin-bottom: 15px;
}

.slide-fade-enter-active {
  transition: all 0.8s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.cartimg {
  max-width: 120px;
}
</style>