
// Through one() we cannot access username of func two() because name is only accessible within the scope two() but we can have 
// access to username by calling function two() because usename has access within the whole scope one ()
function one(){
    const username = "Prashant"

    function two(){
        const name = "Rahul"
        console.log(username);
    }
    //console.log(name);
    two()
}

one()
