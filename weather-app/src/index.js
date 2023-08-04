import { Weather } from './api.js'
import './assets/styles.scss'

console.log(new Weather('Molocue').summary())
console.log(new Weather('Molocue').details())
console.log(new Weather('Molocue').forecast())
