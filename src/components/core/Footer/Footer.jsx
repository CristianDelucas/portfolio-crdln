import React from 'react'
import '../../../App.scss';
import linkedin from '../../../images/linkedin.png';
import github from '../../../images/github.png';

const Footer = () => {
    return (
        <footer className="c-footer">
            <div className="c-footer__content">
                <div className="content-container">
                    <div class="down-below">
                        <div class="contact">
                            <p>crdelucasnoguero@gmail.com</p>
                        </div>
                        <ul class="links">
                        <li>
                            <a href="https://github.com/CristianDelucas" title="@CristianDeLucas en GitHub" rel="me" target="_blank">
                                <i><img className="logo" src={github} alt="github" /></i>
                            </a>
                        </li>
                        <li>
                                <a href="https://www.linkedin.com/in/cristian-de-lucas-noguero-51a952197/" rel="me" title="Currículum de Cristian en LinkedIn" target="_blank">
                                    <i><img className="logo" src={linkedin} alt="linkedin" /></i>
                                </a>
                            </li>
                        </ul>
                        <div class="info">
                            <p>© 2021 Cristian</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
