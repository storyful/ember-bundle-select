# ember-bundle-select

This README outlines the details of collaborating on this Ember addon.

[![Build Status](https://travis-ci.org/storyful/ember-bundle-select.svg)](https://travis-ci.org/intercom/ember-bundle-select)

## Install

```
ember install https://github.com/storyful/ember-bundle-select.git
```

## Usage

#### Component

```hbs
{{#bundle-select-group as |bundle|}}
  <table class="table">
    {{#each models as |model|}}
      {{#bundle-select-option tagName="tr" option=model bundle=bundle as |bundleOption|}}
        <td>
          <input type="checkbox"
            checked={{bundleOption.selected}}
            onclick={{action bundleOption.toggleAction}} />
        </td>

        <td>{{model.name}}</td>
      {{/bundle-select-option}}
    {{/each}}
  </table>
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
