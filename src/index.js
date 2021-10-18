import validate from 'validate.js'
import constraints from './validation-rules.js'
import moment from 'moment'

const form = document.querySelector('.form')
const inputs = Array.from(form.querySelectorAll('.form__input'))

console.log(moment().format('MMMM Do YYYY, h:mm:ss a'))

form.addEventListener('submit', e => {
  e.preventDefault()

  const result = validate({
    email: form.elements.email.value,
    password: form.elements.password.value
  }, constraints) || {}

  inputs.forEach(input => {
    const errorsForInput = result[input.name]
    const errorContainer = form.querySelector(`.form__input-error_type_${input.name}`)
    if (errorsForInput) {
      errorContainer.textContent = result[input.name].join(', ')
    } else {
      errorContainer.textContent = ''
    }
  })

})


