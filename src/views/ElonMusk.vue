<template>
  <div class="elon-musk">
    <b-container fluid>
      <img
        src="../assets/ElonMusk/Linemoney.png"
        width="100%"
        class="fixed-top img-fluid"
      />
      <div class="d-flex mt-6">
        <img class="elon-img" src="../assets/ElonMusk/Elon-Notgif.png" />
        <div class="text-content">
          <div class="header-name">Elon Musk</div>
          <p>
            ช่วงอายุ 25 ปี Elon Musk
            ดร็อปเรียนปริญญาเอกของเขาที่มหาวิทยาลัยสแตนฟอร์ด
            หลังจากเรียนไปได้แค่ 2 วันเท่านั้น เขาและน้องชาย ร่วมกันก่อตั้ง Zip2
            ในช่วงฟองสบู่ดอมคอม ซึ่งต่อมาเขาสามารถขายบริษัทนี้ให้กับ Compaq
            มูลค่า $307 ล้านดอลลาร์สหรัฐฯ ซึ่งเขานำเงินที่ได้ไปก่อตั้ง Paypal
            และประสบความสำเร็จ
          </p>
        </div>
      </div>
      <navControl v-on:click.native="back"></navControl>
      <!-- <b-icon-house-fill
        class="d-flex mx-auto bottom"
        scale="4"
      ></b-icon-house-fill> -->
      <img
        class="fixed-bottom img-fluid"
        src="../assets/ElonMusk/money.png"
        width="100%"
      />
    </b-container>
  </div>
</template>
<script>
import navTab from "@/components/NavTab.vue";
import router from "@/router";
export default {
  name: "elon",
  components: { navControl: navTab },
  methods: {
    back() {
      router.push("/");
    }
  }
};
</script>
<style>
.fixed-top {
  z-index: 0;
}
.fixed-bottom {
  z-index: 0;
}
.elon-musk {
  color: white;
  background: linear-gradient(
    180deg,
    rgba(0, 10, 36, 1) 0%,
    rgba(87, 17, 80, 1) 100%
  );
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.elon-img {
  float: left;
  height: 60vh;
  margin-right: 3%;
}
.text-content {
  float: right;
  width: auto;
  margin-top: 5%;
  margin-right: 3%;
}
.mt-6 {
  margin-top: 10%;
  margin-left: 10%;
  margin-right: 10%;
  margin-bottom: 5%;
}
.header-name {
  font-size: 5em;
}
p {
  margin-top: 3%;
  font-size: 1.5rem;
}
</style>
