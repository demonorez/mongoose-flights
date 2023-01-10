import { Flight } from "../models/flight.js"

function index(req, res) {
  Flight.find({})
  .then(flights => {
    res.render('flights/index', {
      flights,
      title: "All Flights"
    })
  })
  .catch(error => {
    console.log(error)
    // redirect to localhost:3000
    res.redirect('/index')
  })
}

function newFlight(req, res) {
  res.render("flights/new", {
    title: "Add Flight"
  })
}

function create(req, res) {
  if (req.body.cast) {
    req.body.cast = req.body.cast.split(', ')
  }
  Flight.create(req.body)
  .then(flight => {
    res.redirect('/flights/new')
  })
  .catch(error => {
    console.log(error)
    // redirect to localhost:3000
    res.redirect('/index')
  })
}

export {
  index, 
  newFlight as new,
  create, 
}