/*
 * @Description: 
 * @Version: 
 * @Author: kangjinrui
 * @Date: 2022-04-07 14:37:39
 * @LastEditors: kangjinrui
 * @LastEditTime: 2022-04-12 13:57:33
 */
import request from '../utils/request';

export const fetchData = query => {
    return request({
        url: './table.json',
        method: 'get',
        params: query
    });
};
