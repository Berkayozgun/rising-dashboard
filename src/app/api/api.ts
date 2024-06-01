export async function fetchTableData(token: string) {
  const response = await fetch("https://recruitment-api.vercel.app/get-table", {
    method: "GET",
    headers: {
      Authorization: `${token}`,
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  if (response.ok) {
    data.data.forEach((item: any) => {
      item.date = formatDate(item.date);
    });
    return data;
  } else {
    console.error(data.message);
    return null;
  }
}

export async function fetchInfoData(token: string) {
  const response = await fetch("https://recruitment-api.vercel.app/get-info", {
    method: "GET",
    headers: {
      Authorization: `${token}`,
      "Content-Type": "application/json",
    },
  });

  const data = await response.json();
  if (response.ok) {
    return data;
  } else {
    console.error(data.message);
    return null;
  }
}

function formatDate(dateTimeString) {
  const date = new Date(dateTimeString);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
}
