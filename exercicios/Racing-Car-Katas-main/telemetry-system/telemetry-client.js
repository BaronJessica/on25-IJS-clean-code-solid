class TelemetryClient {
  constructor() {
    this._onlineStatus = false;
    this._diagnosticMessageResult = "";
  }

  static diagnosticMessage() {
    return "AT#UD";
  }

  onlineStatus() {
    return this._onlineStatus;
  }

  _connectionEventsSimulator(min, max) {
    const delta = max + 1 - min;
    return min + Math.floor(delta * Math.random());
  }

  connect(telemetryServerConnectionString) {
    if (!telemetryServerConnectionString) {
      throw new Error("Missing telemetryServerConnectionString parameter");
    }

    const success = this._connectionEventsSimulator(1, 10) <= 8;
    this._onlineStatus = success;
  }

  disconnect() {
    this._onlineStatus = false;
  }

  send(message) {
    if (!message) {
      throw new Error("Missing message parameter");
    }

    if (message === TelemetryClient.diagnosticMessage()) {
      this._diagnosticMessageResult = `
                LAST TX rate................ 100 MBPS
                HIGHEST TX rate............. 100 MBPS
                LAST RX rate................ 100 MBPS
                HIGHEST RX rate............. 100 MBPS
                BIT RATE.................... 100000000
                WORD LEN.................... 16
                WORD/FRAME.................. 511
                BITS/FRAME.................. 8192
                MODULATION TYPE............. PCM/FM
                TX Digital Los.............. 0.75
                RX Digital Los.............. 0.10
                BEP Test.................... -5
                Local Rtrn Count............ 00
                Remote Rtrn Count........... 00
            `;
      return;
    }
  }

  receive() {
    let message;

    if (!this._diagnosticMessageResult) {
      message = "";
      const messageLength = this._connectionEventsSimulator(50, 110);
      for (let i = messageLength; i >= 0; --i) {
        message += this._connectionEventsSimulator(40, 126).toString();
      }
    } else {
      message = this._diagnosticMessageResult;
      this._diagnosticMessageResult = "";
    }

    return message;
  }
}

module.exports = TelemetryClient;
