export default context => {
  const { query, redirect } = context;

  if (!query.token) {
    redirect("/");
  }
};


