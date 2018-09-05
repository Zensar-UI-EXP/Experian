const tag = 'dynamic-form';
const html = require('./dynamic-form.html');
const css = require('./dynamic-form.scss');

customElements.define(tag, class extends EDSElement {
    static get observedAttributes() {
        return ['fields', 'isAdmin'];
    }

    init() {
        this.initShadowDOM(tag, html, css);
        this._refs = {
            formBodyContainer: this.$('.form-body-container'),
            submit: this.$('.submit')
        };
        this.createForm();
    }

    initShadowDOM(tag, html, css) {
        super.initShadowDOM(tag, html, css);
    }

    createForm() {
        const fields = this.getAttribute('fields');
        const isAdmin = JSON.parse(this.getAttribute('isAdmin'));
        //create form here

        //convenience method
        this._refs.submit.addEventListener('click', this.sendData);
    }

    sendData() {
       //send data must support IE11
    }

    destroy() {
        //clean up here
    }
});
