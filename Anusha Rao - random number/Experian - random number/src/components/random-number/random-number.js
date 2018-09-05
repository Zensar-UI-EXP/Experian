const tag = 'random-number';
const html = require('./random-number.html');
const css = require('./random-number.scss');
const EDSElement = window.EDSElement;

customElements.define(tag, class extends EDSElement {
    static get observedAttributes() {
        return ['random'];
    }

    init() {
        this.initShadowDOM(tag, html, css);
        this._refs = {
            random: this.$('.random-num')
        };
    }

    initShadowDOM(tag, html, css) {
        super.initShadowDOM(tag, html, css);
    }

    get random() {
        return this.getAttribute('random');
    }

    set random(value) {
        this.setAttribute('random', value);
        this._refs.random.value = value;
    }

    connectedCallback() {
    }
});
