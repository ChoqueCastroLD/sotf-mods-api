/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Console_Nav_InboxInputs */

const en_console_nav_inbox = /** @type {(inputs: Console_Nav_InboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inbox`)
};

const es_console_nav_inbox = /** @type {(inputs: Console_Nav_InboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bandeja`)
};

const de_console_nav_inbox = /** @type {(inputs: Console_Nav_InboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Posteingang`)
};

const fr_console_nav_inbox = /** @type {(inputs: Console_Nav_InboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Boîte de réception`)
};

const it_console_nav_inbox = /** @type {(inputs: Console_Nav_InboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Posta`)
};

const nl_console_nav_inbox = /** @type {(inputs: Console_Nav_InboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inbox`)
};

const pl_console_nav_inbox = /** @type {(inputs: Console_Nav_InboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skrzynka`)
};

const pt_console_nav_inbox = /** @type {(inputs: Console_Nav_InboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caixa de entrada`)
};

const ru_console_nav_inbox = /** @type {(inputs: Console_Nav_InboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Входящие`)
};

const sv_console_nav_inbox = /** @type {(inputs: Console_Nav_InboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inkorg`)
};

const tr_console_nav_inbox = /** @type {(inputs: Console_Nav_InboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gelen kutusu`)
};

const zh_console_nav_inbox = /** @type {(inputs: Console_Nav_InboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`收件箱`)
};

const ja_console_nav_inbox = /** @type {(inputs: Console_Nav_InboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`受信箱`)
};

/**
* | output |
* | --- |
* | "Inbox" |
*
* @param {Console_Nav_InboxInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_nav_inbox = /** @type {((inputs?: Console_Nav_InboxInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Nav_InboxInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_nav_inbox(inputs)
	if (locale === "de") return de_console_nav_inbox(inputs)
	if (locale === "fr") return fr_console_nav_inbox(inputs)
	if (locale === "it") return it_console_nav_inbox(inputs)
	if (locale === "nl") return nl_console_nav_inbox(inputs)
	if (locale === "pl") return pl_console_nav_inbox(inputs)
	if (locale === "pt") return pt_console_nav_inbox(inputs)
	if (locale === "ru") return ru_console_nav_inbox(inputs)
	if (locale === "sv") return sv_console_nav_inbox(inputs)
	if (locale === "tr") return tr_console_nav_inbox(inputs)
	if (locale === "zh") return zh_console_nav_inbox(inputs)
	if (locale === "ja") return ja_console_nav_inbox(inputs)
	return en_console_nav_inbox(inputs)
});
