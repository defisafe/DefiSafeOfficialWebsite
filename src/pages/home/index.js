/* eslint-disable */
import 'normalize.css';
import '../../style/reset.less';
import './index.less';
import 'lib-flexible';
import '../../tools/slideout.min.js';

$('.launch-btn').click(function() {
    window.location.href = './app';
})

$('.mobile-menu-toggle').click(function() {
    $('.slide-menu').animate({
        left: 0
    }, 'normal');
})

$('.close-icon').click(function() {
    $('.slide-menu').animate({
        left: '100%'
    }, 'normal');
})
