import nodemailer from "nodemailer";

export default async (req, res) => {
  const { name, email, message, service } = req.body;

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: `domvournias@gmail.com`,
      pass: `opeozaioosgxyrgh`,
    },
  });

  try {
    const emailResponse = await transporter.sendMail({
      from: email,
      to: "domvournias@gmail.com",
      subject: `Νέα ολοκλήρωση φόρμας επικοινωνίας. ${name}`,
      html: `<p>Στοιχεία αποστολέα.</p><br>
      <p><strong>Ονοματεπώνυμο: </strong> ${name}</p>
      <p><strong>Email: </strong> ${email}</p>
      <p><strong>Μήνυμα: </strong> ${message}</p>
      <p><strong>Υπηρεσία: </strong> ${service}</p>`,
    });
    console.log("Message sent", emailResponse.messageId);
  } catch (error) {
    console.log(error);
  }
  res.status(200).json(req.body);
};
