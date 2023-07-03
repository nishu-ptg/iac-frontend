
import { Typography, Link } from "@mui/material";


export default function Copyright(props) {
    return (
        <></>
    )
    return (
        <div style={{ background: '#000' }}>
            <Typography variant="body2" color="text.secondary" align="center" {...props} style={{ marginBottom: 0, padding: '30px', color: '#fff' }}>
                {'Copyright © '}
                <Link color="inherit" href="https://mui.com/">
                    Your Website
                </Link>{' '}
                {new Date().getFullYear()}
                {'.'}
            </Typography>
        </div>
    );
}

