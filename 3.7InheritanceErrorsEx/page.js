function checkHumidityLevel(humidityPercentage) {
    if (humidityPercentage > 70) {
        throw new Error("High humidity level detected!")
    }
}

class ArgumentError extends Error {
    constructor(message) {
        super(message);
        this.name = "ArgumentError";
    }
}

class OverheatingError extends Error {
    constructor(temperature) {
        super(`Overheating detected: Temperature is ${temperature}°C`);
        this.name = "OverheatingError";
        this.temperature = temperature;
    }
}

function reportOverheating(temperature) {
    if (temperature === null) {
        throw new ArgumentError("Sensor is broken!");
    }

    if (temperature > 500) {
        throw new OverheatingError(temperature);
    }
}

function monitorTheMachine(actions) {
    try {
        actions.check();
    } catch(error) {
        if (error instanceof ArgumentError) {
            actions.alertDeadSensor();
        } else if (error instanceof OverheatingError) {
            if (error.temperature < 600) {
                actions.alertOverheating()
            } else {
                actions.shutDown();
            }
        } else {
            throw error;
        }
    }
}