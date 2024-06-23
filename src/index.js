/**
 * Inline button tool.
 */
class InlineButtonTool {
  /**
   * @typedef {Object} Config
   * @property {() => void} onButtonClick - Callback function for button click event.
   * @property {string} [icon='⚙️'] - String icon to display on the button (default is gear emoji, SVG string is possible).
   */

  /**
   * @typedef {Object} ConstructorParams
   * @property {any} api - API instance.
   * @property {Config} [config] - Configuration object.
   */

  /**
   * @param {ConstructorParams} params - Constructor parameters.
   */
  constructor({ api, config }) {
    this.api = api;
    this.config = config || {};
    this.button = null;
  }

  /**
   * Indicates whether the tool is an inline tool.
   * @type {boolean}
   * @static
   */
  static get isInline() {
    return true;
  }

  /**
   * Renders the inline button for the tool.
   * @returns {HTMLElement} The button element.
   */
  render() {
    this.button = document.createElement('button');
    this.button.type = 'button';
    this.button.innerHTML = this.config.icon || '⚙️';
    this.button.classList.add(this.api.styles.inlineToolButton);
    this.button.addEventListener('click', () => this.config.onButtonClick());

    return this.button;
  }

  /**
   * Method called when surrounding text is needed to be wrapped (not implemented in this tool).
   * @param {Range} range - The text range to surround.
   */
  surround(range) {
    // tool does not wrap or modify text, so this can be empty.
  }

  /**
   * Checks the state of the editor (not implemented in this tool).
   */
  checkState() {
    // tool does not change the state, so this can be empty.
  }
}

export default InlineButtonTool;
