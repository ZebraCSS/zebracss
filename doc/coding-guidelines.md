#ZebraCSS Coding Guidelines

* [JavaScript](#javascript)
* [Utilities](#utilities)
  * [u-utilityName](#u-utilityName)
* [Components](#components)
  * [componentName](#componentName)
  * [componentName--modifierName](#componentName--modifierName)
  * [componentName-descendantName](#componentName-descendantName)
  * [componentName.is-stateOfComponent](#is-stateOfComponent)
* [Variables](#variables)
  * [z-index](#zindex)
  * [font-weight](#fontweight)
  * [line-height](#lineheight)
  * [letter-spacing](#letterspacing)
* [Formatting](#formatting)
  * [Spacing](#spacing)
  * [Quotes](#quotes)
* [Performance](#performance)
  * [Specificity](#specificity)


## JavaScript

syntax: `js-<targetName>`

JavaScript-specific classes reduce the risk that changing the structure or theme of components will inadvertently affect any required JavaScript behaviour and complex functionality. It is not neccesarry to use them in every case, just think of them as a tool in your utility belt. If you are creating a class, which you dont intend to use for styling, but instead only as a selector in JavaScript, you should probably be adding the `js-` prefix. In practice this looks like this:

```html
<a href="/login" class="btn btn-primary js-login"></a>
```

**Again, JavaScript-specific classes should not, under any circumstances, be styled.**

## Utilities

Utilities exist because certain CSS properties and patterns are used frequently. For example: floats, containing floats, vertical alignment, text truncation. Relying on utilities can help to reduce repetition and provide consistent implementations. They also act as a philosophical alternative to functional (i.e. non-polyfill) mixins.


```html
<div class="u-cf">
  <p class="u-textTruncate">{$text}</p>
  <img class="u-floatLeft" src="{$src}" alt="">
  <img class="u-floatLeft" src="{$src}" alt="">
  <img class="u-floatLeft" src="{$src}" alt="">
</div>
```

### u-utilityName

Syntax: `u-<utilityName>`

Utilities must use a camel case name, prefixed with a `u` namespace. What follows is an example of how various utilities can be used to create a simple structure within a component.

```html
<div class="u-cf">
  <a class="u-floatLeft" href="{$url}">
    <img class="u-block" src="{$src}" alt="">
  </a>
  <p class="u-sizeFill u-textBreak">
    ...
  </p>
</div>
```

## Components

Syntax: `<componentName>[--modifierName|-descendantName]`

Component driven development offers several benefits when reading and writing HTML and CSS:

* It helps to distinguish between the classes for the root of the component, descendant elements, and modifications.
* It keeps the specificity of selectors low.
* It helps to decouple presentation semantics from document semantics.

You can think of components as custom elements that enclose specific semantics, styling, and behaviour.


### ComponentName

The component's name must be written in camel case.

```css
.myComponent { /* ... */ }
```

```html
<article class="myComponent">
  ...
</article>
```

### componentName--modifierName

A component modifier is a class that modifies the presentation of the base component in some form. Modifier names must be written in camel case and be separated from the component name by two hyphens. The class should be included in the HTML _in addition_ to the base component class.

```css
/* Core button */
.btn { /* ... */ }
/* Default button style */
.btn--default { /* ... */ }
```

```html
<button class="btn btn--primary">...</button>
```
### componentName-descendantName

A component descendant is a class that is attached to a descendant node of a component. It's responsible for applying presentation directly to the descendant on behalf of a particular component. Descendant names must be written in camel case.

```html
<article class="tweet">
  <header class="tweet-header">
    <img class="tweet-avatar" src="{$src}" alt="{$alt}">
    ...
  </header>
  <div class="tweet-body">
    ...
  </div>
</article>
```

### componentName.is-stateOfComponent

Use `is-stateName` for state-based modifications of components. The state name must be Camel case. **Never style these classes directly; they should always be used as an adjoining class.**

JS can add/remove these classes. This means that the same state names can be used in multiple contexts, but every component must define its own styles for the state (as they are scoped to the component).

```css
.tweet { /* ... */ }
.tweet.is-expanded { /* ... */ }
```

```html
<article class="tweet is-expanded">
  ...
</article>
```

## Variables

Syntax: `[ComponentName]-<property>-<value>`

```CSS
@HighlightMenu-color-grayLight: rgb(51, 51, 50);
```

### z-index scale

Please use the z-index scale defined in z-index.less.

`@zIndex-1 - @zIndex-9` are provided. Nothing should be higher then `@zIndex-9`.


### Font Weight

With the additional support of web fonts `font-weight` plays a more important role than it once did. Different font weights will render typefaces specifically created for that weight, unlike the old days where `bold` could be just an algorithm to fatten a typeface. Obvious uses the numerical value of `font-weight` to enable the best representation of a typeface. The following table is a guide:

Raw font weights should be avoided. Instead, use the appropriate font mixin: `.font-sansI7, .font-sansN7, etc.`

The suffix defines the weight and style:

```CSS
N = normal
I = italic
4 = normal font-weight
7 = bold font-weight
```

Refer to type.less for type size, letter-spacing, and line height. Raw sizes, spaces, and line heights should be avoided outside of type.less.


```CSS
ex:

@fontSize-micro
@fontSize-smallest
@fontSize-smaller
@fontSize-small
@fontSize-base
@fontSize-large
@fontSize-larger
@fontSize-largest
@fontSize-jumbo
```

See [Mozilla Developer Network font-weight](https://developer.mozilla.org/en/CSS/font-weight) for further reading.


### Line Height

Type.less also provides a line height scale. This should be used for blocks of text.


```CSS
ex:

@lineHeight-tightest
@lineHeight-tighter
@lineHeight-tight
@lineHeight-baseSans
@lineHeight-base
@lineHeight-loose
@lineHeight-looser
```

Alternatively, when using line height to vertically center a single line of text, be sure to set the line height to the height of the container - 1.

```CSS
.btn {
  height: 50px;
  line-height: 49px;
}
```

### Letter spacing

Letter spacing should also be controlled with the following var scale.

```CSS
@letterSpacing-tightest
@letterSpacing-tighter
@letterSpacing-tight
@letterSpacing-normal
@letterSpacing-loose
@letterSpacing-looser
````

## Formatting

The following are some high level page formatting style rules.

### Spacing

CSS rules should be comma separated but live on new lines:

**Right:**
```css
.content,
.content-edit {
  ...
}
```

**Wrong:**
```css
.content, .content-edit {
  ...
}
```

CSS blocks should be separated by a single new line. not two. not 0.

**Right:**
```css
.content {
  ...
}
.content-edit {
  ...
}
```

**Wrong:**
```css
.content {
  ...
}

.content-edit {
  ...
}
```

### Quotes

Quotes are optional in CSS and LESS. We use double quotes as it is visually clearer that the string is not a selector or a style property.

**Right:**
```css
background-image: url("/img/you.jpg");
font-family: "Helvetica Neue Light", "Helvetica Neue", Helvetica, Arial;
```

**Wrong:**
```css
background-image: url(/img/you.jpg);
font-family: Helvetica Neue Light, Helvetica Neue, Helvetica, Arial;
```

## Performance

### Specificity

Although in the name (cascading style sheets) cascading can introduce unnecessary performance overhead for applying styles. Take the following example:

```css
ul.user-list li span a:hover { color: red; }
```

Styles are resolved during the renderer's layout pass. The selectors are resolved right to left, exiting when it has been detected the selector does not match. Therefore, in this example every a tag has to be inspected to see if it resides inside a span and a list. As you can imagine this requires a lot of DOM walking and and for large documents can cause a significant increase in the layout time. For further reading checkout: https://developers.google.com/speed/docs/best-practices/rendering#UseEfficientCSSSelectors

If we know we want to give all `a` elements inside the `.user-list` red on hover we can simplify this style to:

```css
.user-list > a:hover {
  color: red;
}
```

If we want to only style specific `a` elements inside `.user-list` we can give them a specific class:

```css
.user-list > .link-primary:hover {
  color: red;
}
```