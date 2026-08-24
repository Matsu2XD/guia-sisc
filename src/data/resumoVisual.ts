import type { ComparisonRow } from '@/types'

export const resumoVisualSisc: ComparisonRow[] = [
  {
    item: 'Cadastrar usuários do SCFV que possuam NIS no CadÚnico',
    status: 'pode',
    condition: 'Todos os usuários atendidos no SCFV devem estar cadastrados no CadÚnico e possuir NIS.',
  },
  {
    item: 'Cadastrar usuário provisoriamente (sem NIS)',
    status: 'condicao',
    condition: 'Permitido por até 3 meses, enquanto não se efetiva o cadastro com o NIS. Após esse prazo, o cadastro expira e deixa de contar para o cofinanciamento.',
  },
  {
    item: 'Incluir usuários de 18 a 59 anos',
    status: 'condicao',
    condition: 'Permitido pelo SISC (Resolução CNAS nº 13/2014), porém a oferta para essa faixa não conta com cofinanciamento federal.',
  },
  {
    item: 'Alterar a faixa etária de um grupo após a criação',
    status: 'nao',
    condition: 'A faixa etária do grupo não pode ser alterada depois da inclusão. Verifique antes de criar.',
  },
  {
    item: 'Vincular usuário fora da faixa etária do grupo',
    status: 'condicao',
    condition: 'Permitido apenas em grupos intergeracionais ou para pessoas com deficiência. Caso o grupo deixe de ser intergeracional, é necessário ajustar os usuários.',
  },
  {
    item: 'Desativar um grupo com usuários vinculados',
    status: 'nao',
    condition: 'O grupo deve ser desativado apenas após a desvinculação de todos os usuários. Grupos sem usuários podem ser desativados.',
  },
  {
    item: 'Excluir um grupo registrado no SISC',
    status: 'nao',
    condition: 'Uma vez incluído, o grupo não pode ser excluído. Em caso de interrupção, ele deve ser desativado.',
  },
  {
    item: 'Confirmar participação após o prazo do trimestre',
    status: 'nao',
    condition: 'A confirmação deve ocorrer até o dia 20 do último mês do trimestre. Após o prazo, o sistema bloqueia a confirmação até o 1º dia do mês seguinte.',
  },
  {
    item: 'Deixar usuário sem marcação de confirmação (sim/não)',
    status: 'nao',
    condition: 'Todos os usuários devem ter a confirmação assinalada. Caso contrário, o sistema apresenta mensagem de erro.',
  },
  {
    item: 'Marcar situação prioritária incompatível com a idade',
    status: 'nao',
    condition: 'As situações têm regras de compatibilidade com a idade. Marcações incompatíveis são sinalizadas e devem ser corrigidas pelo responsável.',
  },
  {
    item: 'Pular o registro no SISC por esperar a aferição',
    status: 'nao',
    condition: 'O preenchimento do SISC é obrigatório e deve ser feito regularmente, mesmo em períodos excepcionais.',
  },
  {
    item: 'Usar os relatórios do SISC para o planejamento local',
    status: 'pode',
    condition: 'Recomendado. Relatórios de usuários, grupos e situações prioritárias apoiam a gestão da oferta e o acompanhamento territorial.',
  },
]
