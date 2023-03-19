---
to: <%= absPath %>/<%= capitalizedComponentName %>.tsx
---
import React from 'react'

// @TODO: complete with Props and Prop types if any, delete otherwise
interface <%= capitalizedComponentName %>Props {
  undefined?
}

const <%= capitalizedComponentName %> = ({}: <%= capitalizedComponentName %>Props) => {
  return (
    /* @TODO: complete with classes if any, delete otherwise.
     * Always keep data-testid with a descriptive name.
     */
    <div className="" data-testid="test">
      Sample component content
    </div>
  )
}

export default <%= capitalizedComponentName %>
