import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import '@douyinfe/semi-ui/dist/css/semi.css';
import { UserProvider } from './context/User';
import 'react-toastify/dist/ReactToastify.css';
import { StatusProvider } from './context/Status';
import { ThemeProvider } from './context/Theme';
import PageLayout from './components/layout/PageLayout.js';
import SemiLocaleProvider from './components/common/SemiLocaleProvider.js';
import './i18n/i18n.js';
import './index.css';

// Welcome message - Secondary developers are not allowed to remove this (Thông báo chào mừng - Các nhà phát triển thứ cấp không được phép xóa điều này)
// Welcome message (Secondary developers are not allowed to remove this)
if (typeof window !== 'undefined') {
  console.log('%cWe ❤ NewAPI%c Github: https://github.com/QuantumNous/new-api',
    'color: #10b981; font-weight: bold; font-size: 24px;',
    'color: inherit; font-size: 14px;');
}

// initialization

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StatusProvider>
      <UserProvider>
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <SemiLocaleProvider>
            <ThemeProvider>
              <PageLayout />
            </ThemeProvider>
          </SemiLocaleProvider>
        </BrowserRouter>
      </UserProvider>
    </StatusProvider>
  </React.StrictMode>,
);
