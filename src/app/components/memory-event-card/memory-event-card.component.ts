import { NumberSymbol } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Story } from 'src/app/model/story.model';
import { DateInterval, Duration } from '../../../../node_modules/dates-ranger';

@Component({
  selector: 'memory-event-card',
  templateUrl: './memory-event-card.component.html',
  styleUrls: ['./memory-event-card.component.scss'],
})
export class MemoryEventComponent implements OnInit {
  panelOpenState = false;
  duration = new Duration();
  dateOptions = [
    'All',
    'Week to Date',
    'Last Week',
    'Month to Date',
    'Last Month',
    'Recent Three Month',
    'Year to Date',
  ];
  stories: Story[] = [
    {
      title: "New Year's Day",
      date: '01/01/2021',
      category: 'HOLIDAY',
      achievements: ['Celebrate with famaly'],
    },
    {
      title: 'New School Year Start',
      date: '01/09/2021',
      category: 'STUDY',
      achievements: [
        'Register all courses',
        'Recharge meal plan',
        'Say Hello to roommates',
      ],
    },
    {
      title: "Mom's B-Day",
      date: '03/21/2021',
      category: 'ANNIVERSARY',
      achievements: ['Celebrate with my mom for her birthday'],
    },
    {
      title: 'Travelled to France',
      date: '07/21/2019',
      category: 'LIFE',
      achievements: [
        'Took Photos neaby Seine river',
        'Had French Cuisine',
        'Said Bonjour to people',
      ],
    },
    {
      title: 'Travelled to China',
      date: '11/30/2020',
      category: 'LIFE',
      achievements: [
        'Had Beijing Duck',
        'Took photos at Great Wall',
        'Got reuion with friends',
      ],
    },
  ];

  ngOnInit(): void {
    this.stories = [
      ...this.stories.sort((a, b) => {
        if (a.date === b.date) return 0;
        return Duration.btwDates(a.date, b.date) > 0 ? 1 : -1;
      }),
    ];
  }

  public durationMessage(story: Story): string {
    const numOfDays = this.duration.btwTodayAndDestination(story.date);
    return numOfDays > 0
      ? `${Math.abs(numOfDays)} days left`
      : `${Math.abs(numOfDays)} days passed`;
  }

  public edit() {}

  public delete() {}

  public getDateInterval($event: any) {
    console.log($event);
  }
}
