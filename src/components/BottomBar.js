import SideBarIcon from "./SideBarIcon";
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import InsertLinkIcon from '@mui/icons-material/InsertLink';

const TopBar = () => {
    return (
        <div className="h-18 w-screen flex flex-row bg-slate-800 mr-12 fixed bottom-0">
            <SideBarIcon icon={<GitHubIcon sx={{ fontSize: 32 }} />} text={"GitHub"}/>
            <SideBarIcon icon={<TwitterIcon sx={{ fontSize: 32 }} />} text={"Twitter"}/>
            <SideBarIcon icon={<LinkedInIcon sx={{ fontSize: 30 }} />} text={"LinkedIn"}/>
            <SideBarIcon icon={<FacebookIcon sx={{ fontSize: 30 }} />} text={"Facebook"}/>
            <SideBarIcon icon={<InstagramIcon sx={{ fontSize: 30 }} />} text={"Instagram"}/>
            <SideBarIcon icon={<InsertLinkIcon sx={{ fontSize: 30 }} />} text={"Link"}/>
        </div>
    );
}
  
export default TopBar;