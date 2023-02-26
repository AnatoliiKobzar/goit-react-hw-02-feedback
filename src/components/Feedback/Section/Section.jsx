import PropTypes from 'prop-types';
import React from 'react';
import { Author, SectionWrap } from './Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionWrap>
      <h1>{title}</h1>
      {children}
      <Author>Created by Anatolii Kobzar, 2023</Author>
    </SectionWrap>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
