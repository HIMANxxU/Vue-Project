<template>
    <h1 v-if="userName">Hello {{userName}}, Welcome to home page</h1>
    <h1 v-else>Wellcome to home page</h1>
</template>
<script>


export default{
    name:"HomeComp",
    data(){
        return{
            userName:null
        }
    },
    beforeMount(){

        const user=JSON.parse(localStorage.getItem("userData"))
        if(user){
            this.userName=user.name

        }else{
            this.$router.push("/signup")

        }

       
    
        
        
        

  
       
    }
}

</script>