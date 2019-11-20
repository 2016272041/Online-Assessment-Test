const PubNub = require('pubnub');
const uuid = PubNub.generateUUID();
const pubnub = new PubNub({
  publishKey: "pub-c-7da462e1-e3d8-4802-bcee-e705700e6f0a",
  subscribeKey: "sub-c-7be9060c-079a-11ea-bd43-ead0b8c5d242",
  uuid: uuid
});

const publishConfig = {
  channel: "pubnub_onboarding_channel",
  message: {"sender": uuid, "content": "Hello From Node.js SDK"}
}

pubnub.addListener({
  message: function(message) {
    console.log(message);
  },
  presence: function(presenceEvent) {
    console.log(presenceEvent);
  }
})

pubnub.subscribe({
  channel: "pubnub_onboarding_channel",
  withPresence: true,
});

pubnub.publish(publishConfig, function(status, response) {
  console.log(status, response);
});