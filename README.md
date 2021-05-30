# BlazorFocusTrap

Blazor Interop for https://github.com/focus-trap/focus-trap

## Installation

```
npm install BlazorFocusTrap
```

## Include dependencies from javascript focus-trap

For Server Side Blazor include the following scripts into Pages/_Host.cshtml.
For Webassembly include the following scripts into wwwroot/index.html.
```html
  <script src="https://unpkg.com/tabbable/dist/index.umd.js"></script>
  <script src="https://unpkg.com/focus-trap/dist/focus-trap.umd.js"></script>
```

## Include using in _Imports.razor.
```
@using BlazorFocusTrap
```

## Useage
```html
  <FocusTrap>
      Only elements inside can be selected/tabbed
  </FocusTrap>
```
For more examples see Demo/Pages/Index.razor.

## New functions
- If you need more methods from original focus-trap you can request for feature or contribute it.