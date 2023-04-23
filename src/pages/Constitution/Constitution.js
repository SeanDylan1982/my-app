import { Typography } from '@mui/material'
import Page from 'material-ui-shell/lib/containers/Page'
import React from 'react'
import { useIntl } from 'react-intl'

const ConstitutionPage = () => {
  const intl = useIntl()

  return (
    <Page pageTitle={intl.formatMessage({ id: 'constitution' })}>
      <Typography>{intl.formatMessage({ id: 'constitution' })}</Typography>
      
    </Page>
  )
}
export default ConstitutionPage
