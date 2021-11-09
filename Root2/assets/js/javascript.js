$(document).ready(function(){
    var images=new Array('assets/article-1-img/open-book-1024x576.png','assets/img/chrome-extension.png','assets/img/morning-sun-1920x1280.jpg');
    var nextimage=0;

    doSlideshow();

    function doSlideshow()
    {   
        if($('.slideshowimage').length!=0)
        {
             $('.slideshowimage').fadeOut(500,function(){slideshowFadeIn();$(this).remove()});
        }
        else
        {
            slideshowFadeIn();
        }
    }
    function slideshowFadeIn()
    {
        $('.slideshow').prepend($('<img class="slideshowimage" src="'+images[nextimage++]+'" style="display:none">').fadeIn(500,function(){setTimeout(doSlideshow,1000);}));
        if(nextimage>=images.length)
                nextimage=0;
    }
    
    var interval = setInterval(function() {
        var momentNow = moment();
        $('#date-part').html(momentNow.format('YYYY MMMM DD') + ' '
                            + momentNow.format('dddd')
                             .substring(0,3).toUpperCase());
        $('#time-part').html(momentNow.format('A hh:mm:ss'));
    }, 100);
    
            
    var contactform =  document.getElementById('contact-form');
    contactform.setAttribute('action', 'https:' + '//formspree.io/' + 'trandonhau1811' + '@' + 'gmail' + '.' + 'com');

}) 
