import type { ChecklistItem } from '@/types'

export const checklistSisc: ChecklistItem[] = [
  { id: 'cs1', text: 'O gestor municipal tem perfil de acesso ao SISC concedido no SAA pelo Administrador do Órgão Gestor?' },
  { id: 'cs2', text: 'Os usuários do SCFV estão cadastrados no CadÚnico e possuem NIS atualizado?' },
  { id: 'cs3', text: 'Os grupos do SCFV estão cadastrados no SISC com nome fantasia e faixa etária corretos?' },
  { id: 'cs4', text: 'A faixa etária do grupo está correta (não pode ser alterada após a criação)?' },
  { id: 'cs5', text: 'Os grupos de forma de execução indireta tiveram o orientador social informado?' },
  { id: 'cs6', text: 'Os usuários estão vinculados aos grupos corretos, respeitando o limite de 30 por grupo?' },
  { id: 'cs7', text: 'As situações prioritárias marcadas são compatíveis com a idade de cada usuário?' },
  { id: 'cs8', text: 'Os usuários em situação prioritária com marcação incompatível (indicada com asterisco) foram corrigidos?' },
  { id: 'cs9', text: 'Os cadastros provisórios foram efetivados dentro do prazo de 3 meses ou reiniciados de forma adequada?' },
  { id: 'cs10', text: 'A confirmação de participação foi realizada para todos os usuários até a data limite do trimestre?' },
  { id: 'cs11', text: 'Os cadastros provisórios expirados foram desvinculados ou regularizados?' },
  { id: 'cs12', text: 'Os relatórios (usuários, grupos e situações prioritárias) foram gerados e analisados periodicamente?' },
]
