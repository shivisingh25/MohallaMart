import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Toaster } from '@/components/ui/toaster';
import { appStore } from '@/store/appStore';

// Import pages
import { Home } from '@/pages/Home';
import { BusinessDetailPage } from '@/pages/Business/BusinessDetailPage';
import { LoginPage } from '@/pages/Auth/LoginPage';
import { RegisterPage } from '@/pages/Auth/RegisterPage';
import { Dashboard } from '@/pages/Business/Dashboard';

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/business/:id" element={<BusinessDetailPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* Add routes for managing deals and businesses */}
          <Route path="/business/deals/new" element={<div>New Deal Form</div>} />
          <Route path="/business/deals/edit/:id" element={<div>Edit Deal Form</div>} />
          <Route path="/business/new" element={<div>New Business Form</div>} />
          <Route path="/business/manage/:id" element={<div>Manage Business</div>} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </Provider>
  );
}

export default App;