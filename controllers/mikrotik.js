const MikroNode = require("../utils/mikronode");

const connect = () => {
  var Device = new MikroNode("202.91.42.203");
  Device.setDebug(MikroNode.DEBUG);
  Device.connect()
    .then(([login]) => login("test", "test"))
    .then(function (conn) {
      //   console.log(conn);
      var chan = conn.openChannel();

      chan.write("/ip/address/add", {
        address: "192.168.10.2/24",
        network: "192.168.10.2",
        interface: "ether2",
        comment: "test ROS REST",
      });
      //   console.log(chan);
      chan.on("trap", function (data) {
        console.log("Error setting IP: " + data);
      });
      chan.on("done", function (data) {
        console.log("IP Set.");
      });
      //   chan.close();
      //   conn.close();
    });
};

connect();
