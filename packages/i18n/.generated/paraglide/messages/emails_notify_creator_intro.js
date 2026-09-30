/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ start: NonNullable<unknown>, end: NonNullable<unknown> }} Emails_Notify_Creator_IntroInputs */

const en_emails_notify_creator_intro = /** @type {(inputs: Emails_Notify_Creator_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Here’s how your mods did from ${i?.start} to ${i?.end}.`)
};

const es_emails_notify_creator_intro = /** @type {(inputs: Emails_Notify_Creator_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Así les fue a tus mods del ${i?.start} al ${i?.end}.`)
};

const de_emails_notify_creator_intro = /** @type {(inputs: Emails_Notify_Creator_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`So liefen deine Mods vom ${i?.start} bis ${i?.end}.`)
};

const fr_emails_notify_creator_intro = /** @type {(inputs: Emails_Notify_Creator_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Voici les résultats de vos mods du ${i?.start} au ${i?.end}.`)
};

const it_emails_notify_creator_intro = /** @type {(inputs: Emails_Notify_Creator_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ecco come sono andati i tuoi mod dal ${i?.start} al ${i?.end}.`)
};

const nl_emails_notify_creator_intro = /** @type {(inputs: Emails_Notify_Creator_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Zo deden je mods het van ${i?.start} tot ${i?.end}.`)
};

const pl_emails_notify_creator_intro = /** @type {(inputs: Emails_Notify_Creator_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tak radziły sobie Twoje mody od ${i?.start} do ${i?.end}.`)
};

const pt_emails_notify_creator_intro = /** @type {(inputs: Emails_Notify_Creator_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Veja como seus mods se saíram de ${i?.start} a ${i?.end}.`)
};

const ru_emails_notify_creator_intro = /** @type {(inputs: Emails_Notify_Creator_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Вот как ваши моды показали себя с ${i?.start} по ${i?.end}.`)
};

const sv_emails_notify_creator_intro = /** @type {(inputs: Emails_Notify_Creator_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Så här gick det för dina moddar från ${i?.start} till ${i?.end}.`)
};

const tr_emails_notify_creator_intro = /** @type {(inputs: Emails_Notify_Creator_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Modlarının ${i?.start} - ${i?.end} arasındaki performansı.`)
};

const zh_emails_notify_creator_intro = /** @type {(inputs: Emails_Notify_Creator_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`以下是你的模组在 ${i?.start} 至 ${i?.end} 的表现。`)
};

const ja_emails_notify_creator_intro = /** @type {(inputs: Emails_Notify_Creator_IntroInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.start}〜${i?.end} のあなたの MOD の成績です。`)
};

/**
* | output |
* | --- |
* | "Here’s how your mods did from {start} to {end}." |
*
* @param {Emails_Notify_Creator_IntroInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_creator_intro = /** @type {((inputs: Emails_Notify_Creator_IntroInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_Creator_IntroInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_creator_intro(inputs)
	if (locale === "de") return de_emails_notify_creator_intro(inputs)
	if (locale === "fr") return fr_emails_notify_creator_intro(inputs)
	if (locale === "it") return it_emails_notify_creator_intro(inputs)
	if (locale === "nl") return nl_emails_notify_creator_intro(inputs)
	if (locale === "pl") return pl_emails_notify_creator_intro(inputs)
	if (locale === "pt") return pt_emails_notify_creator_intro(inputs)
	if (locale === "ru") return ru_emails_notify_creator_intro(inputs)
	if (locale === "sv") return sv_emails_notify_creator_intro(inputs)
	if (locale === "tr") return tr_emails_notify_creator_intro(inputs)
	if (locale === "zh") return zh_emails_notify_creator_intro(inputs)
	if (locale === "ja") return ja_emails_notify_creator_intro(inputs)
	return en_emails_notify_creator_intro(inputs)
});
