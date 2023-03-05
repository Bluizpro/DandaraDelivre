import './style.css';
import { ReactComponent as Github } from './github.svg';
import { ReactComponent as Linkedin } from './linkedin.svg';





function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido  pelo Desenvolvedor Bruno Perez.
            <div className="footer-icons" >                
                <a href="https://www.linkedin.com/in/bruno-perez-962309190/" target="_black">
                    <Linkedin />
                </a>
                <a href="https://github.com/Bluizpro" target="_black">
                    <Github />
                </a>
            </div>    
        </footer>
    )
}
export default Footer;