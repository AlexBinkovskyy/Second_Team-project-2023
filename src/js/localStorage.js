export let filterParams = {
    keyword: null,
    category: null,
    page: 1,
    limit: 6,
  };

  localStorage.setItem(filterParams, JSON.stringify(filterParams));