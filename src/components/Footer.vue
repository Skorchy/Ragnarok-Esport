<template>
  <div class="footer">
    <div class="footer-box">
      <div class="links">
        <div class="display-rgk-title">
          <h2><em class="blue">R</em>agnarok</h2>
          <img
            class="display-rgk-title-img"
            src="../assets/logo-sans-fond.png"
          />
          <h2><em class="blue">E</em>sport</h2>
        </div>
        <router-link class="link" :to="{ name: 'Ragnarok' }"
          >Association</router-link
        >
        <router-link class="link" :to="{ name: 'WIP' }"
          >Partenaires</router-link
        >
        <router-link class="link" :to="{ name: 'WIP' }"
          >Recrutements</router-link
        >
        <router-link class="link" :to="{ name: 'WIP' }">WebTV</router-link>
      </div>
      <div class="contact" v-if="!messageSent">
        <label class="contact-label" for="contact-name">Nom</label>
        <input
          class="contact-input"
          type="text"
          name="contact-name"
          v-model="name"
        />
        <label class="contact-label" for="contact-email">Email</label>
        <input
          class="contact-input"
          type="email"
          name="contact-email"
          v-model="email"
        />
        <label class="contact-label" for="contact-message">Message</label>
        <textarea
          v-model="content"
          class="contact-input area"
          rows="10"
          maxlength="600"
          name="contact-message"
          placeholder="Un renseignement ? Un partenariat ? Prenez contact !"
        />
        <button
          :disabled="!(name && email && content)"
          @click="sendInfosFromContact()"
          class="contact-button"
          type="button"
        >
          Envoyer
        </button>
      </div>
      <div class="message-success" v-if="messageSent">
        <span class="message">Message envoyé avec succès !</span>
      </div>
    </div>
    <hr class="separator" />
    <div class="disclaimer">
      <span>© 2020 RAGNAROK ESPORT - TOUS DROITS RÉSERVÉS</span>
      <span>
        Développé par
        <em class="blue">
          <i>Skorch</i>
        </em>
      </span>
    </div>
  </div>
</template>

<script>
import axios from "axios";

const webhookUrl =
  "https://discordapp.com/api/webhooks/747153286376849539/cXa5k43Z_bzIjydt5rE2epFgGOKJK1VIhfV1A0Bkz2CN9-2uDf6TsKe2alkUwsd67Yrr";

export default {
  data() {
    return {
      name: "",
      email: "",
      content: "",
      messageSent: false,
    };
  },
  methods: {
    async sendInfosFromContact() {
      const payload = {
        username: "New Challenger !",
        content:
          "----------------------------------------------------------------",
        embeds: [
          {
            title:
              "Un nouveau message provenant du site web vient d'être reçu.",
            color: 7527030,
            fields: [
              {
                name: "Nom :",
                value: this.name,
              },
              {
                name: "Email :",
                value: this.email,
              },

              {
                name: "Message : ",
                value: this.content,
              },
            ],
            image: {
              url:
                "https://cdn.discordapp.com/attachments/177784067809476608/748116922444414986/newmessage.jpg",
            },
            thumbnail: {
              url:
                "https://cdn.discordapp.com/attachments/177784067809476608/748113862540132422/logo-sans-fond.png",
            },
          },
        ],
      };

      await axios.post(webhookUrl, payload);
      this.messageSent = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.footer {
  color: #ebebeb;
  padding-top: 50px;
  padding-bottom: 50px;
  background: #101010;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.footer-box {
  margin: auto;
  display: flex;
  align-items: center;
  width: 80%;
  margin-bottom: 20px;
}
.links {
  display: flex;
  flex-direction: column;
  width: 50%;
  border-right: 3px solid #080808;
  margin-right: 75px;
  padding-bottom: 55px;
}
.link {
  width: fit-content;
  font-size: 20px;
  text-decoration: none;
  color: #606060;
  padding-bottom: 5px;
}
.link:hover {
  color: #808080;
}
.display-rgk-title {
  font-family: "azonixregular";
  color: #ebebeb;
  display: flex;
  align-items: center;
}
.display-rgk-title-img {
  width: 50px;
  padding-left: 10px;
  padding-right: 5px;
  padding-bottom: 10px;
}

.contact {
  display: flex;
  flex-direction: column;
  width: 50%;
}

.contact-label {
  font-family: "disket_monobold";
  color: #606060;
  padding-top: 3px;
}

.contact-input {
  background: #101010;
  border: 1px solid #7c7c7c;
  height: 30px;
  color: #32c1ad;
  font-family: "metropolis_extralight";
  font-size: 18px;
}

.area {
  min-height: 135px;
  max-width: 100%;
  max-height: 135px;
  font-family: "metropolis_extralight";
  color: #7c7c7c;
  outline: 0;
}

.contact-button {
  cursor: pointer;
  margin-top: 20px;
  font-family: "azonixregular";
  color: rgb(10, 10, 10);
  font-size: 20px;
  padding: 15px;
  border: 0;
  background: -moz-linear-gradient(
    59deg,
    rgb(0, 142, 138) 30%,
    rgb(0, 255, 203) 70%
  );
  background: -webkit-linear-gradient(
    59deg,
    rgb(0, 142, 138) 30%,
    rgb(0, 255, 203) 70%
  );
  background: -o-linear-gradient(
    59deg,
    rgb(0, 142, 138) 30%,
    rgb(0, 255, 203) 70%
  );
  background: -ms-linear-gradient(
    59deg,
    rgb(0, 142, 138) 30%,
    rgb(0, 255, 203) 70%
  );
  background: linear-gradient(
    329deg,
    rgb(0, 142, 138) 30%,
    rgb(0, 255, 203) 70%
  );
  -webkit-box-shadow: 0px 2px 3px rgba(50, 50, 50, 0.75);
  -moz-box-shadow: 0px 2px 3px rgba(50, 50, 50, 0.75);
  box-shadow: 0px 2px 3px rgba(50, 50, 50, 0.75);
}
.contact-button:disabled {
  background: grey;
}

.blue {
  font-style: normal;
  color: #32c1ad;
}

.separator {
  width: 75%;
  border: 1px solid #080808;
  margin-bottom: 30px;
}

.disclaimer {
  width: 80%;
  color: #606060;
  display: flex;
  justify-content: space-between;
}
.message-success {
  border: 2px dashed #cacaca;
}
.message {
  font-family: "disket_monobold";
  font-size: 18px;
}
@media (max-width: 1024px) {
}
@media (max-width: 768px) {
  .footer-box {
    flex-direction: column;
  }
  .contact {
    width: 90%;
  }
  .links {
    text-align: center;
    align-items: center;
    width: 90%;
    border: none;
    margin-right: 0;
  }
}
</style>
