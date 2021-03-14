window.blazorFocusTrap = {
    start: (focusElementList) => {
        if (window.blazorFocusTrap.isActive)
            return;
        window.blazorFocusTrap.isActive = true;
        window.blazorFocusTrap.trap = focusTrap.createFocusTrap(focusElementList);
        window.blazorFocusTrap.trap.activate();
    },
    stop: () => {
        if (window.blazorFocusTrap.trap)
            window.blazorFocusTrap.trap.deactivate();
        window.blazorFocusTrap.isActive = false;
    }
};