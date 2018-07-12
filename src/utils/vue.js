import { Message } from 'element-ui';

export const directiveCountDown = {
  inserted: (el, binding, vnode) => {
    vnode.event$ = () => {
      const defaultText = el.innerText;
      binding.value();

      const timer = i => () => {
        if (i < 1) {
          el.classList.remove('is-disabled');
          el.disabled = false;
          el.innerText = defaultText;
        } else {
          el.classList.add('is-disabled');
          el.disabled = true;
          el.innerText = `${i} s`;
        }
      };
      for (let i = 60; i > -1; i--) {
        setTimeout(timer(i), 1000 * (60 - i));
      }
    };
    el.addEventListener('click', vnode.event$);
  },
  unbind: (el, binding, vnode) => {
    el.removeEventListener('click', vnode.event$);
  }
};

export const messageTips = res => {
  const status = res.status;
  let type;
  if (/^2\d{2}$/.test(status)) type = 'success';
  if (/^4\d{2}$/.test(status)) type = 'error';
  if (/^5\d{2}$/.test(status)) type = 'warning';

  Message({
    showClose: true,
    message: res.message,
    type: type
  });
};
