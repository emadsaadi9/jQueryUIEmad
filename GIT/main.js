$( function() {
    $( "#accordion" ).accordion();

    $("#accordion") .on( "accordionactivate", function(event, ui ) {
        $("div").css({"background-color" : "yellow"});
        $("h3").css({"background-color" : "blue"});
        ui.oldHeader.css({backgroundColor : "green"});
        ui.oldPanel.css({backgroundColor : "pink"});
    } );





} );












  