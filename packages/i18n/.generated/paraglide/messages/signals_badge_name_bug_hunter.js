/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Badge_Name_Bug_HunterInputs */

const en_signals_badge_name_bug_hunter = /** @type {(inputs: Signals_Badge_Name_Bug_HunterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bug Hunter`)
};

const es_signals_badge_name_bug_hunter = /** @type {(inputs: Signals_Badge_Name_Bug_HunterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cazador de bugs`)
};

const de_signals_badge_name_bug_hunter = /** @type {(inputs: Signals_Badge_Name_Bug_HunterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bugjäger`)
};

const fr_signals_badge_name_bug_hunter = /** @type {(inputs: Signals_Badge_Name_Bug_HunterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Chasseur de bugs`)
};

const it_signals_badge_name_bug_hunter = /** @type {(inputs: Signals_Badge_Name_Bug_HunterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cacciatore di bug`)
};

const nl_signals_badge_name_bug_hunter = /** @type {(inputs: Signals_Badge_Name_Bug_HunterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buggenjager`)
};

const pl_signals_badge_name_bug_hunter = /** @type {(inputs: Signals_Badge_Name_Bug_HunterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Łowca bugów`)
};

const pt_signals_badge_name_bug_hunter = /** @type {(inputs: Signals_Badge_Name_Bug_HunterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Caçador de bugs`)
};

const ru_signals_badge_name_bug_hunter = /** @type {(inputs: Signals_Badge_Name_Bug_HunterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Охотник за багами`)
};

const sv_signals_badge_name_bug_hunter = /** @type {(inputs: Signals_Badge_Name_Bug_HunterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Buggjägare`)
};

const tr_signals_badge_name_bug_hunter = /** @type {(inputs: Signals_Badge_Name_Bug_HunterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hata Avcısı`)
};

const zh_signals_badge_name_bug_hunter = /** @type {(inputs: Signals_Badge_Name_Bug_HunterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`漏洞猎手`)
};

const ja_signals_badge_name_bug_hunter = /** @type {(inputs: Signals_Badge_Name_Bug_HunterInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`バグハンター`)
};

/**
* | output |
* | --- |
* | "Bug Hunter" |
*
* @param {Signals_Badge_Name_Bug_HunterInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_badge_name_bug_hunter = /** @type {((inputs?: Signals_Badge_Name_Bug_HunterInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Badge_Name_Bug_HunterInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_badge_name_bug_hunter(inputs)
	if (locale === "de") return de_signals_badge_name_bug_hunter(inputs)
	if (locale === "fr") return fr_signals_badge_name_bug_hunter(inputs)
	if (locale === "it") return it_signals_badge_name_bug_hunter(inputs)
	if (locale === "nl") return nl_signals_badge_name_bug_hunter(inputs)
	if (locale === "pl") return pl_signals_badge_name_bug_hunter(inputs)
	if (locale === "pt") return pt_signals_badge_name_bug_hunter(inputs)
	if (locale === "ru") return ru_signals_badge_name_bug_hunter(inputs)
	if (locale === "sv") return sv_signals_badge_name_bug_hunter(inputs)
	if (locale === "tr") return tr_signals_badge_name_bug_hunter(inputs)
	if (locale === "zh") return zh_signals_badge_name_bug_hunter(inputs)
	if (locale === "ja") return ja_signals_badge_name_bug_hunter(inputs)
	return en_signals_badge_name_bug_hunter(inputs)
});
