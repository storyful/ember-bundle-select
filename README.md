# ember-bundle-select

Bundle select primitive for Ember.

[![Build Status](https://travis-ci.org/storyful/ember-bundle-select.svg)](https://travis-ci.org/storyful/ember-bundle-select)
[![Code Climate](https://codeclimate.com/github/storyful/ember-bundle-select/badges/gpa.svg)](https://codeclimate.com/github/storyful/ember-bundle-select)
[![Test Coverage](https://codeclimate.com/github/storyful/ember-bundle-select/badges/coverage.svg)](https://codeclimate.com/github/storyful/ember-bundle-select/coverage)
[![Ember Observer Score](https://emberobserver.com/badges/ember-bundle-select.svg)](https://emberobserver.com/addons/ember-bundle-select)
[![Dependency Status](https://www.versioneye.com/user/projects/59858fa10fb24f003b1f7e68/badge.svg?style=flat-square)](https://www.versioneye.com/user/projects/59858fa10fb24f003b1f7e68)

[Demo](https://storyful.github.io/ember-bundle-select/)

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

{{!-- With children options --}}

{{#bundle-select-group as |bundle|}}
  <ul class="table">
    {{#each models as |model|}}
      {{#bundle-select-option tagName="li" option=model bundle=bundle as |bundleOption|}}

        ...

        {{#bundle-select-option option=model.child
            parentOption=model
            bundle=bundle as |bundleOption|}}
          <div>
            <input type="checkbox"
              checked={{bundleOption.selected}}
              onclick={{action bundleOption.toggleAction}} />
          </div>

          <div>{{model.child.name}}</div>
        {{/bundle-select-option}}
      {{/bundle-select-option}}
    {{/each}}
  </ul>
{{/bundle-select-group}}
```

#### Actions

* bundle.selectAll
* bundle.selectNone
* bundleOption.toggleAction

## Collaborating

### Installation

* `git clone <repository-url>` this repository
* `cd ember-bundle-select`
* `npm install`

### Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

### Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

### Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
