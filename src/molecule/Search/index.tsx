import React from 'react'
import Box from "@mui/material/Box";
import Input from "@mui/material/Input";

import { searchRecipes } from '../../utils/search';
import Recipe from '../../utils/recipe';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import { isWhiteSpaceLike } from 'typescript';

type Props = {
    recipes: Recipe[]
}

function Search({ recipes }: Props) {
    const [list, setList] = React.useState<{ title: string, path: string, score: number, img: { src: string, alt?: string | undefined } }[]>([]);

    const inputRef = React.useRef<HTMLInputElement>(null);

    return (
        <Box display='flex' flexDirection='column' justifyContent='center' alignItems='center'>
            <Input placeholder='Search' inputRef={inputRef} onChange={() => {
                if (inputRef.current?.value !== undefined && inputRef.current.value.trim() !== '') {
                    const results = searchRecipes(inputRef.current?.value, recipes);
                    let searchResults = Object.values(results).sort((a, b) => b.searchScore - a.searchScore).map(x => { return { title: x.recipe.title, path: x.recipe.path, score: x.searchScore, img: x.recipe.images[1] ?? x.recipe.images[0] } });
                    let top = [searchResults[0]]
                    for (let i = 0; i < searchResults.length - 1; ++i) {
                        if (searchResults[i].score - searchResults[i + 1].score > searchResults[i].score * .667) {
                            break;
                        }
                        top.push(searchResults[i + 1])
                    }
                    setList(top.slice(0, 5));
                }
                else {
                    setList([])
                }
            }} sx={{ fontSize: "1.5rem", fontWeight: 700 }} />
            {list.length > 0 &&
                <Box width='65%' display='flex' justifyContent='left' position='relative'>
                    <List sx={{ position: 'absolute', width: '100%' }}>
                        {list.map(e => <ListItem key={e.path} sx={{ m: 0, p: 0 }}>
                            <ListItemButton onClick={() => {
                                if (inputRef.current?.value !== undefined) {
                                    inputRef.current.value = ''
                                    setList([])
                                }
                            }} dense disableGutters sx={{ width: '100%', p: 0 }} >
                                <Link style={{ textDecoration: 'none', color: 'inherit', width: '100%' }} to={e.path}>
                                    <Card sx={{
                                        background: 'white', width: '100%', pl: 3, pr: 3, pt: 2, pb: 2, '&:hover': {
                                            background: 'rgb(240, 155, 133)', transition: 'background .5s',
                                            color: 'white'
                                            // color: 'rgb(244, 242, 237)'
                                            // color: 'rgb(240, 155, 133)'
                                        },
                                        flexDirection: 'row', display: 'flex', alignItems: 'center'
                                    }}>
                                        <img src={e.img.src} alt={e.img.alt} height='80' style={{ objectFit: 'cover', aspectRatio: '1/1' }} />
                                        <ListItemText sx={{ pl: '1.5rem' }} primary={e.title} primaryTypographyProps={{ fontSize: '1rem', fontWeight: 'bold' }} />
                                    </Card>
                                </Link>
                            </ListItemButton>
                        </ListItem>)}
                    </List>
                </Box>}

        </Box>
    )
}

export default Search