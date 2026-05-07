export const getHello = (req: any, res: any) => {
  console.log("Hello API hit ");

  return res.status(200).json({
    success: true,
    message: "Hello World "
  });
};
// 