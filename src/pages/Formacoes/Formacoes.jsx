import Title from '../../components/Title/Title';
import IFPA from '../../assets/icons/ifpa.png';
import Uninter from '../../assets/icons/uninter.png';
import * as s from './style';

export default function Formacoes() {
	return (
		<s.section>
			<div>
				<Title text="Formação" />
			</div>
			<p>
				Um resumo das minhas <s.b>formações acadêmicas</s.b> e
				<s.b> cursos</s.b>, destacando as qualificações e conhecimentos
				adquiridos ao longo da minha jornada educacional.
			</p>
			<s.div>
				<s.cardsDiv>
					<s.h3>Formações Acadêmicas</s.h3>
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
				</s.cardsDiv>
				<s.cardsDiv>
					<s.h3>Cursos e Bootcamps</s.h3>
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
				</s.cardsDiv>
			</s.div>
		</s.section>
	);
}
