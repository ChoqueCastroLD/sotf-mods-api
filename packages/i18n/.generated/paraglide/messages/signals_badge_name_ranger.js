/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Badge_Name_RangerInputs */

const en_signals_badge_name_ranger = /** @type {(inputs: Signals_Badge_Name_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ranger`)
};

const es_signals_badge_name_ranger = /** @type {(inputs: Signals_Badge_Name_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guardabosques`)
};

const de_signals_badge_name_ranger = /** @type {(inputs: Signals_Badge_Name_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ranger`)
};

const fr_signals_badge_name_ranger = /** @type {(inputs: Signals_Badge_Name_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ranger`)
};

const it_signals_badge_name_ranger = /** @type {(inputs: Signals_Badge_Name_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ranger`)
};

const nl_signals_badge_name_ranger = /** @type {(inputs: Signals_Badge_Name_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ranger`)
};

const pl_signals_badge_name_ranger = /** @type {(inputs: Signals_Badge_Name_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Strażnik`)
};

const pt_signals_badge_name_ranger = /** @type {(inputs: Signals_Badge_Name_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Guarda`)
};

const ru_signals_badge_name_ranger = /** @type {(inputs: Signals_Badge_Name_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Рейнджер`)
};

const sv_signals_badge_name_ranger = /** @type {(inputs: Signals_Badge_Name_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ranger`)
};

const tr_signals_badge_name_ranger = /** @type {(inputs: Signals_Badge_Name_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Korucu`)
};

const zh_signals_badge_name_ranger = /** @type {(inputs: Signals_Badge_Name_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`护林员`)
};

const ja_signals_badge_name_ranger = /** @type {(inputs: Signals_Badge_Name_RangerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`レンジャー`)
};

/**
* | output |
* | --- |
* | "Ranger" |
*
* @param {Signals_Badge_Name_RangerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_badge_name_ranger = /** @type {((inputs?: Signals_Badge_Name_RangerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Badge_Name_RangerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_badge_name_ranger(inputs)
	if (locale === "de") return de_signals_badge_name_ranger(inputs)
	if (locale === "fr") return fr_signals_badge_name_ranger(inputs)
	if (locale === "it") return it_signals_badge_name_ranger(inputs)
	if (locale === "nl") return nl_signals_badge_name_ranger(inputs)
	if (locale === "pl") return pl_signals_badge_name_ranger(inputs)
	if (locale === "pt") return pt_signals_badge_name_ranger(inputs)
	if (locale === "ru") return ru_signals_badge_name_ranger(inputs)
	if (locale === "sv") return sv_signals_badge_name_ranger(inputs)
	if (locale === "tr") return tr_signals_badge_name_ranger(inputs)
	if (locale === "zh") return zh_signals_badge_name_ranger(inputs)
	if (locale === "ja") return ja_signals_badge_name_ranger(inputs)
	return en_signals_badge_name_ranger(inputs)
});
