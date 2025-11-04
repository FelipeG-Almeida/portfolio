import Title from '../../components/Title/Title';
import Artemis from '/artemis.png';
import TuaAgenda from '/tua-agenda.png';
import * as s from './styles';

export default function Experiencias() {
    return (
        <s.section id='experiencias'>
            <Title text='Experience' />
            <p>
                A summary of my <s.b>professional experience</s.b>, highlighting
                the skills, impact and knowledge I’ve developed throughout my
                career.
            </p>
            <s.jobsDiv>
                <s.card>
                    <img src={TuaAgenda} alt='Tua Agenda Logo' />
                    <div>
                        <h5>Tua Agenda</h5>
                        <h6>Full-stack Developer</h6>
                        <small>08/2024 - Present</small>
                        <p>
                            Responsible for designing and implementing dynamic
                            and visually appealing user interfaces, with strong
                            focus on usability and performance. Working with{' '}
                            <s.b>React, Next.js and Styled-components</s.b>.
                            Building a platform that allows clients to register
                            their businesses and services, enabling users to
                            easily book appointments – focusing on performance
                            and user experience (UX). Improved overall system
                            performance by optimizing front-end interactions,
                            significantly reducing the amount of requests made
                            to the back-end. Also responsible for maintaining
                            and implementing new microservices on the backend
                            using <s.b>Java/Spring and MongoDB.</s.b>
                        </p>
                    </div>
                </s.card>
                <s.card>
                    <img src={Artemis} alt='Artemis Corporation Logo' />
                    <div>
                        <h5>Artemis Corporation</h5>
                        <h6>Full-stack Developer</h6>
                        <small>02/2023 - 08/2024</small>
                        <p>
                            Responsible for designing and implementing an
                            automated WhatsApp system. Worked with{' '}
                            <s.b>Java + Spring and MySQL</s.b> to build APIs,
                            manage database operations and implement complex
                            business logic. On the front-end, used{' '}
                            <s.b>Angular and React</s.b> to build intuitive and
                            engaging interfaces. Developed an automation system
                            that enables clients to create custom support flows
                            and automated chat experiences. Through a
                            block-based interface, clients can configure dynamic
                            chatbots. Led the UI refactor of the chatbot
                            creation microservice — replacing Angular with
                            React, improving usability and performance,
                            resulting in a more responsive and user-friendly
                            experience.
                        </p>
                    </div>
                </s.card>
            </s.jobsDiv>
        </s.section>
    );
}
