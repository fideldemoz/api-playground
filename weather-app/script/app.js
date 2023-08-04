import { format } from 'date-fns'

async function getWeather (city) {
  const key = '49dea5168d1542f88fc212246230308'
  const url = `http://api.weatherapi.com/v1/current.json?q=${city}&key=${key}`
  try {
    const request = await fetch(url, { mode: 'cors' })
    const response = await request.json()
    displayCurrent(response)
  } catch (e) {
    console.log('Something went wrong')
  }
}

window.addEventListener('load', () => {
  getWeather('Maputo')
})
const form = document.querySelector('form')
form.addEventListener('submit', (e) => {
  e.preventDefault()
  const city = document.querySelector('#search').value
  getWeather(city)
  e.target.reset()
})

function displayCurrent (response) {
  const cityNode = document.querySelector('p.city')
  const condition = document.querySelector('h2.condition')
  const icon = document.querySelector('.icon>img')
  const dateNode = document.querySelector('p.date')
  const timeNode = document.querySelector('p.time')
  const localtime = new Date(response.location.localtime)
  const tempNode = document.querySelector('h2.temp')
  const src = `icons${response.current.condition.icon.slice(34)}`

  cityNode.innerHTML = response.location.name
  condition.innerHTML = response.current.condition.text
  icon.src = src
  dateNode.innerHTML = format(localtime, 'eeee, MMM do yy')
  timeNode.textContent = format(localtime, 'HH:mm')
  tempNode.innerHTML = response.current.temp_c
}
