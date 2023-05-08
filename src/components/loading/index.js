import React from 'react';
import { Spin } from 'antd';
export default ({ isLoading, error }) => {
    // Handle the loading state
    if (isLoading) {
        return <Spin />;
    }
    // Handle the error state
    else if (error) {
        return <div>对不起，网页出了点小差，刷新下试试看呢？</div>;
    }
    else {
        return null;
    }
};
