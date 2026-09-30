/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Notify_ViewInputs */

const en_emails_notify_view = /** @type {(inputs: Emails_Notify_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`View`)
};

const es_emails_notify_view = /** @type {(inputs: Emails_Notify_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver`)
};

const de_emails_notify_view = /** @type {(inputs: Emails_Notify_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ansehen`)
};

const fr_emails_notify_view = /** @type {(inputs: Emails_Notify_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Voir`)
};

const it_emails_notify_view = /** @type {(inputs: Emails_Notify_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vedi`)
};

const nl_emails_notify_view = /** @type {(inputs: Emails_Notify_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bekijken`)
};

const pl_emails_notify_view = /** @type {(inputs: Emails_Notify_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zobacz`)
};

const pt_emails_notify_view = /** @type {(inputs: Emails_Notify_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ver`)
};

const ru_emails_notify_view = /** @type {(inputs: Emails_Notify_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Открыть`)
};

const sv_emails_notify_view = /** @type {(inputs: Emails_Notify_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visa`)
};

const tr_emails_notify_view = /** @type {(inputs: Emails_Notify_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Görüntüle`)
};

const zh_emails_notify_view = /** @type {(inputs: Emails_Notify_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`查看`)
};

const ja_emails_notify_view = /** @type {(inputs: Emails_Notify_ViewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`表示`)
};

/**
* | output |
* | --- |
* | "View" |
*
* @param {Emails_Notify_ViewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_notify_view = /** @type {((inputs?: Emails_Notify_ViewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Notify_ViewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_notify_view(inputs)
	if (locale === "de") return de_emails_notify_view(inputs)
	if (locale === "fr") return fr_emails_notify_view(inputs)
	if (locale === "it") return it_emails_notify_view(inputs)
	if (locale === "nl") return nl_emails_notify_view(inputs)
	if (locale === "pl") return pl_emails_notify_view(inputs)
	if (locale === "pt") return pt_emails_notify_view(inputs)
	if (locale === "ru") return ru_emails_notify_view(inputs)
	if (locale === "sv") return sv_emails_notify_view(inputs)
	if (locale === "tr") return tr_emails_notify_view(inputs)
	if (locale === "zh") return zh_emails_notify_view(inputs)
	if (locale === "ja") return ja_emails_notify_view(inputs)
	return en_emails_notify_view(inputs)
});
