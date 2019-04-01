export const getHttpQueryParams = (params: { ['key']?: ['value'] } = {}) => {
    if(params !== {}) {
        let queryParams = '';

        Object.keys(params).forEach((key, i) => {
            queryParams = queryParams + `${i === 0 ? '?' : '&'}${key}=${params[key]}`;
        });

        return queryParams;
    } else {
        return '';
    }
}