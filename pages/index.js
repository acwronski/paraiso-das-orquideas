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
            Home

        </div>
    );
}
export default Home