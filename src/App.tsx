import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import Coin from "./pages/Coin";
import Header from "./components/Header";

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        staleTime: 1800000,
      },
    },
  });

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Router>
          <Header />
          <Routes>
            <Route path="/crypto-app/" element={<Home />} />
            <Route path="/crypto-app/:id" element={<Coin />} />
          </Routes>
        </Router>
      </QueryClientProvider>
    </>
  );
}

export default App;
