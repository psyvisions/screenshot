var page = require('webpage').create();
var system = require('system');
var args = system.args;


//see api here: http://phantomjs.org/api/webpage/
page.viewportSize = {
  width: 810,
  height: 2000
};

try {
    page.open(args[1], function(){
        // COI Templates
        var url = args[1];
        var patt = /[0-9]/g;
        var pk = url.match(patt).join('');

        page.includeJs("http://ajax.googleapis.com/ajax/libs/jquery/1.6.1/jquery.min.js", function() {
            page.evaluate(function() {
              //Disable scrollbars  
              $('.scrollableArea').css({
                overflow: "hidden",
                width: "101%",
              });
            });


            page.render('img/screen-'+ pk +'.jpg', {format: 'jpeg', quality: '90'});
            phantom.exit();
        });
    

    });
}
catch(err) {
    console.log(err);
}