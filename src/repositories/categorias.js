import config from '../config';

const URL_CATEGORIES = `${config.URL_BACKEND}/categorias`;

function create(obj) {
  return fetch(`${URL_CATEGORIES}`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(obj),
  })
    .then(async (respostaDoServidor) => {
      if (respostaDoServidor.ok) {
        const resposta = await respostaDoServidor.json();
        return resposta;
      }

      throw new Error('Não foi possível cadastrar os dados :(');
    });
}

function getAll() {
  return fetch(`${URL_CATEGORIES}`).then(async (res) => {
    if (res.ok) {
      const resposta = await res.json();
      return resposta;
    }

    throw new Error('Não foi possível pegar os dados');
  });
}

function getAllCategoriesWithVideos() {
  return fetch(`${URL_CATEGORIES}?_embed=videos`).then(async (res) => {
    if (res.ok) {
      const resposta = await res.json();
      return resposta;
    }

    throw new Error('Não foi possível pegar os dados');
  });
}

export default {
  getAllCategoriesWithVideos,
  getAll,
  create,
};
