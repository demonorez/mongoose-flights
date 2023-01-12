import { Router } from 'express'
import * as flightsCtrl from '../controllers/flights.js'

const router = Router()

/* GET users listing. */
// GET localhost:3000/flights/index
router.get('/', flightsCtrl.index)
//GET localhost:3000/flights/new
router.get('/new', flightsCtrl.new)

router.get('/:id', flightsCtrl.show)

router.get('/:id/edit', flightsCtrl.edit)
//POST localhost:3000/flights
router.post('/', flightsCtrl.create)



router.delete('/:id', flightsCtrl.delete)
export {
  router
}
