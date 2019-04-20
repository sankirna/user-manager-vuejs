<template>
  <div id="app">
    <transition name="moveInUp"><!-- Router transition for better UI -->
      <router-view/>
    </transition>
  </div>
</template>

<script>

</script>

<style lang="scss">
/* Transition animation for router */
.moveInUp-enter-active{
  animation: fadeIn 0.6s ease-in;
}
@keyframes fadeIn{
  0%{
    opacity: 0;
  }
  50%{
    opacity: 0.5;
  }
  100%{
    opacity: 1;
  }
}
.moveInUp-leave-active{
  animation: moveInUp .3s ease-in;
}
@keyframes moveInUp{
 0%{
  transform: translateY(0);
 }
  100%{
  transform: translateY(-400px);
 }
}
</style>
