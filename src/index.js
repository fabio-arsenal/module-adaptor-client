import React from 'react';
import { Worksheet as WS, Spreadsheet as SP } from '@jspreadsheet-ce/react';

export const Worksheet = (props) => {
    return <WS {...props} />;
}

export const Spreadsheet = (props) => {
    return <SP {...props} />;
}
