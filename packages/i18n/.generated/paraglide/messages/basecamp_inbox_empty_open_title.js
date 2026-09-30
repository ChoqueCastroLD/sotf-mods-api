/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Inbox_Empty_Open_TitleInputs */

const en_basecamp_inbox_empty_open_title = /** @type {(inputs: Basecamp_Inbox_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inbox zero`)
};

const es_basecamp_inbox_empty_open_title = /** @type {(inputs: Basecamp_Inbox_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bandeja al día`)
};

const de_basecamp_inbox_empty_open_title = /** @type {(inputs: Basecamp_Inbox_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Posteingang leer`)
};

const fr_basecamp_inbox_empty_open_title = /** @type {(inputs: Basecamp_Inbox_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Boîte à zéro`)
};

const it_basecamp_inbox_empty_open_title = /** @type {(inputs: Basecamp_Inbox_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Posta in pari`)
};

const nl_basecamp_inbox_empty_open_title = /** @type {(inputs: Basecamp_Inbox_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inbox leeg`)
};

const pl_basecamp_inbox_empty_open_title = /** @type {(inputs: Basecamp_Inbox_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skrzynka pusta`)
};

const pt_basecamp_inbox_empty_open_title = /** @type {(inputs: Basecamp_Inbox_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caixa em dia`)
};

const ru_basecamp_inbox_empty_open_title = /** @type {(inputs: Basecamp_Inbox_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Входящие разобраны`)
};

const sv_basecamp_inbox_empty_open_title = /** @type {(inputs: Basecamp_Inbox_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tom inkorg`)
};

const tr_basecamp_inbox_empty_open_title = /** @type {(inputs: Basecamp_Inbox_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gelen kutusu temiz`)
};

const zh_basecamp_inbox_empty_open_title = /** @type {(inputs: Basecamp_Inbox_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`收件箱已清空`)
};

const ja_basecamp_inbox_empty_open_title = /** @type {(inputs: Basecamp_Inbox_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`受信箱は空です`)
};

/**
* | output |
* | --- |
* | "Inbox zero" |
*
* @param {Basecamp_Inbox_Empty_Open_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_inbox_empty_open_title = /** @type {((inputs?: Basecamp_Inbox_Empty_Open_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Inbox_Empty_Open_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_inbox_empty_open_title(inputs)
	if (locale === "de") return de_basecamp_inbox_empty_open_title(inputs)
	if (locale === "fr") return fr_basecamp_inbox_empty_open_title(inputs)
	if (locale === "it") return it_basecamp_inbox_empty_open_title(inputs)
	if (locale === "nl") return nl_basecamp_inbox_empty_open_title(inputs)
	if (locale === "pl") return pl_basecamp_inbox_empty_open_title(inputs)
	if (locale === "pt") return pt_basecamp_inbox_empty_open_title(inputs)
	if (locale === "ru") return ru_basecamp_inbox_empty_open_title(inputs)
	if (locale === "sv") return sv_basecamp_inbox_empty_open_title(inputs)
	if (locale === "tr") return tr_basecamp_inbox_empty_open_title(inputs)
	if (locale === "zh") return zh_basecamp_inbox_empty_open_title(inputs)
	if (locale === "ja") return ja_basecamp_inbox_empty_open_title(inputs)
	return en_basecamp_inbox_empty_open_title(inputs)
});
