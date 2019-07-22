import React, { Fragment } from 'react'
import { css } from 'theme-ui'
import { SocialIcon } from 'react-social-icons'

const Footer = ({ socialLinks }) => (
  <footer
    css={css({
      mt: 4,
      pt: 3
    })}
  >
    {socialLinks.map((platform, i, arr) => (
      <Fragment key={platform.url}>
        <SocialIcon
          url={platform.url}
          target='_blank'
          rel='noopener noreferrer'
          css={css({ mr: 3 })}
        >
          {platform.name}
        </SocialIcon>
      </Fragment>
    ))}
  </footer>
)
export default Footer
