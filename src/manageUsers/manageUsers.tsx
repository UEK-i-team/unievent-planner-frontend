import * as React from 'react';
import List from '@mui/material/List';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import GroupRemoveIcon from '@mui/icons-material/GroupRemove';
import { BackButton, Item, RemoveButton, Wrapper } from './manageUsersStyle';

export const ManageUsers = () => {
  function generate(element: React.ReactElement) {
    return [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) =>
      React.cloneElement(element, {
        key: value,
      })
    );
  }
  const [secondary, setSecondary] = React.useState(false);
  return (
    <Wrapper>
      <BackButton>
        <ArrowBackIcon></ArrowBackIcon>
      </BackButton>
      <Typography sx={{ mt: 8, mb: 2, ml: 1 }} variant="h6" component="div">
        Członkowie
        <Typography
          variant="h6"
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
                <GroupRemoveIcon />
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
          </Item>
        )}
      </List>
    </Wrapper>
  );
};
