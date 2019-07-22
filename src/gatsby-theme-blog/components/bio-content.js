/** @jsx jsx */
// import React from 'react'
import { Styled, jsx } from 'theme-ui'
/**
 * Shadow me to add your own bio content
 */

export default () => (
  <div>
    <div sx={{ mb: 2 }}>
      Words by{' '}
      <Styled.a href='mailto:chuck@eclecticsaddlebag.com'>Chuck</Styled.a>.
      <br />
      Love to hear from you. Look me up ...{' '}
      <Styled.a
        href='https://twitter.com/eclecticcoding'
        target='_blank'
        rel='noopener noreferrer'
      >
        More about me
      </Styled.a>
    </div>
  </div>
)
