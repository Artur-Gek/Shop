<template>
  <comp_Header />
  <div class="container">
    <div class="block">
      <div class="block_first_img">
        <img src="@/assets/images/mesto.png" alt="" />
        <img src="@/assets/images/dlya.png" alt="" />
        <img src="@/assets/images/logotyp_text.png" alt="" />
        <img src="@/assets/images/logo2.jpg" alt="" />
      </div>
      <div class="loren">
        <h3>LOREN</h3>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum."
        <p><a href="">learn more</a></p>
      </div>
    </div>
    <div class="block2">
      <h2>LOREN</h2>
      <div class="block_content">
        <div class="content">
          <img src="@/assets/images/Без имени.png" />
          Loren
        </div>
        <div class="content">
          <img src="@/assets/images/Без имени.png" />
          Loren
        </div>
        <div class="content">
          <img src="@/assets/images/Без имени.png" />
          Loren
        </div>
        <div class="content">
          <img src="@/assets/images/Без имени.png" />
          Loren
        </div>
      </div>
      <a href="">READ MORE</a>
    </div>
  </div>
  <div class="back1">
    <div class="container">
      <div class="instagram">
        <div>
          <a href="" class="inst.img"
            ><img src="@/assets/images/1384063.png" alt=""
          /></a>
        </div>
        <div class="instagram_info">
          <p>our instagram</p>
          <p><a href="">тут должна быть ссылка</a></p>
          <p><a href="">тут должна быть ссылка</a></p>
        </div>
      </div>
    </div>
  </div>
  <div class="back2">
    <div class="container">
      <div class="block_content2">
        <div class="content2">
          <a href=""
            >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo <img src="@/assets/images/kvadrat.png" alt=""
          /></a>
        </div>
        <div class="content2">
          <a href=""
            >"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo <img src="@/assets/images/kvadrat.png" alt=""
          /></a>
        </div>
        <div class="content2">
          <a href="">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo
            <img src="@/assets/images/kvadrat.png" alt=""
          /></a>
        </div>
        <div class="content2">
          <a href="">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo
            <img src="@/assets/images/kvadrat.png" alt=""
          /></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import comp_Header from "@/components/comp_Header.vue";
export default {
  components: {
    comp_Header,
  },
};
</script>

<style>
.container {
  max-width: 1200px;
  margin: 0px auto;
}

.block {
  display: flex;
  margin-top: 100px;
  max-width: 1200px;
}

.loren {
  margin-left: 100px;
}

.info_product {
  text-align: center;
}

a {
  text-decoration: none;
  color: black;
}

.block_content {
  position: relative;
}

.block_content2 {
  position: relative;
}

.instagram {
  position: relative;
  top: 300px;
  display: flex;
}

.instagram_info {
  margin-left: 400px;
  font-size: 40px;
}

.back1 {
  background-image: url("../images/Untitled.png");
  height: 800px;
}

.back2 {
  background-image: url("../images/Untitled2.png");
  height: 800px;
}

.block_content .slick-arrow {
  position: absolute;
  top: 50%;
  margin: -50px 0px 0px 0px;
  z-index: 10;
  font-size: 0;
  width: 30px;
  height: 60px;
  border: none;
}

.block_content .slick-arrow.slick-prev {
  left: 0;
  background: url("../images/sl-arrow_l.svg") 0 0 / 100% no-repeat;
}

.block_content .slick-arrow.slick-next {
  right: 0;
  background: url("../images/sl-arrow_r.svg") 0 0 / 100% no-repeat;
}

.block_content .slick-dots {
  display: flex;
  align-items: center;
  justify-content: center;
}

.block_content .slick-dots li {
  list-style: none;
  margin: 0px 10px;
}

.block_content .slick-dots button {
  font-size: 0;
  width: 15px;
  height: 15px;
  background-color: black;
  border-radius: 100%;
  border: none;
}

.block_content .slick-dots li.slick-active button {
  background-color: transparent;
  border: 1px solid black;
}

.content2 {
  text-align: center;
  opacity: 0.4;
  margin-top: 250px;
}

.content2.slick-center {
  opacity: 1;
}

.block_content2 .slick-arrow {
  position: absolute;
  top: 50%;
  margin: 80px 0px 0px 0px;
  z-index: 10;
  font-size: 0;
  width: 30px;
  height: 60px;
  border: none;
}

.block_content2 .slick-arrow.slick-prev {
  left: 0;
  background: url("../images/sl-arrow_l.svg") 0 0 / 100% no-repeat;
}

.block_content2 .slick-arrow.slick-next {
  right: 0;
  background: url("../images/sl-arrow_r.svg") 0 0 / 100% no-repeat;
}

.block_content2 .slick-dots {
  display: flex;
  align-items: center;
  justify-content: center;
}

.block_content2 .slick-dots li {
  list-style: none;
  margin: 0px 10px;
}

.block_content2 .slick-dots button {
  font-size: 0;
  width: 15px;
  height: 15px;
  background-color: black;
  border-radius: 100%;
  border: none;
}

.block_content2 .slick-dots li.slick-active button {
  background-color: transparent;
  border: 1px solid black;
}

.block_first_img {
  max-width: 470px;
  position: relative;
}

.block_first_img .slick-arrow {
  position: absolute;
  top: 50%;
  margin: -50px 0px 0px 0px;
  z-index: 10;
  font-size: 0;
  width: 30px;
  height: 60px;
  border: none;
}

.block_first_img .slick-arrow.slick-prev {
  left: 0;
  background: url("../images/sl-arrow_l.svg") 0 0 / 100% no-repeat;
}

.block_first_img .slick-arrow.slick-next {
  right: 0;
  background: url("../images/sl-arrow_r.svg") 0 0 / 100% no-repeat;
}

.block_first_img .slick-dots {
  display: flex;
  align-items: center;
  justify-content: center;
}

.block_first_img .slick-dots li {
  list-style: none;
  margin: 0px 10px;
}

.block_first_img .slick-dots button {
  font-size: 0;
  width: 15px;
  height: 15px;
  background-color: black;
  border-radius: 100%;
  border: none;
}

.block_first_img .slick-dots li.slick-active button {
  background-color: transparent;
  border: 1px solid black;
}

@media (max-width: 2560) {
  .container {
    max-width: 1200px;
    margin: 0px auto;
  }

  .block {
    display: flex;
    margin-top: 100px;
    width: 1200px;
  }
}

@media (max-width: 1440px) {
  .container {
    max-width: 908px;
    margin: 0px auto;
  }

  .block {
    margin-top: 100px;

    display: table;
  }

  .instagram {
    position: relative;
    top: 100px;
    display: table;
  }

  .instagram_info {
    margin-left: 0px;
    font-size: 40px;
  }

  .loren {
    margin-left: 0px;
  }

  .content2 {
    text-align: center;
    opacity: 1;
  }
}

@media (max-width: 1024px) {
  .container {
    max-width: 660px;
    margin: 0px auto;
  }

  .content2 {
    text-align: center;
    opacity: 0.1;
  }
}

@media (max-width: 768px) {
  .container {
    max-width: none;
  }

  .instagram {
    position: relative;
    top: 50px;
  }
}

@media (max-width: 420px) {
  .container {
    max-width: none;
    margin: 0px auto;
  }

  .block_first_img {
    max-width: 320px;
    position: relative;
  }

  .inst.img {
    max-width: 320px;
  }
}
</style>