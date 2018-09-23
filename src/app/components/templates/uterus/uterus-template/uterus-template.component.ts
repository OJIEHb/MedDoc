import { Component } from '@angular/core';
import { UterusTemplate } from '../../../../models/uterus-template';
import { TemplateService } from '../../../../services/template.service';
import { formatDate } from '@angular/common'
import ua from '@angular/common/locales/ru-UA';

@Component({
  selector: 'uterus-template',
  templateUrl: './uterus-template.component.html',
  styleUrls: ['./uterus-template.component.scss']
})
export class UterusTemplateComponent {

  templateData: UterusTemplate = new UterusTemplate();
  selectedItems = <any>{};

  constructor(private templateService: TemplateService) { }

  getTemplate() {
    this.templateData.currentDate = formatDate(new Date(), "dd.MM.yyyy", 'en-US');
    this.templateService.getDocumentFromTemplate('./assets/templates/template.docx', this.templateData);
    this.templateData = new UterusTemplate();
    this.selectedItems = <any>{};
  }

  onSelectChange(e) {
    this.selectedItems[e.target.id] = e.target.selectedIndex;
  }

}
