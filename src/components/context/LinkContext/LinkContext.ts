import { createContext } from 'react'

import type { LinkContextProps } from './LinkContext_d'

const LinkContext = createContext<LinkContextProps>({
  pathname: null,
  linkOverrides: []
})

export default LinkContext
