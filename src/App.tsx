import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router";
import { ThemeProvider } from "styled-components";

import { customizationSelector } from "./redux/customization/selectors";
import { PersonalCustomizationScreen } from "./screens";

function App() {
  const defaultTheme = useSelector(customizationSelector);

  const theme = {
    headingColor: defaultTheme.headingColor,
    backgroundColor: defaultTheme.backgroundColor,
    panel: defaultTheme.panel,
    panelColor: defaultTheme.panelFont,
    ButtonBgColor: defaultTheme.buttonBgColor,
  };

  return (
    <ThemeProvider theme={theme}>
      <Switch>
        <Route exact path="/" render={() => <PersonalCustomizationScreen />} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
