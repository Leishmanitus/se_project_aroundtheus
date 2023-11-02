export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems = () => {
    this._renderer();
  };

  addItem = (element) => {
    this._container.prepend(element);
  };

  clear = () => {
    this._container.innerHTML = "";
  };

  getContainer = () => {
    return this._container;
  };
}
