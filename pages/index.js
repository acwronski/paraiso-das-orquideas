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
                <Container>
                    <h1>Serviços da Empresa</h1>
                    <p>Temos tudo que suas orquideas precisa para ficarem lindas</p>
                </Container>
            </Jumbotron>
            Home

        </div>
    );
}
export default Home