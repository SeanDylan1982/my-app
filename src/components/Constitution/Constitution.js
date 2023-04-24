import * as React from 'react';
import Box from '@mui/material/Box';

export default function Constritution() {
  return (
    <Box
      sx={{
        width: 1000,
        height: 1200,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    >
      <object title="Constitution_bye-laws" src="../../../public/docs/Northmead Constitution and Bye-Laws 2019 .pdf" style={{ width: 1000, height: 1200 }} />
    </Box>
  );
}