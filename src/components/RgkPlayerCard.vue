<template>
  <div class="rgk-card">
    <div
      class="top"
      :style="{ 'backgroundImage': `url('${require(`../assets/playerCards/playerCharacters/${player.character}.jpg`)}')`}"
    ></div>
    <div class="bottom">
      <div
        class="avatar"
        :style="{ 'backgroundImage': `url('${require(`../assets/playerCards/playerAvatar/${player.avatar}`)}')`}"
      ></div>
      <div class="player-infos">
        <h4 class="player-nickname">{{player.prenom}} "{{player.pseudo}}" {{player.nom}}</h4>
        <p class="content">Âge : {{age}}</p>
        <p class="content">Rôle : {{player.fonction}}</p>
      </div>
      <div class="player-links">
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
      </div>
    </div>
  </div>
</template>

<script>
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
      const birthday = new Date(year, month, day);
      var ageDifMs = Date.now() - birthday.getTime();
      var ageDate = new Date(ageDifMs); // miliseconds from epoch
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
  }
};
</script>

<style scoped>
.rgk-card {
  border-radius: 5px;
  width: 300px;
  min-height: 400px;
  overflow: hidden;
  border: 3px solid black;
  margin: 0 15px;
  margin-bottom: 20px;
}
.top {
  min-height: 120px;
  background-size: cover;
  border: 0;
}
.bottom {
  min-height: 280px;
  background: #32c1ad;
  position: relative;
  border-top: 2px solid black;
}
.avatar {
  height: 100px;
  width: 100px;
  border: 1px solid black;
  background: #101010;
  background-size: cover;
  position: absolute;
  left: calc(50% - 50px);
  top: -50px;
  border-radius: 50%;
}
.player-character {
  height: 100%;
  width: 100%;
}
.player-infos {
  padding-top: 70px;
  margin-bottom: 30px;
}
.player-nickname {
  text-align: center;
}
.content {
  padding-left: 10px;
}
.player-links {
  display: flex;
  width: 100%;
  justify-content: center;
}
.icos {
  width: 30px;
  height: 30px;
  margin: 10px;
}
</style>