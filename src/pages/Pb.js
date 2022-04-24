import React from 'react'
import '../Styles/Pb.css'
import jag from '../Images/jag8.jpg'

function Pb () {
  return (
    <div>
        <div className='top'>
          <h2>Om mig</h2>
        </div>

        <main className='content'>
        Jag tog examen till redovisningskonsult i maj 2021 och var under 
        mina 2 år på skolan ute på 21 veckors praktik. 
        Jag har arbetat i Visma, Fortnox och Excel under 
        praktikperioderna. 
        <br></br>
        Jag har bland annat fått sköta den löpande bokföringen, 
        kundreskontra, leverantörsreskontra, journaler, RUT och ROT, 
        löner, avstämningar, moms, skatte och arbetsgivardeklarationer.
        <br></br> 
        <br></br>
        Jag kände att jag ville ha lite mer kunskaper inom IT och läste 
        därför några fristående kurser efter examen. Jag fick då upp ett
        intresse för programmering och allt man kan skapa med hjälp av 
        att koda. 
        <br></br>
        Därför studerar jag nu till webbutvecklare på 
        Medieinstitutet och tar examen i maj 2023.
        <br>
        </br>
        <br></br>
        I mitt tidigare yrke som personlig assistent var det viktigt att 
        kunna ta eget ansvar, följa instruktioner och tillgodose de behov 
        kunderna hade. Att kunna arbeta både självständigt och 
        tillsammans med andra var ett måste. 
        <br></br>
        Några viktiga uppgifter jag hade var att lära upp och ta hand om 
        nyanställda, att i god tid hantera inköp och boka in möten åt 
        kunden. 
        <br></br>
        Jag fick höra av kollegor att jag tog det lugnt i stressade 
        situationer och kändes trygg att arbeta tillsammans med.
        <br></br>
        <br></br>
        På fritiden har jag en kolonilott där jag odlar olika grönsaker, bär 
        och blommor. Varje år försöker jag förbättra skörden och lära 
        mig lösa de problem som kan uppstå under säsongen, detta 
        genom att dokumentera, analysera och göra en uppföljning året 
        därpå. Sen lär jag mig mycket av att fråga och prata med de mer 
        erfarna odlarna som ofta besitter stora kunskaper inom olika 
        områden. 
        <br></br>
        <br></br>
        Som person är jag målinriktad, tillförlitlig och ansvarstagande. 
        Jag har inget emot att gå kurser eller utbildningar för att utöka 
        mina kunskaper, utan ser det i stället som ett plus. 
        <br></br>
        <br></br>
        Jag ser fram emot att träffas och berätta mer om mig själv!
        <br></br>
        <br></br>
        Vänliga hälsningar 
        <br></br>
        Rebecka Gamble
        </main>

        <aside className='info'>
           <div className='pic'>
          <img src={jag} alt="jag" style={{width: '260px', height: '300px'}}/>
          </div>
          <h3>Personuppgifter</h3>
          <strong>Namn:</strong> Rebecka Gamble
          <br />
          <strong>Mejl:</strong> rebeckagamble@hotmail.com
          <br />
          <strong>Mobil:</strong> 073 984 11 87
          <br />
        
        </aside>
        
      </div>
  )
}

export default Pb