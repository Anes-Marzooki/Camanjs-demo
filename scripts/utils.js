// Textarea-edits
const overlay = document.querySelector("#canvas-overlay");
const element = overlay.querySelector("#quote-container");
const text = element.querySelector("#quote");

element.addEventListener("mousedown", mouseDown); // we listen for an event on the element
element.addEventListener("dblclick", toggleEdit);
overlay.addEventListener("click", clickAway);


function mouseDown(event) {
//   Event Listeners
  overlay.addEventListener("mousemove", mouseMove);
  overlay.addEventListener("mouseup", mouseUp);
  element.style.cursor = "grabbing";
  
//  Grabs the cursor position
  let offX = event.offsetX; // 2
  let offY = event.offsetY; // 0
  
  function mouseMove(event) {
//    console.log(event);
    let newX = event.pageX - overlay.offsetLeft - offX // 3 - 2
    let newY = event.pageY - overlay.offsetTop - offY; // 1 - 0
//     Gets he positin of the elment
//    const rect = element.getBoundingClientRect();
    
    element.style.left = newX + "px"; // 2 + 1
    element.style.top = newY + "px";
    
//    prevX = event.clientX;
//    prevY = event.clientY;
    
  }
  function mouseUp() {
    overlay.removeEventListener('mousemove', mouseMove);
    overlay.removeEventListener('mouseup',mouseUp);

    element.style.cursor = "grab";
  }
}


function toggleEdit(event) {
  // let edit = element.getAttribute("contenteditable");
  // Grabs the canvas and its context
  
  
//let myCanvas = document.getElementById('my-canvas');
//let ctx = myCanvas.getContext('2d');
//  ctx.filter = blur("300px");
//  ctx.fillText('Hello world', 50, 100);
////  const rect = myCanvas.getBoundingClientRect();
////  console.log(rect)
//  
//  var imgData = ctx.getImageData(rect.x,rect.y,rect.width,rect.height)
//  console.log(imgData)
//  ctx.putImageData(imgData, rect.x ,rect.y + 10)
////  ctx.drawImage(myCanvas,0,0)

  text.setAttribute("contenteditable", true);
  text.focus();
}

function clickAway(event) {
  text.removeAttribute("contenteditable");
  text.blur();
}




