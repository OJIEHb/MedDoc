import { Component } from '@angular/core';
import { UterusTemplate } from '../../../../models/uterus-template';
import { TemplateService } from '../../../../services/template.service';
import { formatDate } from '@angular/common'

@Component({
  selector: 'uterus-complete-template',
  templateUrl: './uterus-complete-template.component.html',
  styleUrls: ['./uterus-complete-template.component.scss']
})
export class UterusCompleteTemplateComponent {

  templateData: UterusTemplate = new UterusTemplate();

  constructor(private templateService: TemplateService) { }

  getTemplate() {
    this.templateData.currentDate = formatDate(this.templateData.currentDate1 || new Date(), "dd.MM.yyyy", 'en-US');
    this.templateService.getDocumentFromTemplate('./assets/templates/uterus-complete-template.docx', this.templateData);
  }

  printTemplate() {
    this.templateData.currentDate = formatDate(this.templateData.currentDate1 || new Date(), "dd.MM.yyyy", 'en-US');
    this.templateService.printDocumentFromTemplate('./assets/templates/uterus-complete-template.docx', this.templateData);
  }

  clear() {
    this.templateData = new UterusTemplate();
  }
}
