import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Chevron } from 'components/styles';

export const NavLinks = styled.div`
  margin-top: 50px;
  width: 100%;
  & > .next-link { float: right; }
`;

const Container = styled(Link)`
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
  width: fit-content;
  color: #caac2a;
  font-size: 22px;
  font-weight: 700;
  transition: all 0.2s ease;
  &:focus { outline: none; }
  &::-moz-focus-inner { outline: none; }

  &:hover {
    color: #e3c22f;
    transform: translateY(-5px);
  }
`;

export const NextIcon = styled(Chevron)`
  margin-left: 16px;
  transition: all 0.3s ease;
  transform: rotate(-45deg);
`;

export const NextLink = ({ children, ...props }) => (
  <Container className="next-link" {...props}>
    { children }
    <NextIcon />
  </Container>
);

NextLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

NextLink.defaultProps = {
  children: null,
};

export const PrevIcon = styled(Chevron)`
  margin-right: 16px;
  transition: all 0.3s ease;
  transform: rotate(135deg);
`;

export const PrevLink = ({ children, ...props }) => (
  <Container className="prev-link" {...props}>
    <PrevIcon />
    {children}
  </Container>
);

PrevLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.arrayOf(PropTypes.element),
  ]),
};

PrevLink.defaultProps = {
  children: null,
};
