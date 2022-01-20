import React, { useContext, useState, useEffect } from "react";
import "./Navbar.scss"
import { Link } from "react-router-dom";
import { Context } from "../../Context/AuthContext";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';

const Navbar = () => {

    const { signOut, isAuthenticated, user } = useContext(Context)
    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <Divider />
            <List>
                {[
                    <Link to="/">Home</Link>,
                    <Link to="/about">About</Link>,
                    <Link to="/quartos/page=1">Rooms</Link>,
                    <Link to="/contact">Contact</Link>,
                    isAuthenticated && user?.userType[0] == "ADMIN" && (
                        <Link to="/dashboard/users/page=1">Dashboard</Link>
                    ),
                    isAuthenticated ? (
                        <>
                            <Link to="/favorites"><div className="favoritesLink">Favorites</div></Link> <br />
                            <Link to="/login" onClick={() => signOut()}>SignOut</Link>
                        </>
                    ) : (
                        <Link to="/login">SignIn</Link>
                    )
                ].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </Box >
    );

    return (
        <>
            <div className="optionsMenu">
                <div className="flexMenuItems">
                    <Link to="/" className="nameMenu">PelourinhoHotel</Link>
                    {['Menu'].map((anchor) => (
                        <React.Fragment key={anchor}>
                            <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                            <Drawer
                                anchor={anchor}
                                open={state[anchor]}
                                onClose={toggleDrawer(anchor, false)}
                            >
                                {list(anchor)}
                            </Drawer>
                        </React.Fragment>
                    ))}
                </div>
            </div>
            <div className="right">
                <Link to="/" className="name">PelourinhoHotel</Link>
                <div className="options">
                    <Link to="/">Home</Link>
                    <Link to="/about">About</Link>
                    <Link to="/quartos/:orderBy">Rooms</Link>
                    <Link to="/contact">Contact</Link>
                    {
                        isAuthenticated && user?.userType[0] === "ADMIN" && (
                            <Link to="/dashboard/users/page=1">Dashboard</Link>
                        )
                    }
                    {
                        isAuthenticated ? (
                            <>
                                <Link to="/favorites">Favorites</Link>
                                <Link to="/login" onClick={() => signOut()}>SignOut</Link>
                            </>
                        ) : (
                            <Link to="/login">SignIn</Link>
                        )
                    }
                </div>
            </div >
        </>
    );
};
export default Navbar;
