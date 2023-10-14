// // import { EmailTemplate } from '../../../components/EmailTemplate';
// import { NextResponse } from 'next/server'
// import { Resend } from 'resend'

// const resend = new Resend('re_6ysXZdmA_J1zebh1z71KrJMLbVvarSYBk')
// // const fromEmail = 'Anna.bilokon89@gmail.com'

// export async function POST(req, res) {
//   const { email, subject, message } = await req.json()
//   console.log(email, subject, message)
//   try {
//     const data = await resend.emails.send({
//       from: 'Anna.bilokon89@gmail.com',
//       to: ['Anna.bilokon89@gmail.com'],
//       subject: subject,
//       react: (
//         <>
//           <h1>{subject}</h1>
//           <p>Thank you for contacting us!</p>
//           <p>New message submitted:</p>
//           <p>{message}</p>
//         </>
//       ),
//     })
//     return NextResponse.json(data)
//   } catch (error) {
//     return NextResponse.json({ error })
//   }
// }
