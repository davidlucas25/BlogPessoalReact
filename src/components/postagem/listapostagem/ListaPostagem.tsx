import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Card, CardActions, CardContent, Button, Typography } from '@material-ui/core';
import { Box } from '@mui/material';
import './ListaPostagem.css';
import useLocalStorage from 'react-use-localstorage';
import Postagem from '../../../models/Postagem';
import { busca } from '../../../services/Service';
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';

export default function ListaPostagem() {

    const[posts, setPosts] = useState<Postagem[]>([]);
    let history = useNavigate();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    useEffect(() => {
        if(token == '') {
            alert('Você precisa estár logado!')
            history('/login')
        }
    }, [token])

    async function getPosts() {
        await busca('/postagens', setPosts, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {
        getPosts()
    }, [posts.length])

    return (
        <>
        {
            posts.map(post => (  
            <Box m={2}>
                <Card variant='outlined'>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom>
                            Postagens
                        </Typography>
                        <Typography variant='h5' component='h2'>
                            {post.titulo} - {post.usuario?.nome}
                        </Typography>
                        <Typography variant='body2' component='p'>
                            {post.texto}
                        </Typography>
                        <Typography variant='body2' component='p'>
                            {post.tema?.descricao}
                        </Typography>
                        <Typography variant='body2' component='p'>
                            {post.date}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Box display='flex' justifyContent='center' mb={1.5}>
                            <Link to="" className='text-decorator-none'>
                                <Box mx={1}>
                                    <Button variant="contained" className="marginLeft" size="small" color="primary">Atualizar</Button>
                                </Box>
                            </Link>
                            <Link to="" className='text-decorator-none'>
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