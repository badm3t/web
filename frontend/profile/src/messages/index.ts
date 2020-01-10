import { defineMessages } from 'react-intl'

const namespace: string = 'profile'

export default defineMessages({
  edit: {
    id: `${namespace}.edit`,
    defaultMessage: 'Edit Profile',
  },
  firstName: {
    id: `${namespace}.firstName`,
    defaultMessage: 'First Name',
  },
  enterFirstName: {
    id: `${namespace}.enter_firstName`,
    defaultMessage: 'Enter your first name',
  },
  lastName: {
    id: `${namespace}.lastName`,
    defaultMessage: 'Last Name',
  },
  enterLastName: {
    id: `${namespace}.enter_lastName`,
    defaultMessage: 'Enter your last name',
  },
  save: {
    id: `${namespace}.save`,
    defaultMessage: 'Save profile',
  },
  root: {
    id: `${namespace}.root`,
    defaultMessage: 'На главную',
  },
})
