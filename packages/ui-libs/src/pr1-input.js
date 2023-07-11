
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
        input:disabled,
        input:disabled:hover,
        input:disabled:active,
        input:disabled:focus 
        {
            background-color: #D9D9D9;
            cursor: not-allowed;
        }
    </style>
`
const html = `<input type="text" class="custom-input" />`
const template = `${css} ${html} `;

// constant
const borderColor = '#d9d9d9';
const dangerColor = '#DE3535';
const size = {
  md: '32px',
  xs: '26px',
}

class MyEl extends HTMLElement {
  static formAssociated = true;
  #internals = this.attachInternals ? this.attachInternals() : undefined;
  #input;

  static get observedAttributes() {
    return ['placeholder', 'value', 'size', 'name', 'onchange', 'error', 'required', 'pattern', 'type', 'width', 'align', 'disabled'];
  }

  constructor() {
    super();
    this._render();
  }

  _render() {
    const rootEl = this.attachShadow({ mode: 'open', delegatesFocus: true });
    rootEl.innerHTML = template;

    this.rootElem = rootEl;
    this.#input = this.shadowRoot.querySelector('input');

    this._onchangeFn = null;
    this.required = false;
    this.value = '';
  }

  // runs each time the element is added to the DOM
  connectedCallback() {
    // init required state for input
    this._manageRequired();

    // listen event for react js/ vanilla js
    this.#input.addEventListener('input', this._onInput);

    // Callback event for Enter to submit form
    this.#input.addEventListener('keypress', this._onKeyPress);
  }

  // runs when the element is removed from the DOM
  disconnectedCallback() {
    // remove event for react js/ vanilla js
    this.#input.removeEventListener('input', this._onInput);

    // remove Callback event for Enter to submit form
    this.#input.removeEventListener('keypress', this._onKeyPress);
  }

  _onInput = (e) => {
    this.#internals?.setFormValue(this.value);
    // emit event onchange
    var changeEvent = new CustomEvent("onchange", {
      detail: e,
      bubbles: true,
      cancelable: true,
      composed: true,
      nativeEvent: e,
    });
    this.dispatchEvent(changeEvent);
    this._manageRequired();
    // this.dispatchEvent(new Event('input'))
  }

  _onKeyPress = (e) => {
    if (e.keyCode === 13 || e.code === 'Enter') {
      const button = this.#internals?.form?.querySelector('button[type="submit"]') || this.#internals?.form?.querySelector('input[type="submit"]');
      if (button && !button?.disabled) {
        button.click();
      }
    }
  }

  // validate error required for vanilla js
  _manageRequired() {
    if (this.value === '' && this.#input.required) {
      this.#internals?.setValidity({
        valueMissing: true
      }, 'This field is required', this.#input);
    } else {
      this.#internals?.setValidity({});
    }
  }

  _updateStyle(key, value) {
    this.#input.style[key] = value;
  }

  _handleErrorInput(err) {
    // remove old errors
    // update input color
    this._updateStyle('borderColor', borderColor);
    // remove err text
    const errElem = this.rootElem.querySelectorAll('.error');
    // errElem.remove();
    Array.prototype.forEach.call(errElem, function (node) {
      node.parentNode.removeChild(node);
    });

    // add new error
    if (err) {
      // update input color
      this._updateStyle('borderColor', dangerColor);
      // add err text
      const span = document.createElement(`span`);
      span.classList.add('error');
      span.innerHTML = err;
      this.rootElem.appendChild(span);
    }
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    if (oldVal === newVal) return;
    // console.log('@@@attr', attrName, oldVal, newVal)
    switch (true) {
      case attrName === 'onchange':
        if (newVal === null) this.onchange = null;
        else {
          this.onchange = Function(`return function onchange(event) {\n\t${newVal};\n};`)();
        }
        break;
      case attrName === 'size':
        this._updateStyle('height', size[newVal]);
        break;
      case attrName === 'width':
        this._updateStyle('width', newVal);
      case attrName === 'align':
        this._updateStyle('text-align', newVal);
        break;
      case attrName === 'error':
        this._handleErrorInput(newVal);
        break;
      case attrName === 'required':
        this.#input[attrName] = newVal;
        if (this.#internals) {
          this.#internals.ariaRequired = newVal;
        }
        break;
      default:
        this.#input[attrName] = newVal;
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
  get value() { return this.#input.value }
  set value(newValue) { this.#input.value = newValue }

  // The following properties and methods aren't strictly required,
  // but browser-level form controls provide them. Providing them helps
  // ensure consistency with browser-provided controls.
  get form() { return this.#internals?.form; }
  get name() { return this.getAttribute('name'); }
  get type() { return this.localName; }
  get validity() { return this.#internals?.validity; }
  get validationMessage() { return this.#internals?.validationMessage; }
  get willValidate() { return this.#internals?.willValidate; }
  checkValidity() { return this.#internals?.checkValidity(); }
  reportValidity() { return this.#internals?.reportValidity(); }
}

// Define our web component
customElements.get('pj1-input') || customElements.define('pj1-input', MyEl);
