import { observable } from 'mobx'

export default class BlogStore {
	@observable list = [
	   {
         id: 1,
         title:'nestonesto',
         text:'lorem ipsum',
       },
       {
         id: 2,
         title: 'jendvajendva',
         text:'lorem ipsum2',
       },
       {
         id: 3,
         title: 'dvadvatri',
         text:'lorem ipsum3',
       },
       {
         id: 4,
         title: 'tritricetri',
         text:'lorem ipsum4',
       },
       {
         id: 5,
         title: 'cetricetripet',
         text:'lorem ipsum5',
       },
	]

	@observable detail = {

         id: 5,
         email:'c@ipsum.com',
      }

    fetchAll() {
    this.list.push({
        id: Math.random(),
        title:'c@ipsum.com',
    })
}
}
