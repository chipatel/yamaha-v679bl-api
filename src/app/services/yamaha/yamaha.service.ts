import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';


@Injectable()
export class YamahaService{
  private ipAddress:string;

  constructor(private _http: HttpClient){
    console.log('Yamaha Receiver...');
    this.ipAddress = '192.168.0.193';
  }

  powerOn(){
    return this._http.get("http://"+ this.ipAddress+"/YamahaExtendedControl/v1/main/setPower?power=on");
  }

  powerOff(){
    return this._http.get("http://"+ this.ipAddress+"/YamahaExtendedControl/v1/main/setPower?power=standby");
  }

  searchInServer(textToSearch:string){
     return this._http.get("http://192.168.0.193/YamahaExtendedControl/v1/netusb/getListInfo?input=server&size=8");
  }

  returnOneStepUp(){
    return this._http.get("http://192.168.0.193/YamahaExtendedControl/v1/netusb/setListControl?type=return");
  }

}

