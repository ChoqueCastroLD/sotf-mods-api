/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Inbox_State_OpenInputs */

const en_basecamp_inbox_state_open = /** @type {(inputs: Basecamp_Inbox_State_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open`)
};

const es_basecamp_inbox_state_open = /** @type {(inputs: Basecamp_Inbox_State_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abierto`)
};

const de_basecamp_inbox_state_open = /** @type {(inputs: Basecamp_Inbox_State_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Offen`)
};

const fr_basecamp_inbox_state_open = /** @type {(inputs: Basecamp_Inbox_State_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ouvert`)
};

const it_basecamp_inbox_state_open = /** @type {(inputs: Basecamp_Inbox_State_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aperto`)
};

const nl_basecamp_inbox_state_open = /** @type {(inputs: Basecamp_Inbox_State_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Open`)
};

const pl_basecamp_inbox_state_open = /** @type {(inputs: Basecamp_Inbox_State_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Otwarte`)
};

const pt_basecamp_inbox_state_open = /** @type {(inputs: Basecamp_Inbox_State_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aberto`)
};

const ru_basecamp_inbox_state_open = /** @type {(inputs: Basecamp_Inbox_State_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Открыто`)
};

const sv_basecamp_inbox_state_open = /** @type {(inputs: Basecamp_Inbox_State_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Öppen`)
};

const tr_basecamp_inbox_state_open = /** @type {(inputs: Basecamp_Inbox_State_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Açık`)
};

const zh_basecamp_inbox_state_open = /** @type {(inputs: Basecamp_Inbox_State_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`待处理`)
};

const ja_basecamp_inbox_state_open = /** @type {(inputs: Basecamp_Inbox_State_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未対応`)
};

/**
* | output |
* | --- |
* | "Open" |
*
* @param {Basecamp_Inbox_State_OpenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_inbox_state_open = /** @type {((inputs?: Basecamp_Inbox_State_OpenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Inbox_State_OpenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_inbox_state_open(inputs)
	if (locale === "de") return de_basecamp_inbox_state_open(inputs)
	if (locale === "fr") return fr_basecamp_inbox_state_open(inputs)
	if (locale === "it") return it_basecamp_inbox_state_open(inputs)
	if (locale === "nl") return nl_basecamp_inbox_state_open(inputs)
	if (locale === "pl") return pl_basecamp_inbox_state_open(inputs)
	if (locale === "pt") return pt_basecamp_inbox_state_open(inputs)
	if (locale === "ru") return ru_basecamp_inbox_state_open(inputs)
	if (locale === "sv") return sv_basecamp_inbox_state_open(inputs)
	if (locale === "tr") return tr_basecamp_inbox_state_open(inputs)
	if (locale === "zh") return zh_basecamp_inbox_state_open(inputs)
	if (locale === "ja") return ja_basecamp_inbox_state_open(inputs)
	return en_basecamp_inbox_state_open(inputs)
});
