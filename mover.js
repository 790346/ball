

function Mover(loc, vel, acc, len, clr){
  this.loc = loc;
  this.vel = vel;
  this.acc = acc;
  this.len = len;
  this.clr = clr;
}

function Influencer(loc, vel, acc, len, clr){
  this.loc = loc;
  this.vel = vel;
  this.acc = acc;
  this.len = len;
  this.clr = clr;
}

function Repeller(loc, vel, acc, len, clr){
  this.loc = loc;
  this.vel = vel;
  this.acc = acc;
  this.len = len;
  this.clr = clr;
}

// arc is anchored at center of circle
Mover.prototype.update = function(){

  this.loc.add(this.vel);
  //console.log("radius",this.len);
  if(this.loc.x >= (window.innerWidth  - this.len)|| this.loc.x <= this.len){
  //if(this.loc.x >= (window.innerWidth )|| this.loc.x <= 0){
     this.vel.x *= -1;
    //ball.radius = Math.random() * 100 + 15;
  }
  if(this.loc.y >= window.innerHeight - this.len || this.loc.y <= this.len){
     this.vel.y *= -1;
  }
  /*
  if(repeller.loc.x - this.loc.x <= 30 && repeller.loc.y - this.loc.y <= 30){
    repeller.loc.setDirection(this.vel.x*-1);
    repeller.loc.setDirection(this.vel.y*-1);
  }
  if(attractor.loc.x - this.loc.x <= 30 && attractor.loc.y - this.loc.y <= 30){
    this.loc.setDirection(attractor.vel);
  }
 */ 

  this.render();
}

// determine new velocity based on distance from influencer
// and vector from mover to influencer
Mover.prototype.accelerate = function(attractLoc, repelLoc){

    // attractor
    // find vector between mover and attractor:
    var dv = new JSVector(attractLoc.x - this.loc.x, attractLoc.y - this.loc.y);

    // find distance (magnitude of vector)
    distance = Math.sqrt( Math.pow(dv.x, 2) + Math.pow(dv.y , 2));

    // figure out what arbitrary vicinity will influence the mover and scale based on this
    // MaxDistance = any farther and no influence; 
    // 1 - distance/MaxDistance = scaling of influence
    // need to take care of edge case where they overlap
    var maxDistance = 200;
    if (distance < maxDistance) {
        var scale = 1-distance/maxDistance;

        // adjust the velocity:

    }



    // 
}

// rect is anchored at upper left
// so take into account rectangle space to right of anchor by the right margin
// < and > or <= and >= ??
Influencer.prototype.update = function(){

  this.loc.add(this.vel);
  if(this.loc.x > window.innerWidth - this.len){
    this.loc.x = 0;  // set to 0, not len, since anchor is at upper left
  }
  else if(this.loc.x < 0){
    this.loc.x = window.innerWidth - this.len;
  }

  if(this.loc.y > window.innerHeight - this.len){
    this.loc.y = 0;
  }
  else if(this.loc.y < 0){
    this.loc.y = window.innerHeight - this.len;
  }
  this.render();
}

// none of the Repeller stuff is used now.. Influencer is the obj type of both
// attractors and repellers
Repeller.prototype.update = function(){
  // why you doing this bruh?
  //repeller = new Repeller(50, 12, 13, 10, 'black')
  if(this.loc.x >= window.innerWidth){
    this.loc.x = 0;
  }
  if(this.loc.x >= 0){
    this.loc.x = window.innerWidth;
  }
  if(this.loc.y >= window.innerHeight){
    this.loc.y = 0;
  }
  if(this.loc.y >= 0){
    this.loc.y = window.innerHeight;
  }
  repeller.render();
}

Mover.prototype.render = function(){
    ctx.fillStyle = this.clr;
    ctx.beginPath();
    ctx.arc(this.loc.x, this.loc.y, this.len, Math.PI*2,0,false);
    ctx.stroke();
    ctx.fill();
}

Influencer.prototype.render = function(){
  //console.log(this.loc.x);
  ctx.fillStyle = this.clr;
  ctx.beginPath();
  ctx.rect(this.loc.x, this.loc.y, this.len, this.len);
  ctx.stroke();
  ctx.fill();
}
Repeller.prototype.render = function(){
  //console.log(this.loc.x);
  ctx.fillStyle = this.clr;
  ctx.beginPath();
  ctx.rect(this.loc.x, this.loc.y, this.len, this.len);
  ctx.stroke();
  ctx.fill();
}

//Attractor.prototype.update = function(){
  //  if(this.loc.x >= window.innerWidth || this.loc.x )
//}
