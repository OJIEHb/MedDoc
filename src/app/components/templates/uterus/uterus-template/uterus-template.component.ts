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
  this.templateData.uterusCavity += this.templateData.uterusDetails1 ? 'Не розширена, не деформована. ' : '';
  this.templateData.uterusCavity += this.templateData.uterusDetails2 ? 'Розширена до {uterusDetails11} мм, не містить рідину. ' : '';
  this.templateData.uterusCavity += this.templateData.uterusDetails3 ? 'Розширена до {uterusDetails12} мм, містить рідину. ' : '';
  this.templateData.uterusCavity += this.templateData.uterusDetails4 ? 'Деформована за рахунок субмукозного вузла. ' : '';
  this.templateData.uterusCavity += this.templateData.uterusDetails5 ? 'З нерівним, бугристим, фастончатим контуром. ' : '';
  this.templateData.uterusCavity += this.templateData.uterusDetails6 ? 'Містить ВМС, що займає всю порожнину. ' : '';
  this.templateData.uterusCavity += this.templateData.uterusDetails7 ? 'Містить ВМС, що недоходить до дна матки на {uterusDetails13} мм. ' : '';
  this.templateData.uterusCavity += this.templateData.uterusDetails8 ? 'В порожнині містить фрагменти ВМС' : '';
  this.templateData.uterusCavity += this.templateData.uterusDetails9 ? 'Розширена до {uterusDetails14} мм, вміст порожнини гідрофільний з лінійними гіперехогенними включеннями. ' : '';
  this.templateData.uterusCavity += this.templateData.uterusDetails10 ? 'Розширена до {uterusDetails15} мм, вміст порожнини гідрофільний з лінійними гіперехогенними включеннями та щільними гіперструктурами. ' : '';
}
onCheckboxChange4() {
  this.templateData.cervix = '';
  this.templateData.cervix += this.templateData.cervixDetails1 ? 'Ехоструктура не змінена, однорідна. ' : '';
  this.templateData.cervix += this.templateData.cervixDetails2 ? 'Ехоструктура змінена, не однорідна, з поодинокими ендометріоїдними гетеротопіями d до {cervixDetails8} мм. ' : '';
  this.templateData.cervix += this.templateData.cervixDetails3 ? 'Ехоструктура змінена, не однорідна за рахунок множинних еднометріоїдних гетеротопій d до {cervixDetails9} мм. ' : '';
  this.templateData.cervix += this.templateData.cervixDetails4 ? 'Ехоструктура змінена, не однорідна за рахунок поодиноких анехогенних округлої форми утворень локалізованих в стінці шийки матки d до {cervixDetails10} мм. ' : '';
  this.templateData.cervix += this.templateData.cervixDetails5 ? 'Ехоструктура змінена за рахунок множинних анехогенних утворень локалізованих в стінці шийки матки d до {cervixDetails11} мм. ' : '';
  this.templateData.cervix += this.templateData.cervixDetails6 ? 'Ехоструктура змінена за рахунок анехогенних утворень локалізованих по ходу цервикального каналу d {cervixDetails12} мм, а також візуалізується ДО р. {cervixDetails13} мм змішаної ехогенності та ехоструктури, з нерівним контуром, з зонами неоваскуляризації. ' : '';
  this.templateData.cervix += this.templateData.cervixDetails7 ? 'Візуалізуються анехогенні включення поблизу зовнішнього зіву шийки матки d до {cervixDetails14} мм. ' : '';
}

onCheckboxChange5() {
  this.templateData.cervicalCanal = '';
  this.templateData.cervicalCanal += this.templateData.cervicalDetails1 ? 'Не розширений. ' : '';
  this.templateData.cervicalCanal += this.templateData.cervicalDetails2 ? 'Розширений до {cervicalDetails7} мм. ' : '';
  this.templateData.cervicalCanal += this.templateData.cervicalDetails3 ? 'Розширений до {cervicalDetails8} мм, в просвіті рідина. ' : '';
  this.templateData.cervicalCanal += this.templateData.cervicalDetails4 ? 'Розширений до {cervicalDetails9} мм, з нерівним контуром. ' : '';
  this.templateData.cervicalCanal += this.templateData.cervicalDetails5 ? 'Візуалізується гіпоехогенне овальної форми поліпозне утворення, яке розширює цервікальний канал розм. {cervicalDetails10} мм, розташоване в {cervicalDetails11}. ' : '';
  this.templateData.cervicalCanal += this.templateData.cervicalDetails6 ? 'Візуалізується гіперехогенне овальної форми поліпозне утворення, яке розширює цервікальний канал розм. {cervicalDetails12} мм, розташоване в {cervicalDetails13}. ' : '';
}

onCheckboxChange6() {
  this.templateData.rightStructure = '';
  this.templateData.rightStructure += this.templateData.rightDetails1 ? 'Капсула не потовщена, ехогенність та ехоструктура не змінені. ' : '';
  this.templateData.rightStructure += this.templateData.rightDetails2 ? 'Капсула не потовщена, ехогенність незначно знижена, ехоструктура неоднорідна. ' : '';
  this.templateData.rightStructure += this.templateData.rightDetails3 ? 'Капсула не потовщена, ехогенність знижена, ехоструктура неоднорідна. ' : '';
  this.templateData.rightStructure += this.templateData.rightDetails4 ? 'Капсула не потовщена, помірно гіпоехогенний з множинними ехонегативними включеннями. ' : '';
  this.templateData.rightStructure += this.templateData.rightDetails5 ? 'Капсула не потовщена, помірно гіпоехогенний, з дрібними округлими структурами по контурі. ' : '';
  this.templateData.rightStructure += this.templateData.rightDetails6 ? 'Візуалізується щільна капсула, підкапсульно з округлими гідрофільними структурами. ' : '';
  this.templateData.rightStructure += this.templateData.rightDetails7 ? 'Неоднорідний, в області яєчника візуалізується утворення з рівним контуром, з наявністю капсули, анехогенне, однорідне d {rightDetails17} мм (фолікулярна кіста). ' : '';
  this.templateData.rightStructure += this.templateData.rightDetails8 ? 'Неоднорідний, в області яєчника лоцирується утворення з щільною товстою капсулою, з інтенсивним кровопливом по перефірії, анехогенне з гіпервключеннями d {rightDetails18} мм (кіста жовтого тіла). ' : '';
  this.templateData.rightStructure += this.templateData.rightDetails9 ? 'Лоцирується утворення розм. {rightDetails19} мм інкапсуловане, анехогенне, неоднорідне d {rightDetails20} мм (муцинозна кіста). ' : '';
  this.templateData.rightStructure += this.templateData.rightDetails10 ? 'Позаду від матки візуалізується утворення розм. {rightDetails21} мм інкапсуловане, з змішаною внутрішньою будовою, на кольоровій ехограмі внутрішній вміст еваскулярний, по перефірії виявляються поодинокі ділянки васкулярізації. ' : '';
  this.templateData.rightStructure += this.templateData.rightDetails11 ? 'В області проекції яєчника візуалізується багатокамерне тонкостінне утворення d {rightDetails22} мм. ' : '';
  this.templateData.rightStructure += this.templateData.rightDetails12 ? 'В області проекції яєчника візуалізується округлої форми утворення розм. {rightDetails23} мм, гіпоехогенне з солітарними гіперехогенними включеннями, при кольоровій доплерографії васкуляризація відсутня. ' : '';
  this.templateData.rightStructure += this.templateData.rightDetails13 ? 'В області проекції яєчника візуалізується округлої форми з рідиною, однокамерне, тонкостінне утворення, з досить чіткими внутрішніми контурами, з однорідною, практично ехонегативною внутрішньою будовою d {rightDetails24} мм; при доплерографії в стінках виявляються поодтнокі ділянки васкуляризації. ' : '';
  this.templateData.rightStructure += this.templateData.rightDetails14 ? 'В області проекції яєчника візуалізується округлої форми утворення з рідиною {rightDetails25} мм, багатокамерне з пристінковими структурами різних розмірів повищенної ехогенності, з поодинокими перегородками у вигляді тонких ехогенних лінійних структур, в розростаннях та перегородках визначаються зони неоваскуляризації. ' : '';
  this.templateData.rightStructure += this.templateData.rightDetails15 ? 'В області яєчника візуалізується утворення розм. {rightDetails26} × {rightDetails27} мм з чіткими, не рівними контурами, некапсуловане, неоднорідне. ' : '';
  this.templateData.rightStructure += this.templateData.rightDetails16 ? 'В області яєчника візуалізується утворення розм. {rightDetails28} × {rightDetails29} мм з чіткими, не рівними контурами, некапсуловане, з гіпо-, гіперділянками, при кольоровій доплерографії з зонами неоваскуляризації. ' : '';
}
onCheckboxChange7() {
  this.templateData.leftStructure = '';
  this.templateData.leftStructure += this.templateData.leftDetails1 ? 'Капсула не потовщена, ехогенність та ехоструктура не змінені. ' : '';
  this.templateData.leftStructure += this.templateData.leftDetails2 ? 'Капсула не потовщена, ехогенність незначно знижена, ехоструктура неоднорідна. ' : '';
  this.templateData.leftStructure += this.templateData.leftDetails3 ? 'Капсула не потовщена, ехогенність знижена, ехоструктура неоднорідна. ' : '';
  this.templateData.leftStructure += this.templateData.leftDetails4 ? 'Капсула не потовщена, помірно гіпоехогенний з множинними ехонегативними включеннями. ' : '';
  this.templateData.leftStructure += this.templateData.leftDetails5 ? 'Капсула не потовщена, помірно гіпоехогенний, з дрібними округлими структурами по контурі. ' : '';
  this.templateData.leftStructure += this.templateData.leftDetails6 ? 'Візуалізується щільна капсула, підкапсульно з округлими гідрофільними структурами. ' : '';
  this.templateData.leftStructure += this.templateData.leftDetails7 ? 'Неоднорідний, в області яєчника візуалізується утворення з рівним контуром, з наявністю капсули, анехогенне, однорідне d {leftDetails17} мм (фолікулярна кіста). ' : '';
  this.templateData.leftStructure += this.templateData.leftDetails8 ? 'Неоднорідний, в області яєчника лоцирується утворення з щільною товстою капсулою, з інтенсивним кровопливом по перефірії, анехогенне з гіпервключеннями d {leftDetails18} мм (кіста жовтого тіла). ' : '';
  this.templateData.leftStructure += this.templateData.leftDetails9 ? 'Лоцирується утворення розм. {leftDetails19} мм інкапсуловане, анехогенне, неоднорідне d {leftDetails20} мм (муцинозна кіста). ' : '';
  this.templateData.leftStructure += this.templateData.leftDetails10 ? 'Позаду від матки візуалізується утворення розм. {leftDetails21} мм інкапсуловане, з змішаною внутрішньою будовою, на кольоровій ехограмі внутрішній вміст еваскулярний, по перефірії виявляються поодинокі ділянки васкулярізації. ' : '';
  this.templateData.leftStructure += this.templateData.leftDetails11 ? 'В області проекції яєчника візуалізується багатокамерне тонкостінне утворення d {leftDetails22} мм. ' : '';
  this.templateData.leftStructure += this.templateData.leftDetails12 ? 'В області проекції яєчника візуалізується округлої форми утворення розм. {leftDetails23} мм, гіпоехогенне з солітарними гіперехогенними включеннями, при кольоровій доплерографії васкуляризація відсутня. ' : '';
  this.templateData.leftStructure += this.templateData.leftDetails13 ? 'В області проекції яєчника візуалізується округлої форми з рідиною, однокамерне, тонкостінне утворення, з досить чіткими внутрішніми контурами, з однорідною, практично ехонегативною внутрішньою будовою d {leftDetails24} мм; при доплерографії в стінках виявляються поодтнокі ділянки васкуляризації. ' : '';
  this.templateData.leftStructure += this.templateData.leftDetails14 ? 'В області проекції яєчника візуалізується округлої форми утворення з рідиною {leftDetails25} мм, багатокамерне з пристінковими структурами різних розмірів повищенної ехогенності, з поодинокими перегородками у вигляді тонких ехогенних лінійних структур, в розростаннях та перегородках визначаються зони неоваскуляризації. ' : '';
  this.templateData.leftStructure += this.templateData.leftDetails15 ? 'В області яєчника візуалізується утворення розм. {leftDetails26} × {leftDetails27} мм з чіткими, не рівними контурами, некапсуловане, неоднорідне. ' : '';
  this.templateData.leftStructure += this.templateData.leftDetails16 ? 'В області яєчника візуалізується утворення розм. {leftDetails28} × {leftDetails29} мм з чіткими, не рівними контурами, некапсуловане, з гіпо-, гіперділянками, при кольоровій доплерографії з зонами неоваскуляризації. ' : '';
}
}