import PropTypes from 'prop-types';
import { TitleHero } from 'components/Title/Title.styled';

export const Title = ({ title }) => {
  return <TitleHero>{title}</TitleHero>;
};

Title.propTopes = {
  title: PropTypes.string.isRequired,
};
