import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AppLayout from "./AppLayout";
import Home from "./pages/Home";
import { CountriesProvider } from "./context/CountriesContext";
import Country from "./pages/Country";
import DarkModeProvider from "./context/DarkModeContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CountriesProvider>
        <DarkModeProvider>
          <BrowserRouter>
            <Routes>
              <Route element={<AppLayout />}>
                <Route index element={<Navigate replace to="home" />} />
                <Route path="home" element={<Home />} />
                <Route path="home/:id" element={<Country />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </DarkModeProvider>
      </CountriesProvider>
    </QueryClientProvider>
  );
}

export default App;
