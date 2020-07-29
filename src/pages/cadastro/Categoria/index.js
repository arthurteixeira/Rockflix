import React, { useState } from 'react';
import PageDefault from '../../../components/PageDefault';
import { Link } from 'react-router-dom';

function CadastroCategoria() {

    const [categorias, setCategorias] = useState([]);

    const valoresIniciais = {
        nome: '',
        descricao: '',
        cor: '#000',
    };

    const [values, setValues] = useState(valoresIniciais);

    function handleSubmit(e) {
        e.preventDefault();
        setCategorias([...categorias, values]);
    }

    function handleInput(e) {
        setValue(e.target.getAttribute('name'), e.target.value);
    }

    function setValue(chave, valor) {
        setValues({
            ...values,
            [chave]: valor,
        });
    }

    return (
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>

            <form onSubmit={handleSubmit}>
                <div>
                    <label>
                        Nome da categoria:
                        <input
                            type="text"
                            name="nome"
                            value={values.nome}
                            onChange={handleInput}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Descrição:
                        <textarea
                            type="text"
                            name="descricao"
                            value={values.descricao}
                            onChange={handleInput}
                        />
                    </label>
                </div>

                <div>
                    <label>
                        Cor:
                        <input
                            type="color"
                            name="cor"
                            value={values.color}
                            onChange={handleInput}
                        />
                    </label>
                </div>


                <button>
                    Cadastrar
                </button>
            </form>

            <ul>
                {categorias.map((categoria, i) => {
                    return (
                        <li key={`${categoria.nome}${i}`}>
                            {categoria.nome}
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