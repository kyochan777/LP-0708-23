window.onload = function() {
  var image = document.getElementById('myImage');
  image.style.position = 'absolute';
  var pos = -100;


  function animate() {
    if (pos >= 0) {
      image.style.opacity = 1;
    } else {
      pos++;
      image.style.left = pos + 'px';
      requestAnimationFrame(animate);
    }
  }

  animate();
};