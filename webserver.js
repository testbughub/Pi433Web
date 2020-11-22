// required modules
var http = require('http').createServer(handler);
var fs = require('fs');
var io = require('socket.io')(http)

// required module for sending code trough pins and via RF Module
var rpi433 = require('rpi-433-v3'),
  rfSniffer = rpi433.sniffer({
    pin: 2,                     //Sniff on GPIO 2 (or Physical PIN 13)
    debounceDelay: 500          //Wait 500ms before reading another code
  }),
  rfEmitter = rpi433.emitter({
    pin: 0,                     //Send through GPIO 0 (or Physical PIN 11)
    pulseLength: 322            //Send the code with a 350 pulse length
  });

http.listen(8433);  // Server listens to port 8080

// Handles request from client, sends index.html
function handler(req, res) {
  fs.readFile(__dirname + '/index.html', function (err, data) {
    if (err) {
      res.writeHead(404, { 'Content-Type': 'text/html' });
      return res.end("404 Not Found");
    }
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  });
}

// object containing on and off codes from it's receivers
// the codes were sniffed with the rfSniffer module at the top by pressing the buttons on the remote
var sockets = {
  a: {
    on: '1115473',
    off: '1115476'
  },
  b: {
    on: '1118545',
    off: '1118548'
  },
  c: {
    on: '1119313',
    off: '1119316'
  },
  d: {
    on: '1119505',
    off: '1119508'
  },
  e: {
    on: '1119553',
    off: '1119556'
  },
  f: {
    on: '1131857',
    off: '1131860'
  }
};

// Astablishes a socket connection with client
io.sockets.on('connection', function (socket) {

  var switcher = false;

  // A receiver -----------------------------------------------------
  socket.on('a_switcher', function (data) {

    switcher = data;

    if (switcher) {

      // if true, turn on 
      rfEmitter.sendCode(sockets.a.on, function (error, stdout) {
        if (!error) console.log(stdout);
      });

    } else {

      // if false, turn off 
      rfEmitter.sendCode(sockets.a.off, function (error, stdout) {
        if (!error) console.log(stdout);
      });

    }
  });



  // B receiver -----------------------------------------------------
  socket.on('b_switcher', function (data) {

    switcher = data;

    if (switcher) {

      // if true, turn on 
      rfEmitter.sendCode(sockets.b.on, function (error, stdout) {
        if (!error) console.log(stdout);
      });

    } else {

      // if false, turn off 
      rfEmitter.sendCode(sockets.b.off, function (error, stdout) {
        if (!error) console.log(stdout);
      });

    }
  });


  // C receiver -----------------------------------------------------
  socket.on('c_switcher', function (data) {

    switcher = data;

    if (switcher) {

      // if true, turn on 
      rfEmitter.sendCode(sockets.c.on, function (error, stdout) {
        if (!error) console.log(stdout);
      });

    } else {

      // if false, turn off 
      rfEmitter.sendCode(sockets.c.off, function (error, stdout) {
        if (!error) console.log(stdout);
      });

    }
  });

  // D receiver -----------------------------------------------------
  socket.on('d_switcher', function (data) {

    switcher = data;

    if (switcher) {

      // if true, turn on 
      rfEmitter.sendCode(sockets.d.on, function (error, stdout) {
        if (!error) console.log(stdout);
      });

    } else {

      // if false, turn off 
      rfEmitter.sendCode(sockets.d.off, function (error, stdout) {
        if (!error) console.log(stdout);
      });

    }
  });

  // E receiver -----------------------------------------------------
  socket.on('e_switcher', function (data) {

    switcher = data;

    if (switcher) {

      // if true, turn on 
      rfEmitter.sendCode(sockets.e.on, function (error, stdout) {
        if (!error) console.log(stdout);
      });

    } else {

      // if false, turn off 
      rfEmitter.sendCode(sockets.e.off, function (error, stdout) {
        if (!error) console.log(stdout);
      });

    }
  });

  // F receiver -----------------------------------------------------
  socket.on('f_switcher', function (data) {

    switcher = data;

    if (switcher) {

      // if true, turn on 
      rfEmitter.sendCode(sockets.f.on, function (error, stdout) {
        if (!error) console.log(stdout);
      });

    } else {

      // if false, turn off 
      rfEmitter.sendCode(sockets.f.off, function (error, stdout) {
        if (!error) console.log(stdout);
      });

    }
  });
});
