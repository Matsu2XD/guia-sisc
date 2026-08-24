import type { Rule } from '@/types'

export const regrasOuroSisc: Rule[] = [
  {
    number: 1,
    title: 'Mantenha os dados do CadÚnico atualizados.',
    description: 'O SISC depende dos dados do CadÚnico (via NIS). Usuários com NIS desatualizado ou divergente podem não ser localizados; oriente a atualização cadastral.',
  },
  {
    number: 2,
    title: 'Registre os grupos corretamente (faixa etária).',
    description: 'A faixa etária do grupo não pode ser alterada após a criação. Defina-a com cuidado e registre o nome fantasia de forma consensual e identificadora.',
  },
  {
    number: 3,
    title: 'Confirme a participação a cada trimestre.',
    description: 'A confirmação de participação deve ser feita até o dia 20 do último mês do trimestre. Ela impacta diretamente o cálculo do cofinanciamento federal.',
    highlight: true,
    highlightColor: 'bg-white text-institucional-green',
  },
  {
    number: 4,
    title: 'Atenção às situações prioritárias compatíveis com a idade.',
    description: 'As situações prioritárias têm regras de compatibilidade com a idade. Usuários com marcação incompatível são sinalizados com asterisco e devem ser corrigidos.',
  },
  {
    number: 5,
    title: 'Efetive os cadastros provisórios em até 3 meses.',
    description: 'Cadastros provisórios expiram em 3 meses e deixam de contar para o cofinanciamento. Efetive-os informando o NIS ou desvincule os que não participam mais.',
  },
  {
    number: 6,
    title: 'Respeite o limite de usuários por grupo.',
    description: 'O limite por grupo é de 30 usuários. Grupos intergeracionais aceitam qualquer idade; grupos não intergeracionais, apenas a faixa etária da criação.',
  },
  {
    number: 7,
    title: 'Registre motivos e encaminhamentos nas desvinculações.',
    description: 'Ao desvincular um usuário, informe o motivo e, quando aplicável, o encaminhamento. Registros completos fundamentam o acompanhamento.',
  },
  {
    number: 8,
    title: 'Use os relatórios para a gestão local.',
    description: 'Relatórios de usuários, grupos e situações prioritárias subsidiam o planejamento, a revisão da oferta e a identificação de demandas do território.',
  },
  {
    number: 9,
    title: 'Preencha o SISC mesmo fora da aferição.',
    description: 'Mesmo em períodos excepcionais, o preenchimento do SISC é obrigatório e compõe o retrato nacional da execução do SCFV.',
  },
  {
    number: 10,
    title: 'Garanta a supervisão técnica dos registros.',
    description: 'O técnico de referência e a equipe devem revisar periodicamente a qualidade dos registros dos grupos e usuários sob sua responsabilidade.',
  },
]
