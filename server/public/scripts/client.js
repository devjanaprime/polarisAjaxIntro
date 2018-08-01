$( document ).ready( readyNow );
let verbose = true;

function readyNow(){
    $( '#getButton' ).on( 'click', getStuff );
} // end readyNow

function getStuff(){
    if( verbose ) console.log( 'in getStuff' );
    $.ajax({
        method: 'GET',
        url: '/stuff'
    }).done( function( response ){
        if( verbose ) console.log( 'back from server with:', response );
        let outputElement = $( '#noisesOut' );
        outputElement.empty();
        for( noise of response ){
            outputElement.append( '<li>' + noise + '</li>' );
        } // end for
    }).fail( function( error ){
        if( verbose ) console.log( 'error with AJAX request:', error );
    }) // end ajax
} // end getStuff