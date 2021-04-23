
const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var hero;
var ground;
var wall;
var monster;
var rope;
var Base;

function preload() {
  ground= loadImage("");
  hero= loadImage("");
  wall= loadImage("");
  monster= loadImage("");
}

function setup() {
  createCanvas(3000, 800);

  myEngine = Engine.create();
  myWorld= myEngine.world;

  hero = new Hero(900,300,50,50);

  base = new Base(750,400,500,10);

  monster = new Monster(1500,300,50,50);



}

function draw() {
background("white");
Engine.update(myEngine);
hero.show();
ground.show();
wall.show();
monster.show();
rope.show();
base.show();
}