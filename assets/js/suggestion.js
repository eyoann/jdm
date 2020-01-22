import './typeahead.js';

const $ = require('jquery');

$(document).ready(function() {

    var $input = $(".typeahead");
    $input.typeahead(
    {
      name: 'product',
      limit: 8,
      minLength: 3,
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

    console.log($input.attr("data-suggest-url"));

    console.log("toto");
    /*

    $('.typeahead').typeahead(
      {
        hint: false,
        highlight: true,
        minLength: 2,
        classNames: {
            input: 'tt-input',
            hint: 'tt-hint',
            dataset: 'tt-dataset',
            suggestion: 'tt-suggestion',
            empty: 'tt-empty',
            open: 'tt-open',
            cursor: 'tt-cursor',
            highlight: 'tt-highlight',
            menu: 'tt-menu'
        }
      },
      {
        name: 'product',
        limit: 8,
        source: function (q, sync, async) {
          $.ajax( { url : $('.typeahead').attr("data-suggest-url"),
                    method: "get",
                    data : {q: q},
                    dataType: 'json',
                    success: function(data, status){ console.log(data); async(data); }
                  }
                );
        },
        display: function(o) { return o.name; },
        templates: {
          suggestion: function (data) {
            var ret;

            if (data.type == 'category') {
              ret  = "<div class = 'suggest-category'>";
              ret += "<a href='" + data.url + "'>" + data.name + '</a>';
              ret += "</div>";
            }
            else {
              ret  = "<div class = 'suggest-product'>";
              ret += "<div class='product-image'><img src='" + data.picture[0].url + "'/></div>";
              ret += "<p><strong><a href='" + data.url + "'>" + data.name + "</a></strong><br>";
              ret += "A partir de <strong>" + data.price + '</strong> €HT</p>';
              ret += "</div>";
            }

            return ret;
          },
          notFound: function () {
            var ret;
            ret  = "<div class = 'suggest-nothing'>Aucune suggestion.</div>";
            return ret;
          }
        }
      });
      $('.twitter-typeahead, .typeahead').attr('style','');
    */
});