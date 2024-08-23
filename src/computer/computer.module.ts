import { Module } from "@nestjs/common";
import { ComputerController } from "./computer.controller";
import { ComputerService } from "./computer.service";
import { DiskModule } from "../disk/disk.module";
import { CpuModule } from "../cpu/cpu.module";

@Module({
  controllers: [ComputerController],
  providers: [ComputerService],
  imports: [DiskModule, CpuModule],
})
export class ComputerModule {}
