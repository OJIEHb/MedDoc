import { Injectable } from '@angular/core';
import docxtemplater from 'docxtemplater';
import * as JSZip from 'jszip';
import * as JSZipUtils from 'jszip-utils';
import { saveAs } from 'file-saver/FileSaver';
import { UterusTemplate } from '../models/uterus-template';
import * as mammoth from 'mammoth';
import { ElectronService } from 'ngx-electron';

@Injectable()
export class TemplateService {

  constructor(private electronService: ElectronService) {
    this.electronService.ipcRenderer.on('asynchronous-reply', (event, arg) => {
    });
  }

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

  public printDocumentFromTemplate(url: string, templateData: UterusTemplate) {
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
        type: 'arraybuffer'
      });
      let css = `
    <style>
      p {
        margin-top: 5px;
        margin-bottom: 5px;
      }

      h1 {
        font-size: 12pt;
        font-family: Georgia, Times, Serif;
        margin-top: 5px;
        margin-bottom: 5px;
      }

      body h1:first-of-type {
        text-align: center;
      }

      h2 {
        font-size: 11pt;
        font-family: times, serif;
        margin-top: 5px;
        margin-bottom: 5px;
      }

      body h2:first-of-type {
        text-align: center;
      }

      h3 {
        font-size: 12pt;
        font-family: times, serif;
        font-weight: 100;
        margin-top: 5px;
        margin-bottom: 5px;
      }

      h4 {
        font-size: 11pt;
        font-family: times, serif;
        font-weight: 100;
        margin-top: 5px;
        margin-bottom: 5px;
      }

      body {
        line-height: 1;
        font-size: 10pt;
        font-family: times, serif;
      }

      p strong {
        font-size: 12pt;
        font-family:Monotype Corsiva, Times, Serif;
      }

      p em {
        font-size: 12pt;
        font-family:Monotype Corsiva, Times, Serif;
      }

      body + p {
        font-weight: 900;
      }

      table tr td p {
        font-size: 9pt;
        margin-top: 0;
        margin-bottom: 0;
      }

      table {
        width: 100%;
      }
    </style>
    `;
      mammoth.convertToHtml({ arrayBuffer: data3 })
        .then(result => {
          console.log(result.value)
          this.electronService.ipcRenderer.send("printPDF", { data: result.value, styles: css });
        })
        .done();
    });
  }
}
