# Computer System Simulation using NestJS

<p style="width: 900px; height: auto; align-items: center">
 <img src="/assets/images/computer.png">
</p>
This project is a demonstration of building a simple computer system simulation using NestJS. The primary goal is to showcase the importance and usage of Modules and Dependency Injection in NestJS. The project simulates a basic computer system where different components such as the CPU, Disk, and Power Supply interact with each other through a structured module-based architecture.

## Project Overview

The project consists of the following modules:

- Power Module: Supplies power to the CPU and Disk.
- CPU Module: Represents the CPU component that performs computations.
- Disk Module: Represents the Disk component that handles data storage.

<p style="width: 900px; height: auto; align-items: center">
 <img src="/assets/images/computer_goal_design.png">
</p>

## Application Flow

1. The **Computer Module** acts as the central orchestrator.
2. The **Computer Controller** initializes the simulation by invoking the run() method.
3. The **Power Service** is responsible for supplying power to both the CPU and Disk.
4. The **CPU Service** performs computations once powered.
5. The **Disk Service** retrieves or stores data when powered.

## Key Concepts

### Dependency Injection

The project demonstrates how NestJS's Dependency Injection system allows services (e.g., **PowerService**, **CPUService**, **DiskService**) to be easily injected into controllers and other services. This facilitates a modular and maintainable architecture.

### Modular Architecture

By dividing the system into distinct modules (CPU Module, Disk Module, Power Module), the project highlights how NestJS modules help organize and encapsulate related components. Each module is self-contained but can depend on other modules, allowing for clear separation of concerns and easier scalability.

## Diagrams

Below are the design diagrams illustrating the overall system and module interactions:

- System Overview:
- Module Design:

### Getting Started

To run this project locally:

1. Clone the repository:

```bash
git clone https://github.com/your-username/nestjs-computer-simulation.git
cd nestjs-computer-simulation
```

2. Install dependencies:

```bash
yarn install
```

3. Run the application:

```bash
yarn start
```

Access the application: The application will be available at http://localhost:3000.

### License

This project is licensed under the MIT License.
