/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Notify_Instant_IntroInputs */

const en_emails_notify_instant_intro = /** @type {(inputs: Emails_Notify_Instant_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Here’s what happened around your mods and conversations.`)
};

const es_emails_notify_instant_intro = /** @type {(inputs: Emails_Notify_Instant_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Esto es lo que ha pasado en tus mods y conversaciones.`)
};

const de_emails_notify_instant_intro = /** @type {(inputs: Emails_Notify_Instant_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das ist rund um deine Mods und Unterhaltungen passiert.`)
};

const fr_emails_notify_instant_intro = /** @type {(inputs: Emails_Notify_Instant_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voici ce qui s’est passé autour de vos mods et de vos conversations.`)
};

const it_emails_notify_instant_intro = /** @type {(inputs: Emails_Notify_Instant_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ecco cosa è successo intorno ai tuoi mod e alle tue conversazioni.`)
};

const nl_emails_notify_instant_intro = /** @type {(inputs: Emails_Notify_Instant_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dit is er gebeurd rond je mods en gesprekken.`)
};

const pl_emails_notify_instant_intro = /** @type {(inputs: Emails_Notify_Instant_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oto co wydarzyło się wokół Twoich modów i rozmów.`)
};

const pt_emails_notify_instant_intro = /** @type {(inputs: Emails_Notify_Instant_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veja o que aconteceu com seus mods e conversas.`)
};

const ru_emails_notify_instant_intro = /** @type {(inputs: Emails_Notify_Instant_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вот что произошло вокруг ваших модов и обсуждений.`)
};

const sv_emails_notify_instant_intro = /** @type {(inputs: Emails_Notify_Instant_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det här har hänt kring dina moddar och samtal.`)
};

const tr_emails_notify_instant_intro = /** @type {(inputs: Emails_Notify_Instant_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modların ve sohbetlerin çevresinde olanlar burada.`)
};

const zh_emails_notify_instant_intro = /** @type {(inputs: Emails_Notify_Instant_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`以下是你的模组和讨论中发生的新动态。`)
};

const ja_emails_notify_instant_intro = /** @type {(inputs: Emails_Notify_Instant_IntroInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`あなたの MOD や会話で起きたことをお知らせします。`)
};

/**
* | output |
* | --- |
* | "Here’s what happened around your mods and conversations." |
*
* @param {Emails_Notify_Instant_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_instant_intro = /** @type {((inputs?: Emails_Notify_Instant_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Instant_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_instant_intro(inputs)
	if (locale === "de") return de_emails_notify_instant_intro(inputs)
	if (locale === "fr") return fr_emails_notify_instant_intro(inputs)
	if (locale === "it") return it_emails_notify_instant_intro(inputs)
	if (locale === "nl") return nl_emails_notify_instant_intro(inputs)
	if (locale === "pl") return pl_emails_notify_instant_intro(inputs)
	if (locale === "pt") return pt_emails_notify_instant_intro(inputs)
	if (locale === "ru") return ru_emails_notify_instant_intro(inputs)
	if (locale === "sv") return sv_emails_notify_instant_intro(inputs)
	if (locale === "tr") return tr_emails_notify_instant_intro(inputs)
	if (locale === "zh") return zh_emails_notify_instant_intro(inputs)
	if (locale === "ja") return ja_emails_notify_instant_intro(inputs)
	return en_emails_notify_instant_intro(inputs)
});
