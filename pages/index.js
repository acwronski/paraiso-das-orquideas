import Head from 'next/head';
import Menu from '../components/Menu';
import { Jumbotron, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas)

function Home() {
    return (
        <div>
            <Head>
                <title>Home Zana Orquideas</title>
                <meta name='description' content='Site Sobre Orquideas e Metodos de Cultivo' />
                <meta name='author' content='Antonio Carlos Wronski' />
            </Head>
            <Menu />
            <Jumbotron fluid className='servicos'>
                <style>{`.servicos{
                    padding-top: 80px;
                    padding-bottom: 80px;
                    background-color: #000;
                    color: #fff;
                    margin-bottom: 0rem !important;
                }
                .circulo{
                    width: 140px;
                    height: 140px;
                    background-color: #fed136;
                    color: #009000;
                    font-size: 52px;
                    padding-top: 24px;
                }
                .centralizar{
                    margin: 0 auto !important;
                    float: none !important;

                }`}</style>
                <Container className='text-center'>
                    <div>
                        <h1 className='display-4'>Serviços da Empresa</h1>
                        <p className='lead pb-4'>Temos tudo que suas orquideas precisam para ficarem lindas</p>
                    </div>

                    <div class="row">
                        <div class="col-lg-4">
                            <div className='rounded-circle circulo  centralizar'><FontAwesomeIcon icon='spa'/>

                            </div>
                            <h2 className='mt-4   mb-4'>Tratamento de fungos</h2>
                            <p>Donec sed odio dui. Etiam porta sem malesuada magna mollis euismod. Nullam id dolor id nibh ultricies vehicula ut id elit. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna.</p>
                            <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                        </div>
                        <div class="col-lg-4">
                            <div className='rounded-circle circulo  centralizar'><FontAwesomeIcon icon='seedling'/>

                        </div>
                            <h2 className='mt-4 mb-4'>Torta da Zana</h2>
                            <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cras mattis consectetur purus sit amet fermentum. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh.</p>
                            <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                        </div>
                        <div class="col-lg-4">
                        <div className='rounded-circle circulo  centralizar'><FontAwesomeIcon icon='leaf'/>

                        </div>
                            <h2 className='mt-4   mb-4'>Tratamento Cochinilhas</h2>
                            <p>Quando se fala em praga de jardim, quase sempre se culpa o vilão errado. Respondo pessoalmente a mais de mil mensagens por semana só no Instagram do Minhas Plantas e posso dizer que alguém deveria fazer a defesa dos fungos. Quedê o advogado desses caras, gente? Se você acha que tudo o que dá ruim com suas plantas é culpa de "fungo branco" ou das formigas, aqui vão, de cara, duas informações chocantes. A primeira: fungos raramente são brancos, aliás, como uma frieira nos pés, a gente não vê o fungo e, sim, o sintoma da doença. O que a maioria das pessoas chama de fungo branco é, na verdade, um bichinho bem visível, a cochonilha-farinhosa. Você nunca terá sucesso em acabar com um praga se nao souber com que praga esta lidando</p>
                            <p>Segunda informação chocante: formigas raramente são as vilãs, exceto, é claro, se estiver falando de formigas-cortadeiras, mas raramente é delas que reclamamos. Quase sempre, as pessoas se incomodam com aquelas formiguinhas pequenas, de açúcar, que aparecem nas plantas adivinha só atrás do quê? Errou se falou flor, folha, raiz. Essas formigas querem, mesmo, é cochonilha. Pá! Taí a danada de novo! Vem cá entender quais são as três pragas mais comuns, pra lutar com as armas certas.</p>
                            <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                        </div>
                    </div>
                </Container>
            </Jumbotron>




        </div>
    );
}
export default Home