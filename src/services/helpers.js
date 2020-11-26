const PER_PAGE = 5;

export const pageCount = (users) => {
  if (!users?.length) return 1;
  return users?.length / PER_PAGE;
};

export const paginate = (page, users) => {
  if (!users?.length) return [];
  if (users?.length < 5) return users;

  return users.slice((page - 1) * PER_PAGE, (page - 1) * PER_PAGE + PER_PAGE);
};
