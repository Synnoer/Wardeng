import { AlertCircle, CheckCircle2, LoaderCircle, Send } from 'lucide-react'
import { type ChangeEvent, type FormEvent, useId, useState } from 'react'
import { SectionHeader } from './SectionHeader'

const categories = [
  'Retail',
  'FnB',
  'Web Development',
  'Mobile Development',
  'IoT Development',
  'Other',
] as const

type FormStatus = 'idle' | 'submitting' | 'success' | 'error'

type FormErrors = {
  name?: string
  email?: string
  message?: string
}

type FormValues = {
  name: string
  email: string
  whatsapp: string
  category: string
  message: string
}

const initialValues: FormValues = {
  name: '',
  email: '',
  whatsapp: '',
  category: '',
  message: '',
}

function validate(values: FormValues): FormErrors {
  const errors: FormErrors = {}

  if (!values.name.trim()) {
    errors.name = 'Nama wajib diisi.'
  }

  if (!values.email.trim()) {
    errors.email = 'Email wajib diisi.'
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'Format email tidak valid.'
  }

  if (!values.message.trim()) {
    errors.message = 'Pesan wajib diisi.'
  }

  return errors
}

export function ContactForm() {
  const formId = useId()
  const [values, setValues] = useState<FormValues>(initialValues)
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<FormStatus>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const endpoint = import.meta.env.VITE_FORMSPREE_ENDPOINT as string | undefined

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: undefined }))
    if (status === 'error' || status === 'success') {
      setStatus('idle')
      setErrorMessage('')
    }
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const nextErrors = validate(values)
    setErrors(nextErrors)

    if (Object.keys(nextErrors).length > 0) {
      return
    }

    if (!endpoint) {
      setStatus('error')
      setErrorMessage(
        'Endpoint Formspree belum dikonfigurasi. Tambahkan VITE_FORMSPREE_ENDPOINT di file .env.',
      )
      return
    }

    setStatus('submitting')
    setErrorMessage('')

    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: values.name.trim(),
          email: values.email.trim(),
          whatsapp: values.whatsapp.trim(),
          category: values.category || 'Other',
          message: values.message.trim(),
        }),
      })

      if (!response.ok) {
        throw new Error('Gagal mengirim pesan.')
      }

      setStatus('success')
      setValues(initialValues)
    } catch {
      setStatus('error')
      setErrorMessage('Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.')
    }
  }

  return (
    <section
      id="kontak"
      className="section-padding shard-bg"
      aria-labelledby="contact-heading"
    >
      <div className="section-edge" aria-hidden />
      <span className="watermark right-0 top-8 text-[clamp(4rem,18vw,10rem)]" aria-hidden>
        MAIL
      </span>
      <div className="container-narrow">
        <SectionHeader
          eyebrow="Kontak"
          title="Hubungi Kami"
          titleId="contact-heading"
          description="Tanya layanan retail, FnB, atau proyek digital — kami siap membantu."
          watermark="CONTACT"
          align="center"
        />

        <div className="relative mx-auto mt-12 max-w-2xl border-2 border-cyan-400/40 bg-panel/90 p-6 shadow-[12px_12px_0_0_rgb(11_87_255)] sm:p-8">
          <div
            className="absolute -left-1 -top-3 bg-hot-500 px-4 py-1 font-ui text-xs font-bold uppercase italic tracking-[0.25em] text-white"
            aria-hidden
          >
            Today&apos;s Message
          </div>

          {status === 'success' ? (
            <div
              className="flex flex-col items-center gap-3 bg-night-950/60 px-6 py-10 text-center"
              role="status"
              aria-live="polite"
            >
              <CheckCircle2 className="size-10 text-cyan-400" aria-hidden />
              <h3 className="font-ui text-2xl font-bold uppercase italic text-white">
                Pesan terkirim
              </h3>
              <p className="max-w-md text-mist-300">
                Terima kasih. Tim Wardeng akan menghubungi Anda segera.
              </p>
              <button type="button" className="btn-persona mt-2" onClick={() => setStatus('idle')}>
                Kirim pesan lain
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor={`${formId}-name`}
                    className="mb-1.5 block font-ui text-sm font-bold uppercase tracking-wider text-cyan-300"
                  >
                    Nama <span className="text-hot-500">*</span>
                  </label>
                  <input
                    id={`${formId}-name`}
                    name="name"
                    type="text"
                    autoComplete="name"
                    value={values.name}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? `${formId}-name-error` : undefined}
                    className="input-persona"
                    placeholder="Nama lengkap"
                  />
                  {errors.name ? (
                    <p id={`${formId}-name-error`} className="mt-1.5 text-sm text-hot-400" role="alert">
                      {errors.name}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label
                    htmlFor={`${formId}-email`}
                    className="mb-1.5 block font-ui text-sm font-bold uppercase tracking-wider text-cyan-300"
                  >
                    Email <span className="text-hot-500">*</span>
                  </label>
                  <input
                    id={`${formId}-email`}
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={values.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? `${formId}-email-error` : undefined}
                    className="input-persona"
                    placeholder="nama@email.com"
                  />
                  {errors.email ? (
                    <p id={`${formId}-email-error`} className="mt-1.5 text-sm text-hot-400" role="alert">
                      {errors.email}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor={`${formId}-whatsapp`}
                    className="mb-1.5 block font-ui text-sm font-bold uppercase tracking-wider text-cyan-300"
                  >
                    WhatsApp
                  </label>
                  <input
                    id={`${formId}-whatsapp`}
                    name="whatsapp"
                    type="tel"
                    autoComplete="tel"
                    value={values.whatsapp}
                    onChange={handleChange}
                    className="input-persona"
                    placeholder="08xxxxxxxxxx"
                  />
                </div>

                <div>
                  <label
                    htmlFor={`${formId}-category`}
                    className="mb-1.5 block font-ui text-sm font-bold uppercase tracking-wider text-cyan-300"
                  >
                    Kategori
                  </label>
                  <select
                    id={`${formId}-category`}
                    name="category"
                    value={values.category}
                    onChange={handleChange}
                    className="input-persona"
                  >
                    <option value="">Pilih kategori</option>
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label
                  htmlFor={`${formId}-message`}
                  className="mb-1.5 block font-ui text-sm font-bold uppercase tracking-wider text-cyan-300"
                >
                  Pesan <span className="text-hot-500">*</span>
                </label>
                <textarea
                  id={`${formId}-message`}
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? `${formId}-message-error` : undefined}
                  className="input-persona resize-y"
                  placeholder="Ceritakan kebutuhan Anda..."
                />
                {errors.message ? (
                  <p id={`${formId}-message-error`} className="mt-1.5 text-sm text-hot-400" role="alert">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              {status === 'error' ? (
                <div
                  className="flex items-start gap-3 border-2 border-alert-400 bg-alert-400/10 px-4 py-3 text-sm text-mist-100"
                  role="alert"
                >
                  <AlertCircle className="mt-0.5 size-5 shrink-0 text-alert-400" aria-hidden />
                  <p>{errorMessage}</p>
                </div>
              ) : null}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="btn-persona w-full disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
              >
                {status === 'submitting' ? (
                  <>
                    <LoaderCircle className="size-5 animate-spin" aria-hidden />
                    Mengirim...
                  </>
                ) : (
                  <>
                    <Send className="size-5" aria-hidden />
                    Kirim Pesan
                  </>
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
