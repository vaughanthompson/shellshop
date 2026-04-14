    $(document).ready(function(){
        $.localScroll({
                target: 'body',
                queue: false,
                hash: false,
                duration: 500,
                easing: 'easeOutQuad'
        });



        $('a#toTop').css('opacity','0');
        new Waypoint({
        element: document.getElementsByTagName('main'),
        handler: function(direction) {
            if (direction === 'down') {
                $('a#toTop').fadeTo(1000,'1.0');
            }
            else {
                $('a#toTop').fadeTo(1000,'0');
            }
        },
            offset: '-150%'
        })

      

        // Mobile Navigation
        $('#navClose').hide();

        $('#navClose').click(function(){
            $(this).hide();
            $('#navCart').show();
            $('#navTrigger').show();
            $("div.mblnavContainer").scrollTo(0);
            $('div.mblnav').hide();
            $('html, body').removeClass('noscroll');
            return false;
        });

        $('#navTrigger').click(function(){
            $(this).hide();
            $('#navCart').hide();
            $('#navClose').show();
            $('div.mblnav').fadeTo(400,1);
            $('html, body').addClass('noscroll');
            return false;

        });




    }); 
