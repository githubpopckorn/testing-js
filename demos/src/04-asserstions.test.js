test('test object', () => {
  const data = { name: 'Santy' }
  data.lastname = 'Lopez'
  expect(data).toEqual({ name: 'Santy', lastname: 'Lopez' })
})

test('test null', () => {
  const data = null
  expect(data).toBeNull()
  expect(data).toBeDefined()
  expect(data).not.toBeUndefined()
})

test('boolean', () => {
  expect(true).toBeTruthy()
  expect(false).toBeFalsy()
})

test('strings', () => {
  expect('hello').toMatch(/hello/)
  expect('Christoper').toMatch(/stop/)
  expect('hello').not.toMatch(/bye/)
})

test('arrays', () => {
  const data = ['Santy', 'Lopez', 'Mendoza']
  expect(data).toContain('Lopez')
  expect(data).not.toContain('Varela')
})
