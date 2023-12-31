export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer;
    this._container = document.querySelector(containerSelector);
  }

  setItems = (items) => {
    this._items = items;
  };

  renderItems = () => {
    this._clear();
    this._items.forEach((item) => {
      this.addItem(this._renderer(item));
    });
  };

  addItem = (element) => {
    this._container.prepend(element);
  };

  _clear = () => {
    this._container.innerHTML = "";
  };
}
