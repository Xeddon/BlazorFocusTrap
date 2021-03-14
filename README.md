# BlazorFocusTrap

Blazor Interop for https://github.com/focus-trap/focus-trap

## Installation

```
npm install BlazorFocusTrap
```

## Include scripts
```html
<head>
  <script src="https://unpkg.com/tabbable/dist/index.umd.js"></script>
  <script src="https://unpkg.com/focus-trap/dist/focus-trap.umd.js"></script>
  <script src="_content/BlazorFocusTrap/scripts.js"></script>
</head>
```


## Useage
```html
 <FocusTrap>
     Only elements inside can be selected/tabbed
 </FocusTrap>
```

```html
 <FocusTrap>
     Only elements inside and elements with class otherClass can be selected/tabbed
     <FocusElement Value=".otherClass" />
 </FocusTrap>
```
