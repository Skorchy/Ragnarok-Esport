<template>
  <v-card max-width="1400" min-height="500px" class="mx-auto text-left" flat>
    <v-card-title>Liste des candidatures</v-card-title>
    <v-divider />

    <v-card
      v-for="(recruit,i) in recruits"
      :key="i"
      class="my-4"
      min-height="400px"
      color="#FEFEFE"
    >
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title>{{recruits[i].profile.firstName}} "{{recruits[i].profile.nickname}}" {{recruits[i].profile.name}}</v-list-item-title>
          <v-list-item-subtitle>{{recruits[i].profile.position}}</v-list-item-subtitle>
        </v-list-item-content>
        <v-spacer />
        <img
          class="ico"
          src="../assets/custom-icons/lol-icon.png"
          v-if="recruits[i].profile.categories.lol"
        />
        <img
          class="ico"
          src="../assets/custom-icons/rl-icon.png"
          v-if="recruits[i].profile.categories.rl"
        />
        <img
          class="ico"
          src="../assets/custom-icons/valorant-icon.png"
          v-if="recruits[i].profile.categories.valorant"
        />
        <img
          class="ico"
          src="../assets/custom-icons/ftn-icon.png"
          v-if="recruits[i].profile.categories.ftn"
        />
        <img
          class="ico"
          src="../assets/custom-icons/staff-icon.png"
          v-if="recruits[i].profile.categories.staff"
        />
      </v-list-item>
      <v-divider />

      <v-list two-line subheader>
        <v-subheader>Email</v-subheader>
        <v-list-content class="px-4">{{recruits[i].profile.email}}</v-list-content>
      </v-list>
    </v-card>
  </v-card>
</template>

<script>
export default {
  data() {
    return {
      recruits: [
        {
          id: "12345",
          profile: {
            nickname: "Skorch",
            name: "Rose",
            firstName: "Mickael",
            age: 26,
            email: "skorch.abp@gmail.com",
            position: "Community Manager",
            experiences:
              "manager rocket league puis vice président abyssalproject",
            application:
              "Je souhaite me présenter au poste de community manager parce que wallah j'suis stylé",
            categories: {
              lol: true,
              rl: true,
              valorant: true,
              ftn: true,
              staff: true
            },
            disponibilies: {
              monday: true,
              tuesday: false,
              wednesday: true,
              thursday: false,
              friday: true,
              saturday: false,
              sunday: true,
              additions:
                "un samedi sur deux, et sinon de 20h à minuit sur les jours des dispos"
            }
          }
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.ico {
  height: 40px;
  width: 40px;
}
</style>