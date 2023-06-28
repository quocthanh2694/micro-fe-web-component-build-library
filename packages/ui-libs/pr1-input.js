
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


// class CustomInput extends HTMLElement {
//     static get observedAttributes() {
//         return ['placeholder', 'value', 'size', 'name', 'onchange'];
//     }
//     constructor() {
//         super();
//         this.attachShadow({ mode: 'open' })
//         this.shadowRoot.appendChild(template.content.cloneNode(true))

//         // Cache the value of the inputNode
//         this.inputNode = this.shadowRoot.querySelector('input')

//         // Add all properties to input
//         for (let i = 0; i < this.attributes.length; i++) {
//             console.log("@@  this.attributes[i].nodeName", this.attributes[i].nodeName, this.attributes[i].nodeValue)
//             this.inputNode.setAttribute(
//                 this.attributes[i].nodeName,
//                 this.attributes[i].nodeValue
//             )
//         }

//     }

//     validate(event) {
//         console.log('inside', event)
//     }


//     handleChange(event) {
//         console.log('@@isReact', event.type, !!window.React ||
//             !!window.__REACT_DEVTOOLS_GLOBAL_HOOK__ ||
//             !!document.querySelector('[data-reactroot], [data-reactid]'))
//         // React
//         if (!!window.React ||
//             !!window.__REACT_DEVTOOLS_GLOBAL_HOOK__ ||
//             !!document.querySelector('[data-reactroot], [data-reactid]')) {

//             // const syntheticEvent = this.createSyntheticEvent('onchange', event);
//             // console.log('@@inside synthetic event ', syntheticEvent)
//             // this.dispatchEvent(syntheticEvent);

//             // const newEvent = new CustomEvent("onchange", {
//             //     detail: this.inputNode.value,
//             //     // bubbles: true,
//             //     // cancelable: false,
//             //     // composed: true
//             // });
//             // this.dispatchEvent(newEvent);
//             // this.shadowRoot.dispatchEvent(newEvent);
//             // this.inputNode.dispatchEvent(newEvent);
//             // this.dispatchEvent(new CustomEvent("onchange", { detail: this.inputNode.value }));
//             // const onchangeFunc = this.getAttribute('onchange')
//             // console.log('@@onchangeFunction', onchangeFunc)
//             // if (onchangeFunc) {
//             //     eval(onchangeFunc)
//             // }
//             this._onchangeFn = null;


//         }

//         // Angular
//         if (typeof window.ng !== 'undefined') {
//             const ngZone = window.ng.core.Injector
//                 .create([{ provide: window.ng.core.NgZone, useFactory: () => new window.ng.core.NgZone({}) }]).get(window.ng.core.NgZone);
//             ngZone.run(() => {
//                 ngZone.onStable
//                     .asObservable()
//                     .subscribe(() => {
//                         if (ngZone.isStable) {
//                             const angularEvent = new CustomEvent('ngModelChange', { detail: this.value });
//                             this.dispatchEvent(angularEvent);
//                         }
//                     });
//             });
//         }

//         // Vue
//         if (typeof window.Vue !== 'undefined') {
//             const vueEvent = new Event('change', { bubbles: true });
//             this.dispatchEvent(vueEvent);
//         }

//         // html and vanilla js
//         // this.dispatchEvent(new CustomEvent("onchange", { detail: this.inputNode.value }));
//         // html with attribute event
//         // var checkEvent = new CustomEvent("onchange", { bubbles: true, cancelable: true });
//         // if (this.dispatchEvent(checkEvent)) {
//         //     // Do default operation here
//         //     console.log('Performing default operation');
//         // }
//     }


//     createSyntheticEvent(type, event) {
//         const syntheticEvent = new CustomEvent(type, {
//             bubbles: true,
//             cancelable: true,
//             composed: true,
//             nativeEvent: event,
//         });

//         Object.keys(event).forEach((key) => {
//             syntheticEvent[key] = event[key];
//         });

//         return syntheticEvent;
//     }

//     get onchange() {
//         return this._onchangeFn;
//     }
//     set onchange(handler) {
//         if (this._onchangeFn) {
//             this.removeEventListener('onchange', this._onchangeFn);
//             this._onchangeFn = null;
//         }

//         if (typeof handler === 'function') {
//             this._onchangeFn = handler;
//             this.addEventListener('onchange', this._onchangeFn);
//         }
//     }

//     get value() {
//         return this.inputNode.value
//     }

//     set value(newValue) {
//         this.inputNode.value = newValue
//     }

//     connectedCallback() {
//         //Styles for this custom component are declared in a separate CSS module
//         const size = this.getAttribute('size');
//         console.log('@@customInput connected1113', size)
//         console.dir(this)
//         if (size === 'sm') {
//             this.inputNode.style.height = '26px';
//         }

//         // add events
//         this.inputNode.addEventListener("input", (e) => {
//             console.log('@@inside connected input fire', e)
//             this.handleChange(e);
//         });

//         // this.addEventListener('onchange', this.validate)


//     }

//     disconnectedCallback() {
//         console.log('@@customInput disconnected')
//         this.removeEventListener('onchange', this.validate)
//         this.inputNode.removeEventListener("input", () => { });
//     }

//     attributeChangedCallback(name, oldValue, newValue) {
//         console.log('@@customInput attr change', oldValue, newValue, name)
//         if (name === 'value') {
//             this.inputNode.value = newValue
//         } else if (name === 'placeholder') {
//             this.inputNode.placeholder = newValue
//         } else if (name === 'name') {
//             this.inputNode.name = newValue
//         } else if (attrName === 'onchange' && oldVal !== newVal) {
//             if (newVal === null) {
//                 this.onchange = null;
//             }
//             else {
//                 this.onchange = Function(`return function onchange(event) {\n\t${newVal};\n};`)();
//             }
//         }
//     }
// }

// customElements.define("pj1-input", CustomInput);
















const borderColor = '#d9d9d9';
const dangerColor = '#DE3535';
const size = {
    md: '32px',
    xs: '26px',
}

class MyEl extends HTMLElement {

    static get observedAttributes() {
        return ['placeholder', 'value', 'size', 'name', 'onchange', 'error', 'required', 'pattern', 'type'];
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

            // // angular
            // this.#internals.setFormValue(this.value)
        });
        this._onchangeFn = null;

        // angular
        this.#input = this.shadowRoot.querySelector('input');
        this.#input.addEventListener('input', () => this.#internals.setFormValue(this.value));
    }


    updateStyle(key, value) {
        this.inputNode.style[key] = value;
    }

    handleError(err) {
        if (!err) {
            // update input color
            this.updateStyle('borderColor', borderColor);
            // remove err text
            const errElem = this.rootElem.querySelector('.error');
            errElem.remove();
            return;
        }
        // update input color
        this.updateStyle('borderColor', dangerColor);
        // add err text
        const span = document.createElement(`span`);
        span.classList.add('error');
        span.innerHTML = err;
        this.rootElem.appendChild(span);
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
                this.updateStyle('height', size[attrName]);
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



    // Angular support
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
