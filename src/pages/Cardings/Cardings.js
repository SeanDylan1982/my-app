import { Typography } from '@mui/material'
import Page from 'material-ui-shell/lib/containers/Page'
import React from 'react'
import { useIntl } from 'react-intl'
import Cardings from '../../components/Cardings/Cardings'

const CardingsPage = () => {
  const intl = useIntl()

  return (
    <Page pageTitle={intl.formatMessage({ id: 'cardings' })}>
      <Typography>{intl.formatMessage({ id: 'cardings' })}</Typography>
      <Cardings />
    </Page>
  )
}
export default CardingsPage
