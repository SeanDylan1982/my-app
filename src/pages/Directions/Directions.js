import { Typography } from '@mui/material'
import Page from 'material-ui-shell/lib/containers/Page'
import React from 'react'
import { useIntl } from 'react-intl'

const DirectionsPage = () => {
  const intl = useIntl()

  return (
    <Page pageTitle={intl.formatMessage({ id: 'directions' })}>
      <Typography>{intl.formatMessage({ id: 'directions' })}</Typography>
      
    </Page>
  )
}
export default DirectionsPage
