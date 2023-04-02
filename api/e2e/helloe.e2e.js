const request = require('supertest')
const createApp = require('../src/app')

describe('GET /api/v1/books', () => {
  let app
  let server
  beforeEach(() => {
    app = createApp()
    server = app.listen(3001)
  })

  afterAll(async () => {
    await server.close()
  })

  describe('test get /', () => {
    test('should return hello world', async () => {
      /** Arrange */
      /** Act */
      const response = await request(app).get('/')
      /** Assert */
      expect(response.status).toBe(200)
      expect(response.text).toEqual('Hello World!')
    })
  })

  //   *describe('test getBooks', () => {
  //     test('should return an array of books', async () => {
  //       /** Arrange */
  //       /** Act */
  //       const response = await request(app).get('/api/v1/books')
  //       /** Assert */
  //       expect(response.status).toBe(200)
  //       expect(response.body.length).toBe(10)
  //     })

//     test('should return an array of books', async () => {
//       /** Arrange */
//       /** Act */
//       const response = await request(app).get('/api/v1/books')
//       /** Assert */
//       expect(response.status).toBe(200)
//       expect(response.body[0].name).toEqual('Book 1')
//     })
//   })
})
