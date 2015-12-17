import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('lci-toggle-state-button', 'Integration | Component | lci toggle state button', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{lci-toggle-state-button}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#lci-toggle-state-button}}
      template block text
    {{/lci-toggle-state-button}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
