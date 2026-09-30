/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Inbox_AcknowledgeInputs */

const en_basecamp_inbox_acknowledge = /** @type {(inputs: Basecamp_Inbox_AcknowledgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Acknowledge`)
};

const es_basecamp_inbox_acknowledge = /** @type {(inputs: Basecamp_Inbox_AcknowledgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dar por visto`)
};

const de_basecamp_inbox_acknowledge = /** @type {(inputs: Basecamp_Inbox_AcknowledgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zur Kenntnis nehmen`)
};

const fr_basecamp_inbox_acknowledge = /** @type {(inputs: Basecamp_Inbox_AcknowledgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Accuser réception`)
};

const it_basecamp_inbox_acknowledge = /** @type {(inputs: Basecamp_Inbox_AcknowledgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conferma la lettura`)
};

const nl_basecamp_inbox_acknowledge = /** @type {(inputs: Basecamp_Inbox_AcknowledgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bevestigen`)
};

const pl_basecamp_inbox_acknowledge = /** @type {(inputs: Basecamp_Inbox_AcknowledgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Potwierdź`)
};

const pt_basecamp_inbox_acknowledge = /** @type {(inputs: Basecamp_Inbox_AcknowledgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirmar leitura`)
};

const ru_basecamp_inbox_acknowledge = /** @type {(inputs: Basecamp_Inbox_AcknowledgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Принять к сведению`)
};

const sv_basecamp_inbox_acknowledge = /** @type {(inputs: Basecamp_Inbox_AcknowledgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bekräfta`)
};

const tr_basecamp_inbox_acknowledge = /** @type {(inputs: Basecamp_Inbox_AcknowledgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Görüldü olarak işaretle`)
};

const zh_basecamp_inbox_acknowledge = /** @type {(inputs: Basecamp_Inbox_AcknowledgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`确认收到`)
};

const ja_basecamp_inbox_acknowledge = /** @type {(inputs: Basecamp_Inbox_AcknowledgeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`確認済みにする`)
};

/**
* | output |
* | --- |
* | "Acknowledge" |
*
* @param {Basecamp_Inbox_AcknowledgeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_inbox_acknowledge = /** @type {((inputs?: Basecamp_Inbox_AcknowledgeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Inbox_AcknowledgeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_inbox_acknowledge(inputs)
	if (locale === "de") return de_basecamp_inbox_acknowledge(inputs)
	if (locale === "fr") return fr_basecamp_inbox_acknowledge(inputs)
	if (locale === "it") return it_basecamp_inbox_acknowledge(inputs)
	if (locale === "nl") return nl_basecamp_inbox_acknowledge(inputs)
	if (locale === "pl") return pl_basecamp_inbox_acknowledge(inputs)
	if (locale === "pt") return pt_basecamp_inbox_acknowledge(inputs)
	if (locale === "ru") return ru_basecamp_inbox_acknowledge(inputs)
	if (locale === "sv") return sv_basecamp_inbox_acknowledge(inputs)
	if (locale === "tr") return tr_basecamp_inbox_acknowledge(inputs)
	if (locale === "zh") return zh_basecamp_inbox_acknowledge(inputs)
	if (locale === "ja") return ja_basecamp_inbox_acknowledge(inputs)
	return en_basecamp_inbox_acknowledge(inputs)
});
