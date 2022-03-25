function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      obj.innerHTML = Math.floor(progress * (end - start) + start);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };
    window.requestAnimationFrame(step);
  }
  function scroll_call(){
    scroll_call = function(){};
    const obj1= document.getElementById("value_incrementer1");
    animateValue(obj1, 0, 2999, 3000);
    const obj2= document.getElementById("value_incrementer2");
    animateValue(obj2, 0, 3999, 3000);
    const obj3= document.getElementById("value_incrementer3");
    animateValue(obj3, 0, 4999, 3000);
  }

  