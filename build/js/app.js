!function n(r,o,e){function t(i,p){if(!o[i]){if(!r[i]){var a="function"==typeof require&&require;if(!p&&a)return a(i,!0);if(u)return u(i,!0);var f=new Error("Cannot find module '"+i+"'");throw f.code="MODULE_NOT_FOUND",f}var s=o[i]={exports:{}};r[i][0].call(s.exports,function(n){var o=r[i][1][n];return t(o||n)},s,s.exports,n,r,o,e)}return o[i].exports}for(var u="function"==typeof require&&require,i=0;i<e.length;i++)t(e[i]);return t}({1:[function(n,r,o){function e(n){this.skin=n}e.prototype.pingPong=function(n){for(var r=[],o=1;o<=n;o++)o%15==0?r.push("ping-pong"):o%3==0?r.push("ping"):o%5==0?r.push("pong"):r.push(o);return r},o.calculatorModule=e},{}],2:[function(n,r,o){var e=n("./../js/pingpong.js").calculatorModule;$(document).ready(function(){new e("a string").pingPong(1e3)}),$(document).ready(function(){$("#signup").submit(function(n){n.preventDefault();var r=$("#email").val();$("#signup").hide(),$("#solution").prepend("<p>Thank you, "+r+" has been added to our list!</p>")})})},{"./../js/pingpong.js":1}]},{},[2]);