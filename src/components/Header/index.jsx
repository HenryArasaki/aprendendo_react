import { RiShutDownLine } from "react-icons/ri";
import { Container, Profile, Logout } from "./styles";

export function Header(){
    return (
        <Container>
            <Profile>
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