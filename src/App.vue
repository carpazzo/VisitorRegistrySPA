<template>
  <div id="app">
    <myHeader></myHeader>
    <visitor-display></visitor-display>
    <visitor-edit></visitor-edit>
    <visitor-create></visitor-create>
    <visitor-delete></visitor-delete>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import DisplayVisitor from './components/DisplayVisitor';
import AddVisitor from './components/AddVisitor';
import EditVisitor from './components/EditVisitor';
import DeleteVisitor from './components/DeleteVisitor';

export default {
  name: 'app',
  components: {
    'myHeader' : Header,
    'visitor-display' : DisplayVisitor,
    'visitor-edit' : EditVisitor,
    'visitor-delete' : DeleteVisitor,
    'visitor-create' : AddVisitor,
  }
}
</script>

<style>
  body{
    background-image: url("/images/nicenigth.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }

</style>
