import { Injectable } from '@angular/core';
import * as file from 'file-saver';
import * as xlsx from 'xlsx';
import { constants } from '../app/shared/constants';

@Injectable({
  providedIn: 'root'
})
export class SaveToSheetService {
  constructor() {}

  exportDataToExcel(json: any[], fileName: string): void {
    /* istanbul ignore next */
    const worksheet: xlsx.WorkSheet = xlsx.utils.json_to_sheet(json);
    /* istanbul ignore next */
    const workbook: xlsx.WorkBook = {
      Sheets: { data: worksheet },
      SheetNames: ['data']
    };
    /* istanbul ignore next */
    const excelBuffer: any = xlsx.write(workbook, {
      bookType: 'xlsx',
      type: 'array'
    });
    /* istanbul ignore next */
    this._saveAsExcel(excelBuffer, fileName);
  }
  /* istanbul ignore next */
  private _saveAsExcel(buffer: any, fileName: string): void {
    const timeStamp = new Date().valueOf().toString();
    const data: Blob = new Blob([buffer], { type: constants.EXCEL_TYPE});
    file.saveAs(data, fileName.concat('_', timeStamp));
  }
}
