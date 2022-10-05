import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Label, Input } from 'components/Filter/Filter.styled';

export const Filter = ({ value, changeFilter }) => {
  const searchId = nanoid();

  return (
    <>
      <Label htmlFor={searchId}>Find contacts by name</Label>
      <Input
        id={searchId}
        type="text"
        name="filter"
        value={value}
        placeholder="Search..."
        onChange={changeFilter}
      />
    </>
  );
};

Filter.propTypes = {
  changeFilter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};
