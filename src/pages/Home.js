import React from 'react'
import Ola from '../components/Ola'
import Menu from '../components/Menu'
import SouWeb from '../components/SouWeb'


export default function home() {

  return (
    <>
      <div className="container">
        <Menu/>
        <Ola/> 
        <SouWeb/>
      </div>
    </>
    )
}