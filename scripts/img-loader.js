$(function () {
  // Loads image into the canvas
  let imgInput = document.getElementById('file-upload');
  // Adds an event listener to the input
  imgInput.addEventListener('change', function (e) {
    if (e.target.files) {
      // Gets the image file
      let imageFile = e.target.files[0];
      var reader = new FileReader();
      reader.readAsDataURL(imageFile);
      reader.onloadend = function (e) {
        // Creates an image object
        var myImage = new Image();
        myImage.crossOrigin = '';
        // Assigns converted img to img object
        myImage.src = e.target.result;

        myImage.onload = function () {
          // Creates a canvas obj
          var myCanvas = document.getElementById("my-canvas");
          // Creates context obj
          var myContext = myCanvas.getContext("2d");
          // Img widht to canvas
          myCanvas.width = myImage.width;
          // Assigns img height to the canvas
          myCanvas.height = myImage.height;
          // Draws the img to the canvas
          myContext.drawImage(myImage, 0, 0);

          // Shows textarea
          toggleText(true);
        }
      }
    }
  });

  function toggleText(state) {

  }
})
