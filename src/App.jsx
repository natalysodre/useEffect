import React, {useState, useEffect} from "react"
import Amazon from "./assets/amazon.png"
import Sirio from "./assets/hospital.png"
import VnW from "./assets/vainaweb.png"
import styled from "styled-components"
import {createGlobalStyle} from "styled-components"

const GlobalStyle = createGlobalStyle`
  *{
    margin:0;
    padding:0;
    box-sizing: border-box;
  }
`

const Section = styled.section`
  border: solid red;
`

const Informacao = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 50vh;
`

const Logos = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 80vh;
`

function App(){
  
  const [marca, setMarca] = useState(VnW)

  useEffect(()=>{
    if(marca === VnW){
      document.querySelector("div").style.backgroundColor="#F8BF15"
      document.querySelector("div").style.transition="ease-in-out 0.8s"
      document.querySelector("div > h2").style.color = "white"
    }

    else if(marca === Amazon){
      document.querySelector("div").style.backgroundColor="#00FF00"
    }

    else if(marca === Sirio){
      document.querySelector("div").style.backgroundColor="tomato"
    }
  })

  return(
    <Section>
      <GlobalStyle />

      <Informacao>
        <img src={marca} alt="" />
        <h2>PATROCINADORA OFICIAL DO CICLO 'TALENTOS DIGITAIS DA ESCOLA VAI NA WEB'</h2>
      </Informacao>

      <Logos>
        <img onClick={()=>{setMarca(Amazon)}} src={Amazon} alt="" />
        <img onClick={()=>{setMarca(VnW)}} src={VnW} alt="" />
        <img onClick={()=>{setMarca(Sirio)}} src={Sirio} alt="" />
      </Logos>
    </Section>
  )
}

export default App