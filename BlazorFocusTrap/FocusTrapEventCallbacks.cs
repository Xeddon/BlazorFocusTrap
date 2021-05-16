using Microsoft.AspNetCore.Components;
using Microsoft.JSInterop;
using System.Threading.Tasks;

namespace BlazorFocusTrap
{
    internal class FocusTrapEventCallbacks
    {
        public EventCallback OnActivate { get; set; }
        public EventCallback OnDeactivate { get; set; }

        [JSInvokable]
        public async Task CallbackOnActivateAsync() => await OnActivate.InvokeAsync();

        [JSInvokable]
        public async Task CallbackOnDeactivateAsync() => await OnDeactivate.InvokeAsync();
    }
}