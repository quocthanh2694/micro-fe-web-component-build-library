
const css = `
    <style>
        * {
            box-sizing: border-box;
        }
        .custom-input {
            border: 1px solid #D9D9D9;
            padding: 6px 8px;
            border-radius: 2px;
            font-size: 14px;
            outline: none;
            height: 32px;
        }
        .error {
            color: #DE3535;
            font-size: 12px;
            font-family: Roboto;
            line-height: 140%;
            display: block;
        }
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }

        input[type=number] {
            -moz-appearance:textfield; /* Firefox */
        }
    </style>

`

const html = `<input type="text" class="custom-input" />`

const template = `${css} ${html} `;

const borderColor = '#d9d9d9';
const dangerColor = '#DE3535';
const size = {
    md: '32px',
    xs: '26px',
}

class MyEl extends HTMLElement {

    static get observedAttributes() {
        return ['placeholder', 'value', 'size', 'name', 'onchange', 'error', 'required', 'pattern', 'type', 'width', 'align'];
    }

    constructor() {
        super();

        const rootEl = this.attachShadow({ mode: 'open', delegatesFocus: true });
        rootEl.innerHTML = template;
        this.rootElem = rootEl;

        this.inputNode = this.shadowRoot.querySelector('input');
        console.log(this, this.inputNode)

        // rootEl.innerHTML = template;
        this.inputNode.addEventListener('input', (e) => {

            // react js/ plain js
            var changeEvent = new CustomEvent("onchange", {
                detail: e,
                bubbles: true,
                cancelable: true,
                composed: true,
                nativeEvent: e,
            });
            if (this.dispatchEvent(changeEvent)) {
                // Do default operation here
                console.log('Performing default operation');
            }

        });
        this._onchangeFn = null;

        this.#input = this.shadowRoot.querySelector('input');
        this.#input.addEventListener('input', () => this.#internals.setFormValue(this.value));

        // Callback event submit form
        this.inputNode.addEventListener('keypress', (e) => {
            if (e.keyCode === 13 || e.code === 'Enter') {
                const button = this.#internals.form?.querySelector('button[type="submit"]');
                if (!button.disabled) {
                    button.click();
                }
            }
        });
    }


    updateStyle(key, value) {
        this.inputNode.style[key] = value;
    }

    handleError(err) {
        // remove old errors
        // update input color
        this.updateStyle('borderColor', borderColor);
        // remove err text
        const errElem = this.rootElem.querySelectorAll('.error');
        // errElem.remove();
        Array.prototype.forEach.call(errElem, function (node) {
            node.parentNode.removeChild(node);
        });

        // add new error
        if (err) {
            // update input color
            this.updateStyle('borderColor', dangerColor);
            // add err text
            const span = document.createElement(`span`);
            span.classList.add('error');
            span.innerHTML = err;
            this.rootElem.appendChild(span);
        }
    }

    attributeChangedCallback(attrName, oldVal, newVal) {
        if (oldVal === newVal) return;


        switch (true) {
            case attrName === 'onchange':
                if (newVal === null) this.onchange = null;
                else {
                    this.onchange = Function(`return function onchange(event) {\n\t${newVal};\n};`)();
                }
                break;
            case attrName === 'size':
                this.updateStyle('height', size[newVal]);
                break;
            case attrName === 'width':
                this.updateStyle('width', newVal);
            case attrName === 'align':
                this.updateStyle('text-align', newVal);
                break;
            case attrName === 'error':
                this.handleError(newVal);
                break;
            default:
                this.inputNode[attrName] = newVal;
                break;
        }
    }

    get onchange() { return this._onchangeFn; }
    set onchange(handler) {
        if (this._onchangeFn) {
            this.removeEventListener('onchange', this._onchangeFn);
            this._onchangeFn = null;
        }

        if (typeof handler === 'function') {
            this._onchangeFn = handler;
            this.addEventListener('onchange', this._onchangeFn);
        }
    }

    get value() { return this.inputNode.value }
    set value(newValue) { this.inputNode.value = newValue }

    get error() { return this.inputNode.value }
    set error(newValue) { this.inputNode.error = newValue }

    get type() { return this.inputNode.type }
    set type(newValue) { this.inputNode.type = newValue }



    static formAssociated = true;
    #internals = this.attachInternals();
    #input;

    get form() { return this.#internals.form; }
    get name() { return this.getAttribute('name') };
    get type() { return this.localName; }
    get value() { return this.#input.value; }
    set value(v) { this.#input.value = v; }
    get validity() { return this.#internals.validity; }
    get validationMessage() { return this.#internals.validationMessage; }
    get willValidate() { return this.#internals.willValidate; }

    checkValidity() { return this.#internals.checkValidity(); }
    reportValidity() { return this.#internals.reportValidity(); }

}


// Define our web component
customElements.get('pj1-input') || customElements.define('pj1-input', MyEl);
