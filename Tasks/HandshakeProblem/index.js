function getParticipants(handshakes){
    let count = 0;
    if (handshakes === 0) {
      return 1;
    } else if (handshakes === 1) {
      return 2;
    } else if (handshakes === 2 || handshakes === 3) {
      return 3;
    } else {
      let someCounter = 1;
      let i=2;
      while (handshakes>someCounter) {
          someCounter += i;
          i++;
      };
      return i;
    }
  }
