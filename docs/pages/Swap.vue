<template>
  <div className="flex flex-col min-h-screen overflow-hidden">
    <Header />
    <main class="grow">
      <section class="relative">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none -z-10">
          <img class="max-w-none" src="../images/hero-illustration.svg" width="1972" height="392" aria-hidden="true" />
        </div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6">
          <div>
            <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />
            <div class="md:grow md:pl-64 lg:pr-6 xl:pr-0">
              <div class="pt-24 md:pt-28 pb-8 md:pl-6 lg:pl-12">
                <div class="h-16 flex items-center mb-6">
                  <svg width="64" height="54" viewBox="0 0 64 54" xmlns="http://www.w3.org/2000/svg">
                    <path class="fill-purple-400" d="M43.832 7.206a1.32 1.32 0 0 0-.47-.492L32.694.195a1.333 1.333 0 0 0-1.39 0L20.64 6.714c-.198.12-.36.29-.471.492L32 14.436l11.832-7.23Z" />
                    <path class="fill-white dark:fill-slate-800" d="M20.168 7.206c-.11.197-.168.42-.168.645V19.69c0 .464.242.895.639 1.137l10.666 6.519c.21 .128.45 .195.695 .196V14.437L20.168 7.206Z" />
                    <path class="fill-purple-600" d="M43.832 7.206c.11.197.168.42.168.645V19.69c0 .464-.242.895-.639 1.137l-10.666 6.519c-.21.128-.45.195-.695.196V14.437l11.832-7.231Z" />
                  </svg>
                  <span class=" text-xl text-purple-600 ml-4">Content & Features</span>
                </div>
                <article class="flex xl:space-x-12">
                  <div class="min-w-0">
                    <div class="md:hidden flex items-center mb-8">
                      <MenuButton :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />
                      <div class="flex items-center text-sm whitespace-nowrap min-w-0 ml-3">
                        <span class="text-slate-600 dark:text-slate-400">Content & Features</span>
                        <svg class="fill-slate-400 shrink-0 mx-2 dark:fill-slate-500" width="8" height="10" xmlns="http://www.w3.org/2000/svg"><path d="M1 2 2.414.586 6.828 5 2.414 9.414 1 8l3-3z" /></svg>
                        <span class="text-slate-800 font-medium truncate dark:text-slate-200">Swap</span>
                      </div>
                    </div>
                    <PageContent />
                    <PageNavigation :prevArticle="prevArticle" :nextArticle="nextArticle" />
                    <PageFooter />
                  </div>
                  <SecondaryNav />
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import { ref } from 'vue'
import Header from '../partials/Header.vue'
import Sidebar from '../partials/Sidebar.vue'
import MenuButton from '../partials/MenuButton.vue'
import PageContent from '../partials/SwapContent.vue'
import PageNavigation from '../partials/PageNavigation.vue'
import PageFooter from '../partials/PageFooter.vue'
import SecondaryNav from '../partials/SwapNav.vue'

export default {
  name: 'Swap',
  components: { Header, Sidebar, MenuButton, PageContent, PageNavigation, PageFooter, SecondaryNav },
  setup() {
    const sidebarOpen = ref(false)
    const prevArticle = ref({ title: 'Voucher', link: '/voucher' })
    const nextArticle = ref({ title: 'API Documentation', link: '/api-doc' })
    return { sidebarOpen, prevArticle, nextArticle }
  }
}
</script>
