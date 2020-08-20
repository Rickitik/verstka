// $(document).ready(function () {
//     if($(window).width()<480){$('#children_page').addClass('mobi')};
// });
var need_help = function(){
    var elem = document.getElementById("already_helped");
    var elem1 = document.getElementById("need_help");
    var elem2 = document.getElementsByClassName('already_help_children');
    var elem3 = document.getElementsByClassName('need_help_children');
    elem.classList.add("blue");
    elem1.classList.remove('blue');
    elem2.classList.add('inactive');
    elem3.classList.remove('inactive');
    document.getElementById("div1").classList.remove("classToBeRemoved");
    document.getElementById("div1").classList.remove("classToBeRemoved");
};
var already_help = function(){
    var elem = document.getElementById("already_helped");
    var elem1 = document.getElementById("need_help");
    var elem2 = document.getElementsByClassName('already_help_children');
    var elem3 = document.getElementsByClassName('need_help_children');
    elem.classList.remove("blue");
    elem1.classList.add('blue');
    elem2.classList.remove('inactive');
    elem3.classList.add('inactive');
};