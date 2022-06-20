import {Container} from "./styles"

import { Button } from "../../components/Button"

export function Details() {

  return (
    <Container>
      <h1 class="batata">Hello World!</h1>
      <p>teste</p>

      <Button title="entrar" loading/>
      <Button title="sair" loading/>
      <Button title="outro" loading/>

    </Container>
  )
}