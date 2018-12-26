export const DATE_SET = 'date-set';
export const STR_GET = 'str-get';

export function setDate(date){
    return {
        type: DATE_SET,
        date
    };
}

export function getStr(){
    return {
        type: STR_GET
    };
}
