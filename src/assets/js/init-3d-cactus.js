
 function initCactus3D(){
    let scene = new THREE.Scene();
    let camera = new THREE.PerspectiveCamera( 50, window.innerWidth/window.innerHeight, 0.1, 1000 );
   

    let renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setClearColor( 0x000000, 0 );
    renderer.setSize( 480, 360 );
    renderer.domElement.setAttribute( 'id', 'cactus-3d' )
    
    let controls = new THREE.OrbitControls(camera, renderer.domElement)
    controls.enableDamping = true
    controls.dampingFactor = 0.8
    controls.enableZoom = false;
    controls.target.set(0, 10.5, 0);
    camera.position.y = 10.5;
    camera.position.z = 30;
    
    controls.minPolarAngle = Math.PI / 2.5;
    controls.maxPolarAngle = Math.PI / 1.8;
    controls.update();


    document.querySelector('#three-dimensional').appendChild( renderer.domElement );
    let aLight = new THREE.AmbientLight( 0xFFFFFF, 1.4 )
    scene.add( aLight )
    let pLight = new THREE.PointLight( 0xFFFFFF, 1.2 )
    pLight.position.set(2, -4, 5);
    scene.add( pLight );
    let loader = new THREE.GLTFLoader();
    let obj = null;
    

    loader.load( '/assets/3d/cocktus_v3.gltf', (gltf) => {
      obj = gltf;
      obj.scene.scale.set( 1.5, 1.5, 1.8 )
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

document.addEventListener( 'DOMContentLoaded', () => {
    initCactus3D();

})