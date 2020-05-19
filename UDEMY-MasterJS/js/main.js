$(document).ready(function(){

    //Slider
    if (window.location.href.indexOf('index') > -1) {
    $('.imagenes').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 900
        });
    }
    //Posts
    if (window.location.href.indexOf('index') > -1) {
        var posts = [
            {
                title: 'Titulo de Articulo 1',
                date: 'Publicado el dia ' + moment().format("DD MMMM YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo mauris, molestie et eleifend nec, sodales nec dolor. Phasellus porta lacus ac tellus venenatis, non ultrices purus mattis. Vivamus purus nunc, congue non nulla eu, ullamcorper efficitur nunc. Aenean nibh felis, gravida ut nunc ut, tincidunt consequat ex. Curabitur congue diam eu nunc commodo pulvinar sit amet nec eros. Vivamus eget dapibus risus. Aenean ut risus nibh. Nam consectetur a quam vitae vehicula.'
            },
            {
                title: 'Titulo de Articulo 2',
                date: 'Publicado el dia ' + moment().format("DD MMMM YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo mauris, molestie et eleifend nec, sodales nec dolor. Phasellus porta lacus ac tellus venenatis, non ultrices purus mattis. Vivamus purus nunc, congue non nulla eu, ullamcorper efficitur nunc. Aenean nibh felis, gravida ut nunc ut, tincidunt consequat ex. Curabitur congue diam eu nunc commodo pulvinar sit amet nec eros. Vivamus eget dapibus risus. Aenean ut risus nibh. Nam consectetur a quam vitae vehicula.'
            },
            {
                title: 'Titulo de Articulo 3',
                date: 'Publicado el dia ' + moment().format("DD MMMM YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo mauris, molestie et eleifend nec, sodales nec dolor. Phasellus porta lacus ac tellus venenatis, non ultrices purus mattis. Vivamus purus nunc, congue non nulla eu, ullamcorper efficitur nunc. Aenean nibh felis, gravida ut nunc ut, tincidunt consequat ex. Curabitur congue diam eu nunc commodo pulvinar sit amet nec eros. Vivamus eget dapibus risus. Aenean ut risus nibh. Nam consectetur a quam vitae vehicula.'
            },
            {
                title: 'Titulo de Articulo 4',
                date: 'Publicado el dia ' + moment().format("DD MMMM YYYY"),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus leo mauris, molestie et eleifend nec, sodales nec dolor. Phasellus porta lacus ac tellus venenatis, non ultrices purus mattis. Vivamus purus nunc, congue non nulla eu, ullamcorper efficitur nunc. Aenean nibh felis, gravida ut nunc ut, tincidunt consequat ex. Curabitur congue diam eu nunc commodo pulvinar sit amet nec eros. Vivamus eget dapibus risus. Aenean ut risus nibh. Nam consectetur a quam vitae vehicula.'
            }
        ];

        posts.forEach((item, index) => {
            var post = `
                <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>
                     ${item.content}
                    </p>
                    <a href="#" class="button-more">Leer mas</a>
                </article>
                `;
            $("#posts").append(post);
        });
    }

    //Selector de temas
    var theme = $('#theme');

    $('#to-green').click(function() {
        theme.attr('href', 'css/green.css');
    });
    $('#to-blue').click(function() {
        theme.attr('href', 'css/blue.css');
    });
    $('#to-red').click(function() {
        theme.attr('href', 'css/red.css');
    });

    //Scroll arriba de la web
    $('.subir').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

  //Reloj
    if (window.location.href.indexOf('reloj') > -1) {

        setInterval(function () {
            var reloj = moment().format("hh:mm:ss");
            $('#reloj').html(reloj);
        }, 1000);
    }


    //Validacion
    if (window.location.href.indexOf('contact') > -1) {

        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollTopOnError: true,
        });
    }

});


