/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kitsocial_Console_Empty_TitleInputs */

const en_kitsocial_console_empty_title = /** @type {(inputs: Kitsocial_Console_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You are not following any kit yet`)
};

const es_kitsocial_console_empty_title = /** @type {(inputs: Kitsocial_Console_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todavía no sigues ningún kit`)
};

const de_kitsocial_console_empty_title = /** @type {(inputs: Kitsocial_Console_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du folgst noch keinem Kit`)
};

const fr_kitsocial_console_empty_title = /** @type {(inputs: Kitsocial_Console_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous ne suivez encore aucun kit`)
};

const it_kitsocial_console_empty_title = /** @type {(inputs: Kitsocial_Console_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non segui ancora nessun kit`)
};

const nl_kitsocial_console_empty_title = /** @type {(inputs: Kitsocial_Console_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je volgt nog geen kits`)
};

const pl_kitsocial_console_empty_title = /** @type {(inputs: Kitsocial_Console_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie obserwujesz jeszcze żadnego zestawu`)
};

const pt_kitsocial_console_empty_title = /** @type {(inputs: Kitsocial_Console_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você ainda não segue nenhum kit`)
};

const ru_kitsocial_console_empty_title = /** @type {(inputs: Kitsocial_Console_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы пока не подписаны ни на один набор`)
};

const sv_kitsocial_console_empty_title = /** @type {(inputs: Kitsocial_Console_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du följer inga kits än`)
};

const tr_kitsocial_console_empty_title = /** @type {(inputs: Kitsocial_Console_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz hiçbir kiti takip etmiyorsun`)
};

const zh_kitsocial_console_empty_title = /** @type {(inputs: Kitsocial_Console_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你还没有关注任何套件`)
};

const ja_kitsocial_console_empty_title = /** @type {(inputs: Kitsocial_Console_Empty_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まだフォローしているキットはありません`)
};

/**
* | output |
* | --- |
* | "You are not following any kit yet" |
*
* @param {Kitsocial_Console_Empty_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_console_empty_title = /** @type {((inputs?: Kitsocial_Console_Empty_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_Console_Empty_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_console_empty_title(inputs)
	if (locale === "de") return de_kitsocial_console_empty_title(inputs)
	if (locale === "fr") return fr_kitsocial_console_empty_title(inputs)
	if (locale === "it") return it_kitsocial_console_empty_title(inputs)
	if (locale === "nl") return nl_kitsocial_console_empty_title(inputs)
	if (locale === "pl") return pl_kitsocial_console_empty_title(inputs)
	if (locale === "pt") return pt_kitsocial_console_empty_title(inputs)
	if (locale === "ru") return ru_kitsocial_console_empty_title(inputs)
	if (locale === "sv") return sv_kitsocial_console_empty_title(inputs)
	if (locale === "tr") return tr_kitsocial_console_empty_title(inputs)
	if (locale === "zh") return zh_kitsocial_console_empty_title(inputs)
	if (locale === "ja") return ja_kitsocial_console_empty_title(inputs)
	return en_kitsocial_console_empty_title(inputs)
});
