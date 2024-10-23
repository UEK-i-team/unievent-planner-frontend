import * as React from 'react';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import DeleteIcon from '@mui/icons-material/Delete';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Typography from '@mui/material/Typography';

import { BackButton, Item, RemoveButton, Wrapper } from './manageUsersStyle';

const ManageUsers = () => {
  function generate(element: React.ReactElement) {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }
  const [secondary] = React.useState(false);
  return (
    <Wrapper>
      <BackButton>
        <ArrowBackIcon></ArrowBackIcon>
      </BackButton>
      <Typography sx={{ mt: 8, mb: 1, ml: 1 }} variant="h6" component="div">
        Członkowie
        <Typography
          variant="h4"
          component="div"
          fontStyle={'italic'}
          fontWeight={600}
        >
          NAZWA_GRUPY
        </Typography>
      </Typography>
      <List>
        {generate(
          <Item
            secondaryAction={
              <RemoveButton edge="end" aria-label="delete">
                <DeleteIcon />
              </RemoveButton>
            }
          >
            <ListItemAvatar>
              <Avatar src={''}></Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="Użytkownik"
              secondary={secondary ? 'Secondary text' : null}
            />
          </Item>,
        )}
      </List>
    </Wrapper>
  );
};
export default ManageUsers;
