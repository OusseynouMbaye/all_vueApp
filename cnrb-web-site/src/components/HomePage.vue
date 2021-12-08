<template>
  <div>
    <div>
      <Article />
      <CardGroup />
      <DuckRace />
      <Sponsors-club />
    </div>
    <div>
      <Side-bar />
    </div>
  </div>
</template>

<script>
import DuckRace from "./DuckRace.vue";
import SideBar from "./SideBar.vue";
import Article from "./Article.vue";
import CardGroup from "./CardGroup.vue";
import SponsorsClub from "./SponsorsClub.vue";

export default {
  components: { SideBar, Article, CardGroup, DuckRace, SponsorsClub },
  name: "HomePage",
};
</script>
