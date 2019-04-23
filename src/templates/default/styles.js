import logo from './logo.png'

const a = {
  textDecoration: 'none',
}


export default {
  flex: {
    flex: 1,
  },

  menu: {
    width: 200,
  },

  a: {
    ...a,
  },

  login: {
    ...a,
    color: 'white',
  },
  
  logo:{
	backgroundImage:`url(${logo})`,
	backgroundRepeat:'no-repeat',
	backgroundSize:'100% 100%',
	height: 50,
	width: 50,
  },
  
  link: {
	color: 'white',
	textDecoration: 'none',
  },
}
