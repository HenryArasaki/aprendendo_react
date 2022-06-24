import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./styles";
import {Link} from 'react-router-dom'

export function Header(){
    return (
        <Container>
            <Profile to="/profile">
                <img src="https://github.com/henryarasaki.png" alt="imagem profile"/>

                <div>
                    <span>Bem-vindo,</span>
                    <strong>Henry Arasaki</strong>
                </div>
            </Profile>

            <Logout>
                <RiShutDownLine />
            </Logout>

        </Container>
    )
}