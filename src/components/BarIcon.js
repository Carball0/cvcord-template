import IconButton from '@mui/material/IconButton';
import { blue } from '@mui/material/colors';

const BarIcon = ({icon, text, bar}) => {
    let barStyle = "icon group h-12 w-12"
    let textStyle = "group-hover:scale-100 hidden"
    //True = Sidebar, False = BottomBar
    if(bar) {
        barStyle = "icon group"
        textStyle = "icon-text group-hover:scale-100"
    }

    return (
        <div className={barStyle}>
            <IconButton sx={{ color: blue[200]}}>
                {icon}
            </IconButton>
            <p className={textStyle}>
                {text}
            </p>
        </div>
    );
}
  
export default BarIcon;