import React from 'react';
import { Worksheet as WS, Spreadsheet as SP } from '@jspreadsheet-ce/react';

export const Worksheet = React.forwardRef((props, ref)=> <WS {...props} ref={ref} />);

export const Spreadsheet = React.forwardRef((props, ref)=> <SP {...props} ref={ref} />);
