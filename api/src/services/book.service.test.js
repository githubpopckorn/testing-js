/* eslint-disable indent */
const BooksService = require('./books.service')
const { generateManyBook } = require('../fakes/book.fake')

const mockGetAll = jest.fn()

jest.mock('../lib/mongo.lib', () => {
  return jest.fn().mockImplementation(() => ({
    getAll: mockGetAll,
    create: () => {}
  }))
})

/** Pruebas del servicio */
describe('Book Service', () => {
  let service

  beforeEach(() => {
    service = new BooksService()
    jest.clearAllMocks()
  })

  describe('test getBooks', () => {
    test('should return an array of books', async () => {
      /** Arrange */
      const fakeBooks = generateManyBook(50)
      mockGetAll.mockResolvedValue(fakeBooks)
      /** Act */
      const books = await service.getBooks({})
      /** Assert */
      expect(books.length).toBe(50)
      expect(mockGetAll).toHaveBeenCalled()
      expect(mockGetAll).toHaveBeenCalledTimes(1)
      expect(mockGetAll).toHaveBeenCalledWith('books', {})
    })

    test('should return an array of books', async () => {
      /** Arrange */
      const fakeBooks = generateManyBook(3)
      mockGetAll.mockResolvedValue(fakeBooks)
      /** Act */
      const books = await service.getBooks({})
      /** Assert */
      expect(books[0].name).toEqual(fakeBooks[0].name)
    })
  })
})
