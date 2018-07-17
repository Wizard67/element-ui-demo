import { Message } from 'element-ui';

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

export const getWindowSizeType = width => {
  let type;
  const breakPoint = {
    xs: [0, 769],
    sm: [769, 992],
    md: [992, 1200],
    lg: [1200, 1920],
    xl: [1920, 4096]
  };
  for (const key in breakPoint) {
    if (width >= breakPoint[key][0] && width < breakPoint[key][1]) {
      type = key;
      break;
    }
  }
  return type;
};
