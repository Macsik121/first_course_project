export function freezeUI(el) {
  el.style.transtiion = '300ms';
  el.style.opacity = 0.5;
  el.style.pointerEvents = 'none';
}

export function unfreezeUI(el) {
  el.style.transition = '300ms';
  el.style.opacity = 1;
  el.style.pointerEvents = 'inherit';
}
