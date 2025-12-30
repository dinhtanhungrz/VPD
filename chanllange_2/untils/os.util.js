import os from 'os';

export function getSystemInfo() {
    return {
        platform: os.platform(),
        cpuCount: os.cpus().length,
        totalMemory: os.totalmem(),
        freeMemory: os.freemem()
    };
}
