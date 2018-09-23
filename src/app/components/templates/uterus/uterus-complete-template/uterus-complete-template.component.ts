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
    this.templateData.currentDate = formatDate(new Date(), "dd.MM.yyyy", 'en-US');
    this.templateService.getDocumentFromTemplate('./assets/templates/uterus-complete-template.docx', this.templateData);
    this.templateData = new UterusTemplate();
  }
}
