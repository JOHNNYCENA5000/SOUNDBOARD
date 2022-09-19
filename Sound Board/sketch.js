var pigimg;
var horseimg;
var sheepimg;
var cowimg;
var villagerimg;
var llamaimg;
var pillagerimg;
var zombieimg;
var skeletonimg;
var creeperimg;
var endermanimg;
var catimg;
var dogimg;
var spiderimg;
var piglinimg;
var witherskeletonimg;
var blazeimg;
var magmacubeimg;
var slimeimg;
var ghastimg;
var enderdragonimg;
var witherimg;
var wardenimg;
var technobladeimg;
var frogimg;
var pigsound;
var horsesound;
var sheepsound;
var cowsound;
var villagersound;
var llamasound;
var pillagersound;
var zombiesound;
var skeletonsound;
var creepersound;
var endermansound;
var catsound;
var monkeyimg;
var dogsound;


function preload(){
    pigimg=loadImage("Pigimage2.jpeg");
    pigsound=loadSound("Minecraft Pig Sound (128 kbps).mp3");

    horseimg=loadImage("Horseimage.png");
    horsesound=loadSound("Horse Death (Minecraft Sound) - Sound Effect for editing (128 kbps).mp3");

    sheepimg=loadImage("Sheepimage.webp");
    sheepsound=loadSound("Minecraft Sheep Sound effect (128 kbps).mp3");

    cowimg=loadImage("Cowimage.jpeg");
    cowsound=loadSound("Minecraft Cow Sound (128 kbps).mp3");

    villagerimg=loadImage("Villagerimage.jpg");
    villagersound=loadSound("Minecraft_ Villager Sound Effect (128 kbps).mp3");

    llamaimg=loadImage("Llamaimage.webp");
    llamasound=loadSound("Minecraft Llama sound effects (128 kbps).mp3");

    pillagerimg=loadImage("Pillagerimage.png");
    pillagersound=loadSound("Minecraft pillager (all sound effects) (128 kbps).mp3");

    zombieimg=loadImage("Zombieimage.png");
    zombiesound=loadSound("Minecraft Zombie Sounds (128 kbps).mp3");

    skeletonimg=loadImage("Skeletonimage2.jpg");
    skeletonsound=loadSound("All Skeleton Sounds (Minecraft) - Sound Effect for editing (128 kbps).mp3");

    creeperimg=loadImage("Creeperimage.jpg");
    creepersound=loadSound("Creeper Minecraft Sound Effect (128 kbps).mp3");

    endermanimg=loadImage("Endermanimage.jpg");
    endermansound=loadSound("Minecraft Enderman Sound (128 kbps).mp3");

    catimg=loadImage("Catimage.png");
    catsound=loadSound("Cat_Ocelot meow (Nr. 1 _ Minecraft Sound) - Sound Effect for editing (128 kbps).mp3");

    monkeyimg=loadImage("Monkeyimage.jpg");
    monkeysound=loadSound("[Full Flavor] Tanger - SUSSY BAKA feat. Schwank, Lil Triangle, and Tanger (128 kbps).mp3");

    dogimg=loadImage("Dogimage.jpeg");
    dogsound=loadSound("Dog_Wolf Hurt (Nr. 2 _ Minecraft Sound) - Sound Effect for editing (128 kbps).mp3");
}


function setup(){
    createCanvas(windowWidth,windowHeight);
    pig=createSprite(200,150,10,10);
    pig.addImage(pigimg);
    pig.scale=0.1;
    
    horse=createSprite(420,150,10,10);
    horse.addImage(horseimg);
    horse.scale=0.1;

    sheep=createSprite(590,150,10,10);
    sheep.addImage(sheepimg);
    sheep.scale=0.1;

    cow=createSprite(800,150,10,10);
    cow.addImage(cowimg);
    cow.scale=0.1;

    villager=createSprite(1040,150,10,10);
    villager.addImage(villagerimg);
    villager.scale=0.1;
    
    llama=createSprite(1200,150,10,10);
    llama.addImage(llamaimg);
    llama.scale=0.1;

    pillager=createSprite(1390,150,10,10);
    pillager.addImage(pillagerimg);
    pillager.scale=0.15;

    zombie=createSprite(200,300,10,10);
    zombie.addImage(zombieimg);
    zombie.scale=0.14;

    skeleton=createSprite(400,290,10,10);
    skeleton.addImage(skeletonimg);
    skeleton.scale=0.288;

    creeper=createSprite(600,290,10,10);
    creeper.addImage(creeperimg);
    creeper.scale=0.179;

    enderman=createSprite(810,290,10,10);
    enderman.addImage(endermanimg);
    enderman.scale=0.1399;

    monkey=createSprite(1090,290,10,10);
    monkey.addImage(monkeyimg);
    monkey.scale=0.129;

    cat=createSprite(1380,290,10,10);
    cat.addImage(catimg);
    cat.scale=0.129;

    dog=createSprite(200,490,10,10);
    dog.addImage(dogimg);
    dog.scale=0.1;
}







function draw(){
background("white");
if(mousePressedOver(pig)){
pigsound.play();
}

if(mousePressedOver(horse)){
    horsesound.play();
    }

    if(mousePressedOver(sheep)){
        sheepsound.play();
        }

     if(mousePressedOver(cow)){
        cowsound.play();
        }
    if(mousePressedOver(villager)){
    villagersound.play();        
    }
    if(mousePressedOver(llama)){
        llamasound.play();        
        }
    if(mousePressedOver(pillager)){
        pillagersound.play();        
        }

if(mousePressedOver(zombie)){
    zombiesound.play();
    }
    if(mousePressedOver(skeleton)){
        skeletonsound.play();
        }
if(mousePressedOver(creeper)){
    creepersound.play();
    }
if(mousePressedOver(enderman)){
    endermansound.play();
    }
if(mousePressedOver(monkey)){
    monkeysound.play();
    }
if(mousePressedOver(cat)){
    catsound.play();
    }
if(mousePressedOver(dog)){
    dogsound.play();
    }
    drawSprites();
}




















