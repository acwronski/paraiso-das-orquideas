import Head from 'next/head';
import Menu from '../components/Menu';
import { Jumbotron, Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {View, Image} from 'react';

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
                            <p>doenças que causam manchas você trata fácil com vinagre de maçã, mas só quando estão no começo. Fungos e bactérias gostam de uma ligeira acidez no substrato. O vinagre é um dos ingredientes caseiros mais ácidos e o leite de magnésia, um dos mais alcalinos que existem. Esses produtos desequilibram o pH ideal dos microorganismos, dificultando o desenvolvimento de doenças. Borrife as orquídeas com uma colher de sopa de vinagre de maçã ou de leite de magnésia diluída em um litro de água – faça no final da tarde ou de manhã muito cedinho, para o sol não queimar as folhas recém-borrifadas. Essa medida só funciona bem quanto as doenças ainda não se espalharam por muitas plantas, ou seja, se já tiver uma infestação na sua casa, o jeito é usar calda bordalesa (fungos e bactérias em geral), calda de camomila (específica para ferrugem) ou leite cru (para oídio e míldio). Na dúvida sobre como identificar cada uma das doenças, dê uma olhada na galeria de manchas foliares.</p>
                            <p><a class="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
                        </div>
                        <div class="col-lg-4">
                            <div className='rounded-circle circulo  centralizar'><FontAwesomeIcon icon='seedling'/>

                        </div>
                            <h2 className='mt-4 mb-4'>Torta da Zana</h2>
                            <p>Evidentemente, no nosso cultivo doméstico, ou mesmo em estufas comerciais, devemos suprir esta demanda por nutrientes de uma forma artificial. Mas não é necessário enlouquecer com um esquema alucinante de adubações. O importante é entender quais são as opções disponíveis de fertilizantes e escolher o método que melhor se adequa à rotina e ao ambiente de cultivo de cada um. Existem basicamente dois tipos de adubos disponíveis para jardinagem: o orgânico e o inorgânico, erroneamente chamado de adubo químico. O fertilizante orgânico precisa ser decomposto por micro-organismos, fungos e bactérias, que vão liberar os nutrientes para serem absorvidos pelas raízes das orquídeas. Já o composto inorgânico, que tem fórmulas variadas, já entrega todos os elementos necessários ao desenvolvimento da planta, sob a forma de macro e micronutrientes.</p>
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
            <view>
                <image source={require('../img/orquidea.jpg')}/>

                

            </view>




        </div>
    );
}
export default Home