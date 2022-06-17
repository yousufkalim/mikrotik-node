const MikroNode = require("../utils/mikronode");
const Routers = require("../models/Routers");

exports.createRouter = async (req, res) => {
  try {
    const existingRouter = await Routers.findOne({ ip_address: req.body.ip_address });

    if (existingRouter) {
      return res.status(400).json({ success: false, message: "Router already exists" });
    }

    const router = await Routers.create(req.body);

    res.json({ success: true, router });
  } catch (err) {
    // Error handling
    console.log("Error ----> ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

exports.getAllRouters = async (req, res) => {
  try {
    const routers = await Routers.find();
    res.json({ success: true, routers });
  } catch (err) {
    // Error handling
    console.log("Error ----> ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

exports.getRouterResource = async (req, res) => {
  try {
    const { routerId } = req.params;
    const router = await Routers.findById(routerId);

    var Device = new MikroNode(router.ip_address);
    // Device.setDebug(MikroNode.DEBUG);
    Device.connect()
      .then(([login]) => login(router.username, router.password))
      .then(function (conn) {
        // console.log("router connected");
        conn.closeOnDone(true);
        var chan = conn.openChannel();

        chan.write("/system/resource/print");

        chan.on("done", (data) => {
          let resource = {};
          data.data[0].map((a) => {
            // console.log(a.field);
            resource[a.field] = a.value;
          });

          chan.close();
          res.json({ success: true, router, resource });
        });

        chan.on("trap", (err) => {
          res.status(500).json({ success: false, message: "Mikrotik error", err });
        });
      })
      .catch((err) => {
        res.status(400).json({ success: false, message: "We are unable to connect to the router", err });
      });
  } catch (err) {
    // Error handling
    console.log("Error ----> ", err);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};
