
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;

function preload()
{

}

function setup() {
  createCanvas(1500, 700);
  engine = Engine.create();
  world = engine.world;
 
}

function draw() {
  
}