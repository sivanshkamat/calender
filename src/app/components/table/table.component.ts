import {Component} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {NgFor, NgIf} from '@angular/common';
import {MatTableModule} from '@angular/material/table';

/**
 * @title Table with expandable rows
 */
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({height: '0px', minHeight: '0'})),
      state('expanded', style({height: '*'})),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
  standalone: true,
  imports: [MatTableModule, NgFor, MatButtonModule, NgIf, MatIconModule],
})
export class TableComponent {
  dataSource = ELEMENT_DATA;
  columnsToDisplay = ['Date', 'Title'];
  expandedElement!: PeriodicElement | null;
  columnsToDisplayWithExpand = [...this.columnsToDisplay, 'expand'];
}

export interface PeriodicElement {
  date: number;
  title: string;
  description: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
  date: 1.0079,
    title: 'H',
    description: `Hydrogen is a chemical element with title H and atomic number 1. With a standard
        atomic date of 1.008, hydrogen is the lightest element on the periodic table.`,
  },
  {
  date: 4.0026,
    title: 'He',
    description: `Helium is a chemical element with title He and atomic number 2. It is a
        colorless, odorless, tasteless, non-toxic, inert, monatomic gas, the first in the noble gas
        group in the periodic table. Its boiling point is the lowest among all the elements.`,
  },
  {
  date: 6.941,
    title: 'Li',
    description: `Lithium is a chemical element with title Li and atomic number 3. It is a soft,
        silvery-white alkali metal. Under standard conditions, it is the lightest metal and the
        lightest solid element.`,
  },
  {
  date: 9.0122,
    title: 'Be',
    description: `Beryllium is a chemical element with title Be and atomic number 4. It is a
        relatively rare element in the universe, usually occurring as a product of the spallation of
        larger atomic nuclei that have collided with cosmic rays.`,
  },
  {
  date: 10.811,
    title: 'B',
    description: `Boron is a chemical element with title B and atomic number 5. Produced entirely
        by cosmic ray spallation and supernovae and not by stellar nucleosynthesis, it is a
        low-abundance element in the Solar system and in the Earth's crust.`,
  },
  {
  date: 12.0107,
    title: 'C',
    description: `Carbon is a chemical element with title C and atomic number 6. It is nonmetallic
        and tetravalent—making four electrons available to form covalent chemical bonds. It belongs
        to group 14 of the periodic table.`,
  },
  {
  date: 14.0067,
    title: 'N',
    description: `Nitrogen is a chemical element with title N and atomic number 7. It was first
        discovered and isolated by Scottish physician Daniel Rutherford in 1772.`,
  },
  {
  date: 15.9994,
    title: 'O',
    description: `Oxygen is a chemical element with title O and atomic number 8. It is a member of
         the chalcogen group on the periodic table, a highly reactive nonmetal, and an oxidizing
         agent that readily forms oxides with most elements as well as with other compounds.`,
  },
  {
  date: 18.9984,
    title: 'F',
    description: `Fluorine is a chemical element with title F and atomic number 9. It is the
        lightest halogen and exists as a highly toxic pale yellow diatomic gas at standard
        conditions.`,
  },
  {
  date: 20.1797,
    title: 'Ne',
    description: `Neon is a chemical element with title Ne and atomic number 10. It is a noble gas.
        Neon is a colorless, odorless, inert monatomic gas under standard conditions, with about
        two-thirds the density of air.`,
  },
];
