import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'


Vue.config.productionTip = false
export const bus = new Vue();

new Vue({

  el:'#app',
  render: h => h(App),
 
  data:  {
    errorMsg: "",
    successMsg: "",
    visitors:[],
  },

  mounted(){
    this.getAllVisitors();
  },

  methods: {
    
    getAllVisitors(){
      axios.get("http://localhost:8000/cleanproject/API/displayAllVisitors.php?action=read").then(function(response){
        if(response.data.error){
            App.errorMsg = response.data.message;
        }
        else{
            App.visitors = response.data.visitors;
        }   
      });
    },

    toFormData(obj){
      var formData = new FormData();
      for(var i in obj){
        formData.Append(i,obj[i])
      }
      return formData;
    },

  
    addVisitor(){
      var formData = App.toFormData(App.newVisitor)
      formData.append('image',this.selectedFile,this.selectedFile.name)
      axios.post("http://localhost:8000/cleanproject/API/createVisitor.php?action=create", formData,{headers:{'Content-Type':'multipart/form-data'}}).then(function(response){
        App.newVisitor = { name: "",surname:"",phone: "",email:"",image:"" };
        if(response.data.error){
            App.errorMsg = response.data.message;
        }
        else{
            App.successMsg = response.data.message;
            App.getAllVisitors();
        }   
      });
    },

    updateVisitor(){
      var formData = App.toFormData(App.selectedVisitor);
      formData.append('image',this.selectedFile,this.selectedFile.name)
      axios.post("http://localhost:8000/cleanproject/API/updateVisitor.php?action=update",formData,{headers:{'Content-Type':'multipart/form-data'}}).then(function(response){
        App.selectedVisitor = {};
        if(response.data.error){
            App.errorMsg = response.data.message;
        }
        else{
            App.successMsg = response.data.visitors;
            App.getAllVisitors();
        }   
      });
    },

    deleteVisitor(){
      var formData = App.toFormData(App.selectedVisitor);
      axios.post("http://localhost:8000/cleanproject/API/deleteVisitor.php?action=delete",formData).then(function(response){
        App.selectedVisitor = {};
        if(response.data.error){
            App.errorMsg = response.data.message;
        }
        else{
            App.visitors = response.data.visitors;
            App.getAllVisitors();
        }   
      });
    },

  }
})
