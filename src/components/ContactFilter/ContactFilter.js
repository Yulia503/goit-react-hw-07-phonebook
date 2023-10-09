import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { FilterInputBox, FilterText } from './ContactFilter.styled';

export const ContactFilter = () => {
  const dispatch = useDispatch();
  return (
    <>
      <FilterText>Find contacts by name</FilterText>
      <FilterInputBox
        type="text"
        onChange={evt => {
          dispatch(setFilter(evt.target.value));
        }}
      />
    </>
  );
};




// import { FilterInputBox, FilterText } from './ContactFilter.styled';

// export const ContactFilter = ({ filter, onContactFilter }) => {
//   return (


//     <>
      
//       <FilterText>Find contacts by name</FilterText>
//       <FilterInputBox
        
//         type="text"
//         value={filter}
//         onChange={evt => {
//           onContactFilter(evt.target.value);
//         }}

//       />
//     </>
//   );
// }

