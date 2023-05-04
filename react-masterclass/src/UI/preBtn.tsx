import styled from 'styled-components';

const PreBtn = styled.button`
  display: inline-block;
  /* justify-content: space-between; */
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 10px;
  border-radius: 5px;
  margin-bottom: 10px;
  border: none;

  span:first-child {
    font-size: 12px;
    font-weight: 400;
    text-transform: uppercase;
    color: ${(props) => props.theme.textColor};
  }
`;

export default PreBtn;
