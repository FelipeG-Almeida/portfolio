import Title from '../../components/Title/Title';
import html from '../../assets/icons/html.png';
import css from '../../assets/icons/css.png';
import js from '../../assets/icons/js.png';
import ts from '../../assets/icons/ts.png';
import react from '../../assets/icons/react.png';
import angular from '../../assets/icons/angular.png';
import node from '../../assets/icons/node.png';
import java from '../../assets/icons/java.png';
import spring from '../../assets/icons/spring.png';
import mysql from '../../assets/icons/mysql.png';
import postgree from '../../assets/icons/postgree.png';
import git from '../../assets/icons/git.png';
import * as s from './style';

export default function Sobre() {
    const icons = [
        { src: html, name: 'HTML' },
        { src: css, name: 'CSS' },
        { src: js, name: 'JavaScript' },
        { src: ts, name: 'TypeScript' },
        { src: react, name: 'React' },
        { src: angular, name: 'Angular' },
        { src: node, name: 'Node.js' },
        { src: java, name: 'Java' },
        { src: spring, name: 'Spring' },
        { src: mysql, name: 'MySQL' },
        { src: postgree, name: 'PostgreSQL' },
        { src: git, name: 'Git' },
    ];

    return (
        <s.section id='sobre'>
            <s.titleDiv>
                <Title text='About me' />
            </s.titleDiv>
            <s.aboutDiv>
                <s.h3>Get to know me better!</s.h3>
                <s.p>
                    I’m Brazilian, originally from Alagoas and currently living
                    in Pará. Born in 1997, I’m a <s.b>Full Stack Developer</s.b>{' '}
                    focused on building and maintaining web applications —
                    working across both front-end and back-end to help ensure
                    product and customer success. You can check out some of my
                    work in the <s.b>projects</s.b> section.
                </s.p>
                <s.p>
                    I enjoy talking about science and technology, and I like
                    sharing knowledge and insights I’ve learned throughout my
                    years as a developer with the Dev community.
                </s.p>
                <s.p>
                    I’m open to work opportunities where I can contribute,
                    learn, and grow. If you have a good opportunity that matches
                    my skills and experience, feel free to reach out.
                </s.p>
                <s.button
                    to='contato'
                    smooth={true}
                    duration={500}
                    offset={-30}
                >
                    Get in touch
                </s.button>
            </s.aboutDiv>
            <div>
                <s.h3>Skills / Stack</s.h3>
                <s.stackDiv>
                    {icons.map((icon, index) => (
                        <s.figure key={index}>
                            <img src={icon.src} alt={`${icon.name} icon`} />
                            <img src={icon.src} alt='' />
                            <figcaption>{icon.name}</figcaption>
                        </s.figure>
                    ))}
                </s.stackDiv>
            </div>
        </s.section>
    );
}
