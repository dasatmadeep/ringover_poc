import { ref } from 'vue'

export function usePdfExport () {
  const isGenerating = ref(false)

  async function downloadPdf (filename = 'ask-empower.pdf') {
    if (!import.meta.client || isGenerating.value) return
    isGenerating.value = true

    try {
      // Dynamic import to avoid SSR issues
      const html2pdf = (await import('html2pdf.js')).default

      // Hide nav bar so it doesn't appear in the PDF
      const nav = document.querySelector<HTMLElement>('.empower-nav')
      if (nav) nav.style.display = 'none'

      // Ensure smooth scroll doesn't interfere with capture
      document.documentElement.style.scrollBehavior = 'auto'

      // Scroll to top before capturing
      window.scrollTo(0, 0)

      await new Promise(resolve => setTimeout(resolve, 100))

      const element = document.body

      const opt = {
        margin: 0,
        filename,
        image: { type: 'jpeg', quality: 1 },
        html2canvas: {
          scale: 2,
          useCORS: true,
          allowTaint: true,
          logging: false,
          // Capture at the design width for pixel-perfect output
          windowWidth: 1280,
          scrollX: 0,
          scrollY: 0,
        },
        jsPDF: {
          unit: 'mm',
          // A3 landscape gives plenty of width to match the 1280px design
          format: 'a3',
          orientation: 'landscape',
          compress: true,
        },
        pagebreak: {
          // Avoid breaking inside cards, sections and other elements
          avoid: [
            '.cap-card', '.ind-card', '.comp-card', '.moat-item',
            '.evo-card', '.uc-pane', '.pitch-qa', '.disc-q',
            '.feat-lever-card', '.feat-impact-card', '.feat-problem-card',
            '.feat-feature-box', '.cch-loop-card', '.cch-ind-card',
            '.cch-comp-card', '.cch-claim-card', '.hero-onepager',
            '.ep-hero', '.section-wrap',
          ],
          mode: ['avoid-all'],
        },
      }

      await html2pdf().set(opt).from(element).save()
    } finally {
      // Always restore the nav bar and scroll behavior
      const nav = document.querySelector<HTMLElement>('.empower-nav')
      if (nav) nav.style.display = ''
      document.documentElement.style.scrollBehavior = ''
      isGenerating.value = false
    }
  }

  return { isGenerating, downloadPdf }
}
