export function uuid() {
  let seed = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
  seed = seed.replace(/x/g, function () {
    const r = Math.random() * 16 | 0;
    return r.toString(16);
  });
  seed = seed.replace('y', (Math.random() * 16 & 0x3 | 0x8).toString(16));
  return seed.replace(/-/g, '').substr(0, 24);
}

export function debounce(func, idle) {
  let handler;
  return function () {
    if (handler) {
      clearTimeout(handler);
    }
    handler = setTimeout(() => {
      func(...arguments);
    }, idle);
  }
}

export async function getTemplate (id) {
  const res = await fetch(`./templates/${id}.json`);
  return res.json();
}