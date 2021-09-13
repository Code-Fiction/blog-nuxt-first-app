<template>
  <div class="blog-layout">
    <header>
      <span>Blog Header</span>
    </header>

    <main>
      <Nuxt />
    </main>
  </div>
</template>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: sans-serif;
}

.blog-layout > header {
  width: 100%;
  height: 60px;
  padding: 0 40px;
  background: #d13d10;
}

.blog-layout > header span {
  color: #f1f1f1;
  font-size: 20px;
  line-height: 60px;
}

.blog-layout > main {
  border: solid 4px #2566b1;
  padding: 30px 20px;
  width: 100%;
}
</style>

