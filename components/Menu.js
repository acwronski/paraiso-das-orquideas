import Link from 'next/link';

const linkStyle = {
    marginRight: 8
}

const Menu = () => {
    return (
        <div>
            <Link href="/">
                <a style={linkStyle}>Home</a>

            </Link>

            <Link href="/sobre">
                <a style={linkStyle}>Sobre as Orquideas</a>

            </Link>

            <Link href="/contato">
                <a style={linkStyle}>Contato</a>

            </Link>
        </div>
    )
}
export default Menu;