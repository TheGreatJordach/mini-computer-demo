import { Controller, Get } from "@nestjs/common";
import { CpuService } from "../cpu/cpu.service";
import { DiskService } from "../disk/disk.service";
import { ComputerService } from "./computer.service";

@Controller("computer")
export class ComputerController {
  constructor(
    private readonly diskService: DiskService,
    private readonly cpuService: CpuService
  ) {}

  @Get()
  run() {
    return [this.cpuService.compute(1, 2), this.diskService.getData()];
  }
}
