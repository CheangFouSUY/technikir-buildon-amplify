import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Authorizer',
    to: '/authorizer',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    
  },
  
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Transaction',
  //   to: 'transaction',
  //   icon: 'cil-file',
  // },
  
  {
    _tag: 'CSidebarNavItem',
    name: 'Teller',
    to: '/teller',
    icon: 'cil-people'
  },
  
 
]

export default _nav
