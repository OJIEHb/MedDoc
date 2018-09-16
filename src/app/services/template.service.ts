import { Injectable } from '@angular/core';
import docxtemplater from 'docxtemplater';
import * as JSZip from 'jszip';
import * as JSZipUtils from 'jszip-utils';
import { saveAs } from 'file-saver/FileSaver';
import { UterusTemplate } from '../models/uterus-template';

@Injectable()
export class TemplateService {

  public getDocumentFromTemplate(url: string, templateData: UterusTemplate) {
    console.log(templateData);
    JSZipUtils.getBinaryContent(url, (error, content)=>{
      const zip = new JSZip(content);
      const doc = new docxtemplater().loadZip(zip);
      doc.setData(templateData);
      doc.render();
      const data = doc.getZip().generate({
        type: 'blob',
        mimeType: 'application/msword'
      });
      saveAs(data, "Document.docx")
    });
  }
}
