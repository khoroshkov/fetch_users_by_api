import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import queryString from 'query-string';

import ReactPaginate from 'react-paginate';
import Loader from '../../Common/Loader';

import types from '../../../redux/types';
import { getUsers } from '../../../redux/users/selectors';
import { pageCount, paginate } from '../../../services/helpers';
import routes from '../../../services/routes';

const UsersList = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const users = useSelector(getUsers);

  const { page } = queryString.parse(history.location.search);
  const paginateUsers = paginate(page || 1, users?.data);

  const handleDelete = (e) => {
    dispatch({ type: types.DELETE_USER_START, payload: e.target.dataset.id });
  };

  const handlePageChange = ({ selected }) => {
    history.push(`${routes.root.path}?page=${selected + 1}`);
  };

  return (
    <Loader loading={users?.loading} isEmpty={!paginateUsers.length}>
      <ul>
        {paginateUsers.map(({ id, name, surname, desc }) => (
          <li key={id} className="card">
          <div className="card-body">
            <p className="h5 text-uppercase font-weight-light">User name: <span className="h4">{name}</span></p>
            <p className="h5 text-uppercase font-weight-light">User surname: <span className="h4">{surname}</span></p>
            
            <span className="font-weight-light">Description:</span> <p className="font-weight-normal">{desc}</p>
            </div>
            <div className="btn-cont">
            <button type='button' data-id={id} onClick={handleDelete} className="btn btn-danger w-40 p-3">
              Delete
            </button>
            <Link to={`${routes.editUser.path}${id}`} className="btn btn-warning w-40 p-3">Edit</Link>
            </div>
          </li>
        ))}
      </ul>

      <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        pageCount={pageCount(users?.data)}
        marginPagesDisplayed={1}
        pageRangeDisplayed={1}
        onPageChange={handlePageChange}
        forcePage={+(page || 1) - 1}
        containerClassName={'pagination'}
        // subContainerClassName={'pages pagination'}
        // activeClassName={'active'}
      />
    </Loader>
  );
};

export default UsersList;
