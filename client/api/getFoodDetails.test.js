import nock from 'nock'
import { getFoodDetails } from './getFoodDetails'

const mockDetails = [
  {
    id: 1,
    name: 'Apple',
    reoName: 'āporo',
    price: 1.25,
    image: '/path',
    nzGrown: true,
    lastMonth: 1,
    firstMonth: 2,
    details: 'Apples are nice'
  },
  {
    id: 2,
    name: 'Banana',
    reoName: 'panana',
    price: 2.50,
    image: '/path',
    nzGrown: true,
    lastMonth: 1,
    firstMonth: 2,
    details: 'Bananas are nice'
  }
]
const apiURL = '/api/v1/foods/'

test('getFoodDetails returns food details', (done) => {
  nock(/localhost/)
    .get(`${apiURL}1/1`)
    .reply(200, mockDetails)

  getFoodDetails(1, 1)
    .then(details => {
      expect(details).toEqual(mockDetails)
      done()
    })
})