import { Injectable } from '@angular/core';
import docxtemplater from 'docxtemplater';
import * as JSZip from 'jszip';
import * as JSZipUtils from 'jszip-utils';
import { saveAs } from 'file-saver/FileSaver';
import { UterusTemplate } from '../models/uterus-template';
import { compile } from 'angular-expressions/lib/main.js';

@Injectable()
export class TemplateService {

  public getDocumentFromTemplate(url: string, templateData: UterusTemplate) {
    JSZipUtils.getBinaryContent(url, (error, content) => {
      const zip = new JSZip(content);
      const angularParser = function (tag) {
        return {
          get: tag === '.' ? function (s) { return s; } : function (s) {
            return compile(tag.replace(/(’|“|”)/g, "'"))(s);
          }
        };
      }
      const doc = new docxtemplater().loadZip(zip);
      doc.setOptions({ parser: angularParser });
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
