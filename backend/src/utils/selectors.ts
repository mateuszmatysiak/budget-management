import { padDate } from "./date";

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
  const gt = padDate(from);
  const lt = to ? padDate(to) : gt;
  return {
    where: {
      createdAt: {
        gt: `${gt}T00:00:00.001Z`,
        lt: `${lt}T23:59:59.591Z`,
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
