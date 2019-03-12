import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-voter',
  templateUrl: './voter.component.html',
  styleUrls: ['./voter.component.css']
})
export class VoterComponent implements OnInit {

  @Output() voted = new EventEmitter();
  didvote = false;

  constructor() { }

  ngOnInit() {
  }

  vote(agreed: boolean)
  {
      this.voted.emit(agreed);
      this.didvote = true;
  }
}
