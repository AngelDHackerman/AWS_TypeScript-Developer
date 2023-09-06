async function loadMathFunctions() {
  try { 
    const math = await import('./4.3-mathFunctions')
    console.log(math.add(5, 3)) // 8
    console.log(math.subtract(5, 3))  // 2
  } catch (error) {
    console.error('Failed to load the module: ', error)
  }
}

loadMathFunctions()