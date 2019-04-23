import React from 'react';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';


class BlogStripe extends React.Component {
    render () {
        return (
            <ListItem dense button>
                <Avatar>{this.props.blog.id}</Avatar>
                <ListItemText>{this.props.blog.title}</ListItemText>
                <ListItemSecondaryAction>
                    <Link href={`/blog/${this.props.blog.id}`}>
                        <Button variant="outlined">Details</Button>
                    </Link>
                </ListItemSecondaryAction>
            </ListItem>
        )
    }
}

export default BlogStripe;
