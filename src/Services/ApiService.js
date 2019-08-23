const ApiService = {

  ListaCursos: () => fetch('http://localhost:8000/api/cursos'),

  ListaInstrutor: () => fetch('http://localhost:8000/api/cursos/instrutor'),

  ListaCurso: () => fetch('http://localhost:8000/api/cursos/curso'),

  CriarCurso: curso => fetch('http://localhost:8000/api/cursos',
    { method: 'POST', headers: { 'content-type': 'application/json' }, body: curso }),

  DeletarCurso: id => fetch(`http://localhost:8000/api/cursos/${id}`,
    { method: 'DELETE', headers: { 'content-type': 'application/json' } }),

  TrataErros: res => {
    if (!res.ok) {
      throw new Error(res.responseText);
    }
    return res.json();
  }
}

export default ApiService;