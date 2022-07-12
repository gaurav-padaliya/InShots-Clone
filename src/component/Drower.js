import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import "../data/catagory"
import catagory from '../data/catagory';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function TemporaryDrawer({setCatagory}) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 200 ,
            // paddingRight: 1,
            paddingLeft: 2

    }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        { <ListItem>
            <ListItemButton>
              <ListItemText primary={'CATAGORY'} />
            </ListItemButton>
          </ListItem>
      }
      </List>

      <Divider />
      <List>
        {catagory.map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton onClick ={() => setCatagory(text)}>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <div>
      {
        <React.Fragment key={'left'} >
          <Button onClick={toggleDrawer('left', true)}>{<MenuIcon color="action" />}</Button>
          <ThemeProvider theme={darkTheme}>
          <Drawer
            anchor={'left'}
            open={state['left']}
            onClose={toggleDrawer('left', false)}
          >
            {list('left')}
          </Drawer>
          </ThemeProvider>
        </React.Fragment>
       
      }
    </div>
  );
}
