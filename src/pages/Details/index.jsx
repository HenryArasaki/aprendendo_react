import { Container, Links, Content } from "./styles"

import { Header } from "../../components/Header"
import { Button } from "../../components/Button"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"

export function Details() {

  return (
    <Container>
      <Header />
      <main>
        <Content>

          <ButtonText title="Excluir nota" />

          <h1>Titulo</h1>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod ipsum saepe cum, dolorum ut ex corrupti ea veritatis, laudantium tempora labore in dignissimos. Id voluptatum a amet facilis, necessitatibus recusandae.
          </p>

          <Section title="Links úteis">
            <Links>
              <li>
                <a href="https://www.youtube.com/">https://www.youtube.com/</a>
              </li>

            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="express" />
          </Section>

          <Button title="voltar" />


        </Content>
      </main>
    </Container>
  )
}