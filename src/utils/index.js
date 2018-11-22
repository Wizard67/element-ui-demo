export const getWindowSizeType = width => {
  let type
  const breakPoint = {
    xs: [0, 769],
    sm: [769, 992],
    md: [992, 1200],
    lg: [1200, 1920],
    xl: [1920, 4096]
  }
  for (const key in breakPoint) {
    if (width >= breakPoint[key][0] && width < breakPoint[key][1]) {
      type = key
      break
    }
  }
  return type
}
