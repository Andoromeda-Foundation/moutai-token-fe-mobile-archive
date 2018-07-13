<template functional>
    <section class="hero">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ props.title}}
          </h1>
          <h2 class="subtitle">
              {{ props.subtitle }}            
            <br>
            {{ props.desc }}
          </h2>
        </div>
      </div>
    </section>
</template>


<style lang="less" scoped>
.hero {
  text-align: center;
  color: #fff;
  background: #3f51b5;
  padding: 4rem 1rem;
}
.hero .title {
  font-size: 2rem;
  font-weight: 600;
}
.hero .subtitle {
  color: #eee;
  font-size: 1rem;
  font-weight: 400;
}
</style>
