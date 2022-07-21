import IconButton from '@mui/material/IconButton';
import { blue } from '@mui/material/colors';

const SideBarIcon = ({icon, text}) => {
    return (
        <div className="icon group">
            <IconButton sx={{ color: blue[200] }}>
                {icon}
            </IconButton> 
            <p className="icon-text group-hover:scale-100">
                {text}
            </p>
        </div>
    );
}
  
export default SideBarIcon;