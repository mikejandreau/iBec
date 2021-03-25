// CLASS HELPERS 
// Plain JavaScript functions to enable jQuery-like controls over class manipulation
function hasClass(elem, className) {
    return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
}
function addClass(elem, className) {
    if (!hasClass(elem, className)) {
        elem.className += ' ' + className;
    }
}
function removeClass(elem, className) {
    var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
    if (hasClass(elem, className)) {
        while (newClass.indexOf(' ' + className + ' ') >= 0) {
            newClass = newClass.replace(' ' + className + ' ', ' ');
        }
        elem.className = newClass.replace(/^\s+|\s+$/g, '');
    }
}

// CONTENT TOGGLING
// Show or hide the content by clicking the button
var contentToggler = document.querySelector('.open_card__content');
var cardContent = document.querySelector('.card__content');

// Set initial WAI-ARIA values for content section and toggle button
if (window.innerWidth > 1200) {
    // Do nothin'

} else {
    contentToggler.setAttribute( 'aria-expanded', 'false' );
    cardContent.setAttribute( 'aria-expanded', 'false' );

    // Toggle content and set WAI-ARIA values when chevron is clicked
    contentToggler.onclick = function() {
        if (hasClass(cardContent, 'card_open')) {
            removeClass(contentToggler, 'card_open'); 
            removeClass(cardContent, 'card_open');
            contentToggler.setAttribute( 'aria-expanded', 'false' );
            cardContent.setAttribute( 'aria-expanded', 'false' );
        } else {
            addClass(contentToggler, 'card_open'); 
            addClass(cardContent, 'card_open');
            contentToggler.setAttribute( 'aria-expanded', 'true' );
            cardContent.setAttribute( 'aria-expanded', 'true' );
        }
    };
}

