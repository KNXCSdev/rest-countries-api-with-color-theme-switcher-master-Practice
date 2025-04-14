import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import AppLayout from "./AppLayout";
import Home from "./pages/Home";
import { CountriesProvider } from "./context/CountriesContext";
import Country from "./pages/Country";
import DarkModeProvider from "./context/DarkModeContext";

function App() {
  return (
    <CountriesProvider>
      <DarkModeProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<AppLayout />}>
              <Route index element={<Navigate replace to="home" />} />
              <Route path="home" element={<Home />} />{" "}
              <Route path="home/:id" element={<Country />} />{" "}
            </Route>
          </Routes>
        </BrowserRouter>
      </DarkModeProvider>
    </CountriesProvider>
  );
}

export default App;
