<template>
  <router-view />
</template>

<script>
let currentObserver = null

const initScrollSpy = () => {
  const targets = Array.from(document.querySelectorAll('[data-scrollspy-target]'))
  const links = Array.from(document.querySelectorAll('[data-scrollspy-link]'))
  if (targets.length === 0 || links.length === 0) return null

  const idToLink = new Map()
  links.forEach((link) => {
    const href = link.getAttribute('href') || ''
    const hash = href.includes('#') ? href.split('#').pop() : ''
    if (hash) idToLink.set(hash, link)
  })

  const setActive = (id) => {
    links.forEach((l) => l.classList.remove('scrollspy-active'))
    const link = idToLink.get(id) || links[0]
    link.classList.add('scrollspy-active')
  }

  // Initial state
  setActive(targets[0].id)

  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((e) => e.isIntersecting)
        .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
      if (visible.length > 0) {
        setActive(visible[0].target.id)
      }
    },
    { root: null, rootMargin: '0px 0px -60% 0px', threshold: [0, 0.2, 1] }
  )

  targets.forEach((t) => observer.observe(t))

  // Instant feedback on click
  links.forEach((l) => {
    l.addEventListener('click', (e) => {
      const href = l.getAttribute('href') || ''
      const hash = href.includes('#') ? href.split('#').pop() : ''
      if (!hash) return
      e.preventDefault()
      setActive(hash)
      const el = document.getElementById(hash)
      if (el && typeof el.scrollIntoView === 'function') {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      } else {
        location.hash = `#${hash}`
      }
    })
  })

  return observer
}

export default {
  mounted() {
    const setup = () => {
      if (currentObserver) currentObserver.disconnect()
      currentObserver = initScrollSpy()
      // Retry initialization shortly if content isn't ready yet
      if (!currentObserver) {
        setTimeout(() => {
          if (currentObserver) currentObserver.disconnect()
          currentObserver = initScrollSpy()
        }, 150)
      }
    }
    this.$nextTick(() => setTimeout(setup, 0))
    if (this.$router) {
      this.$watch('$route', () => {
        this.$nextTick(() => setTimeout(setup, 0))
      })
    }
  },
  unmounted() {
    if (currentObserver) currentObserver.disconnect()
  },
}
</script>
