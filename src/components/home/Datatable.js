import * as React from 'react'
import PropTypes from 'prop-types'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormHelperText from '@mui/material/FormHelperText'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'

import './datatable.css'
import InnerTable from './Table'

function TabPanel(props) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  }
}

export default function Datatable() {
  const [value, setValue] = React.useState(0)

  // dropdown
  const [topcoin, setTopCoin] = React.useState('')
  const [toplastcoin, setTopLastCoin] = React.useState('')

  const handleTopLastCoin = (event) => {
    setTopLastCoin(event.target.value)
  }
  const handleChange = (event) => {
    setTopCoin(event.target.value)
  }

  const handleChangeTab = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <section className="table-section my-5 py-5">
      <div className="container">
        <Box sx={{ width: '100%' }}>
          <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
            <Tabs
              className="d-flex"
              value={value}
              onChange={handleChangeTab}
              aria-label="basic tabs example"
            >
              <Tab label="Favorites" {...a11yProps(0)} />
              <Tab label="Cryptocurrencies" {...a11yProps(1)} />
              <Tab label="DeFi" {...a11yProps(2)} />
              <Tab label="Stablecoin" {...a11yProps(3)} />
              <Tab label="NFT" {...a11yProps(4)} />
              <Tab label="Metaverse" {...a11yProps(5)} />
            </Tabs>

            <div className="dropdown-container">
              <FormControl sx={{ m: 1, minWidth: 160 }} style={{}}>
                <InputLabel id="demo-simple-select-helper-label">
                  Top last coin
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={toplastcoin}
                  label="toplastcoin"
                  onChange={handleTopLastCoin}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Lorem</MenuItem>
                </Select>
              </FormControl>
              <FormControl sx={{ m: 1, minWidth: 160 }}>
                <InputLabel id="demo-simple-select-helper-label">
                  Top coin
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  value={topcoin}
                  label="topcoin"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Lorem</MenuItem>
                </Select>
              </FormControl>
            </div>
          </Box>
        </Box>
      </div>
      <TabPanel value={value} index={0}>
        <InnerTable />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <InnerTable />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <InnerTable />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <InnerTable />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <InnerTable />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <InnerTable />
      </TabPanel>
    </section>
  )
}
