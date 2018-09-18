import { Component } from '@angular/core';
import { UterusTemplate } from '../../../../models/uterus-template';
import { TemplateService } from '../../../../services/template.service';

@Component({
  selector: 'uterus-template',
  templateUrl: './uterus-template.component.html',
  styleUrls: ['./uterus-template.component.scss']
})
export class UterusTemplateComponent {

  templateData: UterusTemplate = new UterusTemplate();
  selectedItems = {};

  constructor(private templateService: TemplateService) { }

  getTemplate() {
    this.templateService.getDocumentFromTemplate('./assets/templates/template.docx', this.templateData)
  }

  onSelectChange(e) {
    this.selectedItems[e.target.id] = e.target.selectedIndex;
  }

}
