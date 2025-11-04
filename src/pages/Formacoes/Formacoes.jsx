import Title from '../../components/Title/Title';
import IFPA from '../../assets/icons/ifpa.png';
import Uninter from '../../assets/icons/uninter.png';
import Labenu from '../../assets/icons/labenu.png';
import Alura from '../../assets/icons/alura.png';
import DIO from '../../assets/icons/dio.png';
import * as s from './style';

export default function Formacoes() {
    return (
        <s.section id='formacoes'>
            <div>
                <Title text='Education' />
            </div>
            <p>
                A summary of my <s.b>academic background</s.b> and
                <s.b> bootcamps/courses</s.b>, highlighting the qualifications
                and knowledge acquired throughout my educational journey.
            </p>
            <s.div>
                <s.cardAcademicas>
                    <s.h3>Academic</s.h3>
                    <s.card>
                        <s.imageDiv>
                            <img src={IFPA} alt='' />
                        </s.imageDiv>
                        <div>
                            <h5>
                                Federal Institute of Education, Science and
                                Technology of Pará
                            </h5>
                            <p>
                                Bachelor’s Degree in Computer Science Education
                            </p>
                            <small>01/2016 - 10/2020</small>
                        </div>
                    </s.card>
                    <s.card>
                        <s.imageDiv>
                            <img src={Uninter} alt='' />
                        </s.imageDiv>
                        <div>
                            <h5>Uninter University Center</h5>
                            <p>
                                Technologist in Industrial Production Management
                            </p>
                            <small>03/2014 - 05/2017</small>
                        </div>
                    </s.card>
                </s.cardAcademicas>
                <s.cardCursos>
                    <s.h3>Courses & Bootcamps</s.h3>
                    <s.card>
                        <s.imageDiv>
                            <img src={Labenu} alt='' />
                        </s.imageDiv>
                        <div>
                            <h5>Labenu</h5>
                            <p>Full Stack Web Development (React + NodeJs)</p>
                            <small>07/2022 - 07/2023</small>
                        </div>
                    </s.card>
                    <s.card>
                        <s.imageDiv>
                            <img src={Alura} alt='' />
                        </s.imageDiv>
                        <div>
                            <h5>Alura + Oracle</h5>
                            <p>
                                Oracle Next Education, Backend (Java + Spring)
                            </p>
                            <small>04/2023 - 10/2023</small>
                        </div>
                    </s.card>
                    <s.card>
                        <s.imageDiv>
                            <img src={DIO} alt='' />
                        </s.imageDiv>
                        <div>
                            <h5>DIO + Santander</h5>
                            <p>
                                Santander Coders Fullstack Bootcamp (Java +
                                Angular)
                            </p>
                            <small>08/2023 - 10/2023</small>
                        </div>
                    </s.card>
                    <s.card>
                        <s.imageDiv>
                            <img src={IFPA} alt='' />
                        </s.imageDiv>
                        <div>
                            <h5>
                                Federal Institute of Education, Science and
                                Technology of Pará
                            </h5>
                            <p>Technical Degree in Computer Networks</p>
                            <small>01/2016 - 08/2017</small>
                        </div>
                    </s.card>
                </s.cardCursos>
            </s.div>
        </s.section>
    );
}
