import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilDescription,
  cilDrop,
  cilPuzzle,
} from '@coreui/icons'
import { CNavItem, CNavTitle } from '@coreui/react'

const sidebarnav = [
  {
    component: CNavTitle,
    name: 'Opciones',
  },
  {
    component: CNavItem,
    name: 'Crear Tarea',
    to: '/create',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: 'Tareas Creadas',
    to: '/',
    icon: <CIcon icon={cilDescription} customClassName="nav-icon" />,
  },
]

export default sidebarnav
