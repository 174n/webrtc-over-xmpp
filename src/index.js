import * as XMPP from 'stanza';
import 'regenerator-runtime/runtime';
import FastRTCPeer from '@mattkrick/fast-rtc-peer';

class WebRTCOverXMPP {
  constructor({
    jid, password, server, room
  }) {
    this.jid = jid;
    this.password = password;
    this.server = server;
    this.room = room;
    this.onMessageFunc = () => {};
    this.peers = [];
    this._createXmppClient().connect();
  }

  get nickname() {
    return this.jid.split("@")[0];
  }

  _requestOffer() {
    if (this.peers.length === 0) {
      console.log("requesting");
      this.client.sendMessage({
        to: this.room,
        from: this.jid,
        body: "connecting",
        type: "groupchat"
      });
    }
  }

  _onXmppMessage(msg) {
    if (
      msg.from !== `${this.room}/${this.nickname}`
      && (!msg.delay || (new Date().getTime() - msg.delay.timestamp.getTime()) < 10000)
    ) {
      if (msg.body === 'connecting') {
        console.log("connecting:", msg);
        clearTimeout(this.timeout);
        this._createPeer(msg, true);
      } else if (msg.body && msg.body.slice(0, 1) === "{") {
        console.log("got json:", msg);
        let obj;
        try {
          obj = JSON.parse(msg.body);
        } catch (err) {
          console.log("Not json");
          return;
        }
        if (obj && obj.type.match(/^(offer|answer|candidate)$/g)) {
          const id = msg.from.split("/")[1];
          let peer = this.peers.filter(p => p.id === id)[0];
          if (!peer) {
            peer = this._createPeer(msg, false, obj);
          } else {
            peer.dispatch(obj);
          }
        }
      }
    }
  }

  _createXmppClient() {
    this.client = XMPP.createClient({
      jid: this.jid,
      password: this.password,
      transports: {
        bosh: this.server 
      }
    });

    this.client.on('session:started', () => {
      this.client.getRoster();
      this.client.sendPresence();
      this.client.joinRoom(this.room, this.nickname, {
        status: 'online',
        muc: {
          history: {
            maxCharacters: 0,
          },
        },
      });
      this.timeout = setTimeout(() => this._requestOffer(), 5000);
    });

    this.client.on('message', msg => this._onXmppMessage(msg));
    return this.client;
  }

  _createPeer(msg, isOfferer = true, obj) {
    const peer = new FastRTCPeer({ isOfferer, id: msg.from.split("/")[1] });

    if (!isOfferer && obj) {
      peer.dispatch(obj);
    }

    peer.on('signal', (payload) => {
      this.client.sendMessage({
        to: msg.from,
        from: this.jid,
        body: JSON.stringify(payload)
      });
    });

    peer.on('open', (peer) => {
      console.log('connected & ready to send and receive data!', peer.id);
      peer.send(`Hello to you, ${peer.id}`);
    });

    peer.on('close', (peer) => {
      console.log('disconnected from peer!', peer.id);
      this.peers = this.peers.filter(p => p.id !== peer.id);
    });

    peer.on('data', (data, peer) => {
      this.onMessageFunc(data, peer);
    });

    this.peers.push(peer);
    console.warn("peer created: ", peer.id);
  }

  on(eventName, func) {
    if (eventName === "message" && func) {
      this.onMessageFunc = func;
    }
    return this;
  }

  broadcast(data) {
    this.peers.forEach(p => p.send(data));
  }
}

module.exports = WebRTCOverXMPP;