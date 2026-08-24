import { useEffect } from 'react'

const ALL_COLLAPSED_KEY = 'sisc-blocks-collapsed'

export default function BlockAccordion() {
  useEffect(() => {
    function toggleContent(content: HTMLElement, id: string, show: boolean) {
      const collapsed: string[] = JSON.parse(localStorage.getItem(ALL_COLLAPSED_KEY) || '[]')
      const label = document.querySelector(`[data-block-toggle-label="${id}"]`)
      const chevron = document.querySelector(`[data-block-chevron="${id}"]`)

      if (show) {
        content.style.display = ''
        if (label) label.textContent = 'Recolher'
        if (chevron) (chevron as HTMLElement).style.transform = ''
        const idx = collapsed.indexOf(id)
        if (idx > -1) collapsed.splice(idx, 1)
      } else {
        content.style.display = 'none'
        if (label) label.textContent = 'Expandir'
        if (chevron) (chevron as HTMLElement).style.transform = 'rotate(180deg)'
        if (!collapsed.includes(id)) collapsed.push(id)
      }
      localStorage.setItem(ALL_COLLAPSED_KEY, JSON.stringify(collapsed))
    }

    function setup() {
      const groups = document.querySelectorAll<HTMLElement>('[data-block-group]')
      if (groups.length === 0) return

      for (const group of groups) {
        const headerDiv = group.querySelector(':scope > div')
        if (!headerDiv || headerDiv.querySelector('[data-block-toggle]')) continue

        const content = group.querySelector<HTMLElement>('[data-block-content]')
        if (!content) continue

        const blockId = group.getAttribute('data-block-group') || ''

        const btn = document.createElement('button')
        btn.setAttribute('data-block-toggle', blockId)
        btn.className = 'flex items-center gap-1 text-xs font-medium text-slate-400 dark:text-slate-500 hover:text-slate-600 dark:hover:text-slate-300 transition-colors px-2 py-1 rounded hover:bg-slate-100 dark:hover:bg-slate-700 no-print'
        btn.innerHTML = `
          <span data-block-toggle-label="${blockId}">Recolher</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="transition-transform duration-300" data-block-chevron="${blockId}"><polyline points="18 15 12 9 6 15"/></svg>
        `

        headerDiv.appendChild(btn)

        btn.addEventListener('click', () => {
          const isVisible = content.style.display !== 'none'
          toggleContent(content, blockId, !isVisible)
        })
      }

      try {
        const collapsed: string[] = JSON.parse(localStorage.getItem(ALL_COLLAPSED_KEY) || '[]')
        for (const id of collapsed) {
          const content = document.querySelector<HTMLElement>(`[data-block-group="${id}"] [data-block-content]`)
          if (content) {
            content.style.display = 'none'
            const label = document.querySelector(`[data-block-toggle-label="${id}"]`)
            const chevron = document.querySelector(`[data-block-chevron="${id}"]`)
            if (label) label.textContent = 'Expandir'
            if (chevron) (chevron as HTMLElement).style.transform = 'rotate(180deg)'
          }
        }
      } catch {}
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', setup)
    } else {
      setup()
    }
  }, [])

  return null
}
