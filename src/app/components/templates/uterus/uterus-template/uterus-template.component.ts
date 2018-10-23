import { Component } from '@angular/core';
import { UterusTemplate } from '../../../../models/uterus-template';
import { TemplateService } from '../../../../services/template.service';
import { formatDate } from '@angular/common'

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
    this.templateData.currentDate = formatDate(this.templateData.currentDate1 || new Date(), "dd.MM.yyyy", 'en-US');
    this.templateService.getDocumentFromTemplate('./assets/templates/uterus-template.docx', this.templateData);
  }

  printTemplate() {
    this.templateData.currentDate = formatDate(this.templateData.currentDate1 || new Date(), "dd.MM.yyyy", 'en-US');
    this.templateService.printDocumentFromTemplate('./assets/templates/uterus-template.docx', this.templateData);
  }

  clear() {
    this.templateData = new UterusTemplate();
    this.selectedItems = <any>{};
  }

  onSelectChange(e) {
    this.selectedItems[e.target.id] = e.target.selectedIndex;
  }

  onCheckboxChange() {
    this.templateData.eggDetails = '';
    this.templateData.eggDetails += this.templateData.eggDetails1 ? 'В порожнині матки визначається плідне яйце d {eggDetails5} мм, не деформоване, форма не змінена, візуалізується плід КТР {eggDetails6} мм; серцебиття визначається, рух визначається; хоріон розташован по {eggDetails7}. ' : '';
    this.templateData.eggDetails += this.templateData.eggDetails2 ? 'В порожнині матки визначається плідне яйце d1 {eggDetails8} мм, деформоване, форма змінена, візуалізується плід КТР {eggDetails9} мм; серцебиття не визначається, рух не визначається; хоріон розташован по {eggDetails10}. ' : '';
    this.templateData.eggDetails += this.templateData.eggDetails3 ? 'В порожнині матки визначається друге плідне яйце d2 {eggDetails11} мм, {eggDetails12} деформоване, форма {eggDetails13} змінена, візуалізується плід КТР {eggDetails14} мм; серцебиття {eggDetails15} визначається, рух {eggDetails16} визначається; хоріон розташован по {eggDetails17}. ' : '';
    this.templateData.eggDetails += this.templateData.eggDetails4 ? 'В порожнині матки визначається плідне яйце d {eggDetails18} мм, {eggDetails19} деформоване, форма {eggDetails20} змінена, хоріон розташован по {eggDetails21}. {eggDetails22}' : '';
  }

}
