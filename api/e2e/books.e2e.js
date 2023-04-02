/** Prueba de integracion  */
const mockGetAllBooks = jest.fn()

jest.mock('../src/lib/mongo.lib', () => {
  return jest.fn().mockImplementation(() => {
    return {
      getAll: mockGetAllBooks,
      create: () => {}
    }
  })
})

// importante la secuencia los mocks deben ir antes de la importacion de la app
const createApp = require('../src/app')
const { generateManyBook } = require('../src/fakes/book.fake')
const request = require('supertest')

describe('Test books endpoints', () => {
  let app
  let server
  beforeEach(() => {
    app = createApp()
    server = app.listen(3001)
  })

  afterAll(async () => {
    await server.close()
  })

  describe('GET /api/v1/books', () => {
    test('should return list of books', async () => {
      /** Arrange */
      const fakeBooks = generateManyBook(5)
      mockGetAllBooks.mockResolvedValue(fakeBooks)
      /** Act */
      const response = await request(app).get('/api/v1/books')
      /** Assert */
      expect(response.status).toBe(200)
      expect(response.body.length).toEqual(fakeBooks.length)
    })
  })
})
