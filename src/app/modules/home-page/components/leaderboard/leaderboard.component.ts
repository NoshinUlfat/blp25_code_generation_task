import { Component } from '@angular/core';

interface TeamRow {
  rank?: number;           // optional, we'll compute display rank
  teamName: string;
  affiliation: string;
  score: number;
}

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss'],
  standalone: false
})
export class LeaderboardComponent {
  // whether full table is shown
  showAll = false;

  // data (as provided)
  teams: TeamRow[] = [
    { teamName: 'NALA_MAINZ', affiliation: 'JGU Mainz', score: 0.954 },
    { teamName: 'Retriv', affiliation: 'CUET NLP Lab', score: 0.934 },
    { teamName: 'Musafir', affiliation: 'CUET', score: 0.918 },
    { teamName: 'AdversaryAI', affiliation: 'SUST', score: 0.850 },
    { teamName: 'BRACU_CL', affiliation: 'BRAC University', score: 0.844 },
    { teamName: 'Team B2B', affiliation: 'BUET', score: 0.840 },
    { teamName: 'Code_Gen', affiliation: 'BUET', score: 0.838 },
    { teamName: 'One Braincell', affiliation: 'UM', score: 0.834 },
    { teamName: '""', affiliation: '""', score: 0.828 },
    { teamName: 'Nsu_PiedPiper', affiliation: 'North South University', score: 0.826 },
    { teamName: 'Barrier_Breakers', affiliation: 'Independent Researcher', score: 0.816 },
    { teamName: 'PyBhasha', affiliation: 'RUET', score: 0.800 },
    { teamName: 'This Team has no name', affiliation: 'Individual', score: 0.772 },
    { teamName: 'JU_NLP', affiliation: 'JU', score: 0.766 },
    { teamName: 'NLPirates', affiliation: 'CUET', score: 0.742 },
    { teamName: 'Alpha Borno', affiliation: 'IUB', score: 0.722 },
    { teamName: 'PyBangla', affiliation: 'Green University Of Bangladesh', score: 0.716 },
    { teamName: 'CUET_DuoBingo', affiliation: 'Chittagong University of Engineering & University', score: 0.696 },
    { teamName: 'CUET_SIURS', affiliation: 'CUET', score: 0.674 },
    { teamName: 'Ecstasy', affiliation: 'BUET', score: 0.658 },
    { teamName: 'soumyajit', affiliation: 'Independent', score: 0.370 },
    { teamName: 'CUET_Expelliarmus', affiliation: 'CUET', score: 0.370 },
    { teamName: 'team_trinity', affiliation: 'Independent researchers', score: 0.364 },
    { teamName: 'Gradient Masters', affiliation: 'Independent Researchers', score: 0.358 },
    { teamName: 'nidala', affiliation: 'NCSU', score: 0.332 },
    { teamName: 'Troopers', affiliation: 'BUET', score: 0.316 },
    { teamName: 'Team Random', affiliation: 'Independent', score: 0.282 },
    { teamName: 'delayed', affiliation: 'independent', score: 0.176 },
    { teamName: 'Organizers', affiliation: 'BLP', score: 0.174 },
    { teamName: 'huday', affiliation: 'none', score: 0.090 },
    { teamName: 'SyntaxMind', affiliation: 'International Islamic University Chittagong', score: 0.084 },
    { teamName: 'Team Random', affiliation: 'Independent', score: 0.018 }
  ];

  toggleTable(): void {
    this.showAll = !this.showAll;
    // If you'd like to auto-scroll to top when collapsing, do it here (optional)
    // if (!this.showAll) window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Compute displayed rank based on the current slice; index i corresponds to rank i+1
  getRank(index: number): number {
    // since we always slice from 0, displayed rank is index+1
    return index + 1;
  }
}
