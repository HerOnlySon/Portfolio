export const smoothEase: [number, number, number, number] = [
  0.22,
  1,
  0.36,
  1,
]

export const revealInView = {
  hidden: { opacity: 0, y: 28, filter: 'blur(10px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}
