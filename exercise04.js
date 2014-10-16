var myCat = {
    tired: 20,
    hungry: 40,
    lonely: 50,
    happy: 100,
    feed: function(){
        console.log("Om nom nom");
        this.hunger = this.hunger-5;
    }
};

