/**
 * App.tsx — Bal Dünyası Router
 * Design: Organik Modernizm — Kehribar/Amber, Playfair Display + DM Sans
 */

import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import HoneyTypesPage from "./pages/HoneyTypesPage";
import HoneyDetailPage from "./pages/HoneyDetailPage";
import MapPage from "./pages/MapPage";
import HowHoneyIsMadePage from "./pages/HowHoneyIsMadePage";
import BeekeepingPage from "./pages/BeekeepingPage";
import HistoryPage from "./pages/HistoryPage";
import HealthPage from "./pages/HealthPage";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-amber-50">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={() => <Layout><Home /></Layout>} />
      <Route path="/honey-types" component={() => <Layout><HoneyTypesPage /></Layout>} />
      <Route path="/honey/:id" component={() => <Layout><HoneyDetailPage /></Layout>} />
      <Route path="/map" component={() => <Layout><MapPage /></Layout>} />
      <Route path="/how-honey-is-made" component={() => <Layout><HowHoneyIsMadePage /></Layout>} />
      <Route path="/beekeeping" component={() => <Layout><BeekeepingPage /></Layout>} />
      <Route path="/history" component={() => <Layout><HistoryPage /></Layout>} />
      <Route path="/health" component={() => <Layout><HealthPage /></Layout>} />
      <Route path="/404" component={() => <Layout><NotFound /></Layout>} />
      <Route component={() => <Layout><NotFound /></Layout>} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
