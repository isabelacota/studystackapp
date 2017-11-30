import { Observable } from 'rxjs/Observable'

export class Pergunta {
    id: number;
    texto: string;
    resposta: string;
    disciplina: Disciplina;
    assunto: Assunto;
    nivel: number;
    concursos: Observable<any[]>;
  }

  export class Disciplina {
    id: number;
    nome: string;   
  }

  export class Assunto {
    id: number;
    disciplina: Disciplina;
    nome: string;   
  }
  
  export class Concurso {
      id: number;
      nome: string;
  }