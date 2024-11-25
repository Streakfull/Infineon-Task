import { Model } from "mongoose";
import { ILooseObject } from "../types";

const paginate = async (
  model: Model<any>,
  filterQuery: ILooseObject,
  paginationQuery: ILooseObject,
  sortQuery: ILooseObject = { createdAt: -1 }
) => {
  const {
    page = 1,
    per_page = 10,
    query,
    show_all,
    ...requestFilterQuery
  } = paginationQuery;
  //const searchQuery = query ? generateSearchQuery(model, query) : {};

  const combinedQuery = {
    //...searchQuery,
    ...requestFilterQuery,
    ...filterQuery,
  };
  const totalEntries = await model.countDocuments(combinedQuery);
  const parsedPage = parseInt(page);
  const parsedPerPage = parseInt(per_page);

  const data = await model
    .find(combinedQuery)
    //.select(selectQuery)
    .skip((parsedPage - 1) * parsedPerPage)
    .limit(show_all ? totalEntries : parsedPerPage)
    .sort(sortQuery);
  const totalPages = Math.ceil(totalEntries / parsedPerPage);
  const nextPage = parsedPage >= totalPages ? null : parsedPage + 1;
  const previousPage = parsedPage === 1 ? null : parsedPage - 1;
  return {
    data,
    meta: {
      total_entries: totalEntries,
      total_pages: show_all ? 1 : totalPages,
      next_page: show_all ? null : nextPage,
      previous_page: previousPage,
      per_page: show_all ? totalEntries : parsedPerPage,
      current_page: parsedPage,
    },
  };
};

export default paginate;
