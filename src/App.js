import React from 'react';
import {useState} from "react";
import {ColorModeContext , useMode} from "./theme";
import {CssBaseline , ThemeProvider} from "@mui/material";
import {Routes, Route} from "react-router-dom";
import Topbar from "./scenes/global/Topbar";
import SidebarIndex from "./scenes/global/SidebarIndex";
import Dashboard from "./scenes/dashboard/Dashboard";
import Team from "./scenes/team/Team";
import Contact from "./scenes/Contact";
import Invoice from "./scenes/invoice/Invoice";
import Form from "./scenes/form/Form";
import Bar from "./scenes/Bar";
import Pie from "./scenes/pie/Pie";
import Line from "./scenes/line/Line";
import Faq from "./scenes/faq/Faq";
import Calendar from "./scenes/Calendar";
import Geography from "./scenes/geography/Geography";

const App = () => {
  const [theme , colorMode] = useMode();
  const [isSidebar , setIsSidebar] =useState(true);
    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <div className="app">
                    <SidebarIndex isSidebar={isSidebar} />
                    <main className="content">
                        <Topbar setIsSidebar={setIsSidebar} />
                        <Routes>
                            <Route path="/" element={<Dashboard />} />
                            <Route path="/team" element={<Team />} />
                            <Route path="/contacts" element={<Contact />} />
                            <Route path="/invoices" element={<Invoice />} />
                            <Route path="/form" element={<Form />} />
                            <Route path="/bar" element={<Bar />} />
                            <Route path="/pie" element={<Pie />} />
                            <Route path="/line" element={<Line />} />
                            <Route path="/faq" element={<Faq />} />
                            <Route path="/calendar" element={<Calendar />} />
                            <Route path="/geography" element={<Geography />} />
                        </Routes>
                    </main>
                </div>
            </ThemeProvider>
        </ColorModeContext.Provider>
    )
}
export default App
