function search() { 
    // var count = 0; 
    // var key = document.getElementById("key").value.toLowerCase().charAt( 0 ); 
    // var key = key.toLowerCase(); 
    // var stringToSearch = "Mary had a little lamb"; 
    // var stringToSearch = stringToSearch.toLowerCase(); 
    for ( i = 0; i < stringToSearch.length; i++) { 
        if (stringToSearch.charAt(i) == key) {
            count++;
        }
    }

    if ( count == 0 ) {
        document.getElementById("output").value = key + " not found"; 
    } else { 
        document.getElementById("output").value = `${count} occurrence(s) of ${key} found`;

    }
}