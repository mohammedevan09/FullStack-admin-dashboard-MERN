import { CssBaseline, ThemeProvider, createTheme } from '@mui/material'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { themeSettings } from './theme'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import Layout from './scenes/layout'
import Dashboard from './scenes/dashboard/index.jsx'
import Products from './scenes/products/index.jsx'
import Customers from './scenes/customers/index.jsx'
import Transactions from './scenes/transactions/index.jsx'
import Geography from './scenes/geography/index.jsx'
import Overview from './scenes/overview/index.jsx'
import Daily from './scenes/daily/index.jsx'
import Monthly from './scenes/monthly/index.jsx'
import Breakdown from './scenes/breakdown/index.jsx'
import Admin from './scenes/admin/index.jsx'
import Performance from './scenes/performance/index.jsx'

function App() {
  const mode = useSelector((state) => state?.global?.mode)
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode])

  return (
    <div className="app">
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/products" element={<Products />} />
              <Route path="/customers" element={<Customers />} />
              <Route path="/transactions" element={<Transactions />} />
              <Route path="/geography" element={<Geography />} />
              <Route path="/overview" element={<Overview />} />
              <Route path="/daily" element={<Daily />} />
              <Route path="/monthly" element={<Monthly />} />
              <Route path="/breakdown" element={<Breakdown />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/performance" element={<Performance />} />
            </Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
