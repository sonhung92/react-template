import React, { useState, useCallback, useEffect, memo, useMemo, useRef } from 'react';
import { CellMeasurer, CellMeasurerCache } from 'react-virtualized';
import { Input, Icon } from 'semantic-ui-react';
import { useTranslation } from 'react-i18next';
import MyTable from 'components/Table';
import { areEqualLocationKey, usePrevious } from 'common/hooks';
import { getUser, getUsers } from 'api/user';
import Button from 'components/Button';

const limit = 5;

const cache = new CellMeasurerCache({
  fixedWidth: true,
  minHeight: 70,
});

export function setMockUsers() {
  const res = [];
  for (let i = 0; i < 1000; i++) {
    res.push({
      id: `KO${i + 1}`,
      firstName: `Koo ${i + 1}`,
      lastName: 'Test',
      email: `kootest${i + 1}@mailiantor.com`,
    });
  }
  return res;
}

const UserTable = () => {
  const { t } = useTranslation();
  const [currentPage, setCurrentPage] = useState(1);
  const [keyword, setKeyword] = useState('');
  const prevKeyword = usePrevious(keyword);
  const [users, setUsers] = useState([]);
  const totalUsers = useRef(users);

  function renderData(data) {
    return <div>{data}</div>;
  }

  function renderId({ dataKey, parent, rowIndex, rowData }) {
    return (
      <CellMeasurer cache={cache} columnIndex={0} key={dataKey} parent={parent} rowIndex={rowIndex}>
        <Button as="a" onClick={() => getUser(rowData.id)} className="pointer">
          {rowData.id}
        </Button>
      </CellMeasurer>
    );
  }

  const columns = [
    {
      label: 'Id',
      dataKey: 'Id',
      width: 300,
      cellRenderer: renderId,
    },
    {
      disableSort: true,
      label: t('table.firstName'),
      dataKey: 'firstName',
      width: 150,
      flexGrow: 1,
      cellRenderer: ({ rowData: { firstName } }) => renderData(firstName),
    },
    {
      disableSort: true,
      label: t('table.lastName'),
      dataKey: 'lastName',
      width: 150,
      flexGrow: 1,
      cellRenderer: ({ rowData: { lastName } }) => renderData(lastName),
    },
    {
      disableSort: true,
      label: 'Email',
      dataKey: 'email',
      width: 200,
      flexGrow: 1,
      cellRenderer: ({ rowData: { email } }) => renderData(email),
    },
    {
      disableSort: true,
      label: 'DOB',
      dataKey: 'dob',
      width: 200,
      flexGrow: 1,
      cellRenderer: ({ rowData: { birthday } }) => renderData(birthday),
    },
  ];

  const lastData = currentPage * limit;
  const rowRender = useMemo(() => users.slice(lastData - 5, lastData), [lastData, users]);

  const onPageChange = useCallback(({ selected }) => {
    setCurrentPage(selected + 1); // To be update to call API
  }, []);

  const onSetKeyword = (event) => {
    const { value } = event.target;
    setKeyword(value);
  };

  const fetchGetUsers = useCallback(async () => {
    const res = await getUsers();
    totalUsers.current = res;
    setUsers(res);
  }, []);

  const onSearchUser = () => {
    if (prevKeyword === keyword) {
      return;
    }

    if (!keyword) {
      setUsers(totalUsers.current);
      return;
    }

    setCurrentPage(1);
    const res = users.filter((user) => user.lastName === keyword);
    setUsers(res);
  };

  useEffect(() => {
    fetchGetUsers();
  }, [fetchGetUsers]);

  return (
    <>
      <Input
        icon={<Icon name="search" inverted circular link />}
        placeholder="Search..."
        value={keyword}
        className="mb-20"
        onChange={onSetKeyword}
        onKeyUp={(event) => {
          if (event.keyCode === 13) {
            event.preventDefault();
            onSearchUser();
          }
        }}
        onBlur={onSearchUser}
      />
      <MyTable
        data={rowRender}
        totalPage={Math.ceil(users.length / limit)}
        columns={columns}
        onPageChange={onPageChange}
      />
    </>
  );
};

export default memo(UserTable, areEqualLocationKey);
