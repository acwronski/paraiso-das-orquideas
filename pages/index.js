import Head from 'next/head';
import Menu from '../components/Menu';
import {Jumbotron, Container} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

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
                }`}</style>
                <Container className='text-center'>
                    <h1 className='display-4'>Serviços da Empresa</h1>
                    <p className='lead'>Temos tudo que suas orquideas precisam para ficarem lindas</p>
                </Container>
            </Jumbotron>

            <Jumbotron fluid className='servicos2'>
                <style>{`.servicos2{
                    padding-top: 80px;
                    padding-bottom: 80px;
                    background-color: #00ff00;
                    color: #fff;
                    
                }`}</style>
                <Container className='text-center'>
                    <h1 className='display-4'>Como acabar com fungos e cochinilhas</h1>
                    <p className='lead'>Temos tudo que suas orquideas precisam para ficarem lindas</p>
                </Container>
            </Jumbotron>
            

        </div>
    );
}
export default Home