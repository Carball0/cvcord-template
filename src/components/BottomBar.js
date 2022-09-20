import BarIcon from "./BarIcon";
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import InsertLinkIcon from '@mui/icons-material/InsertLink';

const BottomBar = () => {
    return (
        <div className="h-18 w-screen flex flex-row bg-slate-800 fixed bottom-0">
            <BarIcon icon={<GitHubIcon sx={{ fontSize: 32 }} />} text={"GitHub"} bar={false}/>
            <BarIcon icon={<TwitterIcon sx={{ fontSize: 32 }} />} text={"Twitter"} bar={false}/>
            <BarIcon icon={<LinkedInIcon sx={{ fontSize: 30 }} />} text={"LinkedIn"} bar={false}/>
            <BarIcon icon={<FacebookIcon sx={{ fontSize: 30 }} />} text={"Facebook"} bar={false}/>
            <BarIcon icon={<InstagramIcon sx={{ fontSize: 30 }} />} text={"Instagram"} bar={false}/>
            <BarIcon icon={<InsertLinkIcon sx={{ fontSize: 30 }} />} text={"Link"} bar={false}/>
        </div>
    );
}
  
export default BottomBar;