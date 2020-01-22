import './typeahead.js';

const $ = require('jquery');

$(document).ready(function() {

    var $input = $(".typeahead");
    $input.typeahead(
    {
      name: 'product',
      limit: 8,
      minLength: 3,
      fitToElement: true,
      //autoSelect: false,
      selectOnBlur : false,
      source: function (q, sync, async) {
          $.ajax( { url : $('.typeahead').attr("data-suggest-url"),
                    method: "get",
                    data : {q: q},
                    dataType: 'json',
                    success: function(data, status){ console.log(data); async(data); }
                  }
                );
        },
      display: function(o) { return o; },
      updater : function(item) {
        this.$element[0].value = item;
        this.$element[0].form.submit();
        return item;
      }
    });

    $(".remove").click(function(){
        var kids = $('.removable');

        if($(this).hasClass('plus')) {
            //console.log(kids);
            kids.show();
            $(this).html("<i class=\"fas fa-minus-circle fa-lg\"></i>");
            $(this).removeClass("plus");
            kids.addClass("d-inline-block");
            $(this).addClass("moins");
        } else {
            kids.hide();
            $(this).html("<i class=\"fas fa-plus-circle fa-lg\"></i>");
            $(this).removeClass("moins");
            kids.removeClass("d-inline-block");
            $(this).addClass("plus");
        }
    });
});