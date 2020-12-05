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
                            <p>A escolha entre um e outro vai depender das preferências de cada cultivador. Eu não gosto de adubos orgânicos, tais como torta de mamona, farinha de osso e bokashi, porque cultivo minhas plantas em apartamento. Com o apodrecimento destes materiais, surgem os mais desagradáveis odores, além da atração de insetos indesejáveis. Para o cultivo dentro de casa, este método não é muito cômodo.</p>
                            <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                        </div>
                        <div class="col-lg-4">
                        <div className='rounded-circle circulo  centralizar'><FontAwesomeIcon icon='leaf'/>

                        </div>
                            <h2 className='mt-4   mb-4'>Tratamento Cochinilhas</h2>
                            <p>1. Cochonilha Aparece em grupo, quase sempre no verso das folhas, perto do cabinho, da haste floral, nas nervuras ou do tronco - gosta de sugar as partes duras da planta. Pode ser branca e grudenta, como a cochonilha-farinhosa, com a aparência de verruguinhas marrons, igual à cochonilha-cerosa, ou mesmo em outros formatos. Como saber se é isso mesmo: passe a unha, se a verruguinha sai, é cochonilha. Se tiver muita formiga pequena na planta, também pode ser um indício de começo de infestação. Partes grudentas da folha também indicam que essa praga está presente. Como combater: com uma escovinha velha molhada em água e sabão de coco, retire as partes mais atacadas. Se estiverem no subtrato, submerja o vaso por umas horas em agua com umas gotas de detergente. </p>
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