$(function () {
// listen for change on the sliders
$("input[type=range]").change(applyFilters);
  function applyFilters() {
    var hue = parseInt($('#hue-range').val());
   console.log(typeof(hue));
    var brightness = parseInt($('#brightness-range').val());
    var vibrance = parseInt($('#vibrance-range').val());
    var gamma = parseFloat($('#gamma-range').val());
    console.log(gamma);

    Caman('#my-canvas', function() {
      this.revert(false);
      this.hue(hue);
      this.brightness(brightness);
      this.vibrance(vibrance);
      this.gamma(gamma);
      this.render();
    })
  }
})

 


function sepiaInc () {
  Caman('#my-canvas', function() {
    this.sepia(10)
    .render();
  })
}