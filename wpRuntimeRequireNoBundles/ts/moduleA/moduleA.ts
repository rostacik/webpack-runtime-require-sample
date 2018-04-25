import $ from "jquery";

export function moduleAFn1(): void {
    console.log("module a func 1");
    $("#innerDiv").text("inner div change");
}