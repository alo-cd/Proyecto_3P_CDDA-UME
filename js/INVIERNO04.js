import * as THREE from "./three.module.js";
import { RoundedBoxGeometry } from "./RoundedBoxGeometry.js";
import { TextGeometry } from "./TextGeometry.js";
import { FontLoader } from "./FontLoader.js";


export default function INV04({x,y,z}){

    //casita
    var geometry1 = new RoundedBoxGeometry(20, 20, 20, 10, 0.5);
    var material1 = new THREE.MeshLambertMaterial({ color: 0xCB914F });
    var mesh1 = new THREE.Mesh(geometry1, material1);
    mesh1.position.set(150, 10, 0);
    mesh1.rotation.set(0, 0, 0);
    //scene.add(mesh1);

    var geometry2 = new THREE.ConeGeometry(15, 15, 4);
    var material2 = new THREE.MeshLambertMaterial({ color: 0xCB914F });
    var mesh2 = new THREE.Mesh(geometry2, material2);
    mesh2.position.set(150, 27, 0);
    mesh2.rotation.set(0, 0.78, 0);
    //scene.add(mesh2);

    //camino casita
    var geometry103 = new RoundedBoxGeometry(23, 3, 90, 10, 1.5);
    var texture7 = new THREE.TextureLoader().load("./assets/textura3.jpg");
    var material103 = new THREE.MeshLambertMaterial({ map: texture7 });
    var mesh103 = new THREE.Mesh(geometry103, material103);
    mesh103.position.set(150, 2, 45);
    mesh103.rotation.set(0, 0, 0);
    //scene.add(mesh103);
    texture7.wrapS = THREE.RepeatWrapping;
    texture7.wrapT = THREE.RepeatWrapping;
    texture7.repeat.set(1, 1);
    texture7.rotation = 0.785;
    texture7.offset.x = -0.22;
    texture7.offset.y = -0.5;


    //nieve de la casita
    var geometry3 = new THREE.BoxGeometry(250, 2, 200, 1, 1, 1);
    var material3 = new THREE.MeshLambertMaterial({ color: 0xF4F4F4 });
    var mesh3 = new THREE.Mesh(geometry3, material3);
    mesh3.position.set(125, -0.3, 0);
    mesh3.rotation.set(0, 0, 0);
    //scene.add(mesh3);

    var geometry4 = new THREE.CylinderGeometry(1, 1, 35, 10, 10);
    var material4 = new THREE.MeshLambertMaterial({ color: 0xF4F4F4, side: THREE.DoubleSide });
    var mesh4 = new THREE.Mesh(geometry4, material4);
    mesh4.position.set(140, 2, 9);
    mesh4.rotation.set(0, 0, 0);
    //scene.add(mesh4);

    var geometry5 = new THREE.CylinderGeometry(1, 1, 35, 10, 10);
    var material5 = new THREE.MeshLambertMaterial({ color: 0xF4F4F4, side: THREE.DoubleSide });
    var mesh5 = new THREE.Mesh(geometry5, material5);
    mesh5.position.set(160, 2, 9);
    mesh5.rotation.set(0, 0, 0);
    //scene.add(mesh5);

    var geometry6 = new THREE.CylinderGeometry(1, 1, 35, 10, 10);
    var material6 = new THREE.MeshLambertMaterial({ color: 0xF4F4F4, side: THREE.DoubleSide });
    var mesh6 = new THREE.Mesh(geometry6, material6);
    mesh6.position.set(160, 2, -9);
    mesh6.rotation.set(0, 0, 0);
    //scene.add(mesh6);

    var geometry7 = new THREE.CylinderGeometry(1, 1, 35, 10, 10);
    var material7 = new THREE.MeshLambertMaterial({ color: 0xF4F4F4, side: THREE.DoubleSide });
    var mesh7 = new THREE.Mesh(geometry7, material7);
    mesh7.position.set(140, 2, -9);
    mesh7.rotation.set(0, 0, 0);
    //scene.add(mesh7);

    var geometry8 = new THREE.CylinderGeometry(1, 1, 21, 10, 10);
    var material8 = new THREE.MeshLambertMaterial({ color: 0xF4F4F4, side: THREE.DoubleSide });
    var mesh8 = new THREE.Mesh(geometry8, material8);
    mesh8.position.set(140, 20, 0);
    mesh8.rotation.set(1.57, 0, 0);
    //scene.add(mesh8);

    var geometry9 = new THREE.CylinderGeometry(1, 1, 21, 10, 10);
    var material9 = new THREE.MeshLambertMaterial({ color: 0xF4F4F4, side: THREE.DoubleSide });
    var mesh9 = new THREE.Mesh(geometry9, material9);
    mesh9.position.set(160, 20, 0);
    mesh9.rotation.set(1.57, 0, 0);
    //scene.add(mesh9);

    var geometry10 = new THREE.CylinderGeometry(1, 1, 21, 10, 10);
    var material10 = new THREE.MeshLambertMaterial({ color: 0xF4F4F4, side: THREE.DoubleSide });
    var mesh10 = new THREE.Mesh(geometry10, material10);
    mesh10.position.set(150, 20, 10);
    mesh10.rotation.set(1.57, 0, 1.57);
    //scene.add(mesh10);

    var geometry11 = new THREE.CylinderGeometry(1, 1, 21, 10, 10);
    var material11 = new THREE.MeshLambertMaterial({ color: 0xF4F4F4, side: THREE.DoubleSide });
    var mesh11 = new THREE.Mesh(geometry11, material11);
    mesh11.position.set(150, 20, -10);
    mesh11.rotation.set(1.57, 0, 1.57);
    //scene.add(mesh11);

    var geometry13 = new THREE.CylinderGeometry(1, 1, 35, 10, 10);
    var material13 = new THREE.MeshLambertMaterial({ color: 0xF4F4F4, side: THREE.DoubleSide });
    var mesh13 = new THREE.Mesh(geometry13, material13);
    mesh13.position.set(145, 2, 10);
    mesh13.rotation.set(0, 0, 0);
    //scene.add(mesh13);

    var geometry14 = new THREE.CylinderGeometry(1, 1, 35, 10, 10);
    var material14 = new THREE.MeshLambertMaterial({ color: 0xF4F4F4, side: THREE.DoubleSide });
    var mesh14 = new THREE.Mesh(geometry14, material14);
    mesh14.position.set(155, 2, 10);
    mesh14.rotation.set(0, 0, 0);
    //scene.add(mesh14);

    //puerta
    var geometry12 = new RoundedBoxGeometry(5, 20, 8, 10, 0.5);
    var material12 = new THREE.MeshLambertMaterial({ color: 0xCB914F });
    var mesh12 = new THREE.Mesh(geometry12, material12);
    mesh12.position.set(150, 5, 10);
    mesh12.rotation.set(0, 0, 0);
    //scene.add(mesh12);

    //dulces
    var geometry114 = new THREE.SphereGeometry(2, 50, 50);
    var material114 = new THREE.MeshLambertMaterial({ color: 0xF5B7B7 });
    var mesh114 = new THREE.Mesh(geometry114, material114);
    mesh114.position.set(150, 36, 0);
    mesh114.rotation.set(0, 0, 45);
    //scene.add(mesh114);

    var geometry115 = new THREE.SphereGeometry(2, 50, 50);
    var material115 = new THREE.MeshLambertMaterial({ color: 0xB7F5F1 });
    var mesh115 = new THREE.Mesh(geometry115, material115);
    mesh115.position.set(160, 23, 10);
    mesh115.rotation.set(0, 0, 45);
    //scene.add(mesh115);

    var geometry116 = new THREE.SphereGeometry(2, 50, 50);
    var material116 = new THREE.MeshLambertMaterial({ color: 0xDAB7F5 });
    var mesh116 = new THREE.Mesh(geometry116, material116);
    mesh116.position.set(160, 23, -10);
    mesh116.rotation.set(0, 0, 45);
    //scene.add(mesh116);

    var geometry117 = new THREE.SphereGeometry(2, 50, 50);
    var material117 = new THREE.MeshLambertMaterial({ color: 0xB7F5CD });
    var mesh117 = new THREE.Mesh(geometry117, material117);
    mesh117.position.set(140, 23, -10);
    mesh117.rotation.set(0, 0, 45);
    //scene.add(mesh117);

    var geometry118 = new THREE.SphereGeometry(2, 50, 50);
    var material118 = new THREE.MeshLambertMaterial({ color: 0xB7BCF5 });
    var mesh118 = new THREE.Mesh(geometry118, material118);
    mesh118.position.set(140, 23, 10);
    mesh118.rotation.set(0, 0, 45);
    //scene.add(mesh118);

    //paletas
    var geometry17 = new THREE.CylinderGeometry(1, 1, 40, 10, 10);
    var material17 = new THREE.MeshLambertMaterial({ color: 0xF4F4F4, side: THREE.DoubleSide });
    var mesh17 = new THREE.Mesh(geometry17, material17);
    mesh17.position.set(130, 20, 5);
    mesh17.rotation.set(3.14, 5.5, 0);
    //scene.add(mesh17);

    var geometry18 = new THREE.SphereGeometry(6, 50, 50);
    var texture6 = new THREE.TextureLoader().load("./assets/paleta1.jpg");
    var material18 = new THREE.MeshLambertMaterial({ map: texture6 });
    var mesh18 = new THREE.Mesh(geometry18, material18);
    mesh18.position.set(130, 40, 5);
    mesh18.rotation.set(0, 0, 45);
    //scene.add(mesh18);
    texture6.rotation = 0.785;
    texture6.offset.x = -0.22;
    texture6.offset.y = -0.5;


    var geometry19 = new THREE.CylinderGeometry(1, 1, 40, 10, 10);
    var material19 = new THREE.MeshLambertMaterial({ color: 0xF4F4F4, side: THREE.DoubleSide });
    var mesh19 = new THREE.Mesh(geometry19, material19);
    mesh19.position.set(170, 20, 10);
    mesh19.rotation.set(3.14, 5.5, 0);
    //scene.add(mesh19);


    var geometry20 = new THREE.SphereGeometry(6, 50, 50);
    var texture7 = new THREE.TextureLoader().load("./assets/paleta2.jpg");
    var material20 = new THREE.MeshLambertMaterial({ map: texture7 });
    var mesh20 = new THREE.Mesh(geometry20, material20);
    mesh20.position.set(170, 40, 10);
    mesh20.rotation.set(0, 0, 45);
    //scene.add(mesh20);
    texture7.rotation = 0.785;
    texture7.offset.x = -0.22;
    texture7.offset.y = -0.5;

    var geometry21 = new THREE.TorusGeometry(6, 1, 20, 20);
    var texture7 = new THREE.TextureLoader().load("./assets/paleta2.jpg");
    var material21 = new THREE.MeshLambertMaterial({ map: texture7 });
    var mesh21 = new THREE.Mesh(geometry21, material21);
    mesh21.position.set(170, 40, 10);
    mesh21.rotation.set(1.57, 0, 0);
    //scene.add(mesh21);
    texture7.rotation = 0.785;
    texture7.offset.x = -0.22;
    texture7.offset.y = -0.5;

    //arbol
    var geometry22 = new THREE.ConeGeometry(10, 30, 50);
    var texture8 = new THREE.TextureLoader().load("./assets/arbol1.jpg");
    var material22 = new THREE.MeshLambertMaterial({ map: texture8 });
    var mesh22 = new THREE.Mesh(geometry22, material22);
    mesh22.position.set(130, 10, -10);
    mesh22.rotation.set(0, 0, 0);
    //scene.add(mesh22); 
    texture8.rotation = 0.785;
    texture8.offset.x = -0.22;
    texture8.offset.y = -0.5;

    var geometry23 = new THREE.ConeGeometry(8, 25, 50);
    var texture8 = new THREE.TextureLoader().load("./assets/arbol1.jpg");
    var material23 = new THREE.MeshLambertMaterial({ map: texture8 });
    var mesh23 = new THREE.Mesh(geometry23, material23);
    mesh23.position.set(130, 20, -10);
    mesh23.rotation.set(0, 0, 0);
    //scene.add(mesh23);
    texture8.rotation = 0.785;
    texture8.offset.x = -0.22;
    texture8.offset.y = -0.5;


    var geometry24 = new THREE.ConeGeometry(6, 25, 50);
    var texture8 = new THREE.TextureLoader().load("./assets/arbol1.jpg");
    var material24 = new THREE.MeshLambertMaterial({ map: texture8 });
    var mesh24 = new THREE.Mesh(geometry24, material24);
    mesh24.position.set(130, 30, -10);
    mesh24.rotation.set(0, 0, 0);
    //scene.add(mesh24);
    texture8.rotation = 0.785;
    texture8.offset.x = -0.22;
    texture8.offset.y = -0.5;

    var geometry25 = new THREE.ConeGeometry(4, 15, 50);
    var texture8 = new THREE.TextureLoader().load("./assets/arbol1.jpg");
    var material25 = new THREE.MeshLambertMaterial({ map: texture8 });
    var mesh25 = new THREE.Mesh(geometry25, material25);
    mesh25.position.set(130, 40, -10);
    mesh25.rotation.set(0, 0, 0);
    //scene.add(mesh25);
    texture8.rotation = 0.785;
    texture8.offset.x = -0.22;
    texture8.offset.y = -0.5;

    //esferas arbol
    var geometry26 = new THREE.SphereGeometry(2, 50, 50);
    var material26 = new THREE.MeshLambertMaterial({ color: 0xFB3232 });
    var mesh26 = new THREE.Mesh(geometry26, material26);
    mesh26.position.set(128, 35, -9);
    mesh26.rotation.set(0, 0, 0);
    //scene.add(mesh26);

    var geometry27 = new THREE.SphereGeometry(2, 50, 50);
    var material27 = new THREE.MeshLambertMaterial({ color: 0xFB3232 });
    var mesh27 = new THREE.Mesh(geometry27, material27);
    mesh27.position.set(129, 20, -5);
    mesh27.rotation.set(0, 0, 0);
    //scene.add(mesh27);

    var geometry28 = new THREE.SphereGeometry(2, 50, 50);
    var material28 = new THREE.MeshLambertMaterial({ color: 0xFB3232 });
    var mesh28 = new THREE.Mesh(geometry28, material28);
    mesh28.position.set(124, 5, -9);
    mesh28.rotation.set(0, 0, 0);
    //scene.add(mesh28);

    var geometry29 = new THREE.SphereGeometry(2, 50, 50);
    var material29 = new THREE.MeshLambertMaterial({ color: 0xFB3232 });
    var mesh29 = new THREE.Mesh(geometry29, material29);
    mesh29.position.set(136, 10, -9);
    mesh29.rotation.set(0, 0, 0);
    //scene.add(mesh29);

    var geometry30 = new THREE.SphereGeometry(2, 50, 50);
    var material30 = new THREE.MeshLambertMaterial({ color: 0xFB3232 });
    var mesh30 = new THREE.Mesh(geometry30, material30);
    mesh30.position.set(130, 20, -15);
    mesh30.rotation.set(0, 0, 0);
    //scene.add(mesh30);

    //arbol agrupado
    var arbol1 = new THREE.Group();
    arbol1.add(mesh22, mesh23, mesh24, mesh25, mesh26, mesh27, mesh28, mesh29, mesh30);
    //scene.add(arbol1);

    //arbol clonado
    var arbol2 = arbol1.clone();
    //scene.add(arbol2);
    arbol2.position.set(15, 2, -12);
    arbol2.scale.set(0.75, 0.75, 0.75);
    arbol2.rotation.set(0, 0, 0);

    var arbol3 = arbol1.clone();
    //scene.add(arbol3);
    arbol3.position.set(75, 2, 15);
    arbol3.scale.set(0.85, 0.85, 0.85);
    arbol3.rotation.set(0, 0, 0);

    var arbol4 = arbol1.clone();
    //scene.add(arbol4);
    arbol4.position.set(80, 2, 29);
    arbol4.scale.set(0.95, 0.95, 0.95);
    arbol4.rotation.set(0, 0, 0);

    var arbol5 = arbol1.clone();
    //scene.add(arbol5);
    arbol5.position.set(30, 2, 85);
    arbol5.scale.set(1.5, 1.5, 1.5);
    arbol5.rotation.set(0, 0, 0);

    var arbol5 = arbol1.clone();
    //scene.add(arbol5);
    arbol5.position.set(-80, 2, 85);
    arbol5.scale.set(0.75, 0.75, 0.75);
    arbol5.rotation.set(0, 0, 0);

    var arbol6 = arbol1.clone();
    //scene.add(arbol6);
    arbol6.position.set(-80, 2, -85);
    arbol6.scale.set(0.75, 0.75, 0.75);
    arbol6.rotation.set(0, 0, 0);

    var arbol6 = arbol1.clone();
    //scene.add(arbol6);
    arbol6.position.set(-25, 2, -85);
    arbol6.scale.set(0.75, 0.75, 0.75);
    arbol6.rotation.set(0, 0, 0);


    //estrella
    var geometry31 = new RoundedBoxGeometry(2, 7, 2, 10, 0.5);
    var material31 = new THREE.MeshLambertMaterial({ color: 0xFBE232, wireframe: false });
    var mesh31 = new THREE.Mesh(geometry31, material31);
    mesh31.position.set(0, 0, 0);
    mesh31.rotation.set(0, 0, 0);
    //scene.add(mesh31); 

    var geometry32 = new RoundedBoxGeometry(2, 7, 2, 10, 0.5);
    var material32 = new THREE.MeshLambertMaterial({ color: 0xFBE232, wireframe: false });
    var mesh32 = new THREE.Mesh(geometry32, material32);
    mesh32.position.set(0, 0, 0);
    mesh32.rotation.set(0, 0, 1.57);
    //scene.add(mesh32); 

    var geometry33 = new RoundedBoxGeometry(2, 7, 2, 10, 0.5);
    var material33 = new THREE.MeshLambertMaterial({ color: 0xFBE232, wireframe: false });
    var mesh33 = new THREE.Mesh(geometry33, material33);
    mesh33.position.set(0, 0, 0);
    mesh33.rotation.set(0, 0, 0.785);
    //scene.add(mesh33); 

    var geometry34 = new RoundedBoxGeometry(2, 7, 2, 10, 0.5);
    var material34 = new THREE.MeshLambertMaterial({ color: 0xFBE232, wireframe: false });
    var mesh34 = new THREE.Mesh(geometry34, material34);
    mesh34.position.set(0, 0, 0);
    mesh34.rotation.set(0, 0, -0.785);
    //scene.add(mesh34); 

    //flor clonada
    var flor1 = new THREE.Group();
    flor1.add(mesh31, mesh32, mesh33, mesh34);
    //scene.add(flor1);
    flor1.position.set(130, 44, -10);
    flor1.rotation.set(0, 0, 0);


    var flor2 = flor1.clone();
    //scene.add(flor2);
    flor2.position.set(112, 39, -20);
    flor2.scale.set(0.75, 0.75, 0.75);
    flor2.rotation.set(0, 0, 0);

    var flor3 = flor1.clone();
    //scene.add(flor3);
    flor3.position.set(186, 42, 6);
    flor3.scale.set(0.75, 0.75, 0.75);
    flor3.rotation.set(0, 0, 0);

    var flor4 = flor1.clone();
    //scene.add(flor4);
    flor4.position.set(203, 46, 19);
    flor4.scale.set(0.75, 0.75, 0.75);
    flor4.rotation.set(0, 0, 0);

    var flor5 = flor1.clone();
    //scene.add(flor5);
    flor5.position.set(225, 72, 70.5);
    flor5.scale.set(0.75, 0.75, 0.75);
    flor5.rotation.set(0, 0, 0);

    //postes de luz
    var geometry35 = new THREE.CylinderGeometry(1, 1, 30, 10, 10);
    var material35 = new THREE.MeshLambertMaterial({ color: 0x0F0F0F, side: THREE.DoubleSide });
    var mesh35 = new THREE.Mesh(geometry35, material35);
    mesh35.position.set(120, 12, 18);
    mesh35.rotation.set(0, 0, 0);
    //scene.add(mesh35); 

    var geometry36 = new THREE.CylinderGeometry(1, 1, 10, 10, 10);
    var material36 = new THREE.MeshLambertMaterial({ color: 0x0F0F0F, side: THREE.DoubleSide });
    var mesh36 = new THREE.Mesh(geometry36, material36);
    mesh36.position.set(120, 26, 18);
    mesh36.rotation.set(0, 0, 1.57);
    //scene.add(mesh36);

    var geometry37 = new THREE.CylinderGeometry(1, 1, 5, 10, 10);
    var material37 = new THREE.MeshLambertMaterial({ color: 0x0F0F0F, side: THREE.DoubleSide });
    var mesh37 = new THREE.Mesh(geometry37, material37);
    mesh37.position.set(115, 28, 18);
    mesh37.rotation.set(0, 0, 0);
    //scene.add(mesh37);

    var geometry38 = new THREE.CylinderGeometry(1, 1, 5, 10, 10);
    var material38 = new THREE.MeshLambertMaterial({ color: 0x0F0F0F, side: THREE.DoubleSide });
    var mesh38 = new THREE.Mesh(geometry38, material38);
    mesh38.position.set(125, 28, 18);
    mesh38.rotation.set(0, 0, 0);
    //scene.add(mesh38);

    var geometry39 = new THREE.SphereGeometry(3, 50, 50);
    var material39 = new THREE.MeshLambertMaterial({ color: 0xF4C056 });
    var mesh39 = new THREE.Mesh(geometry39, material39);
    mesh39.position.set(125, 30, 18);
    mesh39.rotation.set(0, 0, 0);
    //scene.add(mesh39);

    //lamparas
    var geometry40 = new THREE.SphereGeometry(2.5, 50, 50);
    var material40 = new THREE.MeshLambertMaterial({ color: 0xF4C056 });
    var mesh40 = new THREE.Mesh(geometry40, material40);
    mesh40.position.set(125, 30, 18);
    mesh40.rotation.set(0, 0, 0);
    //scene.add(mesh40);

    var geometry41 = new THREE.SphereGeometry(2.5, 50, 50);
    var material41 = new THREE.MeshLambertMaterial({ color: 0xF4C056 });
    var mesh41 = new THREE.Mesh(geometry41, material41);
    mesh41.position.set(115, 30, 18);
    mesh41.rotation.set(0, 0, 0);
    //scene.add(mesh41);

    //lampara agrupada
    var lampara1 = new THREE.Group();
    lampara1.add(mesh35, mesh36, mesh37, mesh38, mesh39, mesh40, mesh41);
    //scene.add(lampara1);

    var lampara2 = lampara1.clone();
    //scene.add(lampara2);
    lampara2.position.set(50, 0, 5);
    lampara2.scale.set(0.99, 0.99, 0.9);
    lampara2.rotation.set(0, 0, 0);

    var lampara3 = lampara1.clone();
    //scene.add(lampara3);
    lampara3.position.set(50, 0, 25);
    lampara3.scale.set(0.99, 0.99, 0.9);
    lampara3.rotation.set(0, 0, 0);

    var lampara4 = lampara1.clone();
    //scene.add(lampara4);
    lampara4.position.set(50, 0, 50);
    lampara4.scale.set(0.99, 0.99, 0.9);
    lampara4.rotation.set(0, 0, 0);

    var lampara5 = lampara1.clone();
    //scene.add(lampara5);
    lampara5.position.set(50, 0, 75);
    lampara5.scale.set(0.99, 0.99, 0.9);
    lampara5.rotation.set(0, 0, 0);

    var lampara6 = lampara1.clone();
    //scene.add(lampara6);
    lampara6.position.set(0, 0, 75);
    lampara6.scale.set(0.99, 0.99, 0.9);
    lampara6.rotation.set(0, 0, 0);

    var lampara7 = lampara1.clone();
    //scene.add(lampara7);
    lampara7.position.set(0, 0, 50);
    lampara7.scale.set(0.99, 0.99, 0.9);
    lampara7.rotation.set(0, 0, 0);

    var lampara8 = lampara1.clone();
    //scene.add(lampara8);
    lampara8.position.set(0, 0, 25);
    lampara8.scale.set(0.99, 0.99, 0.9);
    lampara8.rotation.set(0, 0, 0);

    //muñeco de nieve
    var geometry42 = new THREE.SphereGeometry(5, 50, 50);
    var material42 = new THREE.MeshLambertMaterial({ color: 0xF6F6F6 });
    var mesh42 = new THREE.Mesh(geometry42, material42);
    mesh42.position.set(100, 5, 0);
    mesh42.rotation.set(0, 0, 0);
    //scene.add(mesh42);

    var geometry43 = new THREE.SphereGeometry(2.5, 50, 50);
    var material43 = new THREE.MeshLambertMaterial({ color: 0xF6F6F6 });
    var mesh43 = new THREE.Mesh(geometry43, material43);
    mesh43.position.set(100, 12, 0);
    mesh43.rotation.set(0, 0, 0);
    //scene.add(mesh43);

    var geometry44 = new THREE.SphereGeometry(0.5, 50, 50);
    var material44 = new THREE.MeshLambertMaterial({ color: 0x000000 });
    var mesh44 = new THREE.Mesh(geometry44, material44);
    mesh44.position.set(99, 12, 2.5);
    mesh44.rotation.set(0, 0, 0);
    //scene.add(mesh44);

    var geometry45 = new THREE.SphereGeometry(0.5, 50, 50);
    var material45 = new THREE.MeshLambertMaterial({ color: 0x000000 });
    var mesh45 = new THREE.Mesh(geometry45, material45);
    mesh45.position.set(101, 12, 2.5);
    mesh45.rotation.set(0, 0, 0);
    //scene.add(mesh45);

    var geometry46 = new THREE.ConeGeometry(1, 3, 50);
    var material46 = new THREE.MeshLambertMaterial({ color: 0xF7B03D });
    var mesh46 = new THREE.Mesh(geometry46, material46);
    mesh46.position.set(100, 11, 3);
    mesh46.rotation.set(1.57, 0, 0);
    //scene.add(mesh46);

    var geometry47 = new THREE.TorusGeometry(2, 0.8, 20, 20);
    var material47 = new THREE.MeshLambertMaterial({ color: 0xFD4747, side: THREE.DoubleSide });
    var mesh47 = new THREE.Mesh(geometry47, material47);
    mesh47.position.set(100, 10, 0);
    mesh47.rotation.set(1.57, 0, 0);
    //scene.add(mesh47);

    var geometry48 = new THREE.TorusGeometry(2, 0.8, 20, 20);
    var material48 = new THREE.MeshLambertMaterial({ color: 0xFD4747, side: THREE.DoubleSide });
    var mesh48 = new THREE.Mesh(geometry48, material48);
    mesh48.position.set(100, 15, 0);
    mesh48.rotation.set(1.57, 0, 0);
    //scene.add(mesh48);

    var geometry49 = new THREE.SphereGeometry(2, 50, 50);
    var material49 = new THREE.MeshLambertMaterial({ color: 0xFD4747, side: THREE.DoubleSide });
    var mesh49 = new THREE.Mesh(geometry49, material49);
    mesh49.position.set(100, 16, 0);
    mesh49.rotation.set(1.57, 0, 0);
    //scene.add(mesh49);

    var geometry50 = new THREE.CylinderGeometry(0.5, 0.5, 4, 10, 10);
    var material50 = new THREE.MeshLambertMaterial({ color: 0xC19E69, side: THREE.DoubleSide });
    var mesh50 = new THREE.Mesh(geometry50, material50);
    mesh50.position.set(105, 10, 0);
    mesh50.rotation.set(0, 0, 2.36);
    //scene.add(mesh50);

    var geometry51 = new THREE.CylinderGeometry(0.5, 0.5, 4, 10, 10);
    var material51 = new THREE.MeshLambertMaterial({ color: 0xC19E69, side: THREE.DoubleSide });
    var mesh51 = new THREE.Mesh(geometry51, material51);
    mesh51.position.set(95, 10, 0);
    mesh51.rotation.set(0, 0, 3.93);
    //scene.add(mesh51);

    //muñeco agrupado
    var muñeco1 = new THREE.Group();
    muñeco1.add(mesh42, mesh43, mesh44, mesh45, mesh46, mesh47, mesh48, mesh49, mesh50, mesh51);
    //scene.add(muñeco1);

    var muñeco2 = muñeco1.clone();
    //scene.add(muñeco2);
    muñeco2.position.set(100, 0, 50);
    muñeco2.scale.set(1, 1, 1);
    muñeco2.rotation.set(0, 0, 0);

    var muñeco3 = muñeco1.clone();
    //scene.add(muñeco3);
    muñeco3.position.set(-65, 0, 75);
    muñeco3.scale.set(1.5, 1.5, 1.5);
    muñeco3.rotation.set(0, 0, 0);



    //??tren
    var geometry52 = new RoundedBoxGeometry(15, 15, 35, 10, 1.5);
    var material52 = new THREE.MeshLambertMaterial({ color: 0xEE4F4F });
    var mesh52 = new THREE.Mesh(geometry52, material52);
    mesh52.position.set(50, 15, 0);
    mesh52.rotation.set(0, 0, 0);
    //scene.add(mesh52); 

    var geometry53 = new RoundedBoxGeometry(15, 5, 40, 10, 1.5);
    var material53 = new THREE.MeshLambertMaterial({ color: 0x343434 });
    var mesh53 = new THREE.Mesh(geometry53, material53);
    mesh53.position.set(50, 5, 0);
    mesh53.rotation.set(0, 0, 0);
    //scene.add(mesh53);

    //ruedas
    var geometry54 = new THREE.CylinderGeometry(5, 5, 3, 50, 50);
    var material54 = new THREE.MeshLambertMaterial({ color: 0x343434, side: THREE.DoubleSide });
    var mesh54 = new THREE.Mesh(geometry54, material54);
    mesh54.position.set(41, 5, 10);
    mesh54.rotation.set(0, 0, 1.57);
    //scene.add(mesh54);

    var geometry55 = new THREE.CylinderGeometry(5, 5, 3, 50, 50);
    var material55 = new THREE.MeshLambertMaterial({ color: 0x343434, side: THREE.DoubleSide });
    var mesh55 = new THREE.Mesh(geometry55, material55);
    mesh55.position.set(59, 5, 10);
    mesh55.rotation.set(0, 0, 1.57);
    //scene.add(mesh55);

    var geometry56 = new THREE.CylinderGeometry(5, 5, 3, 50, 50);
    var material56 = new THREE.MeshLambertMaterial({ color: 0x343434, side: THREE.DoubleSide });
    var mesh56 = new THREE.Mesh(geometry56, material56);
    mesh56.position.set(59, 5, -10);
    mesh56.rotation.set(0, 0, 1.57);
    //scene.add(mesh56);

    var geometry70 = new THREE.CylinderGeometry(5, 5, 3, 50, 50);
    var material70 = new THREE.MeshLambertMaterial({ color: 0x343434, side: THREE.DoubleSide });
    var mesh70 = new THREE.Mesh(geometry70, material70);
    mesh70.position.set(41, 5, -10);
    mesh70.rotation.set(0, 0, 1.57);
    //scene.add(mesh70);

    var geometry71 = new THREE.CylinderGeometry(1, 1, 30, 50, 50);
    var material71 = new THREE.MeshLambertMaterial({ color: 0x8E8E8E, side: THREE.DoubleSide });
    var mesh71 = new THREE.Mesh(geometry71, material71);
    mesh71.position.set(40, 5, 0);
    mesh71.rotation.set(1.57, 0, 0);
    //scene.add(mesh71);

    var geometry72 = new THREE.CylinderGeometry(1, 1, 30, 50, 50);
    var material72 = new THREE.MeshLambertMaterial({ color: 0x8E8E8E, side: THREE.DoubleSide });
    var mesh72 = new THREE.Mesh(geometry72, material72);
    mesh72.position.set(60, 5, 0);
    mesh72.rotation.set(1.57, 0, 0);
    //scene.add(mesh72);

    //ventanas
    var geometry57 = new RoundedBoxGeometry(0.5, 8, 25, 10, 0);
    var material57 = new THREE.MeshLambertMaterial({ color: 0xFDF5A0 });
    var mesh57 = new THREE.Mesh(geometry57, material57);
    mesh57.position.set(42.5, 15, 0);
    mesh57.rotation.set(0, 0, 0);
    //scene.add(mesh57);

    var geometry58 = new RoundedBoxGeometry(0.5, 8, 25, 10, 0);
    var material58 = new THREE.MeshLambertMaterial({ color: 0xFDF5A0 });
    var mesh58 = new THREE.Mesh(geometry58, material58);
    mesh58.position.set(57.5, 15, 0);
    mesh58.rotation.set(0, 0, 0);
    //scene.add(mesh58);

    //detalle ventana izquierdo
    var geometry59 = new RoundedBoxGeometry(0.5, 1, 25, 10, 0);
    var material59 = new THREE.MeshLambertMaterial({ color: 0xD1D1D1 });
    var mesh59 = new THREE.Mesh(geometry59, material59);
    mesh59.position.set(42, 15, 0);
    mesh59.rotation.set(0, 0, 0);
    //scene.add(mesh59);

    var geometry60 = new RoundedBoxGeometry(0.5, 8, 1, 10, 0);
    var material60 = new THREE.MeshLambertMaterial({ color: 0xD1D1D1 });
    var mesh60 = new THREE.Mesh(geometry60, material60);
    mesh60.position.set(42, 15, 8);
    mesh60.rotation.set(0, 0, 0);
    //scene.add(mesh60);

    var geometry61 = new RoundedBoxGeometry(0.5, 8, 1, 10, 0);
    var material61 = new THREE.MeshLambertMaterial({ color: 0xD1D1D1 });
    var mesh61 = new THREE.Mesh(geometry61, material61);
    mesh61.position.set(42, 15, 0);
    mesh61.rotation.set(0, 0, 0);
    //scene.add(mesh61);

    var geometry62 = new RoundedBoxGeometry(0.5, 8, 1, 10, 0);
    var material62 = new THREE.MeshLambertMaterial({ color: 0xD1D1D1 });
    var mesh62 = new THREE.Mesh(geometry62, material62);
    mesh62.position.set(42, 15, -8);
    mesh62.rotation.set(0, 0, 0);
    //scene.add(mesh62);

    //detalle ventada derecho
    var geometry63 = new RoundedBoxGeometry(0.5, 1, 25, 10, 0);
    var material63 = new THREE.MeshLambertMaterial({ color: 0xD1D1D1 });
    var mesh63 = new THREE.Mesh(geometry63, material63);
    mesh63.position.set(58, 15, 0);
    mesh63.rotation.set(0, 0, 0);
    //scene.add(mesh63);

    var geometry64 = new RoundedBoxGeometry(0.5, 8, 1, 10, 0);
    var material64 = new THREE.MeshLambertMaterial({ color: 0xD1D1D1 });
    var mesh64 = new THREE.Mesh(geometry64, material64);
    mesh64.position.set(58, 15, 8);
    mesh64.rotation.set(0, 0, 0);
    //scene.add(mesh64);

    var geometry65 = new RoundedBoxGeometry(0.5, 8, 1, 10, 0);
    var material65 = new THREE.MeshLambertMaterial({ color: 0xD1D1D1 });
    var mesh65 = new THREE.Mesh(geometry65, material65);
    mesh65.position.set(58, 15, 0);
    mesh65.rotation.set(0, 0, 0);
    //scene.add(mesh65);

    var geometry66 = new RoundedBoxGeometry(0.5, 8, 1, 10, 0);
    var material66 = new THREE.MeshLambertMaterial({ color: 0xD1D1D1 });
    var mesh66 = new THREE.Mesh(geometry66, material66);
    mesh66.position.set(58, 15, -8);
    mesh66.rotation.set(0, 0, 0);
    //scene.add(mesh66);

    //nieve del tren
    var geometry67 = new RoundedBoxGeometry(15, 3, 35, 10, 1.5);
    var material67 = new THREE.MeshLambertMaterial({ color: 0xF4F4F4 });
    var mesh67 = new THREE.Mesh(geometry67, material67);
    mesh67.position.set(50, 23, 0);
    mesh67.rotation.set(0, 0, 0);
    //scene.add(mesh67);

    var geometry68 = new THREE.SphereGeometry(3, 50, 50);
    var material68 = new THREE.MeshLambertMaterial({ color: 0xF4F4F4 });
    var mesh68 = new THREE.Mesh(geometry68, material68);
    mesh68.position.set(47, 25, 9);
    mesh68.rotation.set(0, 0, 0);
    //scene.add(mesh68);

    var geometry69 = new THREE.SphereGeometry(1, 50, 50);
    var material69 = new THREE.MeshLambertMaterial({ color: 0xF4F4F4 });
    var mesh69 = new THREE.Mesh(geometry69, material69);
    mesh69.position.set(54, 25, -11);
    mesh69.rotation.set(0, 0, 0);
    //scene.add(mesh69);

    //vagones de tren agrupado
    var vagon1 = new THREE.Group();
    vagon1.add(mesh52, mesh53, mesh54, mesh55, mesh56, mesh57, mesh58, mesh59, mesh60, mesh61, mesh62, mesh63, mesh64, mesh65, mesh66, mesh67, mesh68, mesh69, mesh70, mesh71, mesh72);
    //scene.add(vagon1);

    var vagon2 = vagon1.clone();
    //scene.add(vagon2);
    vagon2.position.set(0, 0, -50);
    vagon2.scale.set(1, 1, 1);
    vagon2.rotation.set(0, 0, 0);

    var vagon3 = vagon1.clone();
    //scene.add(vagon3);
    vagon3.position.set(0, 0, 50);
    vagon3.scale.set(1, 1, 1);
    vagon3.rotation.set(0, 0, 0);


    //vagon frontal
    var geometry73 = new RoundedBoxGeometry(15, 15, 10, 10, 1.5);
    var material73 = new THREE.MeshLambertMaterial({ color: 0xEE4F4F });
    var mesh73 = new THREE.Mesh(geometry73, material73);
    mesh73.position.set(50, 15, 83);
    mesh73.rotation.set(0, 0, 0);
    //scene.add(mesh73);

    var geometry74 = new RoundedBoxGeometry(15, 5, 18, 10, 1.5);
    var material74 = new THREE.MeshLambertMaterial({ color: 0x343434 });
    var mesh74 = new THREE.Mesh(geometry74, material74);
    mesh74.position.set(50, 5, 85);
    mesh74.rotation.set(0, 0, 0);
    //scene.add(mesh74);

    var geometry75 = new THREE.CylinderGeometry(5, 5, 3, 50, 50);
    var material75 = new THREE.MeshLambertMaterial({ color: 0x343434, side: THREE.DoubleSide });
    var mesh75 = new THREE.Mesh(geometry75, material75);
    mesh75.position.set(41, 5, 85);
    mesh75.rotation.set(0, 0, 1.57);
    //scene.add(mesh75);

    var geometry76 = new THREE.CylinderGeometry(5, 5, 3, 50, 50);
    var material76 = new THREE.MeshLambertMaterial({ color: 0x343434, side: THREE.DoubleSide });
    var mesh76 = new THREE.Mesh(geometry76, material76);
    mesh76.position.set(59, 5, 85);
    mesh76.rotation.set(0, 0, 1.57);
    //scene.add(mesh76);


    var geometry77 = new THREE.CylinderGeometry(6, 6, 7, 50, 50);
    var material77 = new THREE.MeshLambertMaterial({ color: 0xEE4F4F, side: THREE.DoubleSide });
    var mesh77 = new THREE.Mesh(geometry77, material77);
    mesh77.position.set(50, 13, 90);
    mesh77.rotation.set(1.57, 0, 0);
    //scene.add(mesh77);

    var geometry80 = new THREE.CylinderGeometry(3, 3, 3, 50, 50);
    var material80 = new THREE.MeshLambertMaterial({ color: 0xF4F4F4, side: THREE.DoubleSide });
    var mesh80 = new THREE.Mesh(geometry80, material80);
    mesh80.position.set(50, 13, 93);
    mesh80.rotation.set(1.57, 0, 0);
    //scene.add(mesh80);

    var geometry78 = new THREE.CylinderGeometry(1.5, 1.5, 6, 50, 50);
    var material78 = new THREE.MeshLambertMaterial({ color: 0x343434, side: THREE.DoubleSide });
    var mesh78 = new THREE.Mesh(geometry78, material78);
    mesh78.position.set(50, 18, 90);
    mesh78.rotation.set(0, 0, 0);
    //scene.add(mesh78);

    var geometry81 = new THREE.CylinderGeometry(2.5, 2.5, 6, 50, 50);
    var material81 = new THREE.MeshLambertMaterial({ color: 0x343434, side: THREE.DoubleSide });
    var mesh81 = new THREE.Mesh(geometry81, material81);
    mesh81.position.set(50, 26, 83);
    mesh81.rotation.set(0, 0, 0);
    //scene.add(mesh81);

    //nieve del vagon frontal
    var geometry79 = new RoundedBoxGeometry(15, 3, 10, 10, 1.5);
    var material79 = new THREE.MeshLambertMaterial({ color: 0xF4F4F4 });
    var mesh79 = new THREE.Mesh(geometry79, material79);
    mesh79.position.set(50, 23, 83);
    mesh79.rotation.set(0, 0, 0);
    //scene.add(mesh79);

    var geometry82 = new THREE.SphereGeometry(3, 50, 50);
    var material82 = new THREE.MeshLambertMaterial({ color: 0xF4F4F4 });
    var mesh82 = new THREE.Mesh(geometry82, material82);
    mesh82.position.set(50, 35, 83);
    mesh82.rotation.set(0, 0, 0);
    //scene.add(mesh82);

    var geometry83 = new THREE.SphereGeometry(1, 50, 50);
    var material83 = new THREE.MeshLambertMaterial({ color: 0xF4F4F4 });
    var mesh83 = new THREE.Mesh(geometry83, material83);
    mesh83.position.set(50, 40, 70);
    mesh83.rotation.set(0, 0, 0);
    //scene.add(mesh83);

    var geometry84 = new THREE.SphereGeometry(2.5, 50, 50);
    var material84 = new THREE.MeshLambertMaterial({ color: 0xF4F4F4 });
    var mesh84 = new THREE.Mesh(geometry84, material84);
    mesh84.position.set(50, 32, 62);
    mesh84.rotation.set(0, 0, 0);
    //scene.add(mesh84);

    var geometry85 = new THREE.SphereGeometry(2, 50, 50);
    var material85 = new THREE.MeshLambertMaterial({ color: 0xF4F4F4 });
    var mesh85 = new THREE.Mesh(geometry85, material85);
    mesh85.position.set(50, 36, 55);
    mesh85.rotation.set(0, 0, 0);
    //scene.add(mesh85);

    var geometry86 = new THREE.SphereGeometry(3, 50, 50);
    var material86 = new THREE.MeshLambertMaterial({ color: 0xF4F4F4 });
    var mesh86 = new THREE.Mesh(geometry86, material86);
    mesh86.position.set(50, 38, 42);
    mesh86.rotation.set(0, 0, 0);
    //scene.add(mesh86);

    //conexiones tren
    var geometry87 = new RoundedBoxGeometry(3, 3, 35, 10, 1.5);
    var material87 = new THREE.MeshLambertMaterial({ color: 0x343434 });
    var mesh87 = new THREE.Mesh(geometry87, material87);
    mesh87.position.set(50, 5, 80);
    mesh87.rotation.set(0, 0, 0);
    //scene.add(mesh87);

    var geometry88 = new RoundedBoxGeometry(3, 3, 35, 10, 1.5);
    var material88 = new THREE.MeshLambertMaterial({ color: 0x343434 });
    var mesh88 = new THREE.Mesh(geometry88, material88);
    mesh88.position.set(50, 5, 35);
    mesh88.rotation.set(0, 0, 0);
    //scene.add(mesh88);

    var geometry89 = new RoundedBoxGeometry(3, 3, 35, 10, 1.5);
    var material89 = new THREE.MeshLambertMaterial({ color: 0x343434 });
    var mesh89 = new THREE.Mesh(geometry89, material89);
    mesh89.position.set(50, 5, -16);
    mesh89.rotation.set(0, 0, 0);
    //scene.add(mesh89);

    //rieles del tren
    var geometry90 = new THREE.CylinderGeometry(1, 1, 200, 50, 50);
    var material90 = new THREE.MeshLambertMaterial({ color: 0x898989, side: THREE.DoubleSide });
    var mesh90 = new THREE.Mesh(geometry90, material90);
    mesh90.position.set(39, 0, 0);
    mesh90.rotation.set(1.57, 0, 0);
    //scene.add(mesh90);

    var geometry91 = new THREE.CylinderGeometry(1, 1, 200, 50, 50);
    var material91 = new THREE.MeshLambertMaterial({ color: 0x898989, side: THREE.DoubleSide });
    var mesh91 = new THREE.Mesh(geometry91, material91);
    mesh91.position.set(60, 0, 0);
    mesh91.rotation.set(1.57, 0, 0);
    //scene.add(mesh91);

    //estacion del tren
    var geometry92 = new RoundedBoxGeometry(30, 5, 100, 10, 1.5);
    var texture5 = new THREE.TextureLoader().load("./assets/textura1.jpg");
    var material92 = new THREE.MeshLambertMaterial({ map: texture5 });
    var mesh92 = new THREE.Mesh(geometry92, material92);
    mesh92.position.set(10, 45, 0);
    mesh92.rotation.set(0, 0, 0);
    //scene.add(mesh92);
    texture5.wrapS = THREE.RepeatWrapping;
    texture5.wrapT = THREE.RepeatWrapping;
    texture5.repeat.set(2, 2);
    texture5.rotation = 0.785;
    texture5.offset.x = -0.22;
    texture5.offset.y = -0.5;



    var geometry93 = new RoundedBoxGeometry(25, 8, 90, 10, 1.5);
    var texture5 = new THREE.TextureLoader().load("./assets/textura1.jpg");
    var material93 = new THREE.MeshLambertMaterial({ map: texture5 });
    var mesh93 = new THREE.Mesh(geometry93, material93);
    mesh93.position.set(15, 5, 0);
    mesh93.rotation.set(0, 0, 0);
    //scene.add(mesh93);
    texture5.wrapS = THREE.RepeatWrapping;
    texture5.wrapT = THREE.RepeatWrapping;
    texture5.repeat.set(2, 2);
    texture5.rotation = 0.785;
    texture5.offset.x = -0.22;
    texture5.offset.y = -0.5;

    var geometry92 = new THREE.CylinderGeometry(2, 2, 40, 50, 50);
    var material92 = new THREE.MeshLambertMaterial({ color: 0x898989, side: THREE.DoubleSide });
    var mesh92 = new THREE.Mesh(geometry92, material92);
    mesh92.position.set(8, 25, -40);
    mesh92.rotation.set(0, 0, 0);
    //scene.add(mesh92);

    var geometry93 = new THREE.CylinderGeometry(2, 2, 40, 50, 50);
    var material93 = new THREE.MeshLambertMaterial({ color: 0x898989, side: THREE.DoubleSide });
    var mesh93 = new THREE.Mesh(geometry93, material93);
    mesh93.position.set(8, 25, 40);
    mesh93.rotation.set(0, 0, 0);
    //scene.add(mesh93);

    var geometry94 = new THREE.CylinderGeometry(1.5, 1.5, 40, 50, 50);
    var material94 = new THREE.MeshLambertMaterial({ color: 0x898989, side: THREE.DoubleSide });
    var mesh94 = new THREE.Mesh(geometry94, material94);
    mesh94.position.set(22, 25, 40);
    mesh94.rotation.set(0, 0, 0);
    //scene.add(mesh94);

    var geometry95 = new THREE.CylinderGeometry(1.5, 1.5, 40, 50, 50);
    var material95 = new THREE.MeshLambertMaterial({ color: 0x898989, side: THREE.DoubleSide });
    var mesh95 = new THREE.Mesh(geometry95, material95);
    mesh95.position.set(22, 25, -40);
    mesh95.rotation.set(0, 0, 0);
    //scene.add(mesh95);

    //nieve estacion
    var geometry96 = new RoundedBoxGeometry(30, 2, 100, 10, 1.5);
    var material96 = new THREE.MeshLambertMaterial({ color: 0xF4F4F4 });
    var mesh96 = new THREE.Mesh(geometry96, material96);
    mesh96.position.set(10, 48, 0);
    mesh96.rotation.set(0, 0, 0);
    //scene.add(mesh96);

    //montañas
    var geometry97 = new THREE.ConeGeometry(55, 90, 50, 50);
    var texture9 = new THREE.TextureLoader().load("./assets/nieve1.jpg");
    var material97 = new THREE.MeshLambertMaterial({ map: texture9 });
    var mesh97 = new THREE.Mesh(geometry97, material97);
    mesh97.position.set(150, 40, -85);
    mesh97.rotation.set(0, 0, 0);
    //scene.add(mesh97);
    texture9.wrapS = THREE.RepeatWrapping;
    texture9.wrapT = THREE.RepeatWrapping;
    texture9.repeat.set(1, 1);
    texture9.rotation = 0.785;
    texture9.offset.x = -0.22;
    texture9.offset.y = -0.5;


    var geometry98 = new THREE.ConeGeometry(55, 70, 50, 50);
    var texture9 = new THREE.TextureLoader().load("./assets/nieve1.jpg");
    var material98 = new THREE.MeshLambertMaterial({ map: texture9 });
    var mesh98 = new THREE.Mesh(geometry98, material98);
    mesh98.position.set(200, 35, -85);
    mesh98.rotation.set(0, 0, 0);
    //scene.add(mesh98);
    texture9.wrapS = THREE.RepeatWrapping;
    texture9.wrapT = THREE.RepeatWrapping;
    texture9.repeat.set(1, 1);
    texture9.rotation = 0.785;
    texture9.offset.x = -0.22;
    texture9.offset.y = -0.5;

    //regalos
    var geometry99 = new THREE.BoxGeometry(10, 10, 10, 10, 10, 10);
    var texture1 = new THREE.TextureLoader().load("./assets/regalo1.jpg");
    var material99 = new THREE.MeshLambertMaterial({ map: texture1 });
    var mesh99 = new THREE.Mesh(geometry99, material99);
    mesh99.position.set(210, 6, 80);
    mesh99.rotation.set(0, 0, 0);
    //scene.add(mesh99);
    texture1.wrapS = THREE.RepeatWrapping;
    texture1.wrapT = THREE.RepeatWrapping;
    texture1.repeat.set(1, 1);
    texture1.rotation = 0.785;
    texture1.offset.x = -0.22;
    texture1.offset.y = -0.5;

    var geometry100 = new THREE.BoxGeometry(10, 10, 10, 10, 10, 10);
    var texture2 = new THREE.TextureLoader().load("./assets/regalo2.jpg");
    var material100 = new THREE.MeshLambertMaterial({ map: texture2 });
    var mesh100 = new THREE.Mesh(geometry100, material100);
    mesh100.position.set(225, 6, 85);
    mesh100.rotation.set(0, 0, 0);
    //scene.add(mesh100);
    texture2.wrapS = THREE.RepeatWrapping;
    texture2.wrapT = THREE.RepeatWrapping;
    texture2.repeat.set(1, 1);
    texture2.rotation = 0.785;
    texture2.offset.x = -0.22;
    texture2.offset.y = -0.5;

    var geometry101 = new THREE.BoxGeometry(10, 10, 10, 10, 10, 10);
    var texture3 = new THREE.TextureLoader().load("./assets/regalo3.jpg");
    var material101 = new THREE.MeshLambertMaterial({ map: texture3 });
    var mesh101 = new THREE.Mesh(geometry101, material101);
    mesh101.position.set(240, 6, 80);
    mesh101.rotation.set(0, 0, 0);
    //scene.add(mesh101);
    texture3.wrapS = THREE.RepeatWrapping;
    texture3.wrapT = THREE.RepeatWrapping;
    texture3.repeat.set(1, 1);
    texture3.rotation = 0.785;
    texture3.offset.x = -0.22;
    texture3.offset.y = -0.5;

    var geometry102 = new THREE.BoxGeometry(10, 10, 10, 10, 10, 10);
    var texture4 = new THREE.TextureLoader().load("./assets/regalo4.jpg");
    var material102 = new THREE.MeshLambertMaterial({ map: texture4 });
    var mesh102 = new THREE.Mesh(geometry102, material102);
    mesh102.position.set(208, 6, 65);
    mesh102.rotation.set(0, 0, 0);
    //scene.add(mesh102);
    texture4.wrapS = THREE.RepeatWrapping;
    texture4.wrapT = THREE.RepeatWrapping;
    texture4.repeat.set(1, 1);
    texture4.rotation = 0.785;
    texture4.offset.x = -0.22;
    texture4.offset.y = -0.5;

    //nieve cayendo
    var geometry110 = new THREE.SphereGeometry(1, 50, 50);
    var material110 = new THREE.MeshLambertMaterial({ color: 0xF4F4F4 });
    var mesh110 = new THREE.Mesh(geometry110, material110);
    mesh110.position.set(150, 60, 70);
    mesh110.rotation.set(0, 0, 0);
    //scene.add(mesh110);

    var geometry111 = new THREE.SphereGeometry(2.5, 50, 50);
    var material111 = new THREE.MeshLambertMaterial({ color: 0xF4F4F4 });
    var mesh111 = new THREE.Mesh(geometry111, material111);
    mesh111.position.set(200, 32, 62);
    mesh111.rotation.set(0, 0, 0);
    //scene.add(mesh111);

    var geometry112 = new THREE.SphereGeometry(2, 50, 50);
    var material112 = new THREE.MeshLambertMaterial({ color: 0xF4F4F4 });
    var mesh112 = new THREE.Mesh(geometry112, material112);
    mesh112.position.set(50, 76, -55);
    mesh112.rotation.set(0, 0, 0);
    //scene.add(mesh112);

    var geometry113 = new THREE.SphereGeometry(3, 50, 50);
    var material113 = new THREE.MeshLambertMaterial({ color: 0xF4F4F4 });
    var mesh113 = new THREE.Mesh(geometry113, material113);
    mesh113.position.set(110, 58, 42);
    mesh113.rotation.set(0, 0, 0);
    //scene.add(mesh113);

    var geometry114 = new THREE.SphereGeometry(1, 50, 50);
    var material114 = new THREE.MeshLambertMaterial({ color: 0xF4F4F4 });
    var mesh114 = new THREE.Mesh(geometry114, material114);
    mesh114.position.set(180, 50, -10);
    mesh114.rotation.set(0, 0, 0);
    //scene.add(mesh114);

    var geometry115 = new THREE.SphereGeometry(2.5, 50, 50);
    var material115 = new THREE.MeshLambertMaterial({ color: 0xF4F4F4 });
    var mesh115 = new THREE.Mesh(geometry115, material115);
    mesh115.position.set(200, 42, 22);
    mesh115.rotation.set(0, 0, 0);
    //scene.add(mesh115);

    var geometry116 = new THREE.SphereGeometry(2, 50, 50);
    var material116 = new THREE.MeshLambertMaterial({ color: 0xF4F4F4 });
    var mesh116 = new THREE.Mesh(geometry116, material116);
    mesh116.position.set(200, 56, 55);
    mesh116.rotation.set(0, 0, 0);
    //scene.add(mesh116);

    var geometry113 = new THREE.SphereGeometry(3, 50, 50);
    var material113 = new THREE.MeshLambertMaterial({ color: 0xF4F4F4 });
    var mesh113 = new THREE.Mesh(geometry113, material113);
    mesh113.position.set(190, 78, 30);
    mesh113.rotation.set(0, 0, 0);
    //scene.add(mesh113);

const I04 = new THREE.Group();
I04.add(
    mesh1,
mesh2,
mesh103,
mesh3,
mesh4,
mesh5,
mesh6,
mesh7,
mesh8,
mesh9,
mesh10,
mesh11,
mesh13,
mesh14,
mesh12,
mesh114,
mesh115,
mesh116,
mesh117,
mesh118,
mesh17,
mesh18,
mesh19,
mesh20,
mesh21,
arbol1,
arbol2,
arbol3,
arbol4,
arbol5,
arbol6,
flor1,
flor2,
flor3,
flor4,
flor5,
lampara1,
lampara2,
lampara3,
lampara4,
lampara5,
lampara6,
lampara7,
lampara8,
muñeco1, 
muñeco2 ,
muñeco3,
vagon1,
vagon2,
vagon3,
mesh73,
mesh74,
mesh75,
mesh76,
mesh77,
mesh78,
mesh80,
mesh81,
mesh79,
mesh82,
mesh83,
mesh84,
mesh85,
mesh86,
mesh87,
mesh88,
mesh89,
mesh90,
mesh91,
mesh92,
mesh93,
mesh94,
mesh95,
mesh96,
mesh97,
mesh98,
mesh99,
mesh100,
mesh101,
mesh102,
mesh110,
mesh111,
mesh112,
mesh113,
mesh114,
mesh115,
mesh116,
mesh113,
);
I04.position.set(x,y,z);
    return I04;
}