import Box from '@mui/material/Box'
import { FC, PropsWithChildren } from 'react'
import { CustomTabContainer } from './styled'

type CustomTabPanelProps = PropsWithChildren & {
  index: number
  value: number
}

export const CustomTabPanel: FC<CustomTabPanelProps> = ({
  children,
  value,
  index,
  ...other
}) => {
  return (
    <CustomTabContainer
      role="tabpanel"
      hidden={value !== index}
      id={`custom-tabpanel-${index}`}
      aria-labelledby={`custom-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </CustomTabContainer>
  )
}
