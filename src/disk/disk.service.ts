import { Injectable } from "@nestjs/common";
import { PowerService } from "../power/power.service";

@Injectable()
export class DiskService {
  constructor(private readonly powerService: PowerService) {}

  getData() {
    console.log("Drawing 20 wat of power from PowerService");
    this.powerService.supplyPower(10);
    return "data";
  }
}
