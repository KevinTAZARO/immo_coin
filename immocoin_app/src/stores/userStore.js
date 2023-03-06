import { atom } from 'jotai'

export const userAtom = atom({
  auth_token: null,
    user: {
      id: null,
      username: null,
      email: null
    },
    loading: false,
    hasErrors: false,
    authenticated: false
})
