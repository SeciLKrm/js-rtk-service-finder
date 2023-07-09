
import { Form, Button } from "react-bootstrap"
import useApi from "../../hooks/useApi"



export default function Login() {
const api = useApi()





    return (
        <>
        <div className="container">
<div className="row">
  <div className="col-lg-12">
    <div className="page-content ">
      <div className="main-banner">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="header-text">
            <Form
            onSubmit={async(event) => {
                event.preventDefault()
                // Burada formu json objesine çevireceğiz. Bunun için en önemli şart
                          // her inputun `name` property'sinin set edilmiş olması gerekiyor.

                          /**
                           * FormData class'ı tarayıcılarda builtin şekilde gelir. Bu class
                           * parametre olarak bir html form elemanı alır. Sonra bu formun
                           * içerisindeki name property'sine sahip olan tüm input, hidden input,
                           * checkbox, select, textarea gibi elemanları FormData nesnesine çevirir.
                           */
                const formData = new FormData(event.currentTarget)
                const formJson = Object.fromEntries(formData.entries())
                console.log(">> Form Json",console.log(formJson) )
// >> Form Json {email: 'c20@user.com', password: '123123'}

                const authResponse = await api.post("auth/login", formJson)
                console.log(">>Auth resp", authResponse)
            }
          
          
            }>
                <h6>Login Form</h6>
      <Form.Group className="mb-3 text-white" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"
        name="email" />
        <Form.Text className="text-muted">
        We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3 text-white" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"
        name="password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        
      </Form.Group>
      <Button type="submit">Submit</Button>
       </Form>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
        
            
       </>     
  )

}