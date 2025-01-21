import JSReact from '@jspreadsheet-ce/react';

export const  Spreadsheet = () => JSReact.Spreadsheet;
export const  Worksheet = () => JSReact.Worksheet;
export const JSpreadsheet = {
    Spreadsheet: JSReact.Spreadsheet,
    Worksheet: JSReact.Worksheet
}

const JSpreadsheetReact = {
    Spreadsheet: JSReact.Spreadsheet,
    Worksheet: JSReact.Worksheet,
    JSpreadsheet,
}

export default JSpreadsheetReact;
