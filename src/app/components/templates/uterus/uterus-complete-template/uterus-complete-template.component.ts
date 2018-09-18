import { Component } from '@angular/core';
import { UterusTemplate } from '../../../../models/uterus-template';
import { TemplateService } from '../../../../services/template.service';

@Component({
  selector: 'uterus-complete-template',
  templateUrl: './uterus-complete-template.component.html',
  styleUrls: ['./uterus-complete-template.component.scss']
})
export class UterusCompleteTemplateComponent {

  templateData: UterusTemplate = new UterusTemplate();

  constructor(private templateService: TemplateService) { }

  getTemplate() {
    this.templateService.getDocumentFromTemplate('./assets/templates/template.docx', this.templateData)
  }
}
