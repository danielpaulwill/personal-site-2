const update = document.getElementById("update"); 



function moveUpdateLeft() {
    const leftNumbers = update.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    if (left > 0) {
      update.style.left = `${left - 10}px`;
    }
  } 


  function moveUpdateRight() {
      const leftNumbers = update.style.left.replace("px", "");
      const left = parseInt(leftNumbers, 10);

      if (left < 1000) {
          update.style.left = `${left + 10}px`;
      }
  }




  
  document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
      moveUpdateLeft();
      console.log(moveUpdateLeft);
    }
    if (e.key === "ArrowRight") {
        moveUpdateRight();
        console.log();
    }
  }); 
  
  
  


