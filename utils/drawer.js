import {
  mdiHome,
  mdiHomeOutline,
  mdiFileDocument,
  mdiFolder,
  mdiAccountMultipleOutline,
  mdiCogOutline,
  mdiCog,
  mdiPencilBoxMultipleOutline,
  mdiFileDocumentEditOutline
} from '@mdi/js'

export default {
  supervisor: [
    {
      title: 'Dashboard',
      to: '/supervisor/e-do',
      icon: mdiHomeOutline
    },
    {
      title: 'Setting',
      to: '/setting',
      icon: mdiCogOutline
    }
  ],
  superadmin: [
    {
      title: 'User management',
      to: '/superadmin/user-management',
      icon: mdiAccountMultipleOutline
    },
    {
      title: 'Setting',
      to: '/setting',
      icon: mdiCogOutline
    }
  ],
  admin: [
    {
      title: 'Dashboard',
      to: '/admin/e-do',
      icon: mdiHome
    },
    {
      title: 'Quotation',
      to: '/admin/quotation',
      icon: mdiFileDocumentEditOutline
    },
    {
      title: 'Job Order',
      to: '/admin/jo',
      icon: mdiFileDocument,
    },
    {
      title: 'Job Console',
      to: '/admin/joc',
      icon: mdiFolder,
    },
    {
      title: 'Setting',
      to: '/setting',
      icon: mdiCog
    }
  ],
  dokumen: [
    {
      title: 'Dashboard',
      to: '/dokumen',
      icon: mdiHomeOutline
    },
    {
      title: 'Setting',
      to: '/setting',
      icon: mdiCogOutline
    }
  ],
  marketing: [
    {
      title: 'Dashboard',
      to: '/marketing/dashboard',
      icon: mdiHomeOutline
    },
    {
      title: 'Quotation',
      to: '/marketing/quotation',
      icon: mdiPencilBoxMultipleOutline
    },
    {
      title: 'Setting',
      to: '/setting',
      icon: mdiCogOutline
    }
  ]
}
