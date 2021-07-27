function filter() {
    //get class to view
    var viewClass = document.getElementById("shot-choice").value;
    // hide all
    var all = document.getElementsByClassName('wrapper-cell');
    for (var i = 0; i < all.length; i++) {
        if (viewClass != "all") { all[i].style.display = 'none'; }
        else { all[i].style.display = 'block'; }
    }
    // show chosen	
    if (viewClass != "all") {
        var matches = document.getElementsByName(viewClass);
        for (var i = 0; i < matches.length; i++) {
            matches[i].style.display = 'block';
        }
    }
}