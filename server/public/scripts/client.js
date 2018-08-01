$( document ).ready( readyNow );

function readyNow(){
    $( '#getButton' ).on( 'click', getStuff );
} // end readyNow

function getStuff(){
    console.log( 'in getStuff' );
    $.ajax({
        method: 'GET',
        url: '/stuff'
    })
} // end getStuff