# ember-bundle-select

This README outlines the details of collaborating on this Ember addon.

## Install

```
ember install https://github.com/storyful/ember-bundle-select.git

```

## Usage

#### Component

```hbs
{{#bundle-select-group as |bundle|}}
  <ul>
  {{#each models as |model|}}
    <li>
      {{#bundle-select-option option=model tagName="label" bundle=bundle as |selected toggleAction|}}
        <input type="checkbox" checked={{selected}} onclick={{action toggleAction}} />
        <span>{{model.name}}</span>,
      {{/bundle-select-option}}
    </li>
  {{/each}}
  </ul>
{{/bundle-select-group}}
```

## Installation

* `git clone <repository-url>` this repository
* `cd ember-bundle-select`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
