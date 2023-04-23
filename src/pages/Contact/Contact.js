import { Typography } from '@mui/material'
import Page from 'material-ui-shell/lib/containers/Page'
import React from 'react'
import { useIntl } from 'react-intl'

const ContactPage = () => {
  const intl = useIntl()

  return (
    <Page pageTitle={intl.formatMessage({ id: 'contact' })}>
      <Typography>{intl.formatMessage({ id: 'contact' })}</Typography>
      
    </Page>
  )
}
export default ContactPage
