import * as React from 'react'
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import redgraph from '../../assets/images/chart-red.svg'

const columns = [
  { id: 'number', label: '#', minWidth: 60 },
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'price', label: 'Price', minWidth: 90 },
  {
    id: 'pricechanges',
    label: 'Price Changes',
    minWidth: 140,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'oneH',
    label: '1H %',
    minWidth: 140,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'twentyfourH',
    label: '24H %',
    minWidth: 140,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'sevenD',
    label: '7D %',
    minWidth: 140,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'marketcap',
    label: 'Market Cap',
    minWidth: 140,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'Volume',
    label: 'Volume',
    minWidth: 140,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'Supply',
    label: 'Supply',
    minWidth: 140,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'Liquidity',
    label: 'Liquidity',
    minWidth: 140,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'Graph',
    label: 'Graph',
    minWidth: 140,
    align: 'right',
    render: (row) => console.log(row),
    format: (value) => value.toFixed(1),
  },
]

function createData(
  number,
  name,
  price,
  pricechanges,
  oneH,
  twentyfourH,
  sevenD,
  marketcap,
  Volume,
  Supply,
  Liquidity,
  Graph
) {
  return {
    number,
    name,
    price,
    pricechanges,
    oneH,
    twentyfourH,
    sevenD,
    marketcap,
    Volume,
    Supply,
    Liquidity,
    Graph,
  }
}

const rows = [
  createData(
    '1',
    'Bitcoin BTC',
    '$46,793.34',
    '$48,793.34',
    '0,01%',
    '1,82%',
    '4,69%',
    '$885.95B',
    '$33.51B',
    '18.9M BTC',
    '948',
    ''
  ),
  createData(
    '1',
    'Bitcoin BTC',
    '$46,793.34',
    '$48,793.34',
    '0,01%',
    '1,82%',
    '4,69%',
    '$885.95B',
    '$33.51B',
    '18.9M BTC',
    '948',
    ''
  ),
  createData(
    '1',
    'Bitcoin BTC',
    '$46,793.34',
    '$48,793.34',
    '0,01%',
    '1,82%',
    '4,69%',
    '$885.95B',
    '$33.51B',
    '18.9M BTC',
    '948',
    ''
  ),
  createData(
    '1',
    'Bitcoin BTC',
    '$46,793.34',
    '$48,793.34',
    '0,01%',
    '1,82%',
    '4,69%',
    '$885.95B',
    '$33.51B',
    '18.9M BTC',
    '948',
    ''
  ),
  createData(
    '1',
    'Bitcoin BTC',
    '$46,793.34',
    '$48,793.34',
    '0,01%',
    '1,82%',
    '4,69%',
    '$885.95B',
    '$33.51B',
    '18.9M BTC',
    '948',
    ''
  ),
  createData(
    '1',
    'Bitcoin BTC',
    '$46,793.34',
    '$48,793.34',
    '0,01%',
    '1,82%',
    '4,69%',
    '$885.95B',
    '$33.51B',
    '18.9M BTC',
    '948',
    ''
  ),
  createData(
    '1',
    'Bitcoin BTC',
    '$46,793.34',
    '$48,793.34',
    '0,01%',
    '1,82%',
    '4,69%',
    '$885.95B',
    '$33.51B',
    '18.9M BTC',
    '948',
    ''
  ),
  createData(
    '1',
    'Bitcoin BTC',
    '$46,793.34',
    '$48,793.34',
    '0,01%',
    '1,82%',
    '4,69%',
    '$885.95B',
    '$33.51B',
    '18.9M BTC',
    '948',
    ''
  ),
  createData(
    '1',
    'Bitcoin BTC',
    '$46,793.34',
    '$48,793.34',
    '0,01%',
    '1,82%',
    '4,69%',
    '$885.95B',
    '$33.51B',
    '18.9M BTC',
    '948',
    ''
  ),
  createData(
    '1',
    'Bitcoin BTC',
    '$46,793.34',
    '$48,793.34',
    '0,01%',
    '1,82%',
    '4,69%',
    '$885.95B',
    '$33.51B',
    '18.9M BTC',
    '948',
    ''
  ),
  createData(
    '1',
    'Bitcoin BTC',
    '$46,793.34',
    '$48,793.34',
    '0,01%',
    '1,82%',
    '4,69%',
    '$885.95B',
    '$33.51B',
    '18.9M BTC',
    '948',
    ''
  ),
  createData(
    '1',
    'Bitcoin BTC',
    '$46,793.34',
    '$48,793.34',
    '0,01%',
    '1,82%',
    '4,69%',
    '$885.95B',
    '$33.51B',
    '18.9M BTC',
    '948',
    ''
  ),
  createData(
    '1',
    'Bitcoin BTC',
    '$46,793.34',
    '$48,793.34',
    '0,01%',
    '1,82%',
    '4,69%',
    '$885.95B',
    '$33.51B',
    '18.9M BTC',
    '948',
    ''
  ),
  createData(
    '1',
    'Bitcoin BTC',
    '$46,793.34',
    '$48,793.34',
    '0,01%',
    '1,82%',
    '4,69%',
    '$885.95B',
    '$33.51B',
    '18.9M BTC',
    '948',
    ''
  ),
  createData(
    '1',
    'Bitcoin BTC',
    '$46,793.34',
    '$48,793.34',
    '0,01%',
    '1,82%',
    '4,69%',
    '$885.95B',
    '$33.51B',
    '18.9M BTC',
    '948',
    ''
  ),
  createData(
    '1',
    'Bitcoin BTC',
    '$46,793.34',
    '$48,793.34',
    '0,01%',
    '1,82%',
    '4,69%',
    '$885.95B',
    '$33.51B',
    '18.9M BTC',
    '948',
    ''
  ),
  createData(
    '1',
    'Bitcoin BTC',
    '$46,793.34',
    '$48,793.34',
    '0,01%',
    '1,82%',
    '4,69%',
    '$885.95B',
    '$33.51B',
    '18.9M BTC',
    '948',
    ''
  ),
]

export default function InnerTable() {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value)
    setPage(0)
  }
  console.log(columns)
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer>
        <Table aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id]
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      )
                    })}
                  </TableRow>
                )
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  )
}

function Img() {
  return <img src={redgraph} alt="anything" />
}
