import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";
import Shop from "./pages/Shop";
import MainLayout from "./layout/MainLayout";
import ProductDetail from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import { Provider } from "react-redux";
import { store } from "./store/app/store";
import AuthWrapper from "./store/features/auth/AuthWrapper";
import ScrollToTop from "./components/ui/ScrollToTop";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <ScrollToTop />
        <AuthWrapper>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignUpPage />} />
            <Route element={<MainLayout />}>
              <Route path="/shop" element={<Shop />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/products/:id" element={<ProductDetail />} />
            </Route>
          </Routes>
        </AuthWrapper>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
