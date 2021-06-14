import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    const novoAluno = await Aluno.create({
      nome: 'Maria',
      sobrenome: 'Miranda',
      email: 'maria@email.com',
      idade: 20,
      peso: 60,
      altura: 1.70,
    });
    res.json(novoAluno);
  }
}

export default new HomeController();
