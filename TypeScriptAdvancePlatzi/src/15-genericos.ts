
function getValue<T> (value: T) {
  const array: T[] = [value]
  return value
}

getValue<number>(12).toFixed()
getValue<string>('12').toLowerCase()
getValue<number[]>([11, 12, 15]).forEach
