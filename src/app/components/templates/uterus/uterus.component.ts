import { Component, OnInit } from '@angular/core';
import { TemplateService } from '../../../services/template.service';
import { UterusTemplate } from '../../../models/uterus-template';

@Component({
  selector: 'uterus',
  templateUrl: './uterus.component.html',
  styleUrls: ['./uterus.component.scss']
})
export class UterusComponent implements OnInit {

  templateData: UterusTemplate = new UterusTemplate();

  constructor(private templateService: TemplateService) { }

  ngOnInit() {
  }

  getTemplate() {
    this.templateService.getDocumentFromTemplate('../../assets/templates/template.docx', this.templateData)
  }

}
