import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import BottomBar from "./components/BottomBar";
import Profile from "./components/Profile";
import Presentation from "./components/Presentation";
import { Component } from "react";
import './index.css';

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
      topBarHeight: 40,
      footerMenuHeight: 50,
      showFooter: windowWidth > 768,
      showSidebar: windowWidth > 768
    };

    return(
      <div className="flex w-full">

        {styles.showSidebar ? (
          <SideBar/>
        ) : (
          <BottomBar/>
        )}

        <div className="w-full flex-row">

          {styles.showSidebar ? (
            <Presentation bar={true}/>
          ) : (
            <Presentation bar={false}/>
          )}

          {styles.showFooter ? (
            <Profile/>
          ) : (
            <Profile/>
          )}
          
          {styles.showFooter ? (
            <Footer/>
          ) : (
            <div/>
          )}
          
        </div>
      </div>
      
    )
  };
}

export default App;
