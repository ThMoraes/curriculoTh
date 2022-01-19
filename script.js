function abrirFecharMenu(){    
    var str = document.getElementById("nomeBotaoMenu").innerHTML;
    var arr = str.split(" ");
    var res = arr[0];
    
    if( res == "menu"){
        var menu = document.getElementById('menu');
        menu.className = "menuMostrar";

        var conteudos = document.getElementById('conteudosInformacoes');
        conteudos.className = "conteudosOcultar";

        
        var nomebotaoMenu = document.getElementById('nomeBotaoMenu');
        nomebotaoMenu.innerHTML = "close";
        var botaoMenu = document.getElementById('botaoMenu');
        botaoMenu.className = "botaoMenuClose";
    }
    else{
        var menu = document.getElementById('menu');
        menu.className = "menu";

        var conteudos = document.getElementById('conteudosInformacoes');
        conteudos.className = "conteudos";

        
        var nomebotaoMenu = document.getElementById('nomeBotaoMenu');
        nomebotaoMenu.innerHTML = "menu";
        var botaoMenu = document.getElementById('botaoMenu');
        botaoMenu.className = "botaoMenu";
    }
};




$('.nomeBotaoMenuClose').click(function(e){
    /* Desabilita tag <a> */
    e.preventDefault();

    $('.menu').toggleClass('menuMostrar');
    $('.conteudos').toggleClass('conteudosOcultar');
    
    $('.nomeBotaoMenu').toggleClass('nomeBotaoMenuOcultar');
    $('.nomeBotaoMenuClose').toggleClass('nomeBotaoMenuCloseMostrar');
    

});


$('.conteudoNomeMenuPagina').click(function(e){
    $('.menu').toggleClass('menuMostrar');
    $('.conteudos').toggleClass('conteudosOcultar');
    
    $('.nomeBotaoMenu').toggleClass('nomeBotaoMenuOcultar');
    $('.nomeBotaoMenuClose').toggleClass('nomeBotaoMenuCloseMostrar');

    
    /* Desabilita tag <a> */
    e.preventDefault();
    /* Variavel pra pegar o que tem dentro da tag <a> */
    var id = $(this).attr('href');
    /* Distância entre o conteúdo da tag <a> até o top */
    targetOffset = $(id).offset().top;
    /* Pegar a altura do menu */
    menuHeight = $('.topo').innerHeight();
    /* Animação */
    $('html, body').animate({
        scrollTop: targetOffset - menuHeight
    },/*velocidade da animação*/900);
});


    $('#linkBotaoInicioPagina').click(function(e){   
        /* Desabilita tag <a> */
        e.preventDefault();
        /* Variavel pra pegar o que tem dentro da tag <a> */
        var id = $(this).attr('href');
        /* Distância entre o conteúdo da tag <a> até o top */
        targetOffset = $(id).offset().top;
        /* Pegar a altura do menu */
        menuHeight = $('.topo').innerHeight();
        /* Animação */
        $('html, body').animate({
            scrollTop: targetOffset - menuHeight
        },/*velocidade da animação*/900);
    });





$('#menuPagina1').hover(function(){
    $('#menuPagina1 .conteudoNomeMenuPagina').toggleClass('conteudoNomeMenuPaginaHover');
});
$('#menuPagina2').hover(function(){
    $('#menuPagina2 .conteudoNomeMenuPagina').toggleClass('conteudoNomeMenuPaginaHover');
});
$('#menuPagina3').hover(function(){
    $('#menuPagina3 .conteudoNomeMenuPagina').toggleClass('conteudoNomeMenuPaginaHover');
});
$('#menuPagina4').hover(function(){
    $('#menuPagina4 .conteudoNomeMenuPagina').toggleClass('conteudoNomeMenuPaginaHover');
});
$('#menuPagina5').hover(function(){
    $('#menuPagina5 .conteudoNomeMenuPagina').toggleClass('conteudoNomeMenuPaginaHover');
});
$('#menuPagina6').hover(function(){
    $('#menuPagina6 .conteudoNomeMenuPagina').toggleClass('conteudoNomeMenuPaginaHover');
});
$('#menuPagina7').hover(function(){
    $('#menuPagina7 .conteudoNomeMenuPagina').toggleClass('conteudoNomeMenuPaginaHover');
});
$('#menuPagina8').hover(function(){
    $('#menuPagina8 .conteudoNomeMenuPagina').toggleClass('conteudoNomeMenuPaginaHover');
});
$('#menuPagina9').hover(function(){
    $('#menuPagina9 .conteudoNomeMenuPagina').toggleClass('conteudoNomeMenuPaginaHover');
});
