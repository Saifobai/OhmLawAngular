import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resistor-calculator',
  templateUrl: './resistor-calculator.component.html',
  styleUrls: ['./resistor-calculator.component.css'],
})
export class ResistorCalculatorComponent implements OnInit {
  colors: string[] = [
    'black',
    'brown',
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'violet',
    'gray',
    'white',
  ];

  isFiveBand = false;
  band1Color = 'black';
  band2Color = 'black';
  band3Color = 'black';
  band4Color = 'brown';
  band5Color = 'black';
  resistorValue = '';

  constructor() { }

  ngOnInit(): void {
    this.onCalculateClick()
  }

  calculateResistance() {
    const band1Value = this.colors.indexOf(this.band1Color);
    const band2Value = this.colors.indexOf(this.band2Color);
    const band3Multiplier = Math.pow(10, this.colors.indexOf(this.band3Color));

    if (this.isFiveBand) {
      const band4Value = this.colors.indexOf(this.band4Color);
      const toleranceValue = this.colors.indexOf(this.band5Color);

      if (
        band1Value > -1 &&
        band2Value > -1 &&
        band3Multiplier > -1 &&
        band4Value > -1 &&
        toleranceValue > -1
      ) {
        const resistance =
          (band1Value * 100 + band2Value * 10 + band4Value) * band3Multiplier;
        this.resistorValue = `${resistance} ohms, ${toleranceValue}% tolerance`;
      } else {
        this.resistorValue = ''; // Reset the resistorValue if any required value is missing
      }
    } else {
      const toleranceValue = this.colors.indexOf(this.band4Color);

      if (
        band1Value > -1 &&
        band2Value > -1 &&
        band3Multiplier > -1 &&
        toleranceValue > -1
      ) {
        const resistance = (band1Value * 10 + band2Value) * band3Multiplier;
        this.resistorValue = `${resistance} ohms, ${toleranceValue}% tolerance`;
      } else {
        this.resistorValue = ''; // Reset the resistorValue if any required value is missing
      }
    }
  }

  onCalculateClick() {
    this.calculateResistance();
  }
}
