import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';


export const mailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemText primary="Home" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Assignments" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Cafeteria" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Lost and Found" />
    </ListItem>
  </div>
);

export const otherMailFolderListItems = (
  <div>
    <ListItem button>
      <ListItemText primary="About" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Contact us" />
    </ListItem>
    <ListItem button>
      <ListItemText primary="Contribute" />
    </ListItem>
  </div>
);
