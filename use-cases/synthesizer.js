const mockSynth = { play: () => {} }

const PORTUGUESE_LANG_CODES = ['pt-BR', 'pt-PT']

const isPortuguese = (voice) => PORTUGUESE_LANG_CODES.includes(voice.lang)

const getVoice = (voices=[]) => {
  const [defaultVoice] = voices

  return voices.find(isPortuguese) ?? defaultVoice
}

export function buildSynth({ phrase }) {
  if (typeof window === 'undefined') return mockSynth

  const synth = window.speechSynthesis
  const voice = getVoice(synth.getVoices())
  const utterance = new SpeechSynthesisUtterance(phrase)

  utterance.voice = voice

  const play = () => synth.speak(utterance)

  return { play }
}
