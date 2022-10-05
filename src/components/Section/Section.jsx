import PropTypes from 'prop-types';
import { SubTitle } from 'components/Section/Section.styled';

export const Section = ({ title, children }) => {
  return (
    <div>
      <SubTitle>{title}</SubTitle>
      {children}
    </div>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
};
