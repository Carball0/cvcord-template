import IconButton from '@mui/material/IconButton';

const SideBarIcon = ({icon, text}) => {
    return (
        <div className="icon group">
            <IconButton>
                {icon}
            </IconButton> 
            <p className="icon-text group-hover:scale-100">
                {text}
            </p>
        </div>
    );
}
  
export default SideBarIcon;