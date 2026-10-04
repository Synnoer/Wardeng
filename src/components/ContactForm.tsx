import { AlertCircle, CheckCircle2, LoaderCircle, Send } from 'lucide-react'
import { type ChangeEvent, type FormEvent, useId, useState } from 'react'

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
      className="section-padding bg-brand-50/70"
      aria-labelledby="contact-heading"
    >
      <div className="container-narrow">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600">
            Kontak
          </p>
          <h2 id="contact-heading" className="mt-3 text-3xl font-bold sm:text-4xl">
            Hubungi Kami
          </h2>
          <p className="mt-4 text-base leading-relaxed text-ink-600 sm:text-lg">
            Tanya layanan retail, FnB, atau proyek digital — kami siap membantu.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-2xl border border-brand-100 bg-white p-6 shadow-sm sm:p-8">
          {status === 'success' ? (
            <div
              className="flex flex-col items-center gap-3 rounded-xl bg-brand-50 px-6 py-10 text-center"
              role="status"
              aria-live="polite"
            >
              <CheckCircle2 className="size-10 text-brand-600" aria-hidden />
              <h3 className="text-xl font-semibold text-ink-950">Pesan terkirim</h3>
              <p className="max-w-md text-ink-600">
                Terima kasih. Tim Wardeng akan menghubungi Anda segera.
              </p>
              <button
                type="button"
                className="mt-2 rounded-xl bg-brand-700 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-600"
                onClick={() => setStatus('idle')}
              >
                Kirim pesan lain
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate className="space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor={`${formId}-name`} className="mb-1.5 block text-sm font-semibold text-ink-800">
                    Nama <span className="text-spice-600">*</span>
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
                    className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-ink-900 transition placeholder:text-ink-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
                    placeholder="Nama lengkap"
                  />
                  {errors.name ? (
                    <p id={`${formId}-name-error`} className="mt-1.5 text-sm text-spice-700" role="alert">
                      {errors.name}
                    </p>
                  ) : null}
                </div>

                <div>
                  <label htmlFor={`${formId}-email`} className="mb-1.5 block text-sm font-semibold text-ink-800">
                    Email <span className="text-spice-600">*</span>
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
                    className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-ink-900 transition placeholder:text-ink-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
                    placeholder="nama@email.com"
                  />
                  {errors.email ? (
                    <p id={`${formId}-email-error`} className="mt-1.5 text-sm text-spice-700" role="alert">
                      {errors.email}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor={`${formId}-whatsapp`} className="mb-1.5 block text-sm font-semibold text-ink-800">
                    WhatsApp
                  </label>
                  <input
                    id={`${formId}-whatsapp`}
                    name="whatsapp"
                    type="tel"
                    autoComplete="tel"
                    value={values.whatsapp}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-ink-900 transition placeholder:text-ink-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
                    placeholder="08xxxxxxxxxx"
                  />
                </div>

                <div>
                  <label htmlFor={`${formId}-category`} className="mb-1.5 block text-sm font-semibold text-ink-800">
                    Kategori
                  </label>
                  <select
                    id={`${formId}-category`}
                    name="category"
                    value={values.category}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-ink-900 transition focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
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
                <label htmlFor={`${formId}-message`} className="mb-1.5 block text-sm font-semibold text-ink-800">
                  Pesan <span className="text-spice-600">*</span>
                </label>
                <textarea
                  id={`${formId}-message`}
                  name="message"
                  rows={5}
                  value={values.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? `${formId}-message-error` : undefined}
                  className="w-full resize-y rounded-xl border border-ink-200 bg-white px-4 py-3 text-ink-900 transition placeholder:text-ink-400 focus:border-brand-500 focus:ring-2 focus:ring-brand-200"
                  placeholder="Ceritakan kebutuhan Anda..."
                />
                {errors.message ? (
                  <p id={`${formId}-message-error`} className="mt-1.5 text-sm text-spice-700" role="alert">
                    {errors.message}
                  </p>
                ) : null}
              </div>

              {status === 'error' ? (
                <div
                  className="flex items-start gap-3 rounded-xl border border-spice-200 bg-spice-50 px-4 py-3 text-sm text-spice-800"
                  role="alert"
                >
                  <AlertCircle className="mt-0.5 size-5 shrink-0" aria-hidden />
                  <p>{errorMessage}</p>
                </div>
              ) : null}

              <button
                type="submit"
                disabled={status === 'submitting'}
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-700 px-6 py-3.5 text-base font-semibold text-white transition hover:bg-brand-600 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
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
