import { useState } from 'react';
import { ThemeProvider } from 'styled-components';

import { Header } from './components/Header';
import { LinesBackground } from './components/LinesBackground';

import dark from './styles/theme/darkMode';
import light from './styles/theme/lightMode';

import codeImage from './assets/code_illustration.svg';
import perfil from './assets/perfil.svg';
import perfilDark from './assets/perfil_dark.svg'

import {
  Container, ContainerRotateWords, Main, Wrapper,
  Title, TextRotateWords, CodeImage, ContainerArt,
  Perfil, WrapperMe, BackgroundImage, ContainerSocial,
  LinkedIn, Instagram, ButtonChangeTheme, Sun, Moon
} from './style';

interface ThemeData {
  mode: 'light' | 'dark'
}

export default function App() {

  const [theme, setTheme] = useState<ThemeData>({ mode: 'dark' });

  function handleChangeTheme() {

    const themeMode = theme.mode;

    if (themeMode === 'dark')
      setTheme({ mode: 'light' })
    else setTheme({ mode: 'dark' })

  }

  return (
    <ThemeProvider theme={theme.mode === 'dark' ? dark : light}>
      <Container>
        <Wrapper>
          <Header themeMode={theme.mode} />
          <Main>
            <WrapperMe>
              <Title>
                Oi 👋🏽. Sou o Caio Anderson, <br />
                desenvolvedor
                <ContainerRotateWords>
                  <TextRotateWords>front-end.</TextRotateWords>
                  <TextRotateWords>mobile.</TextRotateWords>
                </ContainerRotateWords>
              </Title>
              <ContainerSocial>
                <a href="https://www.instagram.com/_caio_anderson/" target="_blank">
                  <Instagram />
                </a>
                <a href="https://www.linkedin.com/in/caio-anderson/" target="_blank">
                  <LinkedIn />
                </a>
              </ContainerSocial>
            </WrapperMe>

            <ContainerArt>
              <BackgroundImage>
                <CodeImage src={codeImage} />
                {theme.mode === 'dark' ?
                  <Perfil src={perfil} /> : <Perfil src={perfilDark} /> }
              </BackgroundImage>
            </ContainerArt>

          </Main>

        </Wrapper>

        <ButtonChangeTheme onClick={() => handleChangeTheme()}>
          {theme.mode === 'dark' ? <Moon /> : <Sun />}
        </ButtonChangeTheme>
        <LinesBackground />

      </Container>
    </ThemeProvider>

  )
}