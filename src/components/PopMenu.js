import React, {useState} from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import Typography from '@mui/material/Typography';
import PageviewIcon from '@mui/icons-material/Pageview';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SettingsIcon from '@mui/icons-material/Settings';

export default function PopMenu({selected, setSelected, showAppLang, setShowAppLang}) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuItemClick = (selected) => {
    unsetAnchorEl();
    setSelected(selected)
  };

  const unsetAnchorEl = () => setAnchorEl(null);

  return (
    <div>
      <IconButton
        id="button1"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        color="default"
        onClick={handleClick}
        sx={{ mr: 2 }}
      > 
        <MenuIcon />
        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: 'white'}}>Menu</Typography>
      </IconButton>
      <Menu
        id="menu1"
        anchorEl={anchorEl}
        open={open}
        onClose={unsetAnchorEl}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      > 
        <MenuList>
          <MenuItem onClick={() => handleMenuItemClick("search")} >
              <ListItemIcon>
                <PageviewIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Search</ListItemText>
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("navigation")}>
              <ListItemIcon>
                <LibraryBooksIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Read</ListItemText>
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("settings")}>
              <ListItemIcon>
                <SettingsIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>Settings</ListItemText>
          </MenuItem>
        </MenuList>
      </Menu>

    </div>
  );
}