/**
 * Created by yidi.zhao on 2017/12/4.
 */
import * as Types from "../constants/reverse";

export const reverse = (value) => ({
    type: Types.REVERSE,
    value: value
});

export const getInput = (value) => ({
    type: Types.GETINPUT,
    value: value
});

export const setData = (value) => ({
    type: Types.SETDATA,
    value: value
});

export const fetchXHR = () => (dispatch, getState) => {
    let xml = new XMLHttpRequest();
    xml.open("GET", '/api/openAjax', true);
    xml.send(null);
    xml.onreadystatechange = ()=>{
        if (xml.readyState===4)
        {
            if (xml.status===200)
            {
                dispatch({
                    type: Types.SETDATA,
                    value: xml.response
                });
            }
        }
    };
};
