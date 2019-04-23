import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { observer } from 'mobx-react';
import Template from 'templates/default';
import store from 'store';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import styles from './styles';
import TildaButton from 'components/atoms/tilda-button';
import BlogStripe from 'components/organisms/blog-stripe';


@observer
class Blog extends Component {
  componentWillMount() {
    store.title.title = 'Blog';
  }

  handleClick = () => {
    store.blog.list.push({
	  id:5,
	  title:'test123',
	  text:'nestonestonesto',
	})
  }

  render() {
      const usersVeiw = store.blog.list.map((blog) => {
          return (
              <BlogStripe blog={blog} key={blog.id}/>
          )
      });

    return (
      <Template style={{}}>
        <div style={styles.content}>
          <div className="wrapper">
            <h1>Welcome to Maja Mekic Photography</h1>
            <h3>Lorem ipsum dolor est satum itc serum</h3>
            <Button variant="contained" color="secondary" onClick={this.handleClick}>
                Hello World!
            </Button>
            <TildaButton style={styles.tb}>Tilda</TildaButton>
          </div>
            <List style={styles.lista}>
              {usersVeiw}
            </List>
        </div>
      </Template>
    )
  }
}

Blog.propTypes = {
  store: PropTypes.shape({
    title: PropTypes.shape({
      title: PropTypes.string.isRequired,
    }).isRequired,
    todo: PropTypes.shape({
      addTodo: PropTypes.func.isRequired,
      todos: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    }).isRequired,
  }),
}

export default Blog
