(function(){
  var canvas = document.getElementById('proj-canvas');
  var wrap = canvas.parentElement;
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100);
  camera.position.z = 5;
  var renderer = new THREE.WebGLRenderer({canvas:canvas, antialias:true, alpha:true});
  function sizeRenderer(){ var s = wrap.clientWidth; renderer.setPixelRatio(Math.min(window.devicePixelRatio,2)); renderer.setSize(s,s); camera.aspect=1; camera.updateProjectionMatrix(); }
  sizeRenderer();
  window.addEventListener('resize', sizeRenderer);
  scene.add(new THREE.AmbientLight(0xffffff, 1.1));
  var light = new THREE.DirectionalLight(0xffffff, 0.8); light.position.set(3,3,4); scene.add(light);
  var shapes = [
    new THREE.Mesh(new THREE.IcosahedronGeometry(0.9,0), new THREE.MeshStandardMaterial({color:0x7c5cfc, roughness:0.35})),
    new THREE.Mesh(new THREE.TorusGeometry(0.65,0.22,16,40), new THREE.MeshStandardMaterial({color:0x2bbe8c, roughness:0.35})),
    new THREE.Mesh(new THREE.SphereGeometry(0.5,20,20), new THREE.MeshStandardMaterial({color:0xff8a65, roughness:0.35}))
  ];
  shapes[0].position.set(-0.5,0.3,0); shapes[1].position.set(0.6,-0.2,-0.3); shapes[2].position.set(0.1,0.9,-0.6);
  shapes.forEach(function(s){ scene.add(s); });
  var mouseX=0, mouseY=0;
  wrap.addEventListener('mousemove', function(e){ var r=wrap.getBoundingClientRect(); mouseX=((e.clientX-r.left)/r.width)-0.5; mouseY=((e.clientY-r.top)/r.height)-0.5; });
  function animate(){
    requestAnimationFrame(animate);
    var t = Date.now()*0.0004;
    shapes.forEach(function(s,i){ s.rotation.x=t*(0.6+i*0.2); s.rotation.y=t*(0.5+i*0.25); });
    if(!reduceMotion){ scene.rotation.y += (mouseX*0.6 - scene.rotation.y)*0.05; scene.rotation.x += (mouseY*0.4 - scene.rotation.x)*0.05; }
    renderer.render(scene, camera);
  }
  animate();
})();