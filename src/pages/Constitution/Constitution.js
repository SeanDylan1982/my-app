import { Typography } from '@mui/material'
import Page from 'material-ui-shell/lib/containers/Page'
import React from 'react'
import { useIntl } from 'react-intl'
import Constritution from 'components/Constitution/Constitution'

const ConstitutionPage = () => {
  const intl = useIntl()

  return (
    <Page pageTitle={intl.formatMessage({ id: 'constitution' })}>
      <Typography>{intl.formatMessage({ id: 'constitution' })}</Typography>
      <Constritution />
    </Page>
  )
}
export default ConstitutionPage
