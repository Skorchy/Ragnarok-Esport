<template>
  <div class="rgk-staff-container">
    <div class="rgk-staff-member" v-for="(member,index) in members" :key="member.poste">
      <RgkStaffCard v-if="(index%2==0)" :poste="member.poste" :photo="member.infos.photo" />
      <RgkStaffDescription
        :birthday="member.infos.dateOfBirth"
        :gamesPlayed="member.infos.jeux"
        :name="member.infos.nom"
        :firstName="member.infos.prenom"
        :nickname="member.infos.pseudo"
        :description="member.infos.description"
        :gamesPlayedByMember="member.infos.gamesPlayed"
      />
      <RgkStaffCard v-if="(index%2==1)" :poste="member.poste" :photo="member.infos.photo" />
    </div>
  </div>
</template>

<script>
import RgkStaffDescription from "@/components/RgkStaffMember/RgkStaffDescription.vue";
import RgkStaffCard from "@/components/RgkStaffMember/RgkStaffCard.vue";
export default {
  components: {
    RgkStaffDescription,
    RgkStaffCard
  },
  props: {
    members: {
      type: Array,
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>
.rgk-staff-member {
  width: 1200px;
  max-width: 100%;
  margin-bottom: 150px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
}
</style>