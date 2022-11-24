import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

export default function Oops() {
    return (
        <>
            <Link to="/"><img src="../Pics/logo.png" width={150}></img></Link>
            <Box className='box' sx={{
                backgroundColor: '#fa7e02',
                width: 450,
                height: 150,
                borderRadius: 75
            }}>
                <h1 className="h1">OOPS Wrong address!!!</h1>
            </Box>
        </>
    )
}