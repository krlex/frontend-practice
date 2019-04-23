import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import Template from 'templates/default'
import store from 'store'
import styles from './styles'
import Button from '@material-ui/core/Button';


class About extends Component {
  componentWillMount() {
    this.props.store.title.title = 'About'
  }
  
  handleClick = () =>{
	  console.log('Radi')
  }

  render() {
    return (
      <Template style={{}}>
        <div style={styles.content}>
          <h1>ABOUT US</h1>
            <h3>Lorem Ipsum is simply dummy text of the printing and 
            typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown 
            printer took a galley of type and scrambled it to make a 
            type specimen book.</h3>
           <Button variant="contained" color="primary" onClick={this.handleClick}>
          Learn More
        </Button>
        </div>
      </Template>
    )
  }
}


About.propTypes = {
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


export default observer((props) => <About {...props} store={store} />)
