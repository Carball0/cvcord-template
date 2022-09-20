import BarIcon from "./BarIcon";
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import InsertLinkIcon from '@mui/icons-material/InsertLink';

const SideBar = () => {
    return (
        <div className="relative top-0 left-0 h-screen w-20 m-0
                        flex flex-col bg-slate-800 mr-12">
            <BarIcon icon={<GitHubIcon sx={{ fontSize: 42 }} />} text={"GitHub"} bar={true}/>
            <BarIcon icon={<TwitterIcon sx={{ fontSize: 42 }} />} text={"Twitter"} bar={true}/>
            <BarIcon icon={<LinkedInIcon sx={{ fontSize: 40 }} />} text={"LinkedIn"} bar={true}/>
            <BarIcon icon={<FacebookIcon sx={{ fontSize: 40 }} />} text={"Facebook"} bar={true}/>
            <BarIcon icon={<InstagramIcon sx={{ fontSize: 40 }} />} text={"Instagram"} bar={true}/>
            <BarIcon icon={<InsertLinkIcon sx={{ fontSize: 40 }} />} text={"Link"} bar={true}/>
        </div>
    );
}
  
export default SideBar;