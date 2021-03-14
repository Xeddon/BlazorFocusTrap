# BlazorFocusTrap

Blazor Interop for https://github.com/focus-trap/focus-trap

## Installation

```
npm install BlazorFocusTrap
```

```html
<head>
  <script src="https://unpkg.com/tabbable/dist/index.umd.js"></script>
  <script src="https://unpkg.com/focus-trap/dist/focus-trap.umd.js"></script>
  <script src="_content/BlazorFocusTrap/scripts.js"></script>
</head>
```

```html
 <FocusTrap>
     <input @bind="Number" class="form-control"/>
 </FocusTrap>
```
