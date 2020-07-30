import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';

function CadastroCategoria() {
  const [categorias, setCategorias] = useState([]);

  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [values, setValues] = useState(valoresIniciais);

  function setValue(chave, valor) {
    setValues({
      ...values,
      [chave]: valor,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setCategorias([...categorias, values]);
    setValues(valoresIniciais);
  }

  function handleInput(e) {
    setValue(e.target.getAttribute('name'), e.target.value);
  }

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={handleSubmit}>

        <FormField
          type="text"
          name="nome"
          value={values.nome}
          onChange={handleInput}
        >
          Nome da categoria:
        </FormField>

        <FormField
          type="textarea"
          name="descricao"
          value={values.descricao}
          onChange={handleInput}
        >
          Descrição:
        </FormField>

        <FormField
          type="color"
          name="cor"
          value={values.cor}
          onChange={handleInput}
        >
          Cor:
          {' '}
        </FormField>

        <Button>
          Cadastrar
        </Button>
      </form>

      <ul>
        {categorias.map((categoria, i) => (
          <li key={`${categoria.nome}${i}`}>
            {categoria.nome}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir pra home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
