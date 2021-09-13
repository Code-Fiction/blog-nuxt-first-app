export default (context, inject) => {
  const { route } = context;

  inject("myPlugin", {
    showRoutePath() {
      console.log(route.fullPath);
    },
    showDate() {
      console.log(new Date());
    }
  });
};

// https://nuxtjs.org/docs/2.x/concepts/context-helpers
