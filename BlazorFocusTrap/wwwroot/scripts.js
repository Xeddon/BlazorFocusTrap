"use strict";

var blazorFocusTrap;

export function createFocusTrap(element, dotNetObjectReference, autoActivate) {
    if (typeof window.focusTrap === "undefined")
        throw "focusTrap is undefined.";

    blazorFocusTrap = window.focusTrap.createFocusTrap(element, {
        onActivate: function () {
            dotNetObjectReference.invokeMethodAsync("CallbackOnActivateAsync");
        },
        onDeactivate: function () {
            dotNetObjectReference.invokeMethodAsync("CallbackOnDeactivateAsync");
        }
    });
    if (autoActivate)
        blazorFocusTrap.activate();
}
export function activate() {
    blazorFocusTrap.activate();
}
export function deactivate() {
    blazorFocusTrap.deactivate();
}