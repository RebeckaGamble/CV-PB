import React from 'react'
import '../Styles/Cv.css'
import jag8 from "../Images/jag8.jpg"


function Cv() {
  return (
    <div className='cv'>
        <div className='head'><h1>CV</h1></div>

        <main className="education">
            <h2>Utbildning</h2>
            <strong>Webbutveckling inom E-handel 2021- 2023 </strong>
            <p>Medieinstitutet i  Stockholm</p>
            <strong>Redovisningskosult 2019 - 2021</strong>
            <p>Stockholm School of Business</p>
            <strong>Certifierad Löneadministratör 2017</strong>
            <p>Påhlmans handelsinstitut i Stockholm</p>
            <strong>Hundfysioterapeut 2013 - 2014</strong>
            <p>Svenska Fysioterapiskolan i Åre</p>
            <strong>Ekonomiasssitent 2011</strong>
            <p>Jense vuxenutbildning i Stockholm</p>
            <strong>Administratör 2010</strong>
            <p>Jensen vuxenutbbildning i Stockholm</p>
            <strong>El inr. skydd och säkerhet 2004 - 2007</strong>
            <p>Säkerhetsgymnasiet i Solna</p>
        
        </main>

        <aside className='aside' >

            <div className="personal">
                <div className='pic'>
                    <img src={jag8} alt="jag" style={{width: '260px', height: '300px'}}/>
                </div>
                    <br />
                    <h3>Personuppgifter</h3>
                    <strong>Namn:</strong> Rebecka Gamble
                    <br />
                    <strong>Mejl:</strong> rebeckagamble@hotmail.com
                    <br />
                    <strong>Mobil:</strong> 073 984 11 87
                    <br />
                    <br />
                    
            </div>
            <div className='work'>
                <h3>Anställningar</h3>
                <strong>Modern assistans</strong> 2007 - 2019
                    
               <p>Personlig assistent</p> 
            </div>

        </aside>
        <footer className='footer'>
            <div className='footerLeft'>
            <strong>Datorkunskaper</strong>
            <p>HTML</p>
            <p>CSS</p>
            <p>JavaScript</p>
            <p>React</p>
            <p>PHP</p>
            <p>Excel</p>
            <p>Visma</p>
            <p>Fortnox</p>
            

            </div>

            <div className='footerRight'>
                <strong>Praktikplatser</strong>
                <p>Taxcro Consulting 2021 - 10 veckor</p>
                <p>MBL Redovisning & Konsulting 2020 - 11 veckor</p>
                <br></br>
                <strong>Språkkunskaper</strong>
                <p>Svenska - Modersmål</p>
                <p>Engelska - Goda kunskaper i tal och skrift</p>
            </div>
            
        </footer>
    
    </div>
  )
}

export default Cv