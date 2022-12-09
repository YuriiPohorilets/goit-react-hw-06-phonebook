import PropTypes from 'prop-types';
import { Wrapper, Label, Input } from './Filter.styled';

export const Filter = ({ value, onFilter }) => {
  return (
    <Wrapper>
      <Label htmlFor="filter">Find contacts by name</Label>
      <Input name="filter" type="text" id="filter" value={value} onChange={onFilter} />
    </Wrapper>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};
