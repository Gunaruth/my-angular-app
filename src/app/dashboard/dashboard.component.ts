import { Component } from '@angular/core';
import { ApiService } from '../api.service';

interface Opinion {
  opinionId: number;
  opinionName: string;
}

interface Engagement {
  engagementID: number;
  engName: string;
  opinions: Opinion[];
  status?: string;
  expanded?: boolean; // For toggling expand/collapse
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
data: any;
 engagements: Engagement[] = [
    {
      engagementID: 1,
      engName: 'Engagement Alpha',
      status: 'Active',
      opinions: [
        { opinionId: 101, opinionName: 'Opinion X' },
        { opinionId: 102, opinionName: 'Opinion Y' }
      ]
    },
    {
      engagementID: 2,
      engName: 'Engagement Beta',
       status: 'Pending',
      opinions: [
        { opinionId: 201, opinionName: 'Opinion Z' }
      ]
    }
  ];

  toggleExpand(engagement: Engagement) {
    engagement.expanded = !engagement.expanded;
  }
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    debugger;
    this.apiService.getData().subscribe(response => {
      debugger;
      this.data = response;
    });
  }
}
