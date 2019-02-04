(function($){

    function transform1() {
        document.body.style.webkitTransform = 
        document.body.style.MozTransform = 
        document.body.style.OTransform = "rotate(180deg)";
    }
    
    function transform2() {
        var css = document.createElement('style');
        css.type = 'text/css';
        var styles = '*:hover{' +
                '-moz-transition: all 1s ease;' +
                '-moz-transition: rotate(180deg);' +
                '-webkit-transition: all 1s ease;' +
                '-webkit-transform: rotate(180deg);' +
                '-o-transition: all 1s ease;' +
                '-o-transition: rotate(180deg);' +
            '}';
        if (css.styleSheet) {
            css.styleSheet.cssText = styles;
        } else {
            css.appendChild(document.createTextNode(styles));
            document.getElementsByTagName('head')[0].appendChild(css);
        }
    }
    
    $('#one').click(function() {
        transform1();

    });
    $('#two').click(function() {
        transform2();

    });

})(jQuery);
