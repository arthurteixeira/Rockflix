import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';
import categoriasRepository from '../../../repositories/categorias';

function CadastroCategoria() {
  const valoresIniciais = {
    id: 0,
    titulo: '',
    descricao: '',
    cor: '',
  };

  const [categorias, setCategorias] = useState([]);
  const { values, handleInput, clearForm } = useForm(valoresIniciais);

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://rockflix.herokuapp.com/categorias';
    fetch(URL).then(async (res) => {
      const resposta = await res.json();
      setCategorias([
        ...resposta,
      ]);
    });
  }, []);
  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.titulo}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        setCategorias([
          ...categorias,
          values,
        ]);

        categoriasRepository.create({
          titulo: values.titulo,
          descricao: values.descricao,
          cor: values.cor,
        });

        clearForm();
      }}
      >

        <FormField
          type="text"
          label="Nome da categoria:"
          name="titulo"
          value={values.titulo}
          onChange={handleInput}
        />

        <FormField
          type="textarea"
          label="Descrição:"
          name="descricao"
          value={values.descricao}
          onChange={handleInput}
        />

        <FormField
          type="color"
          label="Cor:"
          name="cor"
          value={values.cor}
          onChange={handleInput}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria, i) => (
          // eslint-disable-next-line react/no-array-index-key
          <li key={`${i}${categoria.titulo}`}>
            {categoria.titulo}
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
