/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Action_InboxInputs */

const en_basecamp_action_inbox = /** @type {(inputs: Basecamp_Action_InboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inbox`)
};

const es_basecamp_action_inbox = /** @type {(inputs: Basecamp_Action_InboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bandeja`)
};

const de_basecamp_action_inbox = /** @type {(inputs: Basecamp_Action_InboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Posteingang`)
};

const fr_basecamp_action_inbox = /** @type {(inputs: Basecamp_Action_InboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Boîte de réception`)
};

const it_basecamp_action_inbox = /** @type {(inputs: Basecamp_Action_InboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Posta`)
};

const nl_basecamp_action_inbox = /** @type {(inputs: Basecamp_Action_InboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inbox`)
};

const pl_basecamp_action_inbox = /** @type {(inputs: Basecamp_Action_InboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skrzynka`)
};

const pt_basecamp_action_inbox = /** @type {(inputs: Basecamp_Action_InboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caixa de entrada`)
};

const ru_basecamp_action_inbox = /** @type {(inputs: Basecamp_Action_InboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Входящие`)
};

const sv_basecamp_action_inbox = /** @type {(inputs: Basecamp_Action_InboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inkorg`)
};

const tr_basecamp_action_inbox = /** @type {(inputs: Basecamp_Action_InboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gelen kutusu`)
};

const zh_basecamp_action_inbox = /** @type {(inputs: Basecamp_Action_InboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`收件箱`)
};

const ja_basecamp_action_inbox = /** @type {(inputs: Basecamp_Action_InboxInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`受信箱`)
};

/**
* | output |
* | --- |
* | "Inbox" |
*
* @param {Basecamp_Action_InboxInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_action_inbox = /** @type {((inputs?: Basecamp_Action_InboxInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Action_InboxInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_action_inbox(inputs)
	if (locale === "de") return de_basecamp_action_inbox(inputs)
	if (locale === "fr") return fr_basecamp_action_inbox(inputs)
	if (locale === "it") return it_basecamp_action_inbox(inputs)
	if (locale === "nl") return nl_basecamp_action_inbox(inputs)
	if (locale === "pl") return pl_basecamp_action_inbox(inputs)
	if (locale === "pt") return pt_basecamp_action_inbox(inputs)
	if (locale === "ru") return ru_basecamp_action_inbox(inputs)
	if (locale === "sv") return sv_basecamp_action_inbox(inputs)
	if (locale === "tr") return tr_basecamp_action_inbox(inputs)
	if (locale === "zh") return zh_basecamp_action_inbox(inputs)
	if (locale === "ja") return ja_basecamp_action_inbox(inputs)
	return en_basecamp_action_inbox(inputs)
});
