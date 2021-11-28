import React from "react";

const defaultState = {
  nightMode: false,
  toggleNightMode: () => {},
  isSidebarOpen: true,
  toggleSidebarOpen: () => {},
};

const SettingsContext = React.createContext(defaultState);

// util guess night mode
/*const supportsDarkMode = () =>
  window.matchMedia("(prefers-color-scheme: dark)").matches === true;
*/

class SettingsProvider extends React.Component {
  state = {
    nightMode: false,
    isSidebarOpen: true,
  };

  toggleNightMode = () => {
    //localStorage.setItem("dark", JSON.stringify(dark));
    this.setState({ nightMode: !this.state.nightMode }, () => {
      console.log(this.state);
    });
  };

  toggleSidebarOpen = () => {
    this.setState({ isSidebarOpen: !this.state.isSidebarOpen }, () => {
      console.log(this.state);
    });
  };

  componentDidMount() {
    /*Getting dark mode value from localStorage!
    const lsDark = JSON.parse(localStorage.getItem("dark"));
    if (lsDark) {
      this.setState({ dark: lsDark });
    } else if (supportsDarkMode()) {
      this.setState({ dark: true });
    }*/
  }

  render() {
    const { children } = this.props;
    const { nightMode, isSidebarOpen } = this.state;

    // to do, for now put all here
    return (
      <SettingsContext.Provider
        value={{
          nightMode,
          toggleNightMode: this.toggleNightMode,
          isSidebarOpen,
          toggleSidebarOpen: this.toggleSidebarOpen,
        }}
      >
        {children}
      </SettingsContext.Provider>
    );
  }
}

export default SettingsContext;

export { SettingsProvider };
