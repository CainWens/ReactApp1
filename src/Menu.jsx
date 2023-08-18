import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import { Routes, Route, Link } from "react-router-dom";


export default function SelectedListItem() {
    const [selectedIndex, setSelectedIndex] = React.useState(1);

    const handleListItemClick = (event, index) => {
        setSelectedIndex(index);
    };

    return (
        <div className='navBar menu'>
            <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>

                <List component="nav" aria-label="secondary mailbox folder">

                    <Link to={'/'}>
                        <ListItemButton
                            selected={selectedIndex === 1}
                            onClick={(event) => handleListItemClick(event, 1)}
                        >
                            <ListItemText primary="Главная" />
                        </ListItemButton>
                    </Link>

                    <Divider />

                    <Link to={'/chats'}>
                        <ListItemButton
                            selected={selectedIndex === 2}
                            onClick={(event) => handleListItemClick(event, 2)}
                        >
                            <ListItemText primary="Чаты" />
                        </ListItemButton>
                    </Link>

                    <Divider />

                    <Link to={'/profile'}>
                        <ListItemButton
                            selected={selectedIndex === 3}
                            onClick={(event) => handleListItemClick(event, 3)}
                        >
                            <ListItemText primary="Профиль" />
                        </ListItemButton>
                    </Link>

                    <Divider />
                </List>
            </Box>
        </div>
    );
}
