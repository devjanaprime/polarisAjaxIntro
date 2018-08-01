// requires
const express = require( 'express' );
const app = express();

// uses
app.use( express.static( 'server/public' ) );

// globals
const port = 5000;

// spin up server
app.listen( port, ()=>{
    console.log( 'server up on:', port );
}) // end spin up server

// basic route for stuff
app.get( '/stuff', ( req, res )=>{
    console.log( '/stuff GET hit' );
    res.send( 'ribbet' );
}) // end /stuff GET 