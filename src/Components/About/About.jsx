import React from 'react'
import './About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'

const About = ({ setPlayState }) => {
    return (
        <div className='about'>
            <div className="about-left">
                <img src={about_img} alt="" className='about-img' />
                <img src={play_icon} alt="" className='play-icon' onClick={() => { setPlayState(true) }} />
            </div>
            <div className="about-right">
                <h3>ABOUT UNIVERSITY</h3>
                <h2>Nurturing Tomorrow's Leaders Today</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat voluptates architecto consequuntur. In ea, temporibus facere culpa ab sed minus vero recusandae, accusantium repellat at! Odit soluta aliquid aspernatur, voluptates non accusantium, ea aliquam nihil natus, aperiam quasi! Velit officia vero consequuntur veniam</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum tempore, nihil asperiores voluptatibus alias mollitia odit nemo recusandae, ipsum animi perspiciatis esse libero sapiente aut beatae ullam voluptatum illum deserunt.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, laborum! Odit corporis perspiciatis porro voluptatibus et possimus fugit cupiditate sint in saepe illum id assumenda modi placeat, enim, doloremque aperiam sequi obcaecati quo. Pariatur officiis adipisci rerum? Distinctio nam, quis non asperiores perspiciatis nobis, esse id dolorum ad iusto enim.</p>
            </div>
        </div>
    )
}

export default About
