'use server'

import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

const validateString = (value: unknown, maxLength: number) => {
  if (!value || typeof value !== 'string' || value.length > maxLength) {
    return false
  }
  return true
}

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get('email')
  const message = formData.get('message')

  if (!validateString(senderEmail, 500)) {
    return {
      error: 'Invalid sender email',
    }
  }

  if (!validateString(message, 5000)) {
    return {
      error: 'Invalid message',
    }
  }

  resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'yoosghn0@gmail.com',
    subject: 'Message from portfolio',
    reply_to: senderEmail,
    text: message,
  })
}
