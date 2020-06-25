import React from 'react'
import Botao from '../components/Botao'
import styled, { keyframes } from 'styled-components'
import { bounce } from 'react-animations'

const Bounce = styled.div`animation:2s ${keyframes`${bounce}`} `

export default function ola() {
  return (
    <div className="ola">
      <Bounce><h2>Olá,<br />Sou <span className="titulo-destaque">Vinicius</span>,<br />Front-end Web developer.</h2></Bounce>
      <p className="subtitulo">HTML5 & CSS3 / JS / entre outros...</p>
      <br />
      <Botao />
    </div>
  )
}

