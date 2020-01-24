const $ = require('jquery');

$(document).ready(function() {

    $('#checkall').click(function() {
        $("input:checkbox").prop('checked', $(this).prop("checked")).trigger('change');
    });

    $(':checkbox').change(function() {
        var id = $(this).attr('id');
        if($(this).is(":checked")) {
            $('#asso-' + id).show();
        } else {
            $('#asso-' + id).hide();
        }
    });

    $(".scroller").click(function() {
        $scrollTo = $('#asso-'+ $(this).attr("data-id"));
        $([document.documentElement, document.body]).animate({
            scrollTop: $scrollTo.offset().top
        }, 1000);
    });

    $(document).scroll(function() {

      if ($(this).scrollTop() >= 300) {


        $('#return-to-top').fadeIn(200);
      } else {


        $('#return-to-top').fadeOut(200);
      }

    });

    $('#return-to-top').click(function() {
      $('body,html').animate({
        scrollTop: 0
      }, 500, 'swing');
    });

    $(".remove").click(function(){
        var id = $(this).attr("data-id");
        if($(this).hasClass('plus')) {
            $("#" + id).show();
            $(this).html("<i class=\"fas fa-minus-circle fa-lg\"></i>");
            $(this).removeClass("plus");
            $(this).addClass("moins");
        } else {
            $("#" + id).hide();
            $(this).html("<i class=\"fas fa-plus-circle fa-lg\"></i>");
            $(this).removeClass("moins");
            $(this).addClass("plus");
        }
    });

    $(".defs").click(function(){
        if($(this).hasClass('plus')) {
            $(".def").show();
            $(this).html("<i class=\"fas fa-minus-circle fa-lg\"></i>");
            $(this).removeClass("plus");
            $(this).addClass("moins");
        } else {
            $(".def").hide();
            $(this).html("<i class=\"fas fa-plus-circle fa-lg\"></i>");
            $(this).removeClass("moins");
            $(this).addClass("plus");
        }
    });
});