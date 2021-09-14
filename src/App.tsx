import React from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router";
import { ThemeProvider } from "styled-components";

import { customizationSelector } from "./redux/customization/selectors";
import { CustomizationScreen } from "./screens/CustomizationScreen";

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
        <Route exact path="/" render={() => <CustomizationScreen />} />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
