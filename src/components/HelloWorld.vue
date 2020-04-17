<template>
  <div class="hello">
    <input v-model="firstCount" />
    <input v-model="secondCount" />
    <p @click="checkPassword">check</p>
    <button @click="axiosGet">axios</button>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HelloWorld",
  props: {
    msg: String
  },
  data() {
    return {
      firstCount: "",
      secondCount: "",
      resData: ""
    };
  },
  methods: {
    checkPassword(firstCount, secondCount) {
      if (firstCount != undefined && secondCount != undefined) {
        this.firstCount = firstCount;
        this.secondCount = secondCount;
      }
      if (this.firstCount == "") {
        return false;
      }
      if (this.firstCount != this.secondCount) {
        return false;
      }
      if (this.firstCount.toString().length < 6) {
        return false;
      }
      if (this.firstCount.toString().length > 10) {
        return false;
      }
    },
    axiosGet() {
      /* eslint-disable */
      const URL = "https://yesno.wtf/api";
      axios.get(URL).then((res) => {
        if (res.status == 200) {
          this.resData = res.data;
          return res.data;
        }
      }).catch((err) => {
        return err;
      })
    }
  }
};
</script>
