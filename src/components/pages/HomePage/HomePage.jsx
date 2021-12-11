import React from 'react'
import dlxface from '../../../images/dlxface.png';
import construction from '../../../images/construction.png';
import pixelabout from '../../../images/pixelabout.png';

const HomePage = () => {
    return (
        <div className="container">
            <div className="c-home" id="">
                {/* site-header */}
                <header className="header">
                    <div className="header-title">
                        <h1>CRISTIAN DE LUCAS NOGUERO</h1>
                        <h2>Full-Stack Developer</h2>
                    </div>
                    <div className="header-photo">
                        <img className="img-face" src={dlxface} alt="cristian"/>
                    </div>
                    <div className="header-intro">
                        <p>¡Hola! En mi carrera como programador he estado formandome tanto de la parte Back como del Front.</p>
                        <p>He trabajado con diferentes lenguajes y recientemente he terminado una bootcamp de Full-Stack Developer.</p>
                        <p>Tengo muchas ganas de poner en práctica lo aprendido y aportar mi granito de arena en este mundo.</p>
                    </div>
                </header>

                {/* site-main */}
                <main className="main">
                
                    <section className="section" id="web">
                        <div className="section-title">
                            <h1>WEB</h1>
                        </div>
                        <div className="section-description">
                            <p>En esta sección podréis ver las últimas páginas que he realizado.</p>
                        </div>
                        <div className="section-content">
                        <img className="img-face" src={construction} alt="construction"/>
                        </div>
                    </section>

                    <section className="section" id="games">
                        <div className="section-title">
                            <h1>JUEGOS</h1>
                        </div>
                        <div className="section-description">
                            <p>Quizás en algún futuro cercano, desarrolle una app en el que podamos desconectar un poco.</p>
                        </div>
                        <div className="section-content">
                            <img className="img-face" src={construction} alt="construction"/>
                        </div>
                    </section>

                    <section className="section" id="about">
                        <article>
                            <div className="section-title">
                                <h1>ABOUT</h1>
                            </div>
                            <div className="section-description">
                                <img className="img-pixel" src={pixelabout} alt="construction"/>
                            </div>
                            <div className="section-about">
                                <p>
                                    Esta página es la primera que desarrolle una vez acabado el Bootcamp en Upgrade de Full-Stack Developer.
                                </p>
                                <p>
                                    Traeré más proyectos para que podáis ver mi crecimiento.
                                </p>
                            </div>
                        </article>
                    </section>

                </main>
            </div>
            
        </div>
    )
}

export default HomePage
