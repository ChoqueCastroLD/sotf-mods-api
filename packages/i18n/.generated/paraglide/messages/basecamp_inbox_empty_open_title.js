/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Inbox_Empty_Open_TitleInputs */

const en_basecamp_inbox_empty_open_title = /** @type {(inputs: Basecamp_Inbox_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nothing to answer`)
};

const es_basecamp_inbox_empty_open_title = /** @type {(inputs: Basecamp_Inbox_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nada que responder`)
};

const de_basecamp_inbox_empty_open_title = /** @type {(inputs: Basecamp_Inbox_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nichts zu beantworten`)
};

const fr_basecamp_inbox_empty_open_title = /** @type {(inputs: Basecamp_Inbox_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rien à traiter`)
};

const it_basecamp_inbox_empty_open_title = /** @type {(inputs: Basecamp_Inbox_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niente a cui rispondere`)
};

const nl_basecamp_inbox_empty_open_title = /** @type {(inputs: Basecamp_Inbox_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niets te beantwoorden`)
};

const pl_basecamp_inbox_empty_open_title = /** @type {(inputs: Basecamp_Inbox_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nic do odpowiedzi`)
};

const pt_basecamp_inbox_empty_open_title = /** @type {(inputs: Basecamp_Inbox_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nada para responder`)
};

const ru_basecamp_inbox_empty_open_title = /** @type {(inputs: Basecamp_Inbox_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отвечать не на что`)
};

const sv_basecamp_inbox_empty_open_title = /** @type {(inputs: Basecamp_Inbox_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inget att svara på`)
};

const tr_basecamp_inbox_empty_open_title = /** @type {(inputs: Basecamp_Inbox_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yanıtlanacak bir şey yok`)
};

const zh_basecamp_inbox_empty_open_title = /** @type {(inputs: Basecamp_Inbox_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`没有待回复的内容`)
};

const ja_basecamp_inbox_empty_open_title = /** @type {(inputs: Basecamp_Inbox_Empty_Open_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返信が必要なものはありません`)
};

/**
* | output |
* | --- |
* | "Nothing to answer" |
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
