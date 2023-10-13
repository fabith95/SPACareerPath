import { STRING_TYPE } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BootstrapForm';

  idRequirements: any[] = [
    1,2,3,4,5,6,7
  ];

  idSofts: any[] = [
    1,2,3,4,5,6,7
  ];

  idTechs: number[] = [
    1,2,3,4,5,6,7,8,9,10,11,12,13,14,
    15,16,17,18,19,20,21,22,23,24,25,26
  ];

  headTables:  any [] =
  [
    {id:'#', careerPresent: "Current Seniority", name: "Name", careerFuture: "Desired Seniority",
    numberComparation: "GAP", percent: "%", total: "TOTAL %"},

  ];

  requirements: String [] =
  [
    "Years of experience in Development",
    "Years of experience in Agile methodology",
    "Certification or studies related to the role",
    "English language proficiency",
    "Tech Skills compliance (Go to the Tech Skills list)",
    "Basic-level programming languages proficiency",
    "Automation proficiency (Web/UI, API, Mobile)",
  ];

  softSkills:  String [] =
  [
    "Self-management",
    "Leadership",
    "Assertive communication",
    "Learning potential",
    "Effectiveness",
    "Delivery compliance",
    "Complexity management"
  ]

  techSkills:  String [] =
  [
    "Black Box Testing",
    "White Box Testing",
    "Smoke Testing",
    "Exploratory Testing",
    "Sanity Testing",
    "Software Testing Life Cycle",
    "SQL Expertise",
    "Técnicas de Diseño de Casos de Prueba",
    "Data Set Creation",
    "Bug Life Cycle Management",
    "Pruebas de API",
    "Niveles de Pruebas",
    "Administración de Regresiones",
    "Estrategia de Pruebas",
    "Plan de Pruebas",
    "Métricas",
    "Reportes",
    "Web Testing",
    "Behaviour Driven Development",
    "Performance Testing",
    "Security Testing",
    "Accessibility Testing",
    "Usability/ UX-UI Testing",
    "Ad-Hoc Testing",
    "Cross Browsing",
    "Responsive"
  ]
}


