// GALLERY 
// number argument is passed through from onclick event in the html page

function popUp(pop,number) {
    var toggleGallery = document.getElementById('gallery' + number);
    var blanket = document.getElementById('blanket');
    
    if(toggleGallery.className == 'hide') {
        toggleGallery.className = 'show'; 
        blanket.className = 'show'; 
    }
    
    else if (toggleGallery.className == 'show') {
        toggleGallery.className = 'hide'; 
        blanket.className = 'hide'; 
    }
}