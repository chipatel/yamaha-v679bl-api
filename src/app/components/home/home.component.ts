import {Component} from '@angular/core';
import {YamahaService} from '../../services/yamaha/yamaha.service';

@Component({
  moduleId: module.id,
  selector: 'home-comp',
  templateUrl: 'home.component.html',
})

export class HomeComponent {
  private pwrOnBtnText: string;
  private pwrOffBtnText: string;

  private morningArtiBtnText: string;
  private eveningArtiBtnText: string;


  constructor(private _yamahaService: YamahaService) {
    this.pwrOnBtnText = "On";
    this.pwrOffBtnText = "Off";
    this.morningArtiBtnText = "Morning";
    this.eveningArtiBtnText = "Evening";
  }

  powerOn() {
    this._yamahaService.powerOn().subscribe(res => {
      console.log(res);
    });
  }

  powerOff() {
    this._yamahaService.powerOff().subscribe(res => {
      console.log(res);
    });
  }

  playArti(whentoplay: string) {
    this._yamahaService.searchInServer("morning arti").subscribe(res => {

      if (res.menu_layer > 3) {
        this._yamahaService.returnOneStepUp().subscribe(res => {
          console.log(res);
        });
        this.playArti("hello")
        //"menu_layer": 4,
      }
      console.log(res);
    });
  }

}

/*
{
    "response_code": 0,
    "menu_layer": 4,
    "max_line": 114,
    "index": 0,
    "playing_index": -1,
    "menu_name": "02 Music Instumental",
    "list_info": [
        {
            "text": "01 APC BEST",
            "thumbnail": "",
            "attribute": 2
        },
*/
