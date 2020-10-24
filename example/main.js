import WebRTCOverXMPP from "../src/index.js";

window.bot2 = new WebRTCOverXMPP({
  jid: process.env.JID1,
  password: process.env.PASSWORD1,
  server: process.env.SERVER,
  room: process.env.ROOM
});

bot2.on("message", (data, peer) => {
  console.log(`data "${data}" from ${peer.id}`);
});


window.bot3 = new WebRTCOverXMPP({
  jid: process.env.JID2,
  password: process.env.PASSWORD2,
  server: process.env.SERVER,
  room: process.env.ROOM
});

bot3.on("message", (data, peer) => {
  console.log(`data "${data}" from ${peer.id}`);
});