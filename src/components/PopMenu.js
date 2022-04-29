import React, {useState, useContext} from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemText from '@mui/material/ListItemText';
import ListItemIcon from '@mui/material/ListItemIcon';
import PageviewIcon from '@mui/icons-material/Pageview';
import DownloadIcon from '@mui/icons-material/Download';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import SettingsIcon from '@mui/icons-material/Settings';
import i18n from '../lib/i18n';
import AppLangContext from "../contexts/AppLang";

export default function PopMenu({selected, setSelected, showAppLang, setShowAppLang, setPassage, setRead}) {
  const appLang = useContext(AppLangContext);

  const [anchorEl, setAnchorEl] = useState(null);
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
        size="large"
        id="button1"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        color="inherit"
        onClick={handleClick}
        sx={{ mr: 2 }}
      > 
        <MenuIcon />
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
          <MenuItem onClick={() => {
              handleMenuItemClick("search");
              setPassage()
            }}>
              <ListItemIcon>
                <PageviewIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>{i18n(appLang, 'menu_search')}</ListItemText>
          </MenuItem>
          <MenuItem onClick={() => {
              handleMenuItemClick("navigation");
              setRead()
            }}>
              <ListItemIcon>
                <LibraryBooksIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>{i18n(appLang, 'menu_read')}</ListItemText>
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("settings")}>
              <ListItemIcon>
                <SettingsIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>{i18n(appLang, 'settings')}</ListItemText>
          </MenuItem>
          <MenuItem onClick={() => handleMenuItemClick("download")}>
              <ListItemIcon>
                <DownloadIcon fontSize="small" />
              </ListItemIcon>
              <ListItemText>{i18n(appLang, 'download')}</ListItemText>
          </MenuItem>
        </MenuList>
      </Menu>

    </div>
  );
}