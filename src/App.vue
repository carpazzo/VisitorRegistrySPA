<template>
  <div id="app">
    <myHeader @adminActive ="adm = $event" @addOptionActive ="displayAddOption = $event" ></myHeader>
    <visitor-display :adm ="adm" @editActive ="displayEditOption = $event" @deleteActive ="displayDeleteOption = $event"></visitor-display>
    <visitor-edit :displayEditOption ="displayEditOption"></visitor-edit>
    <visitor-create :displayAddOption ="displayAddOption" ></visitor-create>
    <visitor-delete :displayDeleteOption ="displayDeleteOption" ></visitor-delete>
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
  data:function(){
    return{
      adm: false,
      displayAddOption: false,
      displayEditOption: false,
      displayDeleteOption: false,
      
    }
  },

  components: {
    'myHeader' : Header,
    'visitor-display' : DisplayVisitor,
    'visitor-edit' : EditVisitor,
    'visitor-delete' : DeleteVisitor,
    'visitor-create' : AddVisitor,
  },
}
</script>

<style scoped>
  body{
    margin:0;
    padding: 0;
  }
  #app{
    background-image: url("../images/nicenigth.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed; 
  }
</style>
