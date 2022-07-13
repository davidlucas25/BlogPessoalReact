import React from 'react';
import { AppBar, Toolbar, Typography} from '@material-ui/core';
import {Link, useNavigate} from 'react-router-dom'
import {Box} from '@mui/material';
import './Navbar.css';
import useLocalStorage from 'react-use-localstorage';

export default function Navbar() {

    const [token, setToken] = useLocalStorage('token');
    let history = useNavigate();

    function goLogout(){
        setToken('')
        alert('Usuário deslogado')
        history('/login');
    }
    return (
        <>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Box className='cursor'>
                        <Typography variant="h5" color="inherit">
                            myNotes
                        </Typography>
                    </Box>

                    <Box display="flex" justifyContent="start">

                        <Link to="/home" className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Home
                                </Typography>
                            </Box>
                        </Link>

                        <Link to="/posts" className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Post
                                </Typography>
                            </Box>
                        </Link>

                        <Link to="/temas" className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    Themes
                                </Typography>
                            </Box>
                        </Link>

                        <Link to="formularioTema" className='text-decorator-none'>
                            <Box mx={1} className='cursor'>
                                <Typography variant="h6" color="inherit">
                                    New theme
                                </Typography>
                            </Box>
                        </Link>

                            <Box mx={1} className='cursor' onClick={goLogout}>
                                <Typography variant="h6" color="inherit">
                                    Logout
                                </Typography>
                            </Box>
                    </Box>

                </Toolbar>
            </AppBar>
        </>
    );
}
