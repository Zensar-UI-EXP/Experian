const tag = 'rgb-color';
const html = require('./rgb-color.html');
const css = require('./rgb-color.scss');
const EDSElement = window.EDSElement;

customElements.define(tag, class extends EDSElement {
    static get observedAttributes() {
        return ['input', 'output', 'id'];
    }

    init() {
        this.initShadowDOM(tag, html, css);
        this._refs = {
            input: this.$('.input-cont'),
            output: this.$('.output-cont'),
        };
    }

    initShadowDOM(tag, html, css) {
        super.initShadowDOM(tag, html, css);
    }

    get input() {
        return this.getAttribute('input');
    }

    set input(value) {
        this.setAttribute('input', value);
        this._refs.input.value = value;
        if (value.indexOf('-') > -1) {
            this._refs.input.style.display = 'none';
            const splitValue = value.split('-');
            this._refs.output.style.backgroundColor = 'rgb(' + splitValue[0] + ', ' + splitValue[1] + ',' + splitValue[2] +')';
        }
    }

    get output() {
        return this.getAttribute('output');
    }

    set output(value) {
        this.setAttribute('output', value);
        this._refs.output.style.display = value;
    }

    get id() {
        return this.getAttribute('id');
    }

    set id(value) {
        this.setAttribute('id', value);
        this._refs.input.id = value + 'Input';
    }

    connectedCallback() {
    }
});
