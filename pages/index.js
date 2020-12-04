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
                <Container className='text-center'>
                    <h1 className='display-4'>Serviços da Empresa</h1>
                    <p className='lead'>Temos tudo que suas orquideas precisa para ficarem lindas</p>
                </Container>
            </Jumbotron>
            Home

        </div>
    );
}
export default Home