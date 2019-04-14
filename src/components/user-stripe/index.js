import React from 'react'
import Avatar from '@material-ui/core/Avatar'
import Paper from '@material-ui/core/Paper'
import Link from '@material-ui/core/Link'
import LinkItemText from '@materail-ui/core/LinkItemText'
import Button from '@material-ui/core/Button'


class UserStripe extends React.Component {
   render () {
       return (
           <Paper>
             <Avatar>{this.props.user.id}</Avatar>
             <ListItemText>{this.props.user.email}</ListItemText>
             <ListItemSecondaryAction>
               <Link href={/user/${this.props.user.id}}>
                  <Button variant="outlined">Details</Button>
               </Link>
            </ListItemSecondaryAction>
          </Paper>
       )
   }
}

export default UserStripe;
