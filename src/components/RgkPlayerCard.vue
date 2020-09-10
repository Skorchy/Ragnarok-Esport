<template>
  <div class="rgk-card">
    <div
      class="top"
      :style="{
        backgroundImage: `url('${require(`../assets/playerCards/playerCharacters/${player.character}`)}')`,
      }"
    >
      <span class="player-fonction">{{ player.fonction }}</span>
    </div>
    <div class="bottom">
      <div
        class="avatar"
        :style="{
          backgroundImage: `url('${require(`../assets/playerCards/playerAvatar/${player.avatar}`)}')`,
        }"
      ></div>
      <div class="player-infos">
        <h4 class="player-nickname">
          {{ player.prenom }} "
          <span class="blue">{{ player.pseudo }}</span>
          " {{ player.nom }}
        </h4>
        <p class="content">Âge : {{ age }}</p>
        <p class="content player-elo" v-if="player.elo">
          MMR :
          <img class="rank-ico" :src="`${require(`../assets/lolranks/${player.elo}.png`)}`" />
        </p>
        <p class="content" v-if="player.peak">MMR : {{ player.peak }}</p>
      </div>
      <div class="player-links">
        <a :href="player.twitterLink" target="_blank">
          <svg
            v-if="player.twitterLink"
            class="icos"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
            />
          </svg>
        </a>
        <a :href="player.ytbLink" target="_blank">
          <svg
            class="icos"
            v-if="player.ytbLink"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"
            />
          </svg>
        </a>
        <a :href="player.twitchLink" target="_blank">
          <svg
            class="icos"
            v-if="player.twitchLink"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M2.149 0l-1.612 4.119v16.836h5.731v3.045h3.224l3.045-3.045h4.657l6.269-6.269v-14.686h-21.314zm19.164 13.612l-3.582 3.582h-5.731l-3.045 3.045v-3.045h-4.836v-15.045h17.194v11.463zm-3.582-7.343v6.262h-2.149v-6.262h2.149zm-5.731 0v6.262h-2.149v-6.262h2.149z"
              fill-rule="evenodd"
              clip-rule="evenodd"
            />
          </svg>
        </a>
        <a :href="player.igLink" target="_blank">
          <svg
            class="icos"
            v-if="player.igLink"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import { getAge } from "@/services/age.js";

export default {
  props: {
    player: {
      type: Object,
      required: true
    }
  },
  computed: {
    age() {
      const { year, month, day } = this.player.dateOfBirth;
      return getAge(year, month, day);
    }
  }
};
</script>

<style scoped>
.rgk-card {
  width: calc(100% - 10px);
  max-width: 350px;
  min-height: 450px;
  overflow: hidden;
  margin: 0 15px;
  margin-bottom: 30px;
  -webkit-box-shadow: 0px 0px 10px 0px rgba(50, 193, 174, 1);
  -moz-box-shadow: 0px 0px 10px 0px rgba(50, 193, 174, 1);
  box-shadow: 0px 0px 10px 0px rgba(50, 193, 174, 1);
  transition: all 0.15s ease-in-out;
  border: 2px solid #32c1ad;
}
.rgk-card:hover {
  -webkit-box-shadow: 0px 0px 15px 0px rgba(50, 193, 174, 1);
  -moz-box-shadow: 0px 0px 15px 0px rgba(50, 193, 174, 1);
  box-shadow: 0px 0px 15px 0px rgba(50, 193, 174, 1);
}
.blue {
  color: #32c1ad;
}
.top {
  display: flex;
  align-items: center;
  justify-content: space-around;
  min-height: 180px;
  background-size: cover;
  border: 0;
}
.bottom {
  min-height: 270px;
  background: #202020;
  position: relative;
  border-top: 1px solid #32c1ad;
}
.avatar {
  height: 110px;
  width: 110px;
  border: 2px solid #32c1ad;
  background: #101010;
  background-size: cover;
  position: absolute;
  left: calc(50% - 55px);
  top: -55px;
  border-radius: 50%;
}
.player-character {
  height: 100%;
  width: 100%;
}
.player-infos {
  padding-top: 50px;
  margin-bottom: 10px;
  font-family: "metropolis_extralight";
}
.player-nickname {
  text-align: center;
  font-family: "azonixregular";
}
.player-fonction {
  font-size: 40px;
  padding-bottom: 55px;
  font-family: "azonixregular";
  color: #f0f0f0;
  text-shadow: 3px 3px 0px rgba(15, 15, 15, 0.9);
}
.player-elo {
  display: flex;
  align-items: center;
}
.content {
  padding-left: 10px;
}
.player-links {
  display: flex;
  width: 100%;
  justify-content: center;
}
.rank-ico {
  width: 25px;
  height: 25px;
  padding-left: 10px;
}
.icos {
  width: 30px;
  height: 30px;
  margin: 10px;
  fill: #32c1ad;
}
@media (max-width: 768px) {
  .rgk-card {
    margin: 10px 5px;
  }
}
</style>
