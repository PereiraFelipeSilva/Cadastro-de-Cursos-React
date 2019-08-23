const ApiService = {

  ListaCursos: () => {
    return fetch('http://localhost:8000/api/cursos')
      .then(res => ApiService.TrataErros(res))
      .then(res => res.json());
  },

  ListaInstrutor: () => {
    return fetch('http://localhost:8000/api/cursos/instrutor')
      .then(res => ApiService.TrataErros(res))
      .then(res => res.json());
  },

  ListaCurso: () => {
    return fetch('http://localhost:8000/api/cursos/curso')
      .then(res => ApiService.TrataErros(res))
      .then(res => res.json());
  },

  CriarCurso: curso => {
    return fetch('http://localhost:8000/api/cursos',
      { method: 'POST', headers: { 'content-type': 'application/json' }, body: curso })
      .then(res => ApiService.TrataErros(res))
      .then(res => res.json());
  },

  DeletarCurso: id => {
    return fetch(`http://localhost:8000/api/cursos/${id}`,
      { method: 'DELETE', headers: { 'content-type': 'application/json' } })
      .then(res => ApiService.TrataErros(res))
      .then(res => res.json());
  },

  TrataErros: res => {
    if (!res.ok) {
      throw new Error(res.responseText);
    }
    return res;
  }
}

export default ApiService;