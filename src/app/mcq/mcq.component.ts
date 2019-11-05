import { Component, OnInit } from '@angular/core';
import { McqService } from '../services/mcq.service';
import { QuestionsService } from '../services/questions.service';
import { HelperService } from '../services/helper.service';
import { Mcqoption, McqquizConfig, Mcqquestion, Mcqquiz } from '../models/mcqindex';
import { Location } from '@angular/common';
import { Questions } from '../services/questions';
@Component({
  selector: 'app-mcq',
  templateUrl: './mcq.component.html',
  styleUrls: ['./mcq.component.css'],
  providers: [McqService]
})
export class MCQComponent implements OnInit {
  [x: string]: any;
   mcqquizes: any[];
   mcqquiz: Mcqquiz = new Mcqquiz(null);
   mode = 'mcqquiz';
   questions = new Questions();
   submitted = false;
   mcqquizQuestions: string;
   tabs: any[];
   config: McqquizConfig = {
    'allowBack': true,
    'allowReview': true,
    'autoMove': false,
    'duration': 300,
    'pageSize': 1,
    'requiredAll': false,
    'richText': false,
    'shuffleQuestions': false,
    'shuffleOptions': false,
    'showClock': false,
    'showPager': true,
    'theme': 'none'
  };

  pager = {
    index: 0,
    size: 1,
    count: 1
  };
  timer: any = null;
  startTime: Date;
  endTime: Date;
  ellapsedTime = '00:00';
  duration = '';

  constructor(
    private questionsService: QuestionsService,
    private mcqService: McqService
    ) { }

  ngOnInit() {
    this.mcqquizes = this.mcqService.getAll();
    this.mcqquizQuestions = this.mcqquizes[0].id;
    this.loadMcqquiz(this.mcqquizQuestions);
    this.getQuestions();
    this.getMcq();
  }

  loadMcqquiz(mcqquizQuestions: string) {
    this.mcqService.get(mcqquizQuestions).subscribe(res => {
      this.mcqquiz = new Mcqquiz(res);
      this.pager.count = this.mcqquiz.questions.length;
      this.startTime = new Date();
      this.ellapsedTime = '00:00';
      this.timer = setInterval(() => { this.tick(); }, 1000);
      this.duration = this.parseTime(this.config.duration);
    });
    this.mode = 'mcqquiz';
  }

  tick() {
    const now = new Date();
    const diff = (now.getTime() - this.startTime.getTime()) / 1000;
    if (diff >= this.config.duration) {
      this.onSubmit();
    }
    this.ellapsedTime = this.parseTime(diff);
  }

  parseTime(totalSeconds: number) {
    let mins: string | number = Math.floor(totalSeconds / 60);
    let secs: string | number = Math.round(totalSeconds % 60);
    mins = (mins < 10 ? '0' : '') + mins;
    secs = (secs < 10 ? '0' : '') + secs;
    return `${mins}:${secs}`;
  }

  get filteredQuestions() {
    return (this.mcqquiz.questions) ?
    this.mcqquiz.questions.slice(this.pager.index, this.pager.index + this.pager.size) : [];
  }

  // tslint:disable-next-line:no-shadowed-variable
  onSelect(mcqquestion: Mcqquestion, mcqoption: Mcqoption) {
    if (mcqquestion.questionTypeId === 1) {
      // tslint:disable-next-line:curely
      mcqquestion.mcqoption.forEach((x) => { if (x.id !== mcqoption.id) { x.selected = false; } });
    }

    if (this.config.autoMove) {
      this.goTo(this.pager.index + 1);
    }
  }

  goTo(index: number) {
    if (index >= 0 && index < this.pager.count) {
      this.pager.index = index;
      this.mode = 'mcqquiz';
    }
  }

  isAnswered1(mcqquestion: Mcqquestion) {
    return mcqquestion.mcqoption.find(x => x.selected) ? 'Answered' : 'Not Answered';
  }

  isAnswered2(mcqquestion: Mcqquestion) {
    return mcqquestion.mcqoption.find(x => x.selected) ? 'Answered' : 'Not Answered';
  }

  isAnswered3(mcqquestion: Mcqquestion) {
    return mcqquestion.mcqoption.find(x => x.selected) ? 'Answered' : 'Not Answered';
  }

  isAnswered4(mcqquestion: Mcqquestion) {
    return mcqquestion.mcqoption.find(x => x.selected) ? 'Answered' : 'Not Answered';
  }

  isCorrect1(mcqquestion: Mcqquestion) {
    return mcqquestion.mcqoption.every(x => x.selected === x.isAnswer) ? 'correct' : 'wrong';
  }

  isCorrect2(mcqquestion: Mcqquestion) {
    return mcqquestion.mcqoption.every(x => x.selected === x.isAnswer) ? 'correct' : 'wrong';
  }

  isCorrect3(mcqquestion: Mcqquestion) {
    return mcqquestion.mcqoption.every(x => x.selected === x.isAnswer) ? 'correct' : 'wrong';
  }

  isCorrect4(mcqquestion: Mcqquestion) {
    return mcqquestion.mcqoption.every(x => x.selected === x.isAnswer) ? 'correct' : 'wrong';
  }

  goBack(): void {
    this.location.back();
  }

  submitOptions() {
    this.submitted = true;
    this.save();
  }

  onSubmit() {
    const answers = [];
    // tslint:disable-next-line:max-line-length
    this.mcqquiz.mcqquestion.forEach(x => answers.push({ 'mcqquizId': this.mcqquiz.id, 'mcqquestionId': x.id, 'answered': x.answered }));
    console.log(this.mcqquiz.mcqquestion);
    this.mode = 'result';
  }
}
