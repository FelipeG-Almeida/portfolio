import Title from '../../components/Title/Title';
import Artemis from '/artemis.png';
import TuaAgenda from '/tua-agenda.png';
import * as s from './styles';

export default function Experiencias() {
    return (
        <s.section id='experiencias'>
            <Title text='Experiências' />
            <p>
                Um resumo das minhas <s.b>experiências profissionais</s.b>,
                destacando as habilidades e conhecimentos adquiridos ao longo da
                minha carreira.
            </p>
            <s.jobsDiv>
                <s.card>
                    <img src={TuaAgenda} alt='Tua Agenda Logo' />
                    <div>
                        <h5>Tua Agenda</h5>
                        <h6>Desenvolvedor Full-stack</h6>
                        <small>08/2024 - Presente</small>
                        <p>
                            Responsável por projetar e implementar interfaces
                            dinâmicas com forte foco em usabilidade e apelo
                            visual. Atuação com{' '}
                            <s.b>React, Next.js e Styled-components</s.b>.
                            Desenvolvo uma plataforma que permite que clientes
                            registrem seus negócios e serviços, facilitando o
                            agendamento de compromissos para os usuários, com
                            foco em performance e experiência do usuário (UX).
                            Responsável por aumentar o desempenho do sistema ao
                            otimizar interações no front-end, resultando em uma
                            redução significativa no número de chamados para o
                            back-end. Também atuo na manutenção e implementação
                            de novos microserviços no backend através de{' '}
                            <s.b>Java/Spring e MongoDB.</s.b>
                        </p>
                    </div>
                </s.card>
                <s.card>
                    <img src={Artemis} alt='Artemis Corporation Logo' />
                    <div>
                        <h5>Artemis Corporation</h5>
                        <h6>Desenvolvedor Full-stack</h6>
                        <small>02/2024 - 03/2025</small>
                        <p>
                            Responsável por projetar e implementar um sistema de
                            automação no WhatsApp. Uso de{' '}
                            <s.b>Java com Spring e MySQL</s.b> para desenvolver
                            APIs, gerenciar bancos de dados e implementar lógica
                            de negócios complexa. No front-end, utilizo{' '}
                            <s.b>Angular e React</s.b> para construir interfaces
                            intuitivas e envolventes. Desenvolvimento de um
                            sistema de automação do WhatsApp que permite aos
                            clientes criar fluxos de atendimento personalizados
                            e automatizados. Através de uma interface em blocos,
                            é possível configurar chatbots dinâmicos.
                            Responsável por reformular a UI do micro serviço
                            para criação de chatbots, substituindo Angular por
                            React, o que melhorou a usabilidade e o desempenho,
                            tornando a experiência mais responsiva e amigável
                            para os clientes.
                        </p>
                    </div>
                </s.card>
            </s.jobsDiv>
        </s.section>
    );
}
