export function loadHTMLComponent(id, url) {
  $(`#${id}`).load(url);
}

export function onElementReady(id, cb) {
  let element = $(id);
  !element.length ? setTimeout(() => onElementReady(id, cb), 0) : cb(element);
}
