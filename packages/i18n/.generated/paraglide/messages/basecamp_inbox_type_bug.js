/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Inbox_Type_BugInputs */

const en_basecamp_inbox_type_bug = /** @type {(inputs: Basecamp_Inbox_Type_BugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bug report`)
};

const es_basecamp_inbox_type_bug = /** @type {(inputs: Basecamp_Inbox_Type_BugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reporte de bug`)
};

const de_basecamp_inbox_type_bug = /** @type {(inputs: Basecamp_Inbox_Type_BugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fehlerbericht`)
};

const fr_basecamp_inbox_type_bug = /** @type {(inputs: Basecamp_Inbox_Type_BugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rapport de bug`)
};

const it_basecamp_inbox_type_bug = /** @type {(inputs: Basecamp_Inbox_Type_BugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Segnalazione di bug`)
};

const nl_basecamp_inbox_type_bug = /** @type {(inputs: Basecamp_Inbox_Type_BugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bugmelding`)
};

const pl_basecamp_inbox_type_bug = /** @type {(inputs: Basecamp_Inbox_Type_BugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zgłoszenie błędu`)
};

const pt_basecamp_inbox_type_bug = /** @type {(inputs: Basecamp_Inbox_Type_BugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Relatório de bug`)
};

const ru_basecamp_inbox_type_bug = /** @type {(inputs: Basecamp_Inbox_Type_BugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сообщение об ошибке`)
};

const sv_basecamp_inbox_type_bug = /** @type {(inputs: Basecamp_Inbox_Type_BugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Felrapport`)
};

const tr_basecamp_inbox_type_bug = /** @type {(inputs: Basecamp_Inbox_Type_BugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hata bildirimi`)
};

const zh_basecamp_inbox_type_bug = /** @type {(inputs: Basecamp_Inbox_Type_BugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`错误报告`)
};

const ja_basecamp_inbox_type_bug = /** @type {(inputs: Basecamp_Inbox_Type_BugInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不具合報告`)
};

/**
* | output |
* | --- |
* | "Bug report" |
*
* @param {Basecamp_Inbox_Type_BugInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_inbox_type_bug = /** @type {((inputs?: Basecamp_Inbox_Type_BugInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Inbox_Type_BugInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_inbox_type_bug(inputs)
	if (locale === "de") return de_basecamp_inbox_type_bug(inputs)
	if (locale === "fr") return fr_basecamp_inbox_type_bug(inputs)
	if (locale === "it") return it_basecamp_inbox_type_bug(inputs)
	if (locale === "nl") return nl_basecamp_inbox_type_bug(inputs)
	if (locale === "pl") return pl_basecamp_inbox_type_bug(inputs)
	if (locale === "pt") return pt_basecamp_inbox_type_bug(inputs)
	if (locale === "ru") return ru_basecamp_inbox_type_bug(inputs)
	if (locale === "sv") return sv_basecamp_inbox_type_bug(inputs)
	if (locale === "tr") return tr_basecamp_inbox_type_bug(inputs)
	if (locale === "zh") return zh_basecamp_inbox_type_bug(inputs)
	if (locale === "ja") return ja_basecamp_inbox_type_bug(inputs)
	return en_basecamp_inbox_type_bug(inputs)
});
