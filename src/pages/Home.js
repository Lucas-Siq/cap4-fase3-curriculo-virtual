import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import React from 'react';
import LogoCV from '../assets/LogoCV.svg'
import styles from './layouts/home.module.css'

function Home() {
    
    return(
        <main className={styles.principalhome}>
            <section className={styles.logo}>
            <img src={LogoCV} alt="logo" />
            <p>COMECE A COMPARTILHAR<br/>AGORA MESMO!</p>
            </section>
            <section className={styles.botoeshome}>
                <div><button type='submit' className={styles.Button6}>ENTRAR</button></div>
                <div><Link to="/dadospessoais"><button type='submit' className={styles.Button7} > CADASTRAR</button></Link></div>
            </section>
        
        </main>
        
    )
    

}

export default Home