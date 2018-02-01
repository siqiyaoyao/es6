 var foot = {
     kick:function(){
         this.yelp = "Ouch!";
         setImmediate(function(){
            console.log(this);
             console.log(this.yelp); // undefined
         },1)
         
         setImmediate(function(){
            console.log(this);
             console.log(this.yelp);
         }.bind(this),2); //  Ouch!
         
         var that = this;
         setImmediate(function(){
             console.log(that.yelp); // Ouch!
         },3)
     }
 }
foot.kick();

