function abrirFecharMenu(){
    var str = document.getElementById("nomeBotaoMenu").innerHTML;
    var arr = str.split(" ");
    var res = arr[0];
    
    if( res == "menu_open"){
        var menu = document.getElementById('menu');
        menu.className = "menuMostrar";

        var conteudos = document.getElementById('conteudosInformacoes');
        conteudos.className = "conteudosOcultar";
        
        var nomebotaoMenu = document.getElementById('nomeBotaoMenu');
        nomebotaoMenu.innerHTML = "close";
        var botaoMenu = document.getElementById('botaoMenu');
        botaoMenu.className = "botaoMenuClose";
    }
    else if( res == "menu"){
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

function mouseOver(){
    var str = document.getElementById("nomeBotaoMenu").innerHTML;
    var arr = str.split(" ");
    var res = arr[0];
    
    if( res == "menu"){
        var nomebotaoMenu = document.getElementById('nomeBotaoMenu');
        nomebotaoMenu.innerHTML = "menu_open";
        var botaoMenu = document.getElementById('botaoMenu');
        botaoMenu.className = "botaoMenuOver";
    }
}
function mouseOut(){
    var str = document.getElementById("nomeBotaoMenu").innerHTML;
    var arr = str.split(" ");
    var res = arr[0];
    
    if( res == "menu_open"){
        var nomebotaoMenu = document.getElementById('nomeBotaoMenu');
        nomebotaoMenu.innerHTML = "menu";
        var botaoMenu = document.getElementById('botaoMenu');
        botaoMenu.className = "botaoMenu";
    }
}


$('.conteudoNomeMenuConteudo').click(function(e){
    var menu = document.getElementById('menu');
    menu.className = "menu";

    var conteudos = document.getElementById('conteudosInformacoes');
    conteudos.className = "conteudos";

    var nomebotaoMenu = document.getElementById('nomeBotaoMenu');
    nomebotaoMenu.innerHTML = "menu";
    var botaoMenu = document.getElementById('botaoMenu');
    botaoMenu.className = "botaoMenu";

    
    /* Desabilita tag <a> */
    e.preventDefault();
    /* Variavel pra pegar o que tem dentro da tag <a> */
    var id = $(this).attr('href');
    /* Dist??ncia entre o conte??do da tag <a> at?? o top */
    targetOffset = $(id).offset().top;
    /* Pegar a altura do menu */
    menuHeight = $('.topo').innerHeight();
    /* Anima????o */
    $('html, body').animate({
        scrollTop: targetOffset - menuHeight
    },/*velocidade da anima????o*/900);
});


$('#linkBotaoInicioConteudo').click(function(e){
    /* Desabilita tag <a> */
    e.preventDefault();
    /* Variavel pra pegar o que tem dentro da tag <a> */
    var id = $(this).attr('href');
    /* Dist??ncia entre o conte??do da tag <a> at?? o top */
    targetOffset = $(id).offset().top;
    /* Pegar a altura do menu */
    menuHeight = $('.topo').innerHeight();
    /* Anima????o */
    $('html, body').animate({
        scrollTop: targetOffset - menuHeight
    },/*velocidade da anima????o*/900);
});


$('#menuConteudo1').hover(function(){
    $('#menuConteudo1 .conteudoNomeMenuConteudo').toggleClass('conteudoNomeMenuConteudoHover');
});
$('#menuConteudo2').hover(function(){
    $('#menuConteudo2 .conteudoNomeMenuConteudo').toggleClass('conteudoNomeMenuConteudoHover');
});
$('#menuConteudo3').hover(function(){
    $('#menuConteudo3 .conteudoNomeMenuConteudo').toggleClass('conteudoNomeMenuConteudoHover');
});
$('#menuConteudo4').hover(function(){
    $('#menuConteudo4 .conteudoNomeMenuConteudo').toggleClass('conteudoNomeMenuConteudoHover');
});
$('#menuConteudo5').hover(function(){
    $('#menuConteudo5 .conteudoNomeMenuConteudo').toggleClass('conteudoNomeMenuConteudoHover');
});
$('#menuConteudo6').hover(function(){
    $('#menuConteudo6 .conteudoNomeMenuConteudo').toggleClass('conteudoNomeMenuConteudoHover');
});
$('#menuConteudo7').hover(function(){
    $('#menuConteudo7 .conteudoNomeMenuConteudo').toggleClass('conteudoNomeMenuConteudoHover');
});
$('#menuConteudo8').hover(function(){
    $('#menuConteudo8 .conteudoNomeMenuConteudo').toggleClass('conteudoNomeMenuConteudoHover');
});
$('#menuConteudo9').hover(function(){
    $('#menuConteudo9 .conteudoNomeMenuConteudo').toggleClass('conteudoNomeMenuConteudoHover');
});
