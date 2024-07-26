import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import React, { useState, CSSProperties, useEffect } from 'react'


import './Home.css'
import Navbar from './Navbar';
import IABackground from '../img/pexels-cottonbro-6153739.jpg'
import MaoIABackground from '../img/CashMacanayaRobotHandReachingForHumanHandRobotTheCreationOfAdamConceptUnsplashLandscape.jpg'


function Home(){

    return(
        
        <div id="Home">
            
            <Parallax pages={2}>
            
                <ParallaxLayer offset={0} speed={0}>
                    <Navbar/>
                    <img src={IABackground} alt='wallpaperIA' id='IABackground'/>
                </ParallaxLayer>

                <ParallaxLayer id="paralax" offset={0} speed={0}>
                    <p id='paragrafo'>Impulsione o Atendimento da sua empresa <br/> Utilizando Nossa Inteligência Artificial BDA.</p>
                    <button class="button-50" role="button">TESTE GRATUITO</button>
                </ParallaxLayer>

                <ParallaxLayer offset={1} speed={1} pages={1}>
                    <img src={MaoIABackground} alt='wallpaper mão IA' id="MaoIABackground"/>
                </ParallaxLayer>
                
                <ParallaxLayer offset={1} speed={2} pages={1}>
                    <p id='paragrafo2'>A Inteligência Artificial está aqui!<br/> Uma revolução no gerenciamento empresarial</p>
                </ParallaxLayer>
            </Parallax>

        </div>


    )
    
}

export default Home;