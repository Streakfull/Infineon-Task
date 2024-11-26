const formatDate = (dateString: string) => {
  const date = new Date(dateString); // Create a Date object from the date string

  const day = String(date.getDate()).padStart(2, "0"); // Get day and add leading zero if needed
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Get month and add leading zero if needed
  const year = date.getFullYear(); // Get the full year

  return `${day}/${month}/${year}`; // Format as DD/MM/YYYY
};

export { formatDate };
