const nodemailer = require("nodemailer");

export default function handler(req, res) {
  if (req.method === "POST") {
    console.log(req.body);
    main(JSON.parse(req.body)).then((result) => {
      console.log("email sended", result);
      res.status(200).json(result);
    });
  } else {
    // Handle any other HTTP method
  }
}

// async..await is not allowed in global scope, must use a wrapper
async function main(param) {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  let testAccount = await nodemailer.createTestAccount();

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
      user: "latest.freeapp@gmail.com",
      pass: "ubkchufagkkmfqlm",
    },
  });

  // send mail with defined transport object
  let info = await transporter.sendMail({
    from: '"profile reuest 👻" <foo@example.com>', // sender address
    to: param.email, // list of receivers
    subject: param.name, // Subject line
    text: param.comment, // plain text body
    html: `<b>${param.comment} phone:${param.phone}</b>`, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

  return Promise.resolve(info);
}
