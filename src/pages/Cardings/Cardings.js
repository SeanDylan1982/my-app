import { Typography } from '@mui/material'
import Page from 'material-ui-shell/lib/containers/Page'
import React from 'react'
import { useIntl } from 'react-intl'

const CardingsPage = () => {
  const intl = useIntl()

  return (
    <Page pageTitle={intl.formatMessage({ id: 'cardings' })}>
      <Typography>{intl.formatMessage({ id: 'cardings' })}</Typography>
      
    </Page>
  )
}
export default CardingsPage
