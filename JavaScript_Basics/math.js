function operations(number) {
    console.log( Math.ceil(number) );   //Ceil rounds to the next integer
    console.log( Math.floor(number) );  //rounds to the integer before
    console.log( Math.sin(number) );    //calculate sine value
    console.log( Math.cos(number) );    // calculate cosine value
    console.log( Math.min(number, number+2) );    //finds minimum of two
    console.log( Math.max(number, number+2) );    //finds maximum of two
    console.log( Math.random() );       //finds random value
}

operations(45.001);     //calling function
