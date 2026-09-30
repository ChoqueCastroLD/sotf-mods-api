/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Badge_Name_CartographerInputs */

const en_signals_badge_name_cartographer = /** @type {(inputs: Signals_Badge_Name_CartographerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cartographer`)
};

const es_signals_badge_name_cartographer = /** @type {(inputs: Signals_Badge_Name_CartographerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cartógrafo`)
};

const de_signals_badge_name_cartographer = /** @type {(inputs: Signals_Badge_Name_CartographerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kartograf`)
};

const fr_signals_badge_name_cartographer = /** @type {(inputs: Signals_Badge_Name_CartographerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cartographe`)
};

const it_signals_badge_name_cartographer = /** @type {(inputs: Signals_Badge_Name_CartographerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cartografo`)
};

const nl_signals_badge_name_cartographer = /** @type {(inputs: Signals_Badge_Name_CartographerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cartograaf`)
};

const pl_signals_badge_name_cartographer = /** @type {(inputs: Signals_Badge_Name_CartographerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kartograf`)
};

const pt_signals_badge_name_cartographer = /** @type {(inputs: Signals_Badge_Name_CartographerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cartógrafo`)
};

const ru_signals_badge_name_cartographer = /** @type {(inputs: Signals_Badge_Name_CartographerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Картограф`)
};

const sv_signals_badge_name_cartographer = /** @type {(inputs: Signals_Badge_Name_CartographerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kartograf`)
};

const tr_signals_badge_name_cartographer = /** @type {(inputs: Signals_Badge_Name_CartographerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Haritacı`)
};

const zh_signals_badge_name_cartographer = /** @type {(inputs: Signals_Badge_Name_CartographerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`制图师`)
};

const ja_signals_badge_name_cartographer = /** @type {(inputs: Signals_Badge_Name_CartographerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`地図職人`)
};

/**
* | output |
* | --- |
* | "Cartographer" |
*
* @param {Signals_Badge_Name_CartographerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_badge_name_cartographer = /** @type {((inputs?: Signals_Badge_Name_CartographerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Badge_Name_CartographerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_badge_name_cartographer(inputs)
	if (locale === "de") return de_signals_badge_name_cartographer(inputs)
	if (locale === "fr") return fr_signals_badge_name_cartographer(inputs)
	if (locale === "it") return it_signals_badge_name_cartographer(inputs)
	if (locale === "nl") return nl_signals_badge_name_cartographer(inputs)
	if (locale === "pl") return pl_signals_badge_name_cartographer(inputs)
	if (locale === "pt") return pt_signals_badge_name_cartographer(inputs)
	if (locale === "ru") return ru_signals_badge_name_cartographer(inputs)
	if (locale === "sv") return sv_signals_badge_name_cartographer(inputs)
	if (locale === "tr") return tr_signals_badge_name_cartographer(inputs)
	if (locale === "zh") return zh_signals_badge_name_cartographer(inputs)
	if (locale === "ja") return ja_signals_badge_name_cartographer(inputs)
	return en_signals_badge_name_cartographer(inputs)
});
