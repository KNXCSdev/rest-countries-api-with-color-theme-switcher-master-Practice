import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import AppLayout from "./AppLayout";
import Home from "./pages/Home";
import { CountriesProvider } from "./context/CountriesContext";

function App() {
  return (
    <CountriesProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="home" />} />
            <Route path="/home" element={<Home />} />{" "}
          </Route>
        </Routes>
      </BrowserRouter>
    </CountriesProvider>
  );
}

export default App;
