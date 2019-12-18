<template>
  <div id="app" class="fill-height">
    <myHeader></myHeader>
    <visitor-display></visitor-display>
    <visitor-edit></visitor-edit>
    <visitor-create></visitor-create>
    <visitor-delete></visitor-delete>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import DisplayVisitor from './components/DisplayVisitor.vue';
import AddVisitor from './components/AddVisitor.vue';
import EditVisitor from './components/EditVisitor.vue';
import DeleteVisitor from './components/DeleteVisitor.vue';

export default {
  name: 'app',

  components: {
    'myHeader' : Header,
    'visitor-display' : DisplayVisitor,
    'visitor-edit' : EditVisitor,
    'visitor-delete' : DeleteVisitor,
    'visitor-create' : AddVisitor,
  },
}
</script>

<style>
  html, body {
    height: 100%;
    width: 100%;
    margin:0;
    padding: 0;
  }

  .fill-height {
    height: 100% !important;
  }

  #app{
    background-image: url("../images/nicenigth.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed; 
  }
</style>
