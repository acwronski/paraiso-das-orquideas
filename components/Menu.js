import Link from 'next/link';

const linkstyle = {
    marginRight: 15
}

const Menu = () => {
    return (
        <div>
            <link href="/">
                <a style={linkstyle}>Home</a>

            </link>

            <link href="/sobre">
                <a style={linkstyle}>Sobre as Orquideas</a>

            </link>

            <link href="/contato">
                <a style={linkstyle}>Contato</a>

            </link>
        </div>
    )
}
export default Menu;