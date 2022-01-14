<template>
  <div>
    <transition name="slide-fade">
      <div class="popup" v-if="loginpopup == true" @click.stop="hideDialog">
        <button class="popup_area"></button>
        <div class="popup_body">
          <div @click.stop class="popup_content">
            <div class="popup_text">
              <div>
                <h2>Вход</h2>
                <div>
                  <div>E-mail</div>
                  <input class="inputB" name="login" placeholder="Логин" />
                  <div>Password</div>

                  <input
                    class="inputB"
                    name="pass"
                    type="password"
                    placeholder="Пароль"
                  />

                  <div><input class="enter" type="submit" value="Войти" /></div>
                </div>
                <div>Забыли пароль?</div>
                <div>
                  <button class="cartButton" @click="hideDialogPlus">
                    Регистрация
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-else></div>
    </transition>
    <comp_Registrade v-model:regpopup="regpopup" />
  </div>
</template>

<script>
import comp_Registrade from "@/components/comp_Registrade.vue";
export default {
  components: {
    comp_Registrade,
  },
  data() {
    return {
      regpopup: false,
    };
  },
  props: {
    loginpopup: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    hideDialog() {
      this.$emit("update:loginpopup", false);
      document.body.classList.remove("modal-open");
    },
    hideDialogPlus() {
      this.$emit("update:loginpopup", false);
      this.regpopup = true;
    },
  },
};
</script>

<style scoped>
.popup {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  top: 0;
  left: 0px;
  right: 300px;
  bottom: 0;
  z-index: 99;
  display: flex;
  overflow: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  justify-content: right;
}

.popup_body {
  height: 80%;
  display: flex;
  justify-content: right;
  margin-right: 10px;
  margin-top: 80px;
}
.popup_content {
  background-color: rgb(222, 222, 224);
  line-height: 50px;
  position: relative;
  z-index: 3;
  text-align: center;
  min-width: 310px;
  max-width: 310px;
  padding-top: 100px;
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
.enter {
  border: none;
  background-color: lightsteelblue;
  font-size: 20px;
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  width: 100px;
  margin-top: 20px;
}
.enter:hover {
  border: none;
  background-color: rgb(191, 210, 240);
  font-size: 20px;
  cursor: pointer;
  padding: 10px;
  border-radius: 10px;
  width: 100px;
  margin-top: 20px;
}
.inputB {
  border-radius: 10px;
  padding: 8px;
  font-size: 20px;
  border: none;
  width: 200px;
  box-shadow: 6px 5px black;
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
  max-width: 220px;
}
.cartButton {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
}
</style>