# BlazorFocusTrap

Blazor Interop for https://github.com/focus-trap/focus-trap

## Install with Nuget Package Manager

```
Install-Package BlazorFocusTrap -Version 0.0.3
```

## Include dependencies from original javascript focus-trap

- For Server Side Blazor include the following scripts into Pages/_Host.cshtml.  
- For Webassembly include the following scripts into wwwroot/index.html.
```html
  <script src="https://unpkg.com/tabbable/dist/index.umd.js"></script>
  <script src="https://unpkg.com/focus-trap/dist/focus-trap.umd.js"></script>
```

## Import the namespace in _Imports.razor.
```
@using BlazorFocusTrap
```

## Useage
```html
  <FocusTrap>
      Only elements inside can be selected/tabbed
  </FocusTrap>
```
For more examples see [demo project](https://github.com/Xeddon/BlazorFocusTrap/blob/master/Demo/Pages/Index.razor).

## New functions
- If you need more methods from original focus-trap you can request for feature or contribute it.