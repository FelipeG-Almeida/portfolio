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
				<Title text="Formação" />
			</div>
			<p>
				Um resumo das minhas <s.b>formações acadêmicas</s.b> e
				<s.b> cursos</s.b>, destacando as qualificações e conhecimentos
				adquiridos ao longo da minha jornada educacional.
			</p>
			<s.div>
				<s.cardAcademicas>
					<s.h3>Acadêmica</s.h3>
					<s.card>
						<s.imageDiv>
							<img src={IFPA} alt="" />
						</s.imageDiv>
						<div>
							<h5>
								Instituto Federal de Educação, Ciência e
								Tecnologia do Pará
							</h5>
							<p>Licenciatura em Informática</p>
							<small>01/2016 - 10/2020</small>
						</div>
					</s.card>
					<s.card>
						<s.imageDiv>
							<img src={Uninter} alt="" />
						</s.imageDiv>
						<div>
							<h5>Centro Universitário Uninter</h5>
							<p>Tecnólogo em Gestão da Produção Industrial</p>
							<small>03/2014 - 05/2017</small>
						</div>
					</s.card>
				</s.cardAcademicas>
				<s.cardCursos>
					<s.h3>Cursos e Bootcamps</s.h3>
					<s.card>
						<s.imageDiv>
							<img src={Labenu} alt="" />
						</s.imageDiv>
						<div>
							<h5>Labenu</h5>
							<p>
								Desenvolvimento Web Full Stack (React + NodeJs)
							</p>
							<small>07/2022 - 07/2023</small>
						</div>
					</s.card>
					<s.card>
						<s.imageDiv>
							<img src={Alura} alt="" />
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
							<img src={DIO} alt="" />
						</s.imageDiv>
						<div>
							<h5>DIO + Santander</h5>
							<p>
								Bootcamp Santander Coders Fullstack (Java +
								Angular)
							</p>
							<small>08/2023 - 10/2023</small>
						</div>
					</s.card>
					<s.card>
						<s.imageDiv>
							<img src={IFPA} alt="" />
						</s.imageDiv>
						<div>
							<h5>
								Instituto Federal de Educação, Ciência e
								Tecnologia do Pará
							</h5>
							<p>Técnico em Redes de Computadores</p>
							<small>01/2016 - 08/2017</small>
						</div>
					</s.card>
				</s.cardCursos>
			</s.div>
		</s.section>
	);
}
