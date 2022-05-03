$( document ).ready(function() {
  

  const elem = document.getElementById('pan-zoom')
  const panzoom = Panzoom(elem, {
    maxScale: 12,
    duration: 400,
  })
  //panzoom.pan(10, 10)
  //panzoom.zoom(2, { animate: true })

  // Panning and pinch zooming are bound automatically (unless disablePan is true).
  // There are several available methods for zooming
  // that can be bound on button clicks or mousewheel.
  //button.addEventListener('click', panzoom.zoomIn)
  elem.parentElement.addEventListener('wheel', panzoom.zoomWithWheel)

 /////  


  // define an observer instance
  var observer = new IntersectionObserver(onIntersection, {
    root: null,   // default is the viewport
    threshold: .5 // percentage of taregt's visible area. Triggers "onIntersection"
  })

  // callback is called on intersection change
  function onIntersection(entries, opts){
    entries.forEach(entry => {
      entry.target.classList.toggle('active', entry.isIntersecting);

      if (entry.target.classList.contains('active')) {
        var it_id = entry.target.id.substring(5);
        console.log(it_id);

        $('.item-img').removeClass('visible');

        setTimeout(() => {

          if(it_id == 1){
            panzoom.pan(0, 0);
            panzoom.zoom(1, { animate: true });
          } else if (it_id == 2) {
            document.getElementById("item-2").classList.add('visible');
            panzoom.pan(-120, 60);
            panzoom.zoom(10, { animate: true });
          } else if (it_id == 3) {
            document.getElementById("item-3").classList.add('visible');
            panzoom.pan(20, 0);
            panzoom.zoom(10, { animate: true });
          } else if (it_id == 4) {
            document.getElementById("item-4").classList.add('visible');
            panzoom.pan(30, 0);
            panzoom.zoom(12, { animate: true });
          } else if (it_id == 5) {
            document.getElementById("item-5").classList.add('visible');
            panzoom.pan(30, 0);
            panzoom.zoom(12, { animate: true });
          } else if (it_id == 6) {
            document.getElementById("item-6").classList.add('visible');
            panzoom.pan(30, 10);
            panzoom.zoom(12, { animate: true });
          } else if (it_id == 7) {
            document.getElementById("item-7").classList.add('visible');
            panzoom.pan(-110, 48);
            panzoom.zoom(11, { animate: true });
          } else if (it_id == 8) {
            document.getElementById("item-8").classList.add('visible');
            panzoom.pan(-30, 48);
            panzoom.zoom(4, { animate: true });
          } else if (it_id == 9) {
            document.getElementById("item-9").classList.add('visible');
            panzoom.pan(-40, 80);
            panzoom.zoom(12, { animate: true });
          } 


        }, 800);
          //console.log('first anim')
          document.getElementById("labels").classList.remove('visible');

          if(it_id == 1){
            document.getElementById("labels").classList.add('visible');
            //panzoom.pan(0, 0);
            //panzoom.zoom(1, { animate: true });
          }
          panzoom.pan(0, 0);
          panzoom.zoom(1, { animate: true });

      }

    }

    )
  }

  let target = '.text-inner';
  document.querySelectorAll(target).forEach((i) => {
      if (i) {
          observer.observe(i);
      }
  });

});