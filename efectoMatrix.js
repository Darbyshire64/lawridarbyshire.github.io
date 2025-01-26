// Getting the canvas from the html and also the context
const matrixCodeSpace = document.getElementById( "matrixCodeSpace" );
const matrixContext = matrixCodeSpace.getContext( "2d" );
// Setting the canvas width same as the page width
matrixCodeSpace.width = document.body.offsetWidth;
// Getting the canvas width and height to now work with them from now on
const width = matrixCodeSpace.width;
const height = matrixCodeSpace.height;
// Filling the background with pure black
matrixContext.fillStyle = "#000";
matrixContext.fillRect( 0, 0, width, height );
// Setting 20 columns and all y positions on 0
const columns = Math.floor( width / 20 ) + 1;
const yPosition = Array( columns ).fill( 0 );

function matrix()
{   // Painting the canvas background with black but on a really low opacity, just 1 as value, and these paintings are gonna stack and very progressively hidding the one underneath
    matrixContext.fillStyle = "#0001";
    matrixContext.fillRect( 0, 0, width, height );
    // Choosing the green color for the emerging appearing chars and setting a font
    matrixContext.fillStyle = "#0f0";
    matrixContext.font = "15pt monospace";
    
    yPosition.forEach( ( y, index ) =>
    {   // For every 'y' position of every column, generate a random char and set it on the right spot
        const text = String.fromCharCode( Math.random() * 128 );
        const x = index * 20;
        matrixContext.fillText( text, x, y );
        // Now, if y position is > 100 the cursor returns on 0
        if( y > 100 + Math.random() * 10000 )
            yPosition[index] = 0;
        else // otherwise, it increments by 20
            yPosition[index] = y + 20;
    } );
}
// Finally, setting the matrix function to execute every 50 milliseconds in a loop
setInterval( matrix, 50 );
