/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Inbox_Empty_TitleInputs */

const en_basecamp_inbox_empty_title = /** @type {(inputs: Basecamp_Inbox_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nothing here yet`)
};

const es_basecamp_inbox_empty_title = /** @type {(inputs: Basecamp_Inbox_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aquí no hay nada todavía`)
};

const de_basecamp_inbox_empty_title = /** @type {(inputs: Basecamp_Inbox_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hier ist noch nichts`)
};

const fr_basecamp_inbox_empty_title = /** @type {(inputs: Basecamp_Inbox_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rien ici pour l’instant`)
};

const it_basecamp_inbox_empty_title = /** @type {(inputs: Basecamp_Inbox_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ancora niente qui`)
};

const nl_basecamp_inbox_empty_title = /** @type {(inputs: Basecamp_Inbox_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hier staat nog niets`)
};

const pl_basecamp_inbox_empty_title = /** @type {(inputs: Basecamp_Inbox_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Na razie nic tu nie ma`)
};

const pt_basecamp_inbox_empty_title = /** @type {(inputs: Basecamp_Inbox_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nada aqui ainda`)
};

const ru_basecamp_inbox_empty_title = /** @type {(inputs: Basecamp_Inbox_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Здесь пока ничего нет`)
};

const sv_basecamp_inbox_empty_title = /** @type {(inputs: Basecamp_Inbox_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inget här än`)
};

const tr_basecamp_inbox_empty_title = /** @type {(inputs: Basecamp_Inbox_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Burada henüz bir şey yok`)
};

const zh_basecamp_inbox_empty_title = /** @type {(inputs: Basecamp_Inbox_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`这里还没有内容`)
};

const ja_basecamp_inbox_empty_title = /** @type {(inputs: Basecamp_Inbox_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まだ何もありません`)
};

/**
* | output |
* | --- |
* | "Nothing here yet" |
*
* @param {Basecamp_Inbox_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_inbox_empty_title = /** @type {((inputs?: Basecamp_Inbox_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Inbox_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_inbox_empty_title(inputs)
	if (locale === "de") return de_basecamp_inbox_empty_title(inputs)
	if (locale === "fr") return fr_basecamp_inbox_empty_title(inputs)
	if (locale === "it") return it_basecamp_inbox_empty_title(inputs)
	if (locale === "nl") return nl_basecamp_inbox_empty_title(inputs)
	if (locale === "pl") return pl_basecamp_inbox_empty_title(inputs)
	if (locale === "pt") return pt_basecamp_inbox_empty_title(inputs)
	if (locale === "ru") return ru_basecamp_inbox_empty_title(inputs)
	if (locale === "sv") return sv_basecamp_inbox_empty_title(inputs)
	if (locale === "tr") return tr_basecamp_inbox_empty_title(inputs)
	if (locale === "zh") return zh_basecamp_inbox_empty_title(inputs)
	if (locale === "ja") return ja_basecamp_inbox_empty_title(inputs)
	return en_basecamp_inbox_empty_title(inputs)
});
