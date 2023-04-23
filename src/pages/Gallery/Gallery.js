import { Typography } from '@mui/material'
import Page from 'material-ui-shell/lib/containers/Page'
import React from 'react'
import { useIntl } from 'react-intl'

const GalleryPage = () => {
  const intl = useIntl()

  return (
    <Page pageTitle={intl.formatMessage({ id: 'gallery' })}>
      <Typography>{intl.formatMessage({ id: 'gallery' })}</Typography>
      
    </Page>
  )
}
export default GalleryPage
