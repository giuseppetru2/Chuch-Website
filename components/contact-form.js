import { useState } from 'react'


export default function ContactForm() {
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [message, setMessage] = useState('')
const [submitted, setSubmitted] = useState(false)

const handleSubmit = (e) => { 
  e.preventDefault()
  console.log('Sending')
let data = {
    name,
    email,
    message
  }
fetch('/api/contacts', {
    method: 'POST',
    headers: {
      'Accept': 'application/json, text/plain, */*',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then((res) => {
    console.log('Response received')
    if (res.status === 200) {
      console.log('Response succeeded!')
      setSubmitted(true)
      setName('')
      setEmail('')
      setBody('')
    }
  })
  window.location.reload()
}


  return (
    <div className="mb4">
      <h4 className="f3 b lh-title mb3 tc">Drop us a line below</h4>
      <form action="">
        <div className="flex-l mhn1-l">
          <div className="ph1-l w-50-l">
            <fieldset>
              <input type="text" onChange={(e)=>{setName(e.target.value)}}  id="name" name="name" placeholder="Name" className="w-100 mb2" />
              <label htmlFor="name">Name</label>
            </fieldset>
          </div>
          <div className="ph1-l w-50-l">
            <fieldset>
              <input type="email" onChange={(e)=>{setEmail(e.target.value)}} id="email" name="email" placeholder="Email" className="w-100 mb2" />
              <label htmlFor="email">Email</label>
            </fieldset>
          </div>
        </div>
        <fieldset>
          <textarea 
            id="message" name="message" 
            placeholder="Your message" 
            rows="8" cols="80" 
            className="w-100" 
            onChange={(e)=>{setMessage(e.target.value)}}
          />
          <label htmlFor="message">Your message</label>
        </fieldset>
        <div className="tc">
          <button type="submit" onClick={(e)=>{handleSubmit(e)}} className="btn w-100 w-auto-ns raise">Submit</button>
        </div>
      </form>
    </div>
  )
}