import React from 'react'
import { FaHtml5, FaCss3, FaGit, FaSass,FaJs, FaReact, FaUndo, FaFire, FaNodeJs, FaFlagUsa} from 'react-icons/fa';

export default function ListaSkill() {
  return (
    <>
      <ul className="ListaSkill">
        <li className="itemSkill">
          <div className="wrapper" data-anim="base wrapper">
            <div className="circle" data-anim="base left"></div>
            <div className="circle" data-anim="base right"></div>
          </div>
        </li>
        <span className="skillTxt">Html <FaHtml5/></span>
        <li className="itemSkill">
          <div className="wrapper" data-anim="base wrapper">
            <div className="circle" data-anim="base left"></div>
            <div className="circle" data-anim="base right"></div>
          </div>
        </li>
        <span className="skillTxt">Css <FaCss3/></span>
        <li className="itemSkill">
          <div className="wrapper" data-anim="base wrapper">
            <div className="circle" data-anim="base left"></div>
            <div className="circle" data-anim="base right"></div>
          </div>
        </li>
        <span className="skillTxt">Git <FaGit/></span>
        <li className="itemSkill">
          <div className="wrapper" data-anim="base wrapper">
            <div className="circle" data-anim="base left60"></div>
            <div className="circle" data-anim="base right"></div>
          </div>
        </li>
        <span className="skillTxt">sass <FaSass/></span>
        <li className="itemSkill">
          <div className="wrapper" data-anim="base wrapper">
            <div className="circle" data-anim="base left60"></div>
            <div className="circle" data-anim="base right"></div>
          </div>
        </li>
        <span className="skillTxt">JavaScypt <FaJs/></span>
    </ul>
    <h2 className="tituloSkill">Habilidades & Experiências</h2>
    <ul className="ListaSkill">
      <li className="itemSkill">
        <div className="wrapper" data-anim="base wrapper">
          <div className="circle" data-anim="base left60"></div>
          <div className="circle" data-anim="base right"></div>
        </div>
      </li>
      <span className="skillTxt">React <FaReact/></span>
      <li className="itemSkill">
        <div className="wrapper" data-anim="base wrapper">
          <div className="circle" data-anim="base left60"></div>
          <div className="circle" data-anim="base right"></div>
        </div>
      </li>
      <span className="skillTxt">Scrum <FaUndo/></span>
      <li className="itemSkill">
        <div className="wrapper" data-anim="base wrapper">
          <div className="circle" data-anim="base left60"></div>
          <div className="circle" data-anim="base right"></div>
        </div>
      </li>
      <span className="skillTxt">Fire Base <FaFire/></span>
      <li className="itemSkill">
        <div className="wrapper" data-anim="base wrapper">
          <div className="circle" data-anim="base left60"></div>
          <div className="circle" data-anim="base right"></div>
        </div>
      </li>
      <span className="skillTxt">NodeJS <FaNodeJs/></span>
      <li className="itemSkill">
        <div className="wrapper" data-anim="base wrapper">
          <div className="circle" data-anim="base left60"></div>
          <div className="circle" data-anim="base right"></div>
        </div>
      </li>
      <span className="skillTxt">Inglês <FaFlagUsa/></span>
  </ul>
     
  </>
  )
}
