const scene = new THREE.Scene();

const landColors = [ '#ff0000', '#00ff00', '#0000ff', '#ffff00', '#00ffff', '#ff00ff', '#ffffff', '#000000', '#808080', '#c0c0c0' ];

const landGenerator = function(width, length, height, color) {
  let size = {
    width: width,
    length: length,
    height: height
  };

  let land = {
    size: size,
    color: color,
  };

  return land;
};

const randomLandGenerator = function() {
  let randomWidth = Math.floor(Math.random() * (10 - 1) + 1) + 5;
  let randomLength = Math.floor(Math.random() * (10 - 1) + 1) + 5;
  let randomHeight = Math.floor(Math.random() * (10 - 1) + 1);
  let randomColor = Math.floor(Math.random() * (10 - 1) + 1);

  let randomLand = landGenerator(randomWidth, randomLength, randomHeight, randomColor);

  return randomLand;
};

const landRendered = function(land) {
  var geometry = new THREE.BoxGeometry( land.size.width/10, land.size.height/10, land.size.length/10 );
  var material = new THREE.MeshBasicMaterial( { color: landColors[land.color], wireframe: true } );
  var cube = new THREE.Mesh( geometry, material );

  scene.add( cube );

  cube.rotation.x = 45;
  cube.rotation.y = 45;
};

document.addEventListener("DOMContentLoaded", function() {
  let initLand = randomLandGenerator();
  landRendered(initLand);

  
  var camera = new THREE.PerspectiveCamera( 75, window.innerWidth/window.innerHeight, 0.1, 1000 );
  camera.position.z = 4;
  var renderer = new THREE.WebGLRenderer({antialias:true});
  renderer.setClearColor("#ffffff");
  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  var render = function () {
    requestAnimationFrame( render );



    // Render the scene
    renderer.render(scene, camera);
  };

  render();
});