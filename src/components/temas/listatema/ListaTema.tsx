import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import Tema from '../../../models/Tema';
import { Box } from '@mui/material';
import './ListaTema.css';
import useLocalStorage from 'react-use-localstorage';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

export default function ListaTema() {
    
    const[temas, setTemas] = useState<Tema[]>([])
    let history = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(()=>{
        if(token == ''){
            alert('Você precisa estar logado!')
            history('/login')
        }
    }, [token])
 
    async function getTema(){
        await busca('/tema', setTemas, {
            headers: {
                'Authorization': token
            }
        })
    } 

    useEffect(() => {
        getTema()
    }, [temas.length])

    return (
        <>
            {
            temas.map(tema =>(
            <Box m={2}>
                <Card variant='outlined'>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>
                            Tema
                        </Typography>
                        <Typography variant='h5' component='h2'>
                            {tema.descricao}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Box display='flex' justifyContent='center' mb={1.5}>
                            <Link to={`/formularioTema/${tema.id}`} className='text-decorator-none'>
                                <Box mx={1}>
                                    <Button variant="contained" className="marginLeft" size="small" color="primary">Atualizar</Button>
                                </Box>
                            </Link>
                            <Link to={`/deletarTema/${tema.id}`} className='text-decorator-none'>
                                <Box mx={1}>
                                    <Button variant="contained" size="small" color="secondary">
                                        Deletar
                                    </Button>
                                </Box>
                            </Link>
                        </Box>
                    </CardActions>
                </Card>
            </Box>
            ))}
        </>
    );
}