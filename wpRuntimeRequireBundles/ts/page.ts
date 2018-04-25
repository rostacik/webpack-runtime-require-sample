import $ from "jquery";
import { moduleAFn1 } from "./moduleA/moduleA";

declare var __webpack_require__: any;
(<any>window).webpackData = __webpack_require__;
import "webpack-runtime-require";

$(() => {
    $("#btn1").click((ev) => {
        alert("click button 1");
    });

    $("#btn2").click((ev) => {
        alert("click button 2");
    });

    $("#btn3").click((ev) => {
        moduleAFn1();
    });
});