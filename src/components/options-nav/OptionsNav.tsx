import { FC, SyntheticEvent, useState } from 'react'

import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Box from '@mui/system/Box'

import { CustomTabPanel } from './CustomTabPanel'
import { FormDynamicValues } from '../form/FormDynamicValues'
import { FormRetrofitValues } from '../form/FormRetrofitValues'
import { OptionsNavContainer } from './styled'
import { FormProps } from '@/types/form'

type OptionsNavProps = FormProps

const a11yProps = (index: number) => {
  return {
    id: `custom-tab-${index}`,
    'aria-controls': `custom-tabpanel-${index}`,
  }
}

export const OptionsNav: FC<OptionsNavProps> = (props) => {
  const [value, setValue] = useState<number>(0)

  const handleTabsChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <OptionsNavContainer>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          variant="fullWidth"
          value={value}
          onChange={handleTabsChange}
          aria-label="basic tabs example"
        >
          <Tab label="Dynamic Values" {...a11yProps(0)} />
          <Tab label="Retrofit Values" {...a11yProps(1)} />
        </Tabs>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <FormDynamicValues {...props} />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <FormRetrofitValues {...props} />
      </CustomTabPanel>
    </OptionsNavContainer>
  )
}
