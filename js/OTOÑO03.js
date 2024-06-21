import * as THREE from "./three.module.js";
import { RoundedBoxGeometry } from "./RoundedBoxGeometry.js";
import { TextGeometry } from "./TextGeometry.js";
import { FontLoader } from "./FontLoader.js";


export default function OTO03({x,y,z}){

        //pinos
        var geometry4= new THREE.CylinderGeometry(5,5,30,10,10,false,3.5);
        var material4 = new THREE.MeshLambertMaterial({ color: 0x6F522C, side:THREE.DoubleSide});
        var mesh4 = new THREE.Mesh(geometry4, material4);
        mesh4.position.set(-8, 15, 30);
        mesh4.rotation.set(0, 0, 0);
        //scene.add(mesh4);

        var geometry5= new THREE.ConeGeometry(12,15,20,10);
        var material5 = new THREE.MeshLambertMaterial({ color: 0xDD7500, side:THREE.DoubleSide});
        var mesh5 = new THREE.Mesh(geometry5, material5);
        mesh5.position.set(-8, 50, 30);
        mesh5.rotation.set(0, 0, 0);
        //scene.add(mesh5);

        var geometry6= new THREE.ConeGeometry(12,15,20,10);
        var material6 = new THREE.MeshLambertMaterial({ color: 0xDD7500, side:THREE.DoubleSide});
        var mesh6 = new THREE.Mesh(geometry6, material6);
        mesh6.position.set(-8, 43, 30);
        mesh6.rotation.set(0, 0, 0);
        //scene.add(mesh6);

        var geometry7= new THREE.ConeGeometry(12,15,20,10);
        var material7 = new THREE.MeshLambertMaterial({ color: 0xDD7500, side:THREE.DoubleSide});
        var mesh7 = new THREE.Mesh(geometry6, material6);
        mesh7.position.set(-8, 38, 30);
        mesh7.rotation.set(0, 0, 0);
        //scene.add(mesh7);

        var pino1 = new THREE.Group();
      pino1.add(mesh4, mesh5, mesh6, mesh7);
      //scene.add(pino1);

      var pino4 = pino1.clone();
      //scene.add(pino4);
      pino4.position.set(-230,1,-10);

      var pino5 = pino1.clone();
      //scene.add(pino5);
      pino5.position.set(-165,1,20);

      var pino6 = pino1.clone();
      //scene.add(pino6);
      pino6.position.set(-30,1,45);

      //arboles
      var geometry8 = new THREE.TetrahedronGeometry(25, 4);
        var material8 = new THREE.MeshLambertMaterial({ color: 0x9F5502, side:THREE.DoubleSide});
        var mesh8 = new THREE.Mesh(geometry8, material8);
        mesh8.position.set(-50, 60, -60);
        //scene.add(mesh8);

        var geometry9= new THREE.CylinderGeometry(5,5,50,10,10,false,3.5);
        var material9 = new THREE.MeshLambertMaterial({ color: 0x6F522C, side:THREE.DoubleSide});
        var mesh9 = new THREE.Mesh(geometry9, material9);
        mesh9.position.set(-50, 25, -60);
        mesh9.rotation.set(0, 0, 0);
        //scene.add(mesh9);

        var arbol = new THREE.Group();
      arbol.add(mesh8, mesh9);
      //scene.add(arbol);

      var arbol1 = arbol.clone();
      //scene.add(arbol1);
      arbol1.position.set(-60,0,-20);

      var arbol2 = arbol.clone();
      //scene.add(arbol2);
      arbol2.position.set(-180,0,-20);

      //banca
        var geometry10 = new THREE.BoxGeometry(70, 3, 20, 20, 20,20);
        var material10 = new THREE.MeshLambertMaterial({ color: 0x473C1A, side:THREE.DoubleSide});
        var mesh10 = new THREE.Mesh(geometry10, material10);
        mesh10.position.set(-180, 12, -65);
        //scene.add(mesh10);

        var geometry11 = new THREE.BoxGeometry(5, 20, 20, 20, 20,20);
        var material11 = new THREE.MeshLambertMaterial({ color: 0x473C1A, side:THREE.DoubleSide});
        var mesh11 = new THREE.Mesh(geometry11, material11);
        mesh11.position.set(-205, 22, -65);
        //scene.add(mesh11);

        var geometry12 = new THREE.BoxGeometry(5, 20, 20, 20, 20,20);
        var material12 = new THREE.MeshLambertMaterial({ color: 0x473C1A, side:THREE.DoubleSide});
        var mesh12 = new THREE.Mesh(geometry12, material12);
        mesh12.position.set(-155, 22, -65);
        //scene.add(mesh12);

        var geometry13 = new THREE.BoxGeometry(55, 3, 5, 20, 20,20);
        var material13 = new THREE.MeshLambertMaterial({ color: 0x473C1A, side:THREE.DoubleSide});
        var mesh13 = new THREE.Mesh(geometry13, material13);
        mesh13.position.set(-180, 28, -70);
        //scene.add(mesh13);

        var geometry14 = new THREE.BoxGeometry(55, 3, 5, 20, 20,20);
        var material14 = new THREE.MeshLambertMaterial({ color: 0x473C1A, side:THREE.DoubleSide});
        var mesh14 = new THREE.Mesh(geometry14, material14);
        mesh14.position.set(-180, 20, -70);
        //scene.add(mesh14);

        var geometry15 = new THREE.BoxGeometry(5, 12, 5, 20, 20,20);
        var material15 = new THREE.MeshLambertMaterial({ color: 0x473C1A, side:THREE.DoubleSide});
        var mesh15 = new THREE.Mesh(geometry15, material15);
        mesh15.position.set(-210, 6, -70);
        //scene.add(mesh15);

        var geometry16 = new THREE.BoxGeometry(5, 12, 5, 20, 20,20);
        var material16 = new THREE.MeshLambertMaterial({ color: 0x473C1A, side:THREE.DoubleSide});
        var mesh16 = new THREE.Mesh(geometry16, material16);
        mesh16.position.set(-150, 6, -70);
        //scene.add(mesh16);

        var geometry17 = new THREE.BoxGeometry(5, 12, 5, 20, 20,20);
        var material17 = new THREE.MeshLambertMaterial({ color: 0x473C1A, side:THREE.DoubleSide});
        var mesh17 = new THREE.Mesh(geometry17, material17);
        mesh17.position.set(-150, 6, -59);
        //scene.add(mesh17);

        var geometry18 = new THREE.BoxGeometry(5, 12, 5, 20, 20,20);
        var material18 = new THREE.MeshLambertMaterial({ color: 0x473C1A, side:THREE.DoubleSide});
        var mesh18 = new THREE.Mesh(geometry18, material18);
        mesh18.position.set(-210, 6, -59);
        //scene.add(mesh18);

        //hojas 
        var geometry22 = new RoundedBoxGeometry(3,10,3,10,0.5);
        var material22 = new THREE.MeshLambertMaterial({ color: 0xFF8700, side:THREE.DoubleSide});
        var mesh22 = new THREE.Mesh(geometry22, material22);
        mesh22.position.set(-35, 2, 80);
        mesh22.rotation.set(0, 0, 0);
        //scene.add(mesh22);

        var geometry23 = new RoundedBoxGeometry(3,10,3,10,0.5);
        var material23 = new THREE.MeshLambertMaterial({ color: 0xFF8700, side:THREE.DoubleSide});
        var mesh23 = new THREE.Mesh(geometry23, material23);
        mesh23.position.set(-35, 2, 80);
        mesh23.rotation.set(0, 0, 0.785);
        //scene.add(mesh23);

        var geometry24 = new RoundedBoxGeometry(3,10,3,10,0.5);
        var material24 = new THREE.MeshLambertMaterial({ color: 0xFF8700, side:THREE.DoubleSide});
        var mesh24 = new THREE.Mesh(geometry24, material24);
        mesh24.position.set(-35, 2, 80);
        mesh24.rotation.set(0, 0, 1.57);
        //scene.add(mesh24);

        var geometry25 = new RoundedBoxGeometry(3,10,3,10,0.5);
        var material25 = new THREE.MeshLambertMaterial({ color: 0xFF8700, side:THREE.DoubleSide});
        var mesh25 = new THREE.Mesh(geometry25, material25);
        mesh25.position.set(-35, 2, 80);
        mesh25.rotation.set(0, 0, 2.355);
        //scene.add(mesh25);

        var florm = new THREE.Group();
      florm.add(mesh22, mesh23, mesh24, mesh25);
      //scene.add(florm);

      var florm1 = florm.clone();
      //scene.add(florm1);
      florm1.position.set(-1,1,23);
      florm1.scale.set(0.75,0.75,0.75);

      var hoja1 = florm.clone();
      //scene.add(hoja1);
      hoja1.position.set(-15,1,23);
      hoja1.scale.set(0.80,0.75,0.75);

      var hoja2 = florm.clone();
      //scene.add(hoja2);
      hoja2.position.set(7,1,-25);
      hoja2.scale.set(0.75,0.75,0.75);

      var hoja3 = florm.clone();
      //scene.add(hoja3);
      hoja3.position.set(-25,1,-25);

      var hoja4 = florm.clone();
      //scene.add(hoja4);
      hoja4.position.set(15,0.5,-30);
      hoja4.scale.set(0.85,0.85,0.85);

      var hoja5 = florm.clone();
      //scene.add(hoja5);
      hoja5.position.set(5,0.5,-30);
      hoja5.scale.set(0.85,0.85,0.85);

      var hoja6 = florm.clone();
      //scene.add(hoja6);
      hoja6.position.set(-50,0.5,-30);
      hoja6.scale.set(0.85,0.85,0.85);

      var hoja7 = florm.clone();
      //scene.add(hoja7);
      hoja7.position.set(-100,0.5,-30);
      hoja7.scale.set(0.85,0.85,0.85);
    
      var hoja8 = florm.clone();
      //scene.add(hoja8);
      hoja8.position.set(-100,0.5,-25);
      hoja8.scale.set(0.50,0.50,0.50);

      var hoja9 = florm.clone();
      //scene.add(hoja9);
      hoja9.position.set(-200,0.5,-30);
      hoja9.scale.set(0.85,0.85,0.85);

      var hoja10 = florm.clone();
      //scene.add(hoja10);
      hoja10.position.set(-205,0.5,-25);
      hoja10.scale.set(0.85,0.85,0.85);

      var hoja11 = florm.clone();
      //scene.add(hoja11);
      hoja11.position.set(-200,0.5,-50);
      hoja11.scale.set(0.85,0.85,0.85);

      var hoja12 = florm.clone();
      //scene.add(hoja12);
      hoja12.position.set(-170,0.5,-10);
      hoja12.scale.set(0.85,0.85,0.85);

      //arbustos 
        var geometry19 = new THREE.TorusKnotGeometry(8, 5, 45,5, 10,2);
        var material19 = new THREE.MeshLambertMaterial({ color: 0xDE8C30, side: THREE.DoubleSide });
        var mesh19 = new THREE.Mesh(geometry19, material19);
        mesh19.position.set(-235, 2, -70);
        mesh19.rotation.set(0, 3.14, 0);
        mesh19.scale.set(0.75,0.75,0.75);
        //scene.add(mesh19); 

        var geometry20 = new THREE.TorusKnotGeometry(8, 5, 45,5, 10,2);
        var material20 = new THREE.MeshLambertMaterial({ color: 0xDE8C30, side: THREE.DoubleSide });
        var mesh20 = new THREE.Mesh(geometry20, material20);
        mesh20.position.set(-225, 2, -65);
        mesh20.rotation.set(0, 3.14, 0);
        mesh20.scale.set(0.55,0.55,0.55);
        //scene.add(mesh20); 

        var geometry21 = new THREE.TorusKnotGeometry(8, 5, 45,5, 10,2);
        var material21 = new THREE.MeshLambertMaterial({ color: 0xDE8C30, side: THREE.DoubleSide });
        var mesh21 = new THREE.Mesh(geometry21, material21);
        mesh21.position.set(-115, 2, -70);
        mesh21.rotation.set(0, 3.14, 0);
        mesh21.scale.set(0.75,0.75,0.75);
        //scene.add(mesh21); 

        var geometry22 = new THREE.TorusKnotGeometry(8, 5, 45,5, 10,2);
        var material22 = new THREE.MeshLambertMaterial({ color: 0xDE8C30, side: THREE.DoubleSide });
        var mesh22 = new THREE.Mesh(geometry22, material22);
        mesh22.position.set(-105, 2, -65);
        mesh22.rotation.set(0, 3.14, 0);
        mesh22.scale.set(0.55,0.55,0.55);
        //scene.add(mesh22); 

        //lampara 
        var geometry23= new THREE.CylinderGeometry(3,3,37,10,10,false,3.5);
        var material23 = new THREE.MeshLambertMaterial({ color: 0x000000, side:THREE.DoubleSide});
        var mesh23 = new THREE.Mesh(geometry23, material23);
        mesh23.position.set(-132, 18, -60);
        mesh23.rotation.set(0, 0, 0);
        //scene.add(mesh23);

        var geometry24 = new THREE.BoxGeometry(10, 3, 12, 20, 20,20);
        var material24 = new THREE.MeshLambertMaterial({ color: 0x000000, side:THREE.DoubleSide});
        var mesh24 = new THREE.Mesh(geometry24, material24);
        mesh24.position.set(-132, 1, -60);
        //scene.add(mesh24);

        var geometry25 = new THREE.TetrahedronGeometry(12, 2);
        var material25 = new THREE.MeshLambertMaterial({ color: 0xFFEA60, side:THREE.DoubleSide});
        var mesh25 = new THREE.Mesh(geometry25, material25);
        mesh25.position.set(-132, 40, -60);
        //scene.add(mesh25);

        var geometry26 = new THREE.BoxGeometry(18, 3, 12, 20, 20,20);
        var material26 = new THREE.MeshLambertMaterial({ color: 0x000000, side:THREE.DoubleSide});
        var mesh26 = new THREE.Mesh(geometry26, material26);
        mesh26.position.set(-132, 30, -60);
        //scene.add(mesh26);

        var geometry38 = new THREE.BoxGeometry(10, 3, 12, 20, 20,20);
        var material38 = new THREE.MeshLambertMaterial({ color: 0x000000, side:THREE.DoubleSide});
        var mesh38 = new THREE.Mesh(geometry38, material38);
        mesh38.position.set(-132, 10, -60);
        //scene.add(mesh38);

        //casa
        var geometry27 = new THREE.BoxGeometry(45, 30, 28, 20, 20,20);
        var material27 = new THREE.MeshLambertMaterial({ color: 0x473C1A, side:THREE.DoubleSide});
        var mesh27 = new THREE.Mesh(geometry27, material27);
        mesh27.position.set(-50, 15, -65);
        //scene.add(mesh27);

        var geometry28= new THREE.ConeGeometry(15,18,40,20);
        var material28 = new THREE.MeshLambertMaterial({ color: 0x473C1A, side:THREE.DoubleSide});
        var mesh28 = new THREE.Mesh(geometry28, material28);
        mesh28.position.set(-60, 40, -65);
        mesh28.rotation.set(0, 0, 0);
        //scene.add(mesh28);

        var geometry29= new THREE.ConeGeometry(25,15,35,20);
        var material29 = new THREE.MeshLambertMaterial({ color: 0x473C1A, side:THREE.DoubleSide});
        var mesh29 = new THREE.Mesh(geometry29, material29);
        mesh29.position.set(-50, 37.5, -65);
        mesh29.rotation.set(0, 0, 0);
        //scene.add(mesh29);

        var geometry30= new THREE.ConeGeometry(15,18,40,20);
        var material30 = new THREE.MeshLambertMaterial({ color: 0x473C1A, side:THREE.DoubleSide});
        var mesh30 = new THREE.Mesh(geometry30, material30);
        mesh30.position.set(-40, 40, -65);
        mesh30.rotation.set(0, 0, 0);
        //scene.add(mesh30);

        var geometry37 = new THREE.BoxGeometry(20, 25, 10, 20, 20,20);
        var material37 = new THREE.MeshLambertMaterial({ color: 0x473C1A, side:THREE.DoubleSide});
        var mesh37 = new THREE.Mesh(geometry37, material37);
        mesh37.position.set(-50, 5, -50);
        //scene.add(mesh37);

        //cruz
        var geometry31 = new THREE.BoxGeometry(5, 20, 3, 20, 20,20);
        var material31 = new THREE.MeshLambertMaterial({ color: 0x473C1A, side:THREE.DoubleSide});
        var mesh31 = new THREE.Mesh(geometry31, material31);
        mesh31.position.set(-50, 50, -65);
        //scene.add(mesh31);

        var geometry32 = new THREE.BoxGeometry(15, 3, 3, 20, 20,20);
        var material32 = new THREE.MeshLambertMaterial({ color: 0x473C1A, side:THREE.DoubleSide});
        var mesh32 = new THREE.Mesh(geometry32, material32);
        mesh32.position.set(-50, 53, -65);
        //scene.add(mesh32);

        //calabazas 
        var geometry33 = new THREE.TetrahedronGeometry(10, 2);
        var material33 = new THREE.MeshLambertMaterial({ color: 0xE27139, side:THREE.DoubleSide});
        var mesh33 = new THREE.Mesh(geometry33, material33);
        mesh33.position.set(-200, 9, -10);
        //scene.add(mesh33);

        var geometry34= new THREE.ConeGeometry(8,20,5,5);
        var material34 = new THREE.MeshLambertMaterial({ color: 0x097E0E, side:THREE.DoubleSide});
        var mesh34 = new THREE.Mesh(geometry34, material34);
        mesh34.position.set(-200, 15, -10);
        mesh34.rotation.set(0, 0, 0);
        mesh34.scale.set(0.85,0.85,0.85);
        //scene.add(mesh34);

        //ojos
        var geometry35= new THREE.ConeGeometry(3,3.5,10,10);
        var material35 = new THREE.MeshLambertMaterial({ color: 0x000000, side:THREE.DoubleSide});
        var mesh35 = new THREE.Mesh(geometry35, material35);
        mesh35.position.set(-200, 10, -2);
        mesh35.rotation.set(0, 0, 0);
        mesh35.scale.set(0.90,0.90,0.90);
        //scene.add(mesh35);

        var geometry36 = new THREE.ConeGeometry(3,3.5,10,10);
        var material36 = new THREE.MeshLambertMaterial({ color: 0x000000, side:THREE.DoubleSide});
        var mesh36 = new THREE.Mesh(geometry36, material36);
        mesh36.position.set(-195, 10, -2.5);
        mesh36.rotation.set(0, 0, 0);
        mesh36.scale.set(0.90,0.90,0.90);
        //scene.add(mesh36);

      var calabaza = new THREE.Group();
      calabaza.add(mesh33, mesh34, mesh35, mesh36);
      //scene.add(calabaza);


      var calabaza1 = calabaza.clone();
      //scene.add(calabaza1);
      calabaza1.position.set(55,1,-5);

      var calabaza2 = calabaza.clone();
      //scene.add(calabaza2);
      calabaza2.position.set(30,1,-20);

      //cementerio 
        var geometry39 = new THREE.BoxGeometry(20, 3, 12, 20, 20,20);
        var texture1 = new THREE.TextureLoader().load("./assets/lapida.jpg");
        var material39 = new THREE.MeshLambertMaterial({ map: texture1});
        var mesh39 = new THREE.Mesh(geometry39, material39);
        mesh39.position.set(-95, 1, -2);
        //scene.add(mesh39);

        var geometry40 = new THREE.BoxGeometry(15, 20, 12, 20, 20,20);
        var texture2 = new THREE.TextureLoader().load("./assets/lapida.jpg");
        var material40 = new THREE.MeshLambertMaterial({ map: texture1});
        var mesh40 = new THREE.Mesh(geometry40, material40);
        mesh40.position.set(-95, 10, -2);
        //scene.add(mesh40);

        var lapida = new THREE.Group();
      lapida.add(mesh39, mesh40);
      //scene.add(lapida);


      var lap = lapida.clone();
      //scene.add(lap);
      lap.position.set(55,1,-5);

      var lap1 = lapida.clone();
      //scene.add(lap1);
      lap1.position.set(45,1,20);

      var lap2 = lapida.clone();
      //scene.add(lap2);
      lap2.position.set(10,1,20);

      var geometry41 = new THREE.BoxGeometry(5, 22, 3, 20, 20,20);
        var material41 = new THREE.MeshLambertMaterial({ color: 0x918A8A, side:THREE.DoubleSide});
        var mesh41 = new THREE.Mesh(geometry41, material41);
        mesh41.position.set(-75, 10, -20);
        //scene.add(mesh41);

        var geometry42 = new THREE.BoxGeometry(15, 3, 3, 20, 20,20);
        var material42 = new THREE.MeshLambertMaterial({ color: 0x918A8A, side:THREE.DoubleSide});
        var mesh42 = new THREE.Mesh(geometry42, material42);
        mesh42.position.set(-75, 12, -20);
        //scene.add(mesh42);

        var cl = new THREE.Group();
      cl.add(mesh41, mesh42);
      //scene.add(cl);


      var cl1 = cl.clone();
      //scene.add(cl1);
      cl1.position.set(-50,1,-5);

      var cl2 = cl.clone();
      //scene.add(cl2);
      cl2.position.set(55,1,-5);

      //fogata
      var geometry43= new THREE.CylinderGeometry(2,2,15,10,10,false,3.5);
        var material43 = new THREE.MeshLambertMaterial({ color: 0x6F522C, side:THREE.DoubleSide});
        var mesh43 = new THREE.Mesh(geometry43, material43);
        mesh43.position.set(-120, 3, 70);
        mesh43.rotation.set(4.71, 0, 0);
        //scene.add(mesh43);

        var geometry44= new THREE.CylinderGeometry(2,2,15,10,10,false,3.5);
        var material44 = new THREE.MeshLambertMaterial({ color: 0x6F522C, side:THREE.DoubleSide});
        var mesh44 = new THREE.Mesh(geometry44, material44);
        mesh44.position.set(-120, 3, 70);
        mesh44.rotation.set(4.71, 0, 0.785);
        //scene.add(mesh44);

        var geometry45= new THREE.TorusKnotGeometry(3, 3, 43,3, 10,2);
        var texturef = new THREE.TextureLoader().load("./assets/fuego.jpg")
        var material45 = new THREE.MeshLambertMaterial({ map: texturef});
        var mesh45 = new THREE.Mesh(geometry45, material45);
        mesh45.position.set(-120, 7, 70);
        //scene.add(mesh45);

        //fantasma
        var geometry46 = new RoundedBoxGeometry(22,35,20,12,7);
        var material46 = new THREE.MeshLambertMaterial({ color: 0xFFFFFF, side:THREE.DoubleSide});
        var mesh46 = new THREE.Mesh(geometry46, material46);
        mesh46.position.set(-210, 20, 70);
        //scene.add(mesh46);

        var geometry47 = new THREE.SphereGeometry(3,7,7);
        var material47 = new THREE.MeshLambertMaterial({ color: 0x000000, side:THREE.DoubleSide});
        var mesh47 = new THREE.Mesh(geometry47, material47);
        mesh47.position.set(-215, 25, 80);
        //scene.add(mesh47);

        var geometry48 = new THREE.SphereGeometry(3,7,7);
        var material48 = new THREE.MeshLambertMaterial({ color: 0x000000, side:THREE.DoubleSide});
        var mesh48 = new THREE.Mesh(geometry48, material48);
        mesh48.position.set(-205, 25, 80);
        //scene.add(mesh48);

        var geometry49 = new THREE.SphereGeometry(4,9,9);
        var material49 = new THREE.MeshLambertMaterial({ color: 0x000000, side:THREE.DoubleSide});
        var mesh49 = new THREE.Mesh(geometry49, material49);
        mesh49.position.set(-210, 18, 80);
        //scene.add(mesh49);

        var geometry50= new THREE.CylinderGeometry(3,3,17,12,12,false,4);
        var material50 = new THREE.MeshLambertMaterial({ color: 0xFFFFFF, side:THREE.DoubleSide});
        var mesh50 = new THREE.Mesh(geometry50, material50);
        mesh50.position.set(-200, 20, 70);
        mesh50.rotation.set(0, 0, 0.785);
        //scene.add(mesh50);

        var geometry51= new THREE.CylinderGeometry(3,3,17,12,12,false,4);
        var material51 = new THREE.MeshLambertMaterial({ color: 0xFFFFFF, side:THREE.DoubleSide});
        var mesh51 = new THREE.Mesh(geometry51, material51);
        mesh51.position.set(-220, 20, 70);
        mesh51.rotation.set(0, 0, -0.785);
        //scene.add(mesh51);

        //bruja-luna
        var geometry52 = new THREE.SphereGeometry(40, 55, 55);
        var material52 = new THREE.MeshLambertMaterial({ color: 0xEFCD71, side:THREE.DoubleSide});
        var mesh52 = new THREE.Mesh(geometry52, material52);
        mesh52.position.set(-200, 150, -80);
        //scene.add(mesh52);

        var geometry53 = new THREE.ConeGeometry(40,50,20,20);
        var material53 = new THREE.MeshLambertMaterial({ color: 0x5508A2, side:THREE.DoubleSide});
        var mesh53 = new THREE.Mesh(geometry53, material53);
        mesh53.position.set(-200, 200, -80);
        mesh53.rotation.set(0, 0, 0);
        //scene.add(mesh53);

        var geometry54 = new THREE.ConeGeometry(40,15,30,30);
        var material54 = new THREE.MeshLambertMaterial({ color: 0x000000, side:THREE.DoubleSide});
        var mesh54 = new THREE.Mesh(geometry54, material54);
        mesh54.position.set(-200, 190, -80);
        mesh54.rotation.set(0, 0, 0);
        //scene.add(mesh54);

        var geometry55 = new THREE.SphereGeometry(8,12,12);
        var material55 = new THREE.MeshLambertMaterial({ color: 0x000000, side:THREE.DoubleSide});
        var mesh55 = new THREE.Mesh(geometry55, material55);
        mesh55.position.set(-210, 160, -45);
        //scene.add(mesh55);

        var geometry56 = new THREE.SphereGeometry(8,12,12);
        var material56 = new THREE.MeshLambertMaterial({ color: 0x000000, side:THREE.DoubleSide});
        var mesh56 = new THREE.Mesh(geometry56, material56);
        mesh56.position.set(-190, 160, -45);
        //scene.add(mesh56);

        var geometry57 = new THREE.SphereGeometry(5,9,9);
        var material57 = new THREE.MeshLambertMaterial({ color: 0xFFFFFF, side:THREE.DoubleSide});
        var mesh57 = new THREE.Mesh(geometry57, material57);
        mesh57.position.set(-190, 162, -40);
        //scene.add(mesh57);

        var geometry58 = new THREE.SphereGeometry(5,9,9);
        var material58 = new THREE.MeshLambertMaterial({ color: 0xFFFFFF, side:THREE.DoubleSide});
        var mesh58 = new THREE.Mesh(geometry58, material58);
        mesh58.position.set(-210, 162, -40);
        //scene.add(mesh58);
        
        //escoba
        var geometry61= new THREE.CylinderGeometry(4,4,80,15,10,false,3.5);
        var material61 = new THREE.MeshLambertMaterial({ color: 0x6F522C, side:THREE.DoubleSide});
        var mesh61 = new THREE.Mesh(geometry61, material61);
        mesh61.position.set(-200, 113, -60);
        mesh61.rotation.set(4.71, 0, 1.57);
        //scene.add(mesh61);

        var geometry59= new THREE.ConeGeometry(20,25,25,10);
        var material59 = new THREE.MeshLambertMaterial({ color: 0xF1E945, side:THREE.DoubleSide});
        var mesh59 = new THREE.Mesh(geometry59, material59);
        mesh59.position.set(-250, 113, -60);
        mesh59.rotation.set(0.785, 0,-1.57);
        //scene.add(mesh59);

        

const O03 = new THREE.Group();
O03.add(
    pino1, 
    pino4, 
    pino5,
    pino6,
    arbol,
    arbol1,
    arbol2,
    mesh10,
    mesh11,
    mesh12,
    mesh13,
    mesh14,
    mesh15,
    mesh16,
    mesh17,
    mesh18,
    mesh22,
    florm,
    florm1,
    hoja1,
    hoja2,
    hoja4,
    hoja5,
    hoja6,
    hoja7,
    hoja8,
    hoja9,
    hoja10,
    hoja11,
    hoja12,
    mesh19,
    mesh20,
    mesh21,
    mesh22,
    mesh23,
    mesh24,
    mesh25,
    mesh26,
    mesh38,
    mesh27,
    mesh28,
    mesh29,
    mesh30,
    mesh37,
    mesh31,
    mesh32,
    calabaza,
    calabaza1,
    calabaza2,
    lapida,
    lap,
    lap1,
    lap2,
    cl,
    cl1,
    cl2,
    mesh43,
    mesh44,
    mesh45,
    mesh46,
    mesh47,
    mesh48,
    mesh49,
    mesh50,
    mesh51,
    mesh52,
    mesh53,
    mesh54,
    mesh55,
    mesh56,
    mesh57,
    mesh58,
    mesh61,
    mesh59,
  )
    O03.position.set(x,y,z);
return O03;
}