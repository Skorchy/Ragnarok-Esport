<template>
  <div class="header-box">
    <div class="left-side-header">
      <span class="menu-buttons">
        <router-link class="routerlink" :to="{ name : 'Ragnarok' }">
          <em class="first-letter">R</em>agnaröK
          <em class="first-letter">E</em>sport
        </router-link>
      </span>
      <span class="menu-buttons">
        <router-link class="routerlink" :to="{ name: 'WIP' }">
          <em class="first-letter">P</em>artenaires
        </router-link>
      </span>
    </div>
    <router-link :to="{ name: 'Home' }">
      <div class="logo">
        <img src="../assets/logo-sans-fond.png" />
      </div>
    </router-link>
    <div class="right-side-header">
      <span class="menu-buttons">
        <router-link class="routerlink" :to="{ name: 'WIP' }">
          <em class="first-letter">R</em>ecrutements
        </router-link>
      </span>
      <span class="menu-buttons">
        <router-link class="routerlink" :to="{ name: 'WIP' }">
          <em class="first-letter">W</em>ebTV
        </router-link>
      </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header-box {
  background-color: #101010;
  height: 150px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  box-sizing: border-box;
  flex-grow: 1;
  overflow: hidden;
}
.left-side-header {
  display: flex;
  height: 150px;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  -moz-transform: skew(30deg, 0deg);
  -webkit-transform: skew(30deg, 0deg);
  -o-transform: skew(30deg, 0deg);
  -ms-transform: skew(30deg, 0deg);
  transform: skew(30deg, 0deg);
  border-right: 3px solid #32c1ad;
  box-sizing: border-box;
  -webkit-box-shadow: inset -8px 0px 3px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: inset -8px 0px 3px 0px rgba(0, 0, 0, 0.75);
  box-shadow: inset -8px 0px 3px 0px rgba(0, 0, 0, 0.75);
}

.left-side-header span {
  -moz-transform: skew(-30deg, 0deg);
  -webkit-transform: skew(-30deg, 0deg);
  -o-transform: skew(-30deg, 0deg);
  -ms-transform: skew(-30deg, 0deg);
  transform: skew(-30deg, 0deg);
}

.right-side-header {
  display: flex;
  flex-grow: 1;
  height: 150px;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;
  -moz-transform: skew(-30deg, 0deg);
  -webkit-transform: skew(-30deg, 0deg);
  -o-transform: skew(-30deg, 0deg);
  -ms-transform: skew(-30deg, 0deg);
  transform: skew(-30deg, 0deg);
  border-left: 3px solid #32c1ad;
  box-sizing: border-box;
  -webkit-box-shadow: inset 8px 0px 3px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: inset 8px 0px 3px 0px rgba(0, 0, 0, 0.75);
  box-shadow: inset 8px 0px 3px 0px rgba(0, 0, 0, 0.75);
}

.right-side-header span {
  -moz-transform: skew(30deg, 0deg);
  -webkit-transform: skew(30deg, 0deg);
  -o-transform: skew(30deg, 0deg);
  -ms-transform: skew(30deg, 0deg);
  transform: skew(30deg, 0deg);
}

.routerlink {
  font-family: "azonixregular";
  text-decoration: none;
  color: #ebebeb;
  transition: 0.3s;
}

.routerlink:hover {
  color: #32c1ad;
  transition: 0.3s;
}

.logo {
  width: 350px;
  display: flex;
  align-items: center;
  flex-grow: 1;
  box-sizing: border-box;
}
.logo img {
  margin: auto;
  width: 120px;
}
.burger-menu {
  display: none;
}
.first-letter {
  color: #32c1ad;
  font-style: normal;
}
.menu-toggled {
  position: absolute;
  right: 0;
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 2px solid #ebebeb;
  background-color: #121212;

  span {
    margin-bottom: 5px;
    margin-top: 5px;
    color: #ebebeb;
  }
}

@media (max-width: 768px) {
  .header-box {
    justify-content: space-between;
    padding-left: 5%;
    padding-right: 10%;
  }
  .menu-buttons {
    display: none;
  }
  .burger-menu {
    display: block;
  }
}
</style>
