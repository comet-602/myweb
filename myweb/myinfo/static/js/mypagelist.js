$(function(){
    $('#fullpage').fullpage({
        paddingTop: '50px',
        anchors: ['homepage', 'page1', 'page2', 'page3','page4'],
        sectionsColor: ['#FFFFFF', '#FFFFFF', '#FFFFFF', '#FFFFFF','#FFFFFF'],
        menu: '#myMenu',
        lockAnchors: false,
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['homepage', 'page1', 'page2', 'page3','page4'],
        showActiveTooltip: false,
        slidesNavigation: false,
        slidesNavPosition: 'bottom',
    });
});
