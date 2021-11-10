import styled from 'styled-components';

const PaginateContainer = styled.div`
  padding-top: 15px;
  border-top: 1px solid #c8ced3;

  & .react-pagination {
    display: flex;
    list-style-type: none;

    li {
      a {
        outline: 0;
        border-radius: 2px;
        min-width: 35px;
        height: 35px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        text-decoration: none;
      }

      &.active {
        a {
          background-color: #3fae29;
          color: #fff;
        }
      }
    }
  }
`;

export default PaginateContainer;
