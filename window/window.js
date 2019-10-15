window.onload = function( ) {
  var output_div = document.getElementById( "demo" );

  var timer = 2000;
  var factor = 0.1;
  var increase = 1 / factor;

  function updateTimer( ) {
    timer += increase;

    if ( timer >= 5000 / factor ) {
      output_div.innerHTML = "GAME OVER";

      clearInterval( update_interval );
    } else {
      output_div.innerHTML = Math.floor( timer * factor ) + "ppm";
    }
  }

  var update_interval = setInterval( updateTimer, 100 );
}
