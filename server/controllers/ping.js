const pingController = (req, res) => {
  return res.status(200).json("pong");
};

export default pingController