import * as THREE from "./three.module.js";
import { RoundedBoxGeometry } from "./RoundedBoxGeometry.js";
import { TextGeometry } from "./TextGeometry.js";
import { FontLoader } from "./FontLoader.js";


export default function PRIM01({x,y,z}){

  //personaje y 
    
        
        //cerritos
        var geometry2 = new THREE.ConeGeometry(60,100,95,100);
        var material2 = new THREE.MeshLambertMaterial({ color: 0x502E09, side:THREE.DoubleSide});
        var mesh2 = new THREE.Mesh(geometry2, material2);
        mesh2.position.set(-60,50, -70);
        mesh2.rotation.set(0, 0, 0);
        //scene.add(mesh2);
        

        var geometry3 = new THREE.ConeGeometry(40,80,50,45);
        var mont1 = new THREE.TextureLoader().load("./assets/cerro.jpg");
        var material3 = new THREE.MeshLambertMaterial({ map: mont1});
        var mesh3 = new THREE.Mesh(geometry3, material3);
        mesh3.position.set(-110, 40, -70);
        mesh3.rotation.set(0, 0, 0);
        //scene.add(mesh3);

        //pino
        var geometry4= new THREE.CylinderGeometry(5,5,30,10,10,false,3.5);
        var material4 = new THREE.MeshLambertMaterial({ color: 0x6F522C, side:THREE.DoubleSide});
        var mesh4 = new THREE.Mesh(geometry4, material4);
        mesh4.position.set(-8, 15, 30);
        mesh4.rotation.set(0, 0, 0);
        //scene.add(mesh4);

        var geometry5= new THREE.ConeGeometry(12,15,20,10);
        var material5 = new THREE.MeshLambertMaterial({ color: 0x086F29, side:THREE.DoubleSide});
        var mesh5 = new THREE.Mesh(geometry5, material5);
        mesh5.position.set(-8, 50, 30);
        mesh5.rotation.set(0, 0, 0);
        //scene.add(mesh5);

        var geometry6= new THREE.ConeGeometry(12,15,20,10);
        var material6 = new THREE.MeshLambertMaterial({ color: 0x086F29, side:THREE.DoubleSide});
        var mesh6 = new THREE.Mesh(geometry6, material6);
        mesh6.position.set(-8, 43, 30);
        mesh6.rotation.set(0, 0, 0);
        //scene.add(mesh6);

        var geometry7= new THREE.ConeGeometry(12,15,20,10);
        var material7 = new THREE.MeshLambertMaterial({ color: 0x086F29, side:THREE.DoubleSide});
        var mesh7 = new THREE.Mesh(geometry6, material6);
        mesh7.position.set(-8, 38, 30);
        mesh7.rotation.set(0, 0, 0);
        //scene.add(mesh7);

        var pino1 = new THREE.Group();
      pino1.add(mesh4, mesh5, mesh6, mesh7);
      //scene.add(pino1);


      var pino4 = pino1.clone();
      //scene.add(pino4);
      pino4.position.set(-10,1,-60);

      var pino7 = pino1.clone();
      //scene.add(pino7);
      pino7.position.set(-230,1,-10);

      var pino5 = pino1.clone();
      //scene.add(pino5);
      pino5.position.set(-165,1,20);

      var pino6 = pino1.clone();
      //scene.add(pino6);
      pino6.position.set(2,1,45);


      //flores
        var geometry8 = new RoundedBoxGeometry(5,15,5,10,0.5);
        var material8 = new THREE.MeshLambertMaterial({ color: 0xFCFCFC, side:THREE.DoubleSide});
        var mesh8 = new THREE.Mesh(geometry8, material8);
        mesh8.position.set(-70, 10, 95);
        mesh8.rotation.set(0, 0, 0);
        //scene.add(mesh8);

        var geometry9 = new RoundedBoxGeometry(5,15,5,10,0.5);
        var material9 = new THREE.MeshLambertMaterial({ color: 0xFCFCFC, side:THREE.DoubleSide});
        var mesh9 = new THREE.Mesh(geometry9, material9);
        mesh9.position.set(-70, 10, 95);
        mesh9.rotation.set(0,0, 0.785);
        //scene.add(mesh9);

        var geometry10 = new RoundedBoxGeometry(5,15,5,10,0.5);
        var material10 = new THREE.MeshLambertMaterial({ color: 0xFCFCFC, side:THREE.DoubleSide});
        var mesh10 = new THREE.Mesh(geometry10, material10);
        mesh10.position.set(-70, 10, 95);
        mesh10.rotation.set(0,0, 1.57);
        //scene.add(mesh10);

        var geometry11 = new RoundedBoxGeometry(5,15,5,10,0.5);
        var material11 = new THREE.MeshLambertMaterial({ color: 0xFCFCFC, side:THREE.DoubleSide});
        var mesh11 = new THREE.Mesh(geometry11, material11);
        mesh11.position.set(-70, 10, 95);
        mesh11.rotation.set(0,0, 2.355);
        //scene.add(mesh11);

        var geometry12 = new THREE.SphereGeometry(4,50,50);
        var material12 = new THREE.MeshLambertMaterial({ color: 0xF9ED34, side:THREE.DoubleSide});
        var mesh12 = new THREE.Mesh(geometry12, material12);
        mesh12.position.set(-70,10,95);
        mesh12.rotation.set(0, 0, 0);
        //scene.add(mesh12);

        var flor1 = new THREE.Group();
      flor1.add(mesh8, mesh9, mesh10, mesh11, mesh12);
      //scene.add(flor1);

      var flor2 = flor1.clone();
      //scene.add(flor2);
      flor2.position.set(-25,1,28);
      flor2.scale.set(0.75,0.75,0.75);

      var flor3 = flor1.clone();
      //scene.add(flor3);
      flor3.position.set(-60,1,20);
      flor3.scale.set(0.50,0.50,0.50);

      var flor4 = flor1.clone();
      //scene.add(flor4);
      flor4.position.set(-7,1,20);
      flor4.scale.set(0.50,0.50,0.50);

      var flor5 = flor1.clone();
      //scene.add(flor5);
      flor5.position.set(-150,0,-10);

      var flor6 = flor1.clone();
      //scene.add(flor6);
      flor6.position.set(-155,0,12);
      flor6.scale.set(0.75,0.75,0.75);
    


      //arbolitos
      var geometry13 = new THREE.SphereGeometry(6, 50, 50);
        var material13 = new THREE.MeshLambertMaterial({ color: 0x2E801F, side:THREE.DoubleSide});
        var mesh13 = new THREE.Mesh(geometry13, material13);
        mesh13.position.set(-70, 6, 90);
        //scene.add(mesh13);

        var geometry14 = new THREE.SphereGeometry(7, 50, 50);
        var material14 = new THREE.MeshLambertMaterial({ color: 0x2E801F, side:THREE.DoubleSide});
        var mesh14 = new THREE.Mesh(geometry14, material14);
        mesh14.position.set(-65, 6, 90);
        //scene.add(mesh14);

        var geometry15 = new THREE.SphereGeometry(6.5, 50, 50);
        var material15 = new THREE.MeshLambertMaterial({ color: 0x2E801F, side:THREE.DoubleSide});
        var mesh15 = new THREE.Mesh(geometry15, material15);
        mesh15.position.set(-55, 6, 90);
        //scene.add(mesh15);

        
        var arb = new THREE.Group();
      arb.add(mesh13, mesh14, mesh15);
      //scene.add(arb);

      var arb1 = arb.clone();
      //scene.add(arb1);
      arb1.position.set(-160,1,10);
      arb1.scale.set(0.75,0.75,0.75);




        //sol
        var geometry61 = new THREE.SphereGeometry(30, 50, 50);
        var material61 = new THREE.MeshLambertMaterial({ color: 0xE4C818, side:THREE.DoubleSide});
        var mesh61 = new THREE.Mesh(geometry61, material61);
        mesh61.position.set(-250, 130, -100);
        //scene.add(mesh61);

        //montañas
        var geometry67 = new THREE.ConeGeometry(40,80,50,45);
        var texturemont = new THREE.TextureLoader().load("./assets/cerro.jpg");
        var material67 = new THREE.MeshLambertMaterial({ map: texturemont});
        var mesh67 = new THREE.Mesh(geometry67, material67);
        mesh67.position.set(-150,40, -65);
        mesh67.rotation.set(0, 0, 0);
        //scene.add(mesh67);
        texturemont.wrapS = THREE.RepeatWrapping;
        texturemont.wrapT = THREE.RepeatWrapping;
        texturemont.repeat.set(2, 2);
        texturemont.rotation = 0.785;
        texturemont.offset.x = -0.22;
        texturemont.offset.y = -0.5;

        var geometry27 = new THREE.ConeGeometry(60,100,95,100);
        var material27 = new THREE.MeshLambertMaterial({ color: 0x502E09, side:THREE.DoubleSide});
        var mesh27 = new THREE.Mesh(geometry27, material27);
        mesh27.position.set(-195, 50, -65);
        mesh27.rotation.set(0, 0, 0);
        //scene.add(mesh27);

        //nubes
        var geometry16 = new THREE.SphereGeometry(7.5, 50, 50);
        var material16 = new THREE.MeshLambertMaterial({ color: 0x52A0DC, side:THREE.DoubleSide});
        var mesh16 = new THREE.Mesh(geometry16, material16);
        mesh16.position.set(-40, 120, -100);
        //scene.add(mesh16);

        var geometry17 = new THREE.SphereGeometry(9, 50, 50);
        var material17 = new THREE.MeshLambertMaterial({ color: 0x52A0DC, side:THREE.DoubleSide});
        var mesh17 = new THREE.Mesh(geometry17, material17);
        mesh17.position.set(-30, 120, -100);
        //scene.add(mesh17);

        var geometry18 = new THREE.SphereGeometry(8.5, 50, 50);
        var material18 = new THREE.MeshLambertMaterial({ color: 0x52A0DC, side:THREE.DoubleSide});
        var mesh18 = new THREE.Mesh(geometry18, material18);
        mesh18.position.set(-20, 120, -100);
        //scene.add(mesh18);

        var nube = new THREE.Group();
      nube.add(mesh16, mesh17, mesh18);
      //scene.add(nube);

      var nube1 = nube.clone();
      //scene.add(nube1);
      nube1.position.set(-80,20,-20);

      var nube2 = nube.clone();
      //scene.add(nube2);
      nube2.position.set(-160,10,-10);
      

        //cabaña 
        var geometry19 = new THREE.BoxGeometry(35, 25, 28, 20, 20,20);
        var material19 = new THREE.MeshLambertMaterial({ color: 0x473C1A, side:THREE.DoubleSide});
        var mesh19 = new THREE.Mesh(geometry19, material19);
        mesh19.position.set(-50, 12, 20);
        //scene.add(mesh19);

        var geometry20= new THREE.ConeGeometry(22,15,30,20);
        var material20 = new THREE.MeshLambertMaterial({ color: 0x473C1A, side:THREE.DoubleSide});
        var mesh20 = new THREE.Mesh(geometry20, material20);
        mesh20.position.set(-50, 32, 20);
        mesh20.rotation.set(0, 0, 0);
        //scene.add(mesh20);

        var geometry21 = new THREE.BoxGeometry(4, 8, 5, 20, 20,20);
        var material21 = new THREE.MeshLambertMaterial({ color: 0x473C1A, side:THREE.DoubleSide});
        var mesh21 = new THREE.Mesh(geometry21, material21);
        mesh21.position.set(-65, 32, 20);
        //scene.add(mesh21);

  

        //flores2.0
        var geometry22 = new RoundedBoxGeometry(3,10,3,10,0.5);
        var material22 = new THREE.MeshLambertMaterial({ color: 0x6D3BCA, side:THREE.DoubleSide});
        var mesh22 = new THREE.Mesh(geometry22, material22);
        mesh22.position.set(-30, 5, 80);
        mesh22.rotation.set(0, 0, 0);
        //scene.add(mesh22);

        var geometry23 = new RoundedBoxGeometry(3,10,3,10,0.5);
        var material23 = new THREE.MeshLambertMaterial({ color: 0x6D3BCA, side:THREE.DoubleSide});
        var mesh23 = new THREE.Mesh(geometry23, material23);
        mesh23.position.set(-30, 5, 80);
        mesh23.rotation.set(0, 0, 0.785);
        //scene.add(mesh23);

        var geometry24 = new RoundedBoxGeometry(3,10,3,10,0.5);
        var material24 = new THREE.MeshLambertMaterial({ color: 0x6D3BCA, side:THREE.DoubleSide});
        var mesh24 = new THREE.Mesh(geometry24, material24);
        mesh24.position.set(-30, 5, 80);
        mesh24.rotation.set(0, 0, 1.57);
        //scene.add(mesh24);

        var geometry25 = new RoundedBoxGeometry(3,10,3,10,0.5);
        var material25 = new THREE.MeshLambertMaterial({ color: 0x6D3BCA, side:THREE.DoubleSide});
        var mesh25 = new THREE.Mesh(geometry25, material25);
        mesh25.position.set(-30, 5, 80);
        mesh25.rotation.set(0, 0, 2.355);
        //scene.add(mesh25);

        var geometry26 = new THREE.SphereGeometry(2.5, 8, 8);
        var material26 = new THREE.MeshLambertMaterial({ color: 0xE4C818, side:THREE.DoubleSide});
        var mesh26 = new THREE.Mesh(geometry26, material26);
        mesh26.position.set(-30, 5, 80);
        //scene.add(mesh26);
        
        var florm = new THREE.Group();
      florm.add(mesh22, mesh23, mesh24, mesh25, mesh26);
      //scene.add(florm);

      var florm1 = florm.clone();
      //scene.add(florm1);
      florm1.position.set(-1,1,23);
      florm1.scale.set(0.75,0.75,0.75);

      var florm2 = florm.clone();
      //scene.add(florm2);
      florm2.position.set(-30,1,30);
      florm2.scale.set(0.50,0.50,0.50);

      
      var florm3 = florm.clone();
      //scene.add(florm3);
      florm3.position.set(-75,1,30);
      florm3.scale.set(0.50,0.50,0.50);

      var florm4 = florm.clone();
      //scene.add(florm4);
      florm4.position.set(-125,1,-5);
      
      var florm5 = florm.clone();
      //scene.add(florm5);
      florm5.position.set(-150,1,40);
      florm5.scale.set(0.50,0.50,0.50);

      var florm6 = florm.clone();
      //scene.add(florm6);
      florm6.position.set(-220,1,30);
      florm6.scale.set(0.50,0.50,0.50);

      var florm7 = florm.clone();
      //scene.add(florm7);
      florm7.position.set(-200,1,-10);
    

      //mesa
      var geometry30 = new THREE.BoxGeometry(30, 5, 25, 10, 10,10);
        var material30 = new THREE.MeshLambertMaterial({ color: 0x6E5F30, side:THREE.DoubleSide});
        var mesh30 = new THREE.Mesh(geometry30, material30);
        mesh30.position.set(-120, 14, -1);
        //scene.add(mesh30);

        var geometry31 = new THREE.BoxGeometry(4, 13, 4, 10, 10,10);
        var material31 = new THREE.MeshLambertMaterial({ color: 0x6E5F30, side:THREE.DoubleSide});
        var mesh31 = new THREE.Mesh(geometry31, material31);
        mesh31.position.set(-120, 6, -1);
        //scene.add(mesh31);

        //banca
        var geometry32 = new THREE.BoxGeometry(10, 4, 25, 10, 10,10);
        var material32 = new THREE.MeshLambertMaterial({ color: 0x6E5F30, side:THREE.DoubleSide});
        var mesh32 = new THREE.Mesh(geometry32, material32);
        mesh32.position.set(-142,10, -1);
        //scene.add(mesh32);

        var geometry33 = new THREE.BoxGeometry(5, 9, 5, 10, 10,10);
        var material33 = new THREE.MeshLambertMaterial({ color: 0x6E5F30, side:THREE.DoubleSide});
        var mesh33 = new THREE.Mesh(geometry33, material33);
        mesh33.position.set(-142, 4, -1);
        //scene.add(mesh33);

        var banca = new THREE.Group();
      banca.add(mesh32, mesh33);
      //scene.add(banca);

      var banca1 = banca.clone();
      //scene.add(banca1);
      banca1.position.set(45,0,1);

      //lagito
      var geometry34 = new THREE.CylinderGeometry(40, 35, 2, 20, 35);
      var texturelag = new THREE.TextureLoader().load("./assets/agua.jpg");
        var material34 = new THREE.MeshLambertMaterial({ map: texturelag });
        var mesh34 = new THREE.Mesh(geometry34, material34);
        mesh34.position.set(-200, 2, 35);
        mesh34.rotation.set(0, 0, 0);
        //scene.add(mesh34); 

      //arbustos
      var geometry35 = new THREE.TorusKnotGeometry(8, 5, 45,5, 10,2);
        var material35 = new THREE.MeshLambertMaterial({ color: 0x308813, side: THREE.DoubleSide });
        var mesh35 = new THREE.Mesh(geometry35, material35);
        mesh35.position.set(-240, 2, 35);
        mesh35.rotation.set(0, 80, 0);
        mesh35.scale.set(0.75,0.75,0.75);
        //scene.add(mesh35); 

        var geometry36 = new THREE.TorusKnotGeometry(8, 5, 45,5, 10,2);
        var material36 = new THREE.MeshLambertMaterial({ color: 0x308813, side: THREE.DoubleSide });
        var mesh36 = new THREE.Mesh(geometry36, material36);
        mesh36.position.set(-165, 2, 35);
        mesh36.rotation.set(0, 80, 0);
        mesh36.scale.set(0.90,0.90,0.90);
        //scene.add(mesh36);
        
        var geometry37 = new THREE.TorusKnotGeometry(8, 5, 45,5, 10,2);
        var material37 = new THREE.MeshLambertMaterial({ color: 0x308813, side: THREE.DoubleSide });
        var mesh37 = new THREE.Mesh(geometry37, material37);
        mesh37.position.set(-165, 2.5, 15);
        mesh37.rotation.set(0, 90, 0);
        mesh37.scale.set(0.90,0.90,0.90);
        //scene.add(mesh37); 

      var arbusto = new THREE.Group();
      arbusto.add(mesh36, mesh37);
      //scene.add(arbusto);

      var arbusto1 = arbusto.clone();
      //scene.add(arbusto1);
      arbusto1.position.set(-310,2,-110);
      arbusto1.rotation.set(0, 90, 0);
      arbusto1.scale.set(0.80,0.80,0.80);

      var geometry51 = new THREE.TorusKnotGeometry(8, 5, 45,5, 10,2);
        var material51 = new THREE.MeshLambertMaterial({ color: 0x308813, side: THREE.DoubleSide });
        var mesh51 = new THREE.Mesh(geometry51, material51);
        mesh51.position.set(-70, 1, 30);
        mesh51.rotation.set(0, 3.14, 0);
        mesh51.scale.set(0.75,0.75,0.75);
        //scene.add(mesh51); 

        var geometry52 = new THREE.TorusKnotGeometry(8, 5, 45,5, 10,2);
        var material52 = new THREE.MeshLambertMaterial({ color: 0x308813, side: THREE.DoubleSide });
        var mesh52 = new THREE.Mesh(geometry52, material52);
        mesh52.position.set(-35, 1, 35);
        mesh52.rotation.set(0, 3.14, 0);
        mesh52.scale.set(0.75,0.75,0.75);
        //scene.add(mesh52); 
     

      //piedritas
      var geometry38 = new THREE.SphereGeometry(4, 7, 7);
        var material38 = new THREE.MeshLambertMaterial({ color: 0x9B9696, side:THREE.DoubleSide});
        var mesh38 = new THREE.Mesh(geometry38, material38);
        mesh38.position.set(-200,1, 50);
        //scene.add(mesh38);

        var geometry39 = new THREE.SphereGeometry(4, 7, 7);
        var material39 = new THREE.MeshLambertMaterial({ color: 0x9B9696, side:THREE.DoubleSide});
        var mesh39 = new THREE.Mesh(geometry39, material39);
        mesh39.position.set(-235,1, 50);
        //scene.add(mesh39);

        var geometry40 = new THREE.SphereGeometry(5, 8, 8);
        var material40 = new THREE.MeshLambertMaterial({ color: 0x9B9696, side:THREE.DoubleSide});
        var mesh40 = new THREE.Mesh(geometry40, material40);
        mesh40.position.set(-235,1, 55);
        //scene.add(mesh40);

        var piedras = new THREE.Group();
      piedras.add(mesh39, mesh40);
      //scene.add(piedras);

      var piedritas = piedras.clone();
      //scene.add(piedritas);
      piedritas.position.set(-350,2,-130);
      piedritas.rotation.set(0, 90, 0);

      var piedritas1 = piedras.clone();
      //scene.add(piedritas1);
      piedritas1.position.set(-320,2,-130);
      piedritas1.rotation.set(0, 90, 0);

      var piedritas2 = piedras.clone();
      //scene.add(piedritas2);
      piedritas2.position.set(-360,2,-185);
      piedritas2.rotation.set(0, 90, 0);

      var piedritas3 = piedras.clone();
      //scene.add(piedritas3);
      piedritas3.position.set(-185,2,-140);
      piedritas3.rotation.set(0, 90, 0);
      

      var piedritas4 = piedras.clone();
      //scene.add(piedritas4);
      piedritas4.position.set(-230,2,-150);
      piedritas4.rotation.set(0, 90, 0);
     


      //picnic
      //mantel 
      var geometry41 = new THREE.BoxGeometry(35, 1, 25,10,10,10);
      var texture2 = new THREE.TextureLoader().load("./assets/picnic.jpg");
        var material41 = new THREE.MeshLambertMaterial({ map: texture2});
        var mesh41 = new THREE.Mesh(geometry41, material41);
        mesh41.position.set(-120,1, 50);
        //scene.add(mesh41);

        //canasta
        var geometry42 = new THREE.CylinderGeometry(8, 5.5, 5.5, 10, 25);
        var material42 = new THREE.MeshLambertMaterial({ color: 0x845B03, side: THREE.DoubleSide });
        var mesh42 = new THREE.Mesh(geometry42, material42);
        mesh42.position.set(-120, 2, 35);
        mesh42.rotation.set(0, 0, 0);
        //scene.add(mesh42); 

        var geometry43= new THREE.TorusGeometry(4,2,21,21,6);
var material43= new THREE.MeshLambertMaterial({color:0x845B03, side:THREE.DoubleSide});
var mesh43= new THREE.Mesh(geometry43,material43);
mesh43.position.set(-120,5,35);
mesh43.rotation.set(0,0,0);
//scene.add(mesh43);

//columpio 
        var geometry44 = new THREE.BoxGeometry(8, 2, 23,10,10,10);
        var material44 = new THREE.MeshLambertMaterial({ color: 0x833524, side:THREE.DoubleSide});
        var mesh44 = new THREE.Mesh(geometry44, material44);
        mesh44.position.set(-10,7, 53);
        //scene.add(mesh44);

        var geometry45 = new THREE.BoxGeometry(28, 2, 5,5,5,5);
        var material45 = new THREE.MeshLambertMaterial({ color: 0xBD6C5A, side:THREE.DoubleSide});
        var mesh45 = new THREE.Mesh(geometry45, material45);
        mesh45.position.set(-10,21, 68);
        mesh45.rotation.set(0, 1.57, -1.22);
        //scene.add(mesh45);

        var geometry46 = new THREE.BoxGeometry(28, 2, 5,5,5,5);
        var material46 = new THREE.MeshLambertMaterial({ color: 0xBD6C5A, side:THREE.DoubleSide});
        var mesh46 = new THREE.Mesh(geometry46, material46);
        mesh46.position.set(-10,21, 38);
        mesh46.rotation.set(0, 1.57, 1.22);
        //scene.add(mesh46);

        //cisnes
        //cuerpo
        var geometry47 = new THREE.SphereGeometry(5, 50, 50);
        var material47 = new THREE.MeshLambertMaterial({ color: 0xFFFFFF, side:THREE.DoubleSide});
        var mesh47 = new THREE.Mesh(geometry47, material47);
        mesh47.position.set(-200,8, 25);
        //scene.add(mesh47);

        var geometry48 = new THREE.SphereGeometry(4, 50, 50);
        var material48 = new THREE.MeshLambertMaterial({ color: 0xFFFFFF, side:THREE.DoubleSide});
        var mesh48 = new THREE.Mesh(geometry48, material48);
        mesh48.position.set(-195,14, 25);
        //scene.add(mesh48);

        //ojo
        var geometry49 = new THREE.SphereGeometry(1.5, 50, 50);
        var material49 = new THREE.MeshLambertMaterial({ color: 0x000000, side:THREE.DoubleSide});
        var mesh49 = new THREE.Mesh(geometry49, material49);
        mesh49.position.set(-192,15, 25);
        //scene.add(mesh49);

        //pico
        var geometry50 = new THREE.SphereGeometry(1, 50, 50);
        var material50 = new THREE.MeshLambertMaterial({ color: 0xEE8918, side:THREE.DoubleSide});
        var mesh50 = new THREE.Mesh(geometry50, material50);
        mesh50.position.set(-190,15, 25);
        //scene.add(mesh50);

        var cisne = new THREE.Group();
      cisne.add(mesh47, mesh48,mesh49,mesh50);
      //scene.add(cisne);

      var cisnes = cisne.clone();
      //scene.add(cisnes);
      cisnes.position.set(-340,2,-130);
      cisnes.rotation.set(0, 90, 0);



const P02 = new THREE.Group();
P02.add( 
  mesh3,
  pino1,
  pino4,
  pino5,
  pino6,
  pino7,
  flor1,
  flor2, 
  flor3,
  flor4,
  flor5,
  flor6,
  arb,
  arb1,
  mesh61,
  mesh67,
  mesh27, 
  nube,
  nube1, 
  nube2,
  mesh19, 
  mesh20, 
  mesh21,
  florm, 
  florm1, 
  florm2,
  florm3,
  florm4, 
  florm5, 
  florm6, 
  florm7, 
  mesh30, 
  mesh31, 
  banca, 
  banca1, 
  mesh34, 
  mesh35, 
  arbusto, 
  arbusto1, 
  mesh51,
  mesh52,
  mesh38, 
  piedras,
  piedritas, 
  piedritas1,
  piedritas2,
  piedritas3,
  piedritas4,
  mesh41, 
  mesh42, 
  mesh43, 
  mesh44, 
  mesh45, 
  mesh46, 
  cisne,
  cisnes,
  mesh61);

P02.position.set(x,y,z);
return P02;
}