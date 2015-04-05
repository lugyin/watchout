// start slingin' some d3 here.

//constructor functions
var g = {
w: 640;
h: 480;
r:30;
duration: 1500;

}

var mouse = {x: g.w/2, y: g/h/2}
var score = 0;
var highScore = 0;
var collisionCount = 0;

var pixelize = function(n){return number + 'px';}
var rand = function(n){return Math.floor(Math.random()*2)}
var randX = function(){return pixelize( rand(g.w - g.r*2))}
var randY = function(){return pixelize( rand(g.h - g.r*2))}

var updateScore = function(){
  d3.select('.scoreboard .current span').text(score)
  d3.select('.scoreboard .current span').text(score)
  d3.select('.scoreboard .current span').text(score)
}

var Unit = function(x,y,r){
  this.x = x || 15;
  this.y = y || 15;
  this.r = r || 1;
}

var Enemy = function(x,y,r){
  Unit.call(this,x,y,r)
  this.fill = "purple"
  this.cx = x || 10;
  this.cy = y || 10;
}

var Player = function(x,y,r){
  Unit.call(this,x,y,r)
  this.fill = "blue"
  this.cx = x || 10;
  this.cy = y || 10;
}

//make enemies && player
window.enemies = [];
var createEnemies = function(n){
  while(n>0){
    window.enemies.push(new Enemy(n*10,n*10,1));
    n--
  }
};
createEnemies(4);

window.player = [];
var createPlayer = function(n){
  while(n>0){
    window.player.push(new Player(15,15,n));
    n--
  }
};
 createPlayer(1);


//board
var svgContainer = d3.select('body').append('svg')
  .attr('width', 640)
  .attr('height', 460);

var universe = svgContainer.append('rect')
  .attr('width', 640)
  .attr('height', 460)
  .attr('fill', 'green');



// var invokePlayer = d3.select('body').select('svg').selectAll('rect')
//   .append('player')
//   .attr('class','player')
//   .data(window.player);


// invokePlayer.enter().append('player')
//   .attr('class','player');




var invokeEnemies = svgContainer.selectAll('rect')
  .data(window.enemies)
  .attr('class','enemies')
  .style('cx',function(d){ return d.cx;})
  .style('cy',function(d){ return d.cy;})
  .style('r',function(d){ return d.r;})
  .style('fill',function(d){ return d.fill;});


  invokeEnemies
  .attr('class','enemies')
  .style('cx',function(d){ return d.cx;})
  .style('cy',function(d){ return d.cy;})
  .style('r',function(d){ return d.r;})
  .style('fill',function(d){ return d.fill;});



invokeEnemies.enter().append('enemies')
  .attr('class','enemies')



//mouse

d3.select('.mouse').style({
  top:pixelize(mouse.y),
  left: pixelize(mouse.x),
  width:10px;
  height:10px;
  'border-radius': pixelize(g.r*2)
})

board.on('mouse',function(){
  var loc = d3.mouse(board);
  mouse = {x:loc[0], y:loc[1]}
  d3.select(".mouse").style({

  })
})

enemies.transition().duration(settings.duration).style({})


var prevCollision = false;
var detectCollisions = function(){
collision = false;


asteroids.each(function())
  var cx = this.offsetLeft + settings.r

  var x = cx - mouse.x

  if(x < g.r*2){
    collision = true;
  }


d3.timer(detectCollision)


  if(collision){

    score = 0;

  }

}
