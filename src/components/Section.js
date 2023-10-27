export default class Section {
  constructor({ data, renderer }, containerSelector) {
    this._items = data;
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  renderItems() {
    if (Array.isArray(this._items)) {
      this._items.forEach((item) => this._renderer(item));
    } else {
      this._renderer(this._items);
    }
  }

  addItem(element) {
    this._container.prepend(element);
  }

  clear() {
    this._container.innerHTML = "";
  }

  getContainer() {
    return this._container;
  }
}
