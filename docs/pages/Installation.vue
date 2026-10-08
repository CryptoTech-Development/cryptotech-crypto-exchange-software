<template>
  <div className="flex flex-col min-h-screen overflow-hidden">

    <!-- Site header -->
    <Header />

      <!-- Page content -->
      <main class="grow">
      
        <section class="relative">
      
          <div class="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none -z-10">
            <img class="max-w-none" src="../images/hero-illustration.svg" width="1972" height="392" aria-hidden="true" />
          </div>
      
          <div class="max-w-7xl mx-auto px-4 sm:px-6">
      
            <!-- Main content -->
            <div>
  
              <!-- Sidebar -->
              <Sidebar :sidebarOpen="sidebarOpen" @close-sidebar="sidebarOpen = false" />
      
              <!-- Page container -->
              <div class="md:grow md:pl-64 lg:pr-6 xl:pr-0">
                <div class="pt-24 md:pt-28 pb-8 md:pl-6 lg:pl-12">
      
                  <!-- Page header -->
                  <div class="h-16 flex items-center mb-6">
                    <svg width="64" height="54" viewBox="0 0 64 54" xmlns="http://www.w3.org/2000/svg">
                      <path class="fill-blue-400" d="M43.832 7.206a1.32 1.32 0 0 0-.47-.492L32.694.195a1.333 1.333 0 0 0-1.39 0L20.64 6.714c-.198.12-.36.29-.471.492L32 14.436l11.832-7.23Z" />
                      <path class="fill-white dark:fill-slate-800" d="M20.168 7.206c-.11.197-.168.42-.168.645V19.69c0 .464.242.895.639 1.137l10.666 6.519c.21.128.45.195.695.196V14.437L20.168 7.206Z" />
                      <path class="fill-blue-600" d="M43.832 7.206c.11.197.168.42.168.645V19.69c0 .464-.242.895-.639 1.137l-10.666 6.519c-.21.128-.45.195-.695.196V14.437l11.832-7.231Z" />
                      <path class="fill-blue-400" d="M63.832 19.451a1.32 1.32 0 0 0-.47-.492l-10.667-6.518a1.333 1.333 0 0 0-1.39 0L40.64 18.959c-.198.12-.36.29-.471.492L52 26.683l11.832-7.232Z" />
                      <path class="fill-white dark:fill-slate-800" d="M40.168 19.451c-.11.198-.168.42-.168.647v11.837c0 .465.242.896.639 1.138l10.666 6.518c.21.128.45.196.695.196V26.683l-11.832-7.232Z" />
                      <path class="fill-blue-600" d="M63.832 19.451c.11.198.168.42.168.647v11.837c0 .465-.242.896-.639 1.138L52.695 39.59c-.21.128-.45.196-.695.196V26.683l11.832-7.232Z" />
                      <path class="fill-blue-400" d="M23.832 19.451a1.32 1.32 0 0 0-.47-.492l-10.667-6.518a1.333 1.333 0 0 0-1.39 0L.64 18.959c-.198.12-.36.29-.471.492L12 26.683l11.832-7.232Z" />
                      <path class="fill-white dark:fill-slate-800" d="M.168 19.451c-.11.198-.168.42-.168.647v11.837c0 .465.242.896.639 1.138l10.666 6.518c.21.128.45.196.695.196V26.683L.168 19.451Z" />
                      <path class="fill-blue-600" d="M23.832 19.451c.11.198.168.42.168.647v11.837c0 .465-.242.896-.639 1.138L12.695 39.59c-.21.128-.45.196-.695.196V26.683l11.832-7.232Z" />
                      <path class="fill-blue-400" d="M43.832 32.769a1.32 1.32 0 0 0-.47-.492l-10.667-6.52a1.333 1.333 0 0 0-1.39 0l-10.666 6.52c-.198.12-.36.29-.471.492L32 39.999l11.832-7.23Z" />
                      <path class="fill-white dark:fill-slate-800" d="M20.168 32.769c-.11.197-.168.42-.168.645V45.25c0 .465.242.896.639 1.138l10.666 6.518c.21.128.45.196.695.196V40l-11.832-7.23Z" />
                      <path class="fill-blue-600" d="M43.832 32.769c.11.197.168.42.168.645V45.25c0 .465-.242.896-.639 1.138l-10.666 6.518c-.21.128-.45.196-.695.196V40l11.832-7.23Z" />
                    </svg>
                    <span class=" text-xl text-blue-600 ml-4">Documentation</span>
                  </div>
      
                  <article class="flex xl:space-x-12">
      
                    <!-- Main area -->
                    <div class="min-w-0">
      
                      <!-- Mobile hamburger + breadcrumbs -->
                      <div class="md:hidden flex items-center mb-8">
                        <!-- Hamburger button -->
                        <MenuButton :sidebarOpen="sidebarOpen" @toggle-sidebar="sidebarOpen = !sidebarOpen" />
                        <!-- Breadcrumbs -->
                        <div class="flex items-center text-sm whitespace-nowrap min-w-0 ml-3">
                          <span class="text-slate-600 dark:text-slate-400">Documentation</span>
                          <svg class="fill-slate-400 shrink-0 mx-2 dark:fill-slate-500" width="8" height="10" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 2 2.414.586 6.828 5 2.414 9.414 1 8l3-3z" />
                          </svg>
                          <span class="text-slate-800 font-medium truncate dark:text-slate-200">Installation</span>
                        </div>
                      </div>
      
                      <!-- Article content -->
                      <PageContent />
      
                      <!-- Page navigation -->
                      <PageNavigation :prevArticle="prevArticle" :nextArticle="nextArticle" />
      
                      <!-- Content footer -->
                      <PageFooter />
      
                    </div>
      
                    <!-- Secondary navigation -->
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
import PageContent from '../partials/InstallationContent.vue'
import PageNavigation from '../partials/PageNavigation.vue'
import PageFooter from '../partials/PageFooter.vue'
import SecondaryNav from '../partials/InstallationNav.vue'

export default {
  name: 'Installation',
  components: {
    Header,
    Sidebar,
    MenuButton,
    PageContent,
    PageNavigation,
    PageFooter,
    SecondaryNav,
  },
  setup() {

    const sidebarOpen = ref(false)

    const prevArticle = ref({
      title: 'Introduction',
      link: '/introduction'
    })
    const nextArticle = ref({
      title: 'Site Configuration',
      link: '/configuration'
    })

    return {
      sidebarOpen,
      prevArticle,
      nextArticle,
    }
  }  
}
</script>
