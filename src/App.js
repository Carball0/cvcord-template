import Footer from "./components/Footer";
import SideBar from "./components/SideBar";
import BottomBar from "./components/BottomBar";
import Section from "./components/Section";
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
      responsive: windowWidth > 768
    };

    return(
      <div className="flex w-full">

        {styles.responsive ? (
          <SideBar/>
        ) : (
          <BottomBar/>
        )}

          <div className="w-full flex-row">
            {styles.responsive ? (
              <div class="flex flex-row justify-center">
                <Presentation bar={true}/>
              </div>
            ) : (
              <Presentation bar={false}/>
            )}
          
          <div class="container w-full mx-auto">
          <h2 className="mt-4 text-center tracking-wider text-3xl title-font font-medium text-gray-200 mb-2">Education</h2>
            {styles.responsive ? (
              <div class="flex flex-row">
                <Section img={"https://centros.unileon.es/eiii/files/2010/10/escuela1.jpg"} title={"Example title"}/>
                <Section img={"https://dummyimage.com/1921x1921"} title={"Example title"}/>
                <Section img={"https://dummyimage.com/1921x1921"} title={"Example title"}/>
              </div>
            ) : (
              <div class="flex flex-col">
                <Section img={"https://centros.unileon.es/eiii/files/2010/10/escuela1.jpg"} title={"Example title"}/>
                <Section img={"https://dummyimage.com/1921x1921"} title={"Example title"}/>
                <Section img={"https://dummyimage.com/1921x1921"} title={"Example title"}/>
                <div className="h-20"/>
              </div>
            )}

            {styles.responsive ? <Footer/> : <div/>}

          </div>
          
        </div>
      </div>
    )
  };
}

export default App;
