import Vue from 'vue';
import VueRouter from 'vue-router';

import home from "@/views/home/home.vue";
import about from "@/views/about.vue";
import contact from "@/views/contact.vue";
import business_consulting from "@/views/services/business_consulting.vue";
import business_solutions from "@/views/services/business_solutions/business_solutions.vue";
import income_taxes from "@/views/services/income_taxes.vue";
import personal_finance from "@/views/services/personal_finance.vue";
import faqs from "@/views/faqs.vue";
import best_or_beast from "@/views/quickbooks/best_or_beast.vue";
import why_quickbooks from "@/views/quickbooks/why_quickbooks.vue";
import client_login from "@/views/client_login.vue";
import dashboard from "@/views/analytics/dashboard.vue";
import forensic_accounting from "@/views/home/forensic_accounting.vue";
import millionaire_next_door from "@/views/services/millionaire_next_door.vue";

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'Home', component: home },
  { path: '/about', name: 'About', component: about },
  { path: '/contact', name: 'Contact Us', component: contact },
  { path: '/services/business_consulting', name: 'Business Consulting', component: business_consulting },
  { path: '/services/business_solutions', name: 'Business Solutions', component: business_solutions },
  { path: '/services/income_taxes', name: 'Income Taxes', component: income_taxes },
  { path: '/services/personal_finance', name: 'Personal Finance', component: personal_finance },
  { path: '/faqs', name: 'FAQs', component: faqs },
  { path: '/quickbooks/best_or_beast', name: 'QuickBooks? Best or Best?', component: best_or_beast },
  { path: '/quickbooks/why', name: 'Why QuickBooks?', component: why_quickbooks },
  { path: '/login', name: 'Client Login', component: client_login },
  { path: '/analytics/dashboard', name: 'Analytics', component: dashboard },
  { path: '/forensic_accounting', name: 'Forensic Accounting', component: forensic_accounting },
  { path: '/services/millionaire_next_door', name: 'Millionaire Next Door', component: millionaire_next_door },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  }
})

export default router
