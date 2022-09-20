import "../index.css"
const Footer = () => {
    return (
        <div>
            <div className="fixed bottom-5 text-slate-400 font-semibold mx-auto footerPos">
                <p className="mt-1 text-center text-xs">
                    <span className="text-sm mb-2">Made from scratch by <a className="links" href="https://github.com/Carball0">@Carball0</a></span>
                    <br/><span>Done w/ ReactJS and TailwindCSS. Icons from <a className="links" href="https://mui.com/material-ui/material-icons/">material-icons</a></span>
                </p>
            </div>
        </div>
    );
}
  
export default Footer;