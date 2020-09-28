<template>
  <div class="stan">
    <img src="../assets/StanLee/Nongif-lee.png" class="stan-img" />
    <img src="../assets/StanLee/Comics.png" class="side" />
    <div class="content">
      <h1>When Stan Lee</h1>
      <h2>39 yaer old</h2>
      <p>
        เริ่มด้วยต้นแบบนักเขียนคอมมิคบุ๊คชื่อดังอย่าง Stan Lee
        เขาเข้าวงการคอมมิคบุ๊คด้วยอายุเพียง 17
        ปีและเริ่มทำงานเป็นผู้ช่วยแผนกหนังสือการ์ตูนของบริษัท Timely
        Publications แม้จะใช้เวลานานสุดท้ายเมื่อปี 1961
        หนังสือการ์ตูนของเขาก็มีชื่อเสียงขึ้นมา
      </p>
    </div>
    <back v-on:click.native="back"></back>
  </div>
</template>
<style>
.content {
  margin-top: 4%;
  margin-left: 20%;
  margin-right: 20%;
  z-index: 2;
}
.stan {
  color: black;
  background: linear-gradient(
    315deg,
    rgba(161, 85, 88, 1) 0%,
    rgba(59, 67, 119, 1) 100%
  );
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.stan-img {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 80%;
}
.side {
  position: absolute;
  bottom: 0;
  right: 0;
}
p {
  color: white;
}
h1 {
  font-size: 72px;
  background: -webkit-linear-gradient(#e5777b, #d393e3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
h2 {
  background: -webkit-linear-gradient(#e5777b, #d393e3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
<script>
import back from "@/components/BackButton.vue";
import router from "@/router";
export default {
  name: "stan",
  components: { back },
  methods: {
    back() {
      router.push("/");
    },
  },
};
</script>
