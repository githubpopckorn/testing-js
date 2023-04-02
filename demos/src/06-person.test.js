const Person = require('./06-person')

describe('Person', () => {
  /** Metodologia triplea A */
  let person

  beforeAll(() => {
    // Arrange - Preparar - Configurar
    person = new Person('Santy Lopez', 74, 1.75)
  })

  test('should return normal', () => {
    // Arrange - Preparar - Configurar
    person.weight = 74
    // Act - Actuar - Ejecutar
    const imc = person.calcIMC()
    // Assert - Afirmar - Comprobar
    expect(imc).toBe('normal')
  })

  test('should return down', () => {
    person.weight = 45
    const imc = person.calcIMC()
    expect(imc).toBe('down')
  })
})
