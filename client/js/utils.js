export function LoadHTMLComponent(id, url) {
  $(`#${id}`).load(url);
}

export function onElementReady(id, cb) {
  let element = $(id);
  if (!element.length) {
    setTimeout(() => onElementReady(id, cb), 0);
  } else {
    cb(element);
  }
}
