import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import BottomBar from "./components/BottomBar";
import Profile from "./components/Profile";
import './index.css';
import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      windowWidth: 0,
      windowHeight: 0
    };
  }

  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }

  updateDimensions() {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    let windowHeight = typeof window !== "undefined" ? window.innerHeight : 0;

    this.setState({ windowWidth, windowHeight });
  }

  render() {
    const { windowWidth } = this.state;

    const styles = {
      white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
      black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
      topBarHeight: 40,
      footerMenuHeight: 50,
      showFooter: windowWidth > 768,
      showSidebar: windowWidth > 768
    };

    return(
      <div className="inline-flex">
        {styles.showSidebar ? (
          <SideBar/>
        ) : (
          <BottomBar/>
        )}

        {styles.showFooter ? (
          <Footer/>
        ) : (
          <div/>
        )}
        
        {styles.showFooter ? (
          <Profile/>
        ) : (
          <Profile/>
        )}
        
      </div>
    )
  };
}

export default App;
