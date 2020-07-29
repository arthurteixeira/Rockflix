import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria() {

    const [categorias, setCategorias] = useState(['Teste']);
    const [nomeDaCategoria, setNomeDaCategoria] = useState('Valor Inicial');

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {nomeDaCategoria}</h1>

            <form>
                <label>
                    Nome da categoria:
                    <input
                        type="text"
                        value={nomeDaCategoria}
                        onChange={(e) => {
                            setNomeDaCategoria(e.target.value);
                        }}
                    />
                </label>

                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria) => {
                    return (
                        <li key={categoria}>
                            {categoria}
                        </li>
                    );
                })}
            </ul>

            <Link to="/">
                Ir pra home
            </Link>
        </PageDefault>
    );
}

export default CadastroCategoria;