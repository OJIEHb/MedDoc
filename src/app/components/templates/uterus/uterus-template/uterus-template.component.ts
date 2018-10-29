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

  onCheckboxChange1() {
    this.templateData.miometrii = '';
    this.templateData.miometrii += this.templateData.miometriiDetails1 ? 'Ехоструктура не змінена, однорідна. ' : '';
    this.templateData.miometrii += this.templateData.miometriiDetails2 ? 'По передній стінці тіла матки (в ділянці переходу тіла в шийку) локується післяопераційний рубець товщиною до {miometriiDetails14} мм.  ' : '';
    this.templateData.miometrii += this.templateData.miometriiDetails3 ? 'По передній стінці візуалізується інтрамурально вузел {miometriiDetails15} мм. ' : '';
    this.templateData.miometrii += this.templateData.miometriiDetails4 ? 'По задній стінці візуалізується інтрамурально вузел {miometriiDetails16} мм. ' : '';
    this.templateData.miometrii += this.templateData.miometriiDetails5 ? 'В ділянці дна візуалізується інтрамурально вузел {miometriiDetails17} мм. ' : '';
    this.templateData.miometrii += this.templateData.miometriiDetails6 ? 'По обом стінкам візуалізуються інтрамуральні множинні вузли d від {miometriiDetails18} мм до {miometriiDetails19} мм. ' : '';
    this.templateData.miometrii += this.templateData.miometriiDetails7 ? 'Субсерозно по передній стінці візуалізується вузел {miometriiDetails20} мм. ' : '';
    this.templateData.miometrii += this.templateData.miometriiDetails8 ? 'Субсерозно по задній стінці візуалізується вузел {miometriiDetails21} мм. ' : '';
    this.templateData.miometrii += this.templateData.miometriiDetails9 ? 'Субмукозно візуалізується вузел Субсерозно по передній стінці візуалізується вузел {miometriiDetails22} мм. ' : '';
    this.templateData.miometrii += this.templateData.miometriiDetails10 ? 'В вузлі локуються множинні кальцинати. ' : '';
    this.templateData.miometrii += this.templateData.miometriiDetails11 ? 'Візуалізуються гіпо-, гіперділянки d до 2-6 мм за типом аденоміозу. ' : '';
    this.templateData.miometrii += this.templateData.miometriiDetails12 ? 'Ехоструктура міометрія неоднорідна, з дифузними змінами у вигляді дрібних гіпохогенних включень, розташованих до другого шару міометрія з потовщенням {miometriiDetails23}. ' : '';
    this.templateData.miometrii += this.templateData.miometriiDetails13 ? 'Візуалізуються розширені судини d до {miometriiDetails24} мм. ' : '';
  }

  onCheckboxChange2() {
    this.templateData.endometrii = '';
    this.templateData.endometrii += this.templateData.endometriiDetails1 ? 'Відповідає фазі менструального циклу, однорідний. ' : '';
    this.templateData.endometrii += this.templateData.endometriiDetails2 ? 'Потовщений, з гіпо-, гіперділянками за типом заложистої гіперплазії. ' : '';
    this.templateData.endometrii += this.templateData.endometriiDetails3 ? 'Гіпоглазірований. ' : '';
    this.templateData.endometrii += this.templateData.endometriiDetails4 ? 'Не простежується. ' : '';
    this.templateData.endometrii += this.templateData.endometriiDetails5 ? 'Лоцируються гіпоехогенні поліпозні структури розміром {endometriiDetails7} мм. ' : '';
    this.templateData.endometrii += this.templateData.endometriiDetails6 ? 'Лоцируються гіперехогенні поліпозні структури розміром {endometriiDetails8} мм. ' : '';
}
onCheckboxChange3() {
  this.templateData.uterusCavity = '';
  this.templateData.uterusCavity += this.templateData.uterusDetails1 ? 'не розширена, не деформована. ' : '';
  this.templateData.uterusCavity += this.templateData.uterusDetails2 ? 'розширена до {uterusDetails11} мм, не містить рідину. ' : '';
  this.templateData.uterusCavity += this.templateData.uterusDetails3 ? 'розширена до {uterusDetails12} мм, містить рідину. ' : '';
  this.templateData.uterusCavity += this.templateData.uterusDetails4 ? 'деформована за рахунок субмукозного вузла. ' : '';
  this.templateData.uterusCavity += this.templateData.uterusDetails5 ? 'з нерівним, бугристим, фастончатим контуром. ' : '';
  this.templateData.uterusCavity += this.templateData.uterusDetails6 ? 'містить ВМС, що займає всю порожнину. ' : '';
  this.templateData.uterusCavity += this.templateData.uterusDetails7 ? 'містить ВМС, що недоходить до дна матки на {uterusDetails13} мм. ' : '';
  this.templateData.uterusCavity += this.templateData.uterusDetails8 ? 'в порожнині містить фрагменти ВМС' : '';
  this.templateData.uterusCavity += this.templateData.uterusDetails9 ? 'розширена до {uterusDetails14} мм, вміст порожнини гідрофільний з лінійними гіперехогенними включеннями. ' : '';
  this.templateData.uterusCavity += this.templateData.uterusDetails10 ? 'розширена до {uterusDetails15} мм, вміст порожнини гідрофільний з лінійними гіперехогенними включеннями та щільними гіперструктурами. ' : '';
}

}