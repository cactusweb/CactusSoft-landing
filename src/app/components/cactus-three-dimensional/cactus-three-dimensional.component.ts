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
  isDrop3D: boolean = new Date().getTime() >= 1624221000000;

  constructor() {
    // if ( window.innerWidth > 780 )
    //   this.initCactus3D();
   }

  ngOnInit() {
    if ( window.innerWidth > 780 )
      this.initCactus3D();
    window.addEventListener( 'resize', e => {
      if ( window.innerWidth > 900 && !this.isInited ) this.initCactus3D(); 
    })
  }


  initCactus3D(){
    this.isInited = true;
    let scene = new Scene();
    let camera = new PerspectiveCamera( 50, 280/360, 0.1, 1000 );
   

    let renderer = new WebGLRenderer({ alpha: true, antialias: true });
    renderer.setClearColor( 0x000000, 0 );
    renderer.setSize( 280, 360 );
    renderer.domElement.setAttribute( 'id', 'cactus-3d' )
    
    let controls = new OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 1
    controls.enableZoom = this.isDrop3D;
    controls.target.set(0, this.isDrop3D ? 7.5 : 8.5, 0);
    camera.position.y = this.isDrop3D ? 7.5 : 8.5;
    // normal - 8.5
    camera.position.z =  this.isDrop3D ? 21.5 : 25;

    // normal:
    // camera.position.z = 25;
    
    
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

    loader.load( this.isDrop3D ? '/assets/3d/cocktus_v3-drop.gltf' : '/assets/3d/cocktus_v3.gltf', (gltf) => {
      obj = gltf;
      this.isDrop3D ?
      obj.scene.scale.set( .225, 0.3, .2625 )
      :
      obj.scene.scale.set( .9, 1.2, 1.05 )

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
