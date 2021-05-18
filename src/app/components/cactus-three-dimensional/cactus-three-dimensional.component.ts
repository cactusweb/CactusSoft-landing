import { Component, OnInit } from '@angular/core';
import { Scene, PerspectiveCamera, WebGLRenderer, AmbientLight, PointLight, Vector3, Box3 } from 'three';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';

@Component({
  selector: 'app-cactus-three-dimensional',
  templateUrl: './cactus-three-dimensional.component.html',
  styleUrls: ['./cactus-three-dimensional.component.scss']
})
export class CactusThreeDimensionalComponent implements OnInit {
  isInited = false;

  constructor() {
    if ( window.innerWidth > 780 )
      this.initCactus3D();
   }

  ngOnInit() {
    window.addEventListener( 'resize', e => {
      if ( window.innerWidth > 900 && !this.isInited ) this.initCactus3D(); 
    })
  }


  initCactus3D(){
    this.isInited = true;
    let scene = new Scene();
    let camera = new PerspectiveCamera( 50, 480/360, 0.1, 1000 );
   

    let renderer = new WebGLRenderer({ alpha: true, antialias: true });
    renderer.setClearColor( 0x000000, 0 );
    renderer.setSize( 480, 360 );
    renderer.domElement.setAttribute( 'id', 'cactus-3d' )
    
    let controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.6
    controls.enableZoom = false;
    controls.target.set(0, 8.5, 0);
    camera.position.y = 8.5;
    camera.position.z = 25;
    
    controls.minPolarAngle = Math.PI / 2.5;
    controls.maxPolarAngle = Math.PI / 1.8;
    controls.update();


    document.querySelector('#three-dimensional').appendChild( renderer.domElement );
    let aLight = new AmbientLight( 0xFFFFFF, 1.4 )
    scene.add( aLight )
    let pLight = new PointLight( 0xFFFFFF, 1.6 )
    pLight.position.set(2, -20, 5);
    scene.add( pLight );
    let loader = new GLTFLoader();
    let obj = null;
    

    loader.load( '/assets/3d/cocktus_v3.gltf', (gltf) => {
      obj = gltf;
      obj.scene.scale.set( 0.9, 1.2, 1 )
      obj.scene.rotation.y = 1.4;
      scene.add( obj.scene );
    })


    function animate(){
      requestAnimationFrame(animate)

      if ( obj ){
        obj.scene.rotation.y += 0.002;
      }
        renderer.render( scene, camera );

    }
    animate();

  }
  

}
