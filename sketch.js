var iniciarFase1 = false;
var iniciarFase2 = false;
var iniciarFase3 = false;
var iniciarFase4 = false;
var iniciarFase5 = false;

function preload() {
  fase1bg = loadImage("assets/fase dos dutos/dutos.png");
  fase2bg = loadImage("assets/fase do navio/mar.png");
  fase1Player = loadImage("assets/fase dos dutos/petroleo.png");
  fase2Player = loadImage("assets/fase do navio/navio.jpg.png");
}

function setup() {
  createCanvas(600, 800);

  edges = createEdgeSprites();

  start = createButton("Começar");
  start.position(width / 2 + 500, height / 2 + 200);
  start.size(100, 50);

  player = createSprite(300, 750, 20, 20);

  //criar colisores
  block1 = createSprite(300, 790, 600, 30);
  block2 = createSprite(494, 675, 30, 110);
  block3 = createSprite(290, 785, 620, 30);
  block4 = createSprite(8, 395, 15, 900);
  block5 = createSprite(531, 714, 60, 35);
  block6 = createSprite(595, 408, 10, 900);
  block7 = createSprite(247, 716, 400, 30);
  block8 = createSprite(312, 13, 600, 30);
  block9 = createSprite(60, 187, 30, 400);
  block10 = createSprite(111, 397, 30, 100);
  block11 = createSprite(85, 359, 50, 30);
  block12 = createSprite(72, 438, 70, 37);
  block13 = createSprite(221, 629, 30, 150);
  block14 = createSprite(165, 607, 30, 100);
  block15 = createSprite(108, 646, 145, 30);
  block16 = createSprite(58, 541, 30, 200);
  block17 = createSprite(112, 533, 30, 100);
  block18 = createSprite(207, 507, 175, 30);
  block19 = createSprite(167, 389, 30, 250);
  block20 = createSprite(169, 293, 130, 30);
  block21 = createSprite(139, 221, 98, 30);
  block22 = createSprite(108, 128, 30, 129);
  block23 = createSprite(165, 133, 30, 129);
  block24 = createSprite(367, 76, 400, 30);
  block25 = createSprite(547, 286, 30, 450);
  block26 = createSprite(495, 177, 30, 100);
  block27 = createSprite(386, 319, 30, 200);
  block28 = createSprite(360, 219, 100, 30);
  block29 = createSprite(304, 433, 200, 30);
  block30 = createSprite(223, 214, 30, 200);
  block31 = createSprite(373, 151, 200, 30);
  block32 = createSprite(522, 146, 50, 30);
  block33 = createSprite(510, 435, 50, 30);
  block34 = createSprite(495, 527, 30, 150);
  block35 = createSprite(532, 575, 50, 30);
  block36 = createSprite(548, 618, 30, 50);
  block37 = createSprite(529, 637, 50, 30);
  block38 = createSprite(226, 347, 30, 50);
  block39 = createSprite(275, 365, 100, 30);
  block40 = createSprite(332, 323, 30, 150);
  block41 = createSprite(272, 233, 30, 170);
  block42 = createSprite(442, 248, 30, 150);
  block43 = createSprite(497, 326, 30, 150);
  block44 = createSprite(385, 504, 150, 30);
  block45 = createSprite(331, 583, 30, 150);
  block46 = createSprite(440, 460, 30, 250);
  block47 = createSprite(474, 364, 50, 30);
  block48 = createSprite(473, 290, 100, 30);
  block49 = createSprite(278, 467, 30, 30);
  block50 = createSprite(364, 576, 100, 30);
  block51 = createSprite(391, 618, 30, 100);
  block52 = createSprite(436, 645, 80, 30);
  block53 = createSprite(440, 675, 30, 100);
  block54 = createSprite(330, 749, 30, 100);
  block55 = createSprite(275, 616, 30, 100);
  block56 = createSprite(250, 644, 100, 30);
  //360,750
  checkPoint1 = createSprite(300, 750, 50, 50);
  textoFase1 = createSprite(350, 420, 490, 350);
  textoFase1.visible = false;

  textoFase2 = createSprite(350, 420, 490, 350);
  textoFase2.visible = false;
  boxFase2 = createSprite(random(20, 580), random(20, 780), 100, 50);
  boxFase2.shapeColor = "red";
  boxFase2.visible = false;
  boxCount = 3;
}

function draw() {
  if (!iniciarFase1) {
    background("yellow");
  }
  fill("black");
  textAlign(CENTER);
  textSize(50);
  textFont("fantasy");
  text("Modais de Transporte \n O Jogo", width / 2, height / 2);

  start.mousePressed(() => {
    iniciarFase1 = true;
    start.hide();
  });

  if (iniciarFase1) {
    fase1();
    textoFase1.visible = true;
    textoFase1.shapeColor = "rgba(0, 0, 0, 0.3)";

    textSize(18);
    text(
      "Dutovias são sistemas de transporte que utilizam dutos,\nnormalmente tubulações, para movimentar diversos tipos \nde substâncias, como líquidos, gases ou mesmo informações.\nEsses dutos são empregados  para o transporte eficiente e \ncontínuo de materiais a grandes distâncias. As dutovias são\ncomumente utilizadas diferentes setores, incluindo o\ntransporte de petróleo e gás, água, produtos químicos \n e até mesmo em redes de comunicação para transmissão de\ndados. Essa forma de transporte é conhecida por sua \n segurança, baixo impacto ambiental e eficiência no\ntransporte de grandes volumes.",
      350,
      300
    );
  }
  if (fase1Completa) {
    iniciarFase1 = false;
    iniciarFase2 = true;

    if (iniciarFase2) {
      textoFase1.destroy();
      boxFase2.visible = true;

      fase2();
      textoFase2.visible = true;
      textoFase2.shapeColor = "rgba(0, 0, 0, 0.3)";
      textSize(20);
      text("Caixas Restantes: " + boxCount, 100, 50);

      textSize(18);
      text(
        "As aeronaves utilizadas no transporte aéreo variam \n desde pequenos aviões de  carga até grandes jatos comerciais.\n O modal aeroviário é reconhecido pela sua capacidade de superar \nbarreiras geográficas e oferecer velocidade e eficiência\n no transporte de mercadorias perecíveis, \nprodutos de alto valor e passageiros em curtos espaços de tempo.",
        350,
        300
      );
    }
  }
  if (fase2Completa) {
    iniciarFase2 = false;
    iniciarFase3 = true;

    if (iniciarFase3) {
      fase3();
    }
  }
  if (fase3Completa) {
    iniciarFase3 = false;
    iniciarFase4 = true;

    if (iniciarFase4) {
      fase4();
    }
  }
  if (fase4Completa) {
    iniciarFase4 = false;
    iniciarFase5 = true;

    if (iniciarFase5) {
      fase5();
    }
  }

  xypos();
}

function xypos() {
  textSize(20);
  text("x: " + mouseX + " Y: " + mouseY, mouseX, mouseY);
}
