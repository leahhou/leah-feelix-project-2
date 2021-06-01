import React from "react";
import contactsData from "../../data";
import ContactsMasterView from "../ContactsMasterView/ContactsMasterView";

const ContactsManager = () => {
  const [filter, setFilter] = React.useState("");
  const handleFilterChange = filterInput => {
    setFilter(filterInput);
  };
  const filterContacts = (filterInput, contacts) => {
    const filtedContacts =
      filterInput !== ""
        ? contacts.filter(item =>
            item.firstName.toLowerCase().includes(filterInput.toLowerCase())
          )
        : contacts;
    return filtedContacts;
  };

  const tableData = contactsData;
  const [data, setData] = React.useState(tableData);
  const [activeSort, setActiveSort] = React.useState({});
  const [sort] = React.useState({
    firstName: (a, b) => stringCompare(a.firstName, b.firstName),
    lastName: (a, b) => stringCompare(a.lastName, b.lastName)
  });

  const addNewContact = newContact => {
    setData([...data, newContact]);
  };

  const stringCompare = (a, b) => {
    const nameA = a.toUpperCase();
    const nameB = b.toUpperCase();
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }
    return 0;
  };

  const applySort = (data, sortFn, isDescending) => {
    const result = data.slice(); //copy the data into new variable

    result.sort(sortFn);

    //default sort order is ascending if no function is passed as param
    //sortFn: give a specific sorting logic
    return isDescending ? result.reverse() : result;
  };

  const onSort = column => {
    //activeSort is the shape of arrow icon shown next to column can be sorted.
    const nextSortOrder = !activeSort.descending; //I supposed descending is a bool, why can't I name it isDescending!!!
    setActiveSort({ column, descending: nextSortOrder }); //column is also not a good name after reading the Docs
    //sort the tableData by certain column given the shape of arrow icon shown next to the column name
    setData(applySort(data, sort[column], nextSortOrder));
  };
  return (
    <ContactsMasterView
      handleFilterChange={handleFilterChange}
      filter={filter}
      addNewContact={addNewContact}
      sort={sort}
      activeSort={activeSort}
      onSort={onSort}
      contacts={data}
      filterContacts={filterContacts}
    ></ContactsMasterView>
  );
};

export default ContactsManager;
