import { ChangeEvent, useState } from "react"

export default function CreateUser() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  })

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    const {name, value} = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  async function handleClick() {

    const token = 'eyJhbGciOiJSUzI1NiIsImtpZCI6IjY3YmFiYWFiYTEwNWFkZDZiM2ZiYjlmZjNmZjVmZTNkY2E0Y2VkYTEiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdGVyY2Vpcm8tZ2VzdG9yIiwiYXVkIjoidGVyY2Vpcm8tZ2VzdG9yIiwiYXV0aF90aW1lIjoxNjg2NjY5NjI4LCJ1c2VyX2lkIjoiWHM0amhoSEhDeGJrUmtnT3F0OGdudHR4a2tyMiIsInN1YiI6IlhzNGpoaEhIQ3hia1JrZ09xdDhnbnR0eGtrcjIiLCJpYXQiOjE2ODY2Njk2MjgsImV4cCI6MTY4NjY3MzIyOCwiZW1haWwiOiJicnVubzJAdGVzdGUuY29tIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJmaXJlYmFzZSI6eyJpZGVudGl0aWVzIjp7ImVtYWlsIjpbImJydW5vMkB0ZXN0ZS5jb20iXX0sInNpZ25faW5fcHJvdmlkZXIiOiJwYXNzd29yZCJ9fQ.Pa1yNqJOFk_YddlKQWOZe0KX14wpHC3t8k1zyPa9rK65wliIso4RcGpF2uSjP6wnM_sWElqzZ4xNvkUSbUmJmnqAHesF-wQS1OU9t39DslFeHXNH5USIpUdcBNEXCCejtmpgMinji416jX2HQzvMiLmJWyfg-WzH5-Pf3rpP_dsAESs0tlueTPkTJ3ZDFJh0mBHdu_Jczsc20fm8bRQfjTs0gCnls8k8nTLwaQOuXojMgskNGx4m3z0pIQe1DyPt4dHmWL42gjxgyxhD_ZS2ko6CHMtSwnbfXvYBBCM5IcJg1NzGmPTwFGKoPyx7NK__E3C-vpKDHEbkYJiY_ybJ9g'
    const URL = "https://apigateway-production.up.railway.app/api/user"
 
    const request = await fetch(URL, {
      method: 'GET',
      mode: 'cors',
      headers: {
         'Content-Type': 'application/json',
         'Authorization': token,
      }
    });
    const response = await request.json()
    console.log(response)
  }

  return(
    <div>
      <label htmlFor="">Nome</label>
      <input type="text" name='name' onChange={handleChange} />
      <label htmlFor="">Email</label>
      <input type="text" name='email' onChange={handleChange} />
      <label htmlFor="">Senha</label>
      <input type="password" name='password' onChange={handleChange} />

      <button onClick={handleClick}>Cadastrar</button>
    </div>
  )
}