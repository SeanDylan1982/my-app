import { Typography } from '@mui/material'
import Page from 'material-ui-shell/lib/containers/Page'
import React from 'react'
import { useIntl } from 'react-intl'

const NewsPage = () => {
  const intl = useIntl()

  return (
    <Page pageTitle={intl.formatMessage({ id: 'news' })}>
      <Typography>{intl.formatMessage({ id: 'news' })}</Typography>
    </Page>
  )
}
export default NewsPage
