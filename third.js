const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");
canvas.width = 1517;
canvas.height = 730;


const rand = function(num) {
  return Math.floor(Math.random() * num) + 1;
};
  

const background = new Image();
 background.src = "https://www.planetarcades.com.au/images/bg-master-2016.jpg";
const goodGuyImg = new Image();
 goodGuyImg.src = "https://s3.amazonaws.com/gameartpartnersimagehost/wp-content/uploads/2016/03/Jack_Thug_Featured.png";
const badGuy1Img = new Image();
 badGuy1Img.src= "https://s3.amazonaws.com/gameartpartnersimagehost/wp-content/uploads/edd/2015/09/Zombie-Army-Character-Royalty-Free-Game-Art.png";
const badGuy2Img = new Image();
 badGuy2Img.src= "https://s3.amazonaws.com/gameartpartnersimagehost/wp-content/uploads/2016/03/Scar-Forehead-Zombie-Royalty-Free-Game-Art.png";
const badGuy3Img = new Image();
 badGuy3Img.src= "https://s3.amazonaws.com/gameartpartnersimagehost/wp-content/uploads/edd/2015/09/Zombie-Farmer-Character-Royalty-Free-Game-Art.png";
const badGuy4Img = new Image();
 badGuy4Img.src = "https://mbtskoudsalg.com/images/png-character-creator.png"; 
const badGuy5Img = new Image();
 badGuy5Img.src = "https://i.pinimg.com/originals/80/b3/58/80b358d2cd35c50e2128621cc9863e00.png";
const badGuy6Img = new Image();
 badGuy6Img.src = "https://i.pinimg.com/originals/80/b3/58/80b358d2cd35c50e2128621cc9863e00.png";







const gameData = {
    goodguy:  {
      x: 0,
      y: 0,
      xDelta: 0,
      yDelta: 0,
      width: 100,
      height: 100,
      image: goodGuyImg,
      draw: function() { 
       context.drawImage(this.image, this.x, this.y, this.width, this.height)
      },
      update: function() { 
         this.x += this.xDelta;
         this.y += this.yDelta;

               if(this.x + this.width >= canvas.width || this.x <= 0){
                this.xDelta *= -10
               }
               if(this.y + this.height >= canvas.height || this.y <= 0){
                this.yDelta *= -10
               }
          
     
        }
    },

    badguys: [
        badguy1= {
           x: rand(canvas.width - 100),
             y: rand(canvas.height - 100),
           xDelta: rand(10),
           yDelta: rand(10),
           width: 100,
           height: 100,
           image: badGuy1Img,
           draw: function() {  
            context.drawImage(this.image, this.x, this.y, this.width, this.height)
           },
           update: function() {
                this.x += this.xDelta;
                this.y += this.yDelta;
                let xmid = ((this.width / 2) + this.x);
                let ymid = (this.y - (this.height / 2))
              if(xmid <= gameData.goodguy.x + gameData.goodguy.width && xmid >= gameData.goodguy.x && ymid <= gameData.goodguy.y && ymid >= gameData.goodguy.y - gameData.goodguy.height){
                  alert("Game Over");
              }

               if(this.x + this.width >= canvas.width || this.x <= 0){
                this.xDelta *= -1
               }
               if(this.y + this.height >= canvas.height || this.y <= 0){
                this.yDelta *= -1
               }
           }
        },
        
        badguy2= {
           x: rand(canvas.width - 100),
             y: rand(canvas.height - 100),
           xDelta: rand(10),
           yDelta: rand(10),
           width: 100,
           height: 100,
           image: badGuy2Img,
           draw: function() {
                context.drawImage(this.image, this.x, this.y, this.width, this.height)
             },
           update: function() { 
                this.x += this.xDelta;
                this.y += this.yDelta;
                let xmid = ((this.width / 2) + this.x);
                let ymid = (this.y - (this.height / 2))
              if(xmid <= gameData.goodguy.x + gameData.goodguy.width && xmid >= gameData.goodguy.x && ymid <= gameData.goodguy.y && ymid >= gameData.goodguy.y - gameData.goodguy.height){
                  alert("Game Over");
              }
              if(this.x + this.width >= canvas.width || this.x <= 0){
                this.xDelta *= -1
               }
               if(this.y + this.height >= canvas.height || this.y <= 0){
                this.yDelta *= -1
               }
            }
        },

        
        badguy3 = {
             x: rand(canvas.width - 100),
             y: rand(canvas.height - 100),
           xDelta: rand(10),
           yDelta: rand(10),
           width: 100,
           height: 100,
           image: badGuy3Img,
           draw: function() { 
            context.drawImage(this.image, this.x, this.y, this.width, this.height)
           },
           update: function() { 
               this.x += this.xDelta;
               this.y += this.yDelta;
               let xmid = ((this.width / 2) + this.x);
                let ymid = (this.y - (this.height / 2))
              if(xmid <= gameData.goodguy.x + gameData.goodguy.width && xmid >= gameData.goodguy.x && ymid <= gameData.goodguy.y && ymid >= gameData.goodguy.y - gameData.goodguy.height){
                  alert("Game Over");
              }

            
               if(this.x + this.width >= canvas.width || this.x <= 0){
                this.xDelta *= -1
               }
               if(this.y + this.height >= canvas.height || this.y <= 0){
                this.yDelta *= -1
               }
            }
        },


        badguy4 = {
             x: rand(canvas.width - 100),
             y: rand(canvas.height - 100),
           xDelta: rand(10),
           yDelta: rand(10),
           width: 100,
           height: 100,
           image: badGuy4Img,
           draw: function() { 
            context.drawImage(this.image, this.x, this.y, this.width, this.height)
           },
           update: function() { 
               this.x += this.xDelta;
               this.y += this.yDelta;
               let xmid = ((this.width / 2) + this.x);
                let ymid = (this.y - (this.height / 2))
              if(xmid <= gameData.goodguy.x + gameData.goodguy.width && xmid >= gameData.goodguy.x && ymid <= gameData.goodguy.y && ymid >= gameData.goodguy.y - gameData.goodguy.height){
                  alert("Game Over");
              }

            
               if(this.x + this.width >= canvas.width || this.x <= 0){
                this.xDelta *= -1
               }
               if(this.y + this.height >= canvas.height || this.y <= 0){
                this.yDelta *= -1
               }
            }
        },

        badguy5 = {
             x: rand(canvas.width - 100),
             y: rand(canvas.height - 100),
           xDelta: rand(10),
           yDelta: rand(10),
           width: 100,
           height: 100,
           image: badGuy5Img,
           draw: function() { 
            context.drawImage(this.image, this.x, this.y, this.width, this.height)
           },
           update: function() { 
               this.x += this.xDelta;
               this.y += this.yDelta;
               let xmid = ((this.width / 2) + this.x);
                let ymid = (this.y - (this.height / 2))
              if(xmid <= gameData.goodguy.x + gameData.goodguy.width && xmid >= gameData.goodguy.x && ymid <= gameData.goodguy.y && ymid >= gameData.goodguy.y - gameData.goodguy.height){
                  alert("Game Over");
              }

            
               if(this.x + this.width >= canvas.width || this.x <= 0){
                this.xDelta *= -1
               }
               if(this.y + this.height >= canvas.height || this.y <= 0){
                this.yDelta *= -1
               }
            }
        },

        badguy6 = {
             x: rand(canvas.width - 100),
             y: rand(canvas.height - 100),
           xDelta: rand(10),
           yDelta: rand(10),
           width: 100,
           height: 100,
           image: badGuy6Img,
           draw: function() { 
            context.drawImage(this.image, this.x, this.y, this.width, this.height)
           },
           update: function() { 
               this.x += this.xDelta;
               this.y += this.yDelta;
               let xmid = ((this.width / 2) + this.x);
                let ymid = (this.y - (this.height / 2))
              if(xmid <= gameData.goodguy.x + gameData.goodguy.width && xmid >= gameData.goodguy.x && ymid <= gameData.goodguy.y && ymid >= gameData.goodguy.y - gameData.goodguy.height){
                  alert("Game Over");
              }

            
               if(this.x + this.width >= canvas.width || this.x <= 0){
                this.xDelta *= -1
               }
               if(this.y + this.height >= canvas.height || this.y <= 0){
                this.yDelta *= -1
               }
            }
        }
    ]
}

const leftKey = 37;
const upKey = 38;
const rightKey = 39;
const downKey = 40;
document.addEventListener('keydown', function(event) {
  if(event.keyCode === upKey) {
        gameData.goodguy.yDelta = -5;
    }
    if(event.keyCode === downKey){
       gameData. goodguy.yDelta = 5;
    }
    if(event.keyCode === rightKey){
        gameData.goodguy.xDelta = 5;
    }
    if(event.keyCode === leftKey){
       gameData.goodguy.xDelta = -5;
    }
}, false);
document.addEventListener('keyup', function(event) {
    gameData.goodguy.xDelta = 0;
    gameData.goodguy.yDelta = 0;
},false);
 const draw = function(){
   context.drawImage(background, 0, 0, canvas.width, canvas.height)
   gameData.goodguy.draw();
   gameData.badguys[0].draw();
   gameData.badguys[1].draw();
   gameData.badguys[2].draw();
   gameData.badguys[3].draw();
   gameData.badguys[4].draw();
   gameData.badguys[5].draw();
 }

  const update = function (){
    gameData.goodguy.update();
   gameData.badguys[0].update();
   gameData.badguys[1].update();
   gameData.badguys[2].update();
   gameData.badguys[3].update();
   gameData.badguys[4].update();
   gameData.badguys[5].update();
  }

const loop = function(){
  
 draw();
 update();
   
   
  requestAnimationFrame(loop);
}
 loop();