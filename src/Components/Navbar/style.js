import styled from 'styled-components';

export const NavBarContainer = styled.nav`
  background: linear-gradient(150deg, #53f 15%, #05d5ff);

  ul{
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 0 2.1rem;
  }
`;
export const DropdownOptionStyle = styled.div`
  .dropdown-option{

    padding: 2rem 2.5rem;
    outline: 0;
    color: white;
    font-size: 1.8rem;
    transition: opacity 0.2s;

    &:hover, &:focus{
      opacity: 0.55;
    }
  }
`