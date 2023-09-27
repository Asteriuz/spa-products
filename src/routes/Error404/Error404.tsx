import { Link } from 'react-router-dom';

export default function Error404() {
    return (
        <div>
            <h1>Error404</h1>
            <Link to="/">Voltar para a Home</Link>
        </div>
    );
}
