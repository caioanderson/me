import logo from '../../assets/logo.svg';
import logoDark from '../../assets/logo_dark.svg';
import { Container, Image, ItemMenu, Menu } from './style';

interface HeaderProps {
    themeMode: 'light' | 'dark';
}

export function Header({ themeMode }: HeaderProps) {
    console.log("🚀 ~ file: index.tsx ~ line 10 ~ Header ~ themeMode", themeMode)
    return (
        <Container>
            {themeMode === 'dark' ?
                <Image src={logo} /> : <Image src={logoDark} />
            }
            <Menu>
                <ItemMenu>
                    <a href="">Sobre Mim</a>
                </ItemMenu>
                <ItemMenu>
                    <a href="">Projetos</a>
                </ItemMenu>
                <ItemMenu>
                    <a href="">Conhecimentos</a>
                </ItemMenu>
            </Menu>

        </Container>
    )
}