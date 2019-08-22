const ApiService = {

  ListaCursos: () => {
    return fetch('http://localhost:8000/api/cursos')
      .then(res => res.json());
  },
  ListaInstrutor: () => {
    return fetch('http://localhost:8000/api/cursos/instrutor')
      .then(res => res.json());
  },
  ListaCurso: () => {
    return fetch('http://localhost:8000/api/cursos/curso')
      .then(res => res.json());
  },
  CriarCurso: curso => {
    return fetch('http://localhost:8000/api/cursos',
      { method: 'POST', headers: { 'content-type': 'application/json' }, body: curso })
      .then(res => res.json());
  },
  DeletarCurso: id => {
    return fetch(`http://localhost:8000/api/cursos/${id}`,
      { method: 'DELETE', headers: { 'content-type': 'application/json' } })
      .then(res => res.json);
  }
}

export default ApiService;