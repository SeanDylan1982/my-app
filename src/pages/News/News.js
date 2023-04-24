import { Typography } from '@mui/material'
import Page from 'material-ui-shell/lib/containers/Page'
import React from 'react'
import { useIntl } from 'react-intl'
import News from '../../components/News/News'

const NewsPage = () => {
  const intl = useIntl()

  return (
    <Page pageTitle={intl.formatMessage({ id: 'news' })}>
      <Typography>{intl.formatMessage({ id: 'news' })}</Typography>
      <News />
    </Page>
  )
}
export default NewsPage
