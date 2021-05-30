"use strict";

var blazorFocusTrap = [];

export function createFocusTrap(element, id, dotNetObjectReference, autoActivate) {
    if (typeof window.focusTrap === "undefined")
        throw "focusTrap is undefined.";

    blazorFocusTrap[id] = window.focusTrap.createFocusTrap(element, {
        onActivate: function () {
            dotNetObjectReference.invokeMethodAsync("CallbackOnActivateAsync");
        },
        onDeactivate: function () {
            dotNetObjectReference.invokeMethodAsync("CallbackOnDeactivateAsync");
        }
    });
    if (autoActivate)
        blazorFocusTrap[id].activate();
}
export function activate(id) {
    blazorFocusTrap[id].activate();
}
export function deactivate(id) {
    blazorFocusTrap[id].deactivate();
}