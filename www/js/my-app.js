// Initialize app
var myApp = new Framework7({

    modalTitle: 'MyDreamGaadi',
    material:true,
    // materialPreloaderHtml:'<span class="preloader-inner-half-circle"></span>',
    swipePanel:'left',

    onAjaxStart: function (xhr) {
        myApp.showIndicator();
    },
    onAjaxComplete: function (xhr) {
        myApp.hideIndicator();
    }



});


var $$ = Dom7;

var mainView = myApp.addView('.view-main', {
    // Because we want to use dynamic navbar, we need to enable it for this view:
    domCache:true
});


$$(document).on('deviceready', function() {
    console.log("Device is ready!");

});


myApp.onPageInit('index', function (page) {




});