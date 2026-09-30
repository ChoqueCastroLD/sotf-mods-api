/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Notify_UnsubscribeInputs */

const en_emails_notify_unsubscribe = /** @type {(inputs: Emails_Notify_UnsubscribeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unsubscribe from these emails`)
};

const es_emails_notify_unsubscribe = /** @type {(inputs: Emails_Notify_UnsubscribeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Darse de baja de estos emails`)
};

const de_emails_notify_unsubscribe = /** @type {(inputs: Emails_Notify_UnsubscribeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Diese E-Mails abbestellen`)
};

const fr_emails_notify_unsubscribe = /** @type {(inputs: Emails_Notify_UnsubscribeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se désabonner de ces e-mails`)
};

const it_emails_notify_unsubscribe = /** @type {(inputs: Emails_Notify_UnsubscribeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annulla l’iscrizione a queste email`)
};

const nl_emails_notify_unsubscribe = /** @type {(inputs: Emails_Notify_UnsubscribeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Afmelden voor deze e-mails`)
};

const pl_emails_notify_unsubscribe = /** @type {(inputs: Emails_Notify_UnsubscribeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wypisz się z tych e-maili`)
};

const pt_emails_notify_unsubscribe = /** @type {(inputs: Emails_Notify_UnsubscribeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancelar a inscrição nestes e-mails`)
};

const ru_emails_notify_unsubscribe = /** @type {(inputs: Emails_Notify_UnsubscribeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отписаться от этих писем`)
};

const sv_emails_notify_unsubscribe = /** @type {(inputs: Emails_Notify_UnsubscribeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avsluta prenumerationen på de här mejlen`)
};

const tr_emails_notify_unsubscribe = /** @type {(inputs: Emails_Notify_UnsubscribeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu e-postaların aboneliğinden çık`)
};

const zh_emails_notify_unsubscribe = /** @type {(inputs: Emails_Notify_UnsubscribeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`退订这类邮件`)
};

const ja_emails_notify_unsubscribe = /** @type {(inputs: Emails_Notify_UnsubscribeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このメールの配信を停止`)
};

/**
* | output |
* | --- |
* | "Unsubscribe from these emails" |
*
* @param {Emails_Notify_UnsubscribeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_unsubscribe = /** @type {((inputs?: Emails_Notify_UnsubscribeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_UnsubscribeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_unsubscribe(inputs)
	if (locale === "de") return de_emails_notify_unsubscribe(inputs)
	if (locale === "fr") return fr_emails_notify_unsubscribe(inputs)
	if (locale === "it") return it_emails_notify_unsubscribe(inputs)
	if (locale === "nl") return nl_emails_notify_unsubscribe(inputs)
	if (locale === "pl") return pl_emails_notify_unsubscribe(inputs)
	if (locale === "pt") return pt_emails_notify_unsubscribe(inputs)
	if (locale === "ru") return ru_emails_notify_unsubscribe(inputs)
	if (locale === "sv") return sv_emails_notify_unsubscribe(inputs)
	if (locale === "tr") return tr_emails_notify_unsubscribe(inputs)
	if (locale === "zh") return zh_emails_notify_unsubscribe(inputs)
	if (locale === "ja") return ja_emails_notify_unsubscribe(inputs)
	return en_emails_notify_unsubscribe(inputs)
});
