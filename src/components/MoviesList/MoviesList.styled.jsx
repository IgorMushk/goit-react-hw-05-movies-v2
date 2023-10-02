import styled from 'styled-components';

const Title = styled.h2`
  margin-left: 15px;
  font-size: 24px;
  font-weight: 700;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  /* flex-direction: column; */
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 16px;

  & a:hover {
    color: #ff6d00;
  }
`;

const MovieItem =styled.li`
width: 200px;
text-align: center;
:hover {
  font-weight: 600;
  }
`;

const ImgItem = styled.img`
  width: 100%;
  transition: transform 300ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover {
  transform: scale(1.02);
  cursor: zoom-in;
  }

`;


const MovieTitle =styled.h2`
display: inline;
overflow-wrap: break-word;
font-size: 18px;
font-weight: 400;
`

export { Title, List, MovieItem, MovieTitle, ImgItem };
