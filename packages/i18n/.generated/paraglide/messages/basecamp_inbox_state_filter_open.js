/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Inbox_State_Filter_OpenInputs */

const en_basecamp_inbox_state_filter_open = /** @type {(inputs: Basecamp_Inbox_State_Filter_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Waiting for you`)
};

const es_basecamp_inbox_state_filter_open = /** @type {(inputs: Basecamp_Inbox_State_Filter_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pendientes de ti`)
};

const de_basecamp_inbox_state_filter_open = /** @type {(inputs: Basecamp_Inbox_State_Filter_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wartet auf dich`)
};

const fr_basecamp_inbox_state_filter_open = /** @type {(inputs: Basecamp_Inbox_State_Filter_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En attente de vous`)
};

const it_basecamp_inbox_state_filter_open = /** @type {(inputs: Basecamp_Inbox_State_Filter_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In attesa di te`)
};

const nl_basecamp_inbox_state_filter_open = /** @type {(inputs: Basecamp_Inbox_State_Filter_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wacht op jou`)
};

const pl_basecamp_inbox_state_filter_open = /** @type {(inputs: Basecamp_Inbox_State_Filter_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Czeka na ciebie`)
};

const pt_basecamp_inbox_state_filter_open = /** @type {(inputs: Basecamp_Inbox_State_Filter_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aguardando você`)
};

const ru_basecamp_inbox_state_filter_open = /** @type {(inputs: Basecamp_Inbox_State_Filter_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ждут вас`)
};

const sv_basecamp_inbox_state_filter_open = /** @type {(inputs: Basecamp_Inbox_State_Filter_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Väntar på dig`)
};

const tr_basecamp_inbox_state_filter_open = /** @type {(inputs: Basecamp_Inbox_State_Filter_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seni bekleyenler`)
};

const zh_basecamp_inbox_state_filter_open = /** @type {(inputs: Basecamp_Inbox_State_Filter_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`待你处理`)
};

const ja_basecamp_inbox_state_filter_open = /** @type {(inputs: Basecamp_Inbox_State_Filter_OpenInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`対応待ち`)
};

/**
* | output |
* | --- |
* | "Waiting for you" |
*
* @param {Basecamp_Inbox_State_Filter_OpenInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_inbox_state_filter_open = /** @type {((inputs?: Basecamp_Inbox_State_Filter_OpenInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Inbox_State_Filter_OpenInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_inbox_state_filter_open(inputs)
	if (locale === "de") return de_basecamp_inbox_state_filter_open(inputs)
	if (locale === "fr") return fr_basecamp_inbox_state_filter_open(inputs)
	if (locale === "it") return it_basecamp_inbox_state_filter_open(inputs)
	if (locale === "nl") return nl_basecamp_inbox_state_filter_open(inputs)
	if (locale === "pl") return pl_basecamp_inbox_state_filter_open(inputs)
	if (locale === "pt") return pt_basecamp_inbox_state_filter_open(inputs)
	if (locale === "ru") return ru_basecamp_inbox_state_filter_open(inputs)
	if (locale === "sv") return sv_basecamp_inbox_state_filter_open(inputs)
	if (locale === "tr") return tr_basecamp_inbox_state_filter_open(inputs)
	if (locale === "zh") return zh_basecamp_inbox_state_filter_open(inputs)
	if (locale === "ja") return ja_basecamp_inbox_state_filter_open(inputs)
	return en_basecamp_inbox_state_filter_open(inputs)
});
