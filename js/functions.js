$(document).ready(function () {
    let dialogBox = document.querySelector('#dialog');

    $('#dialog').hide();

    setTimeout(function () {
        $('#typing').hide();
        $('#dialog').show();
    }, 3000);

    function change() {
        $('#typing').show();
        $('#dialog').hide();

        setTimeout(function () {
            $('#typing').hide();
            $('#dialog').show();
        }, 2000);
    }

    $('.op-1').on('click', function () {
        $(this).attr('disabled', true);
        dialogBox.innerHTML = '<p>Claro! você pode acessar <a class="links" href="./about.html">Aqui</a> e conhecer melhor toda a minha trajetória nessa loucura de desenvolvimento.</p>';
        change();
    });

    $('.op-2').on('click', function () {
        $(this).attr('disabled', true);
        dialogBox.innerHTML = '<p class="tech-languages"><a class="language" href="https://www.w3.org/html/" target="_blank"><img alt="HTML" src="./assets/languages/html.png" width="32" height="32"/></a><a class="language" href="https://www.w3schools.com/css/" target="_blank"><img alt="CSS" src="./assets/languages/css.webp" width="32" height="32"/></a><a class="language" href="https://www.w3schools.com/js/" target="_blank"><img class="language" alt="js" src="./assets/languages/javascript.svg" width="32" height="32"/></a><a class="language" href="https://sass-lang.com" target="_blank"><img alt="sass" src="./assets/languages/sass.png" width="32" height="32"/></a><a class="language" href="https://www.php.net/" target="_blank"><img alt="php" src="./assets/languages/php.png" width="32" height="32"/></a><a class="language" href="https://jquery.com" target="_blank"><img alt="Jquery" src="./assets/languages/jquery.png" width="32" height="32"/></a><a class="language" href="https://nodejs.org" target="_blank"><img alt="node" src="./assets/languages/nodejs.png" width="32" height="32"/></a></p>';
        change();
    });

    $('.op-3').on('click', function () {
        $(this).attr('disabled', true);
        dialogBox.innerHTML = '<p>Atualmente estou trabalhando como Frontend em uma plataforma de e-commerce incrível chamada <a class="links" href="https://www.magazord.com.br">Magazord</></p>';
        change();
    });

    $('.op-4').on('click', function () {
        $(this).attr('disabled', true);
        dialogBox.innerHTML = '<p>Contato: <img class="" src="" alt="" width="32" height="32" /></p>';
        change();
    });

    $('.op-5').on('click', function () {
        $(this).attr('disabled', true);
        dialogBox.innerHTML = '<p>Além do grande amor com a tecnologia, sou apaixonado por desenhar, jogar, assistir filmes e ouvir música!</p>';
        change();
    });
});