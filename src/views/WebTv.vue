<template>
  <div class="web-tv">
    <div class="tv">
      <div id="twitch-embed"></div>
      <div class="buttons">
        <a href="https://www.paypal.com/paypalme/RagnarokEsport" target="_blank">
          <button class="button donate">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                d="M19 16.166c0-3.529-3.023-4.962-6-6.255v-4.653c1.42.052 2.85.453 4.16.914l.725-3.295c-1.814-.551-3.438-.803-4.885-.841v-2.036h-2v2.134c-3.891.535-5.969 2.975-5.969 5.7 0 3.857 3.558 5.126 5.969 5.919v4.712c-1.706-.019-3.592-.62-5.091-1.202l-.909 3.288c1.787.923 3.931 1.417 6 1.453v1.996h2v-2.105c3.312-.464 6.005-2.293 6-5.729zm-8-10.643v3.482c-1.611-.921-1.678-2.771 0-3.482zm2 12.601v-3.591c1.841 1.065 1.605 2.864 0 3.591z"
              />
            </svg>
            <span>DONATE</span>
          </button>
        </a>
        <button class="button go-twitch">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M2.149 0l-1.612 4.119v16.836h5.731v3.045h3.224l3.045-3.045h4.657l6.269-6.269v-14.686h-21.314zm19.164 13.612l-3.582 3.582h-5.731l-3.045 3.045v-3.045h-4.836v-15.045h17.194v11.463zm-3.582-7.343v6.262h-2.149v-6.262h2.149zm-5.731 0v6.262h-2.149v-6.262h2.149z"
              fill-rule="evenodd"
              clip-rule="evenodd"
            />
          </svg>
          <span>VOIR SUR TWITCH</span>
        </button>
      </div>
    </div>
    <div class="planning">
      <RgkH1 class="planning-titre">Planning</RgkH1>
      <div class="planning-img"></div>
    </div>
  </div>
</template>

<script>
import RgkH1 from "@/components/RgkH1.vue";
export default {
  components: {
    RgkH1
  },
  mounted() {
    this.$loadScript("https://embed.twitch.tv/embed/v1.js").then(() => {
      /*  global Twitch */
      new Twitch.Embed("twitch-embed", {
        width: "100%",
        height: 700,
        channel: "monstercat",
        theme: "light"
      });
    });
  }
};
</script>

<style lang="scss" scoped>
.web-tv {
  padding-top: 150px;
  background: #151515;
  display: flex;
  align-items: center;
  flex-direction: column;
}
.tv {
  width: 80%;
  height: 700px;
  margin: 100px 0;
  background: chocolate;
}
.planning {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.planning-titre {
  margin-bottom: 50px;
}

.planning-img {
  height: 450px;
  background: brown;
  width: 100%;
  margin-bottom: 50px;
}
.buttons {
  margin: auto;
  padding-top: 50px;
  width: 50%;
  display: flex;
  justify-content: space-between;
}
.button {
  height: 50px;
  width: 250px;
  display: flex;
  align-items: center;
}
.button span {
  margin-left: 20px;
}
</style>
