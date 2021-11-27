function findLastFiveItems(username: string): any {
  return {
    take: 5,
    where: {
      User: {
        username,
      },
    },
    orderBy: {
      createdAt: "desc",
    },
  };
}

function findItemsByFromToDate({
  from,
  to,
  username,
}: {
  from: string;
  to?: string;
  username: string;
}) {
  return {
    where: {
      createdAt: {
        gt: `${from}T00:00:00.001Z`,
        lt: `${to ?? from}T23:59:59.591Z`,
      },
      User: {
        username,
      },
    },
    include: {
      products: true,
    },
  };
}

export { findLastFiveItems, findItemsByFromToDate };
