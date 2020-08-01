import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { values, handleInput } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository.getAll()
      .then((categoria) => {
        console.log(categoria);
        setCategorias(categoria);
      });
  }, []);

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form onSubmit={(e) => {
        e.preventDefault();

        const categoriaEscolhida = categorias.find((categoria) => categoria.titulo === values.categoria);
        console.log(categoriaEscolhida);
        console.log(values.titulo);
        console.log(values.url);
        console.log(categoriaEscolhida.id);
        videosRepository.create({
          titulo: values.titulo,
          url: values.url,
          categoriaId: categoriaEscolhida.id,
        }).then(() => {
          console.log('cadastrou com sucesso');
          history.push('/');
        });
      }}
      >

        <FormField
          type="text"
          label="Título do Vídeo:"
          name="titulo"
          value={values.titulo}
          onChange={handleInput}
        />

        <FormField
          type="text"
          label="URL:"
          name="url"
          value={values.url}
          onChange={handleInput}
        />

        <FormField
          type="text"
          label="Categoria:"
          name="categoria"
          value={values.categoria}
          onChange={handleInput}
          suggestions={categoryTitles}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">
        Cadastrar Categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
