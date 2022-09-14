import SideBarIcon from "./SideBarIcon";
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import InsertLinkIcon from '@mui/icons-material/InsertLink';

const SideBar = () => {
    return (
        <div className="absolute top-0 left-0 h-screen w-20 m-0
                        flex flex-col bg-slate-800">
            <SideBarIcon icon={<GitHubIcon sx={{ fontSize: 42 }} />} text={"GitHub"}/>
            <SideBarIcon icon={<TwitterIcon sx={{ fontSize: 42 }} />} text={"Twitter"}/>
            <SideBarIcon icon={<LinkedInIcon sx={{ fontSize: 40 }} />} text={"LinkedIn"}/>
            <SideBarIcon icon={<FacebookIcon sx={{ fontSize: 40 }} />} text={"Facebook"}/>
            <SideBarIcon icon={<InstagramIcon sx={{ fontSize: 40 }} />} text={"Instagram"}/>
            <SideBarIcon icon={<InsertLinkIcon sx={{ fontSize: 40 }} />} text={"Link"}/>
        </div>
    );
}
  
export default SideBar;