import { Injectable } from '@angular/core';
import docxtemplater from 'docxtemplater';
import * as JSZip from 'jszip';
import * as JSZipUtils from 'jszip-utils';
import { saveAs } from 'file-saver/FileSaver';
import { UterusTemplate } from '../models/uterus-template';

@Injectable()
export class TemplateService {

  public getDocumentFromTemplate(url: string, templateData: UterusTemplate) {
    JSZipUtils.getBinaryContent(url, (error, content) => {
      const zip1 = new JSZip(content);
      const doc1 = new docxtemplater().loadZip(zip1);
      doc1.setData(templateData);
      doc1.render();
      const data1 = doc1.getZip().generate({
        type: 'arraybuffer'
      });
      const zip2 = new JSZip(data1);
      const doc2 = new docxtemplater().loadZip(zip2);
      doc2.setData(templateData);
      doc2.render();
      const data2 = doc2.getZip().generate({
        type: 'arraybuffer'
      });
      const zip3 = new JSZip(data2);
      const doc3 = new docxtemplater().loadZip(zip3);
      doc3.setData(templateData);
      doc3.render();
      const data3 = doc3.getZip().generate({
        type: 'blob',
        mimeType: 'application/msword'
      });
      saveAs(data3, "УЗІ органів малого тазу " + (templateData.fullName || "") + " " + (templateData.currentDate || "") + ".docx");
    });
  }
}
