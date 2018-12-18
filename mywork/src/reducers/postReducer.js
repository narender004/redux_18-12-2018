import { FETCH_POSTS, NEW_POST, DELETE_POST,FETCH_POST,UPDATE_POST,INPUT_TEXT_VALUE} from '../actions/types';
const initialState = {
  items:[],
  item: {},
  text:''
  
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_POSTS:
    console.log('THIS DOES SHOW UP IN CONSOLE data ddddddddd',action.payload);
      return {
        ...state,
        items : action.payload
      };
    case NEW_POST:
    console.log('this is insert data',action.payload);
      return {
        ...state,
        item: action.payload
      };
      case DELETE_POST:
      console.log('this is delete data',action.payload);
        return {
          ...state,
     items: state.items.filter(item => item._id !== action.payload)
        };
        case FETCH_POST: {
     return {
      ...state,
      item: action.payload
    };
    };
    case UPDATE_POST: {
      console.log('UPDATE_POST action id',action.payload);
      console.log('UPDATE_POST items data',state.items);
     let item = state.items.find((itemdata) => {
      return (action.payload === itemdata._id) 
     });
     console.log('item',item)
     return {
      ...state,
      item:item
    };
    };  
    case INPUT_TEXT_VALUE: {
      console.log('INPUT_TEXT_VALUE',action.payload);
      return {
        ...state,
        item: { ...state.item, title: action.payload }
      };
    }
 
    default:
      return state;
  }
}