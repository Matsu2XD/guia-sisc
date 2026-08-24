export const INSTITUTIONAL_COLORS = {
  blue: '#123e6b',
  lightBlue: '#e8f0fa',
  green: '#1a7a3a',
  lightGreen: '#e8f5ec',
  dark: '#1e293b',
  gray: '#f8fafc',
}

export const BLOCK_ACCENTS = {
  gestao: {
    border: 'border-block-gestao', light: 'bg-block-gestao-light', color: 'text-block-gestao-text',
    hex: '#123e6b', label: 'azul', badgeBg: 'bg-block-gestao-light', badgeText: 'text-block-gestao-text',
    badgeBorder: 'border-block-gestao/30', lineGradient: 'from-institucional-blue to-blue-300',
    iconBg: 'bg-institucional-blue', iconBgDark: 'dark:bg-blue-800',
  },
  planejamento: {
    border: 'border-block-planejamento', light: 'bg-block-planejamento-light', color: 'text-block-planejamento-text',
    hex: '#1a7a3a', label: 'verde', badgeBg: 'bg-block-planejamento-light', badgeText: 'text-block-planejamento-text',
    badgeBorder: 'border-block-planejamento/30', lineGradient: 'from-institucional-green to-green-300',
    iconBg: 'bg-institucional-green', iconBgDark: 'dark:bg-green-800',
  },
  reprogramacao: {
    border: 'border-block-reprogramacao', light: 'bg-block-reprogramacao-light', color: 'text-block-reprogramacao-text',
    hex: '#0891b2', label: 'ciano', badgeBg: 'bg-block-reprogramacao-light', badgeText: 'text-block-reprogramacao-text',
    badgeBorder: 'border-block-reprogramacao/30', lineGradient: 'from-cyan-500 to-cyan-300',
    iconBg: 'bg-cyan-500', iconBgDark: 'dark:bg-cyan-700',
  },
  controle: {
    border: 'border-block-controle', light: 'bg-block-controle-light', color: 'text-block-controle-text',
    hex: '#be185d', label: 'rosa', badgeBg: 'bg-block-controle-light', badgeText: 'text-block-controle-text',
    badgeBorder: 'border-block-controle/30', lineGradient: 'from-pink-500 to-pink-300',
    iconBg: 'bg-pink-500', iconBgDark: 'dark:bg-pink-700',
  },
}

export const INTRO_SECTIONS = [
  { id: 'capa', title: 'Capa' },
  { id: 'expediente', title: 'Expediente' },
  { id: 'sumario', title: 'Sumário' },
  { id: 'apresentacao', title: 'Apresentação' },
]

export const ASSESSORAMENTO_SECTIONS = [
  { id: 'introducao-scfv', title: 'Introdução ao SCFV' },
  { id: 'relacao-sisc-scfv', title: 'SISC e o SCFV' },
]

export const FINAL_SECTIONS = [
  { id: 'contra-capa', title: 'Contra-Capa' },
]

export const APPENDIX_SECTIONS = [
  { id: 'resumo-visual', title: 'Resumo: O que Pode e Não Pode' },
  { id: 'checklist-sisc', title: 'Checklist do SISC' },
  { id: 'base-normativa', title: 'Base Normativa do SCFV' },
  { id: 'regras-ouro', title: 'Regras de Ouro do Registro no SISC' },
  { id: 'duvidas-recorrentes', title: 'Dúvidas Recorrentes' },
  { id: 'informacoes-complementares', title: 'Informações Complementares' },
]

export const BLOCKS = [
  {
    id: 'conceitos-scfv',
    title: 'Bloco 1 — O Serviço de Convivência e Fortalecimento de Vínculos (SCFV)',
    accent: 'gestao',
    items: [
      { id: 'o-que-e-scfv', title: 'O que é o SCFV ?' },
      { id: 'finalidade-scfv', title: 'Qual Sua Finalidade ?' },
      { id: 'eixos-norteadores', title: 'Quais são os Eixos Norteadores ?' },
      { id: 'publico-alvo', title: 'Para quem é feito o SCFV ?' },
      { id: 'grupos-desenvolvidos', title: 'O que é Desenvolvido Nos Grupos ?' },
      { id: 'equipe-tecnica', title: 'Quais São as Equipes ?' },
    ],
  },
  {
    id: 'registro-financiamento',
    title: 'Bloco 2 — Registro e Financiamento do SCFV',
    accent: 'planejamento',
    items: [
      { id: 'registro-sisc', title: 'Como o SCFV é registrado ?' },
      { id: 'financiamento-scfv', title: 'Como é Financiado ?' },
    ],
  },
  {
    id: 'legislacao',
    title: 'Bloco 3 — Legislação e Normativas Federais',
    accent: 'reprogramacao',
    items: [
      { id: 'normativas-federais', title: 'Leis e Normativas Federais' },
    ],
  },
  {
    id: 'manual-sisc',
    title: 'Bloco 4 — Manual do SISC',
    accent: 'controle',
    items: [
      { id: 'acesso-sistema', title: 'Acesso ao Sistema' },
      { id: 'menu-grupos', title: 'Menu Grupos' },
      { id: 'menu-usuarios', title: 'Menu Usuários' },
      { id: 'menu-relatorios', title: 'Menu Relatórios' },
    ],
  },
]
