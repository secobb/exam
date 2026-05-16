import { Light, LightOnCommand } from "../src/behavioral/command/Light";

function runDemo() {
    console.log("\n\n=== ПОВЕДІНКОВІ ПАТЕРНИ (BEHAVIORAL) ===");
    // Command
    console.log("\n[Command]: Виконання інкапсульованої команди...");
    const livingRoomLight = new Light();
    const turnOn = new LightOnCommand(livingRoomLight);
    turnOn.execute();

    console.log("\n--- ДЕМОНСТРАЦІЮ ЗАВЕРШЕНО ---");
}

runDemo();