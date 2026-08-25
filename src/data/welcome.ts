/**
 * Welcome Modal configuration and content
 * Guia do SISC — SUAS
 */

export const WELCOME_CONFIG = {
  localStorageKey: 'sisc-welcome-seen',
  showDelayMs: 600,
}

export const WELCOME_CONTENT = {
  title: 'Guia do SISC',
  subtitle: 'Rede SUAS — Serviço de Convivência e Fortalecimento de Vínculos',
  description:
    'Este guia apresenta o Serviço de Convivência e Fortalecimento de Vínculos (SCFV) e o passo a passo de utilização do SISC — Sistema de Informações do SCFV. O material é destinado aos gestores municipais e técnicos da assistência social, abordando conceitos, registro no sistema, confirmação de participação e relatórios.',
  teamLabel: 'Equipe Responsável',
  otherCadernosLabel: 'Materiais Relacionados',
  otherCadernosEmpty: 'Outros materiais serão disponibilizados em breve.',
  dontShowAgainLabel: 'Não mostrar novamente',
  ctaLabel: 'Iniciar leitura',
}

export const WELCOME_TEAM = [
  {
    unit: 'Coordenação Estadual de Vigilância Socioassistencial (COOVIG) — SEDSODH/RJ',
    role: 'Coordenação',
    responsible: 'Matheus de Freitas',
    support: 'Matheus de Freitas',
    email: 'servicosdeconvivencia@mds.gov.br',
  },
]

export const WELCOME_CONTACT = {
  phone: '(61) 2030-340',
  email: 'servicosdeconvivencia@mds.gov.br',
  address: 'Ministério do Desenvolvimento e Assistência Social, Família e Combate à Fome (MDS) — Brasília/DF',
}

export const OTHER_CADERNOS = [
  {
    href: 'https://www.gov.br/mds/pt-br',
    label: 'Portal do Ministério do Desenvolvimento Social',
    description: 'Informações sobre o SUAS, o SCFV e a Política Nacional de Assistência Social',
    accentClass: 'bg-institucional-blue',
  },
]
