<template functional>
<div>
<article class="media">
  <figure class="media-left">
    <p class="image is-64x64">
      <img :src="props.img" >
    </p>
  </figure>
  <div class="media-content">
    <div class="content">
      <p>
        <span style="font-size:14px">{{props.name}}</span>
        <br>
        <span style="font-size:10px;color:#999999">拥有者： {{props.owner}}</span>
        <br>
        <span style="font-size:12px;color:#3F51B5">买入价： {{props.price}}</span>
        <br>
      </p>
    </div>
  </div>
  <div class="media-right" style="padding-right:5px">
    <!-- <div style="font-size:10px;color:#3EC170">3天后可提货</div> -->
    <div style="padding-top:10px">
      <a class="button is-info is-rounded is-small is-outlined" @click.native="gethref()">
        转让
      </a>
    </div>
  </div>
</article>
</div>
</template>
<script>
export default {
  methods: {
    gethref(){
      console.log("ss"+this.props)
      const href = "/#/Transfer/"+this.props.id;;
      window.location.href = href;
      // return 
    }
  }
}
</script>