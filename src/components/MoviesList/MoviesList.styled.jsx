import styled from 'styled-components';

const Title = styled.h2`
  margin-left: 15px;
  font-size: 24px;
  font-weight: 700;
`;

const List = styled.ul`
padding-left: 10px;
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
width: 190px;
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
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  //cursor: zoom-in;
  }
`;

const MovieTitle =styled.h2`
display: inline;
overflow-wrap: break-word;
font-size: 18px;
font-weight: 400;
`;

const WrapperSelectTrend =styled.div`
display:  flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
//padding-right: 15px;
`;

const SelectCustom = styled.select`
margin-right: 30px;
width: 70px;
height: 30px;
background-color: #032541;
color:  #ffc107;
border: none;
border-radius: 4px;
`;

export { Title, List, MovieItem, MovieTitle, ImgItem, WrapperSelectTrend, SelectCustom };
