declare function findLastFiveItems(username: string): any;
declare function findItemsByFromToDate({ from, to, username, }: {
    from: string;
    to?: string;
    username: string;
}): {
    where: {
        createdAt: {
            gt: string;
            lt: string;
        };
        User: {
            username: string;
        };
    };
    include: {
        products: boolean;
    };
};
export { findLastFiveItems, findItemsByFromToDate };
