/**
 * Created by yidi.zhao on 2017/12/4.
 */
import React from 'react'
const Reverse = ({countState, reverse}) => (
    <p>
        我是另外一个store, 我的值是: {countState}
        <input id="text"/>
        <button onClick={reverse}> reverse </button>
    </p>
);
export default Reverse;