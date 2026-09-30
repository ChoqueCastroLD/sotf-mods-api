/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Badge_Name_Night_OwlInputs */

const en_signals_badge_name_night_owl = /** @type {(inputs: Signals_Badge_Name_Night_OwlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Night Owl`)
};

const es_signals_badge_name_night_owl = /** @type {(inputs: Signals_Badge_Name_Night_OwlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Búho nocturno`)
};

const de_signals_badge_name_night_owl = /** @type {(inputs: Signals_Badge_Name_Night_OwlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nachteule`)
};

const fr_signals_badge_name_night_owl = /** @type {(inputs: Signals_Badge_Name_Night_OwlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oiseau de nuit`)
};

const it_signals_badge_name_night_owl = /** @type {(inputs: Signals_Badge_Name_Night_OwlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nottambulo`)
};

const nl_signals_badge_name_night_owl = /** @type {(inputs: Signals_Badge_Name_Night_OwlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nachtuil`)
};

const pl_signals_badge_name_night_owl = /** @type {(inputs: Signals_Badge_Name_Night_OwlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nocny marek`)
};

const pt_signals_badge_name_night_owl = /** @type {(inputs: Signals_Badge_Name_Night_OwlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Coruja noturna`)
};

const ru_signals_badge_name_night_owl = /** @type {(inputs: Signals_Badge_Name_Night_OwlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ночная сова`)
};

const sv_signals_badge_name_night_owl = /** @type {(inputs: Signals_Badge_Name_Night_OwlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nattuggla`)
};

const tr_signals_badge_name_night_owl = /** @type {(inputs: Signals_Badge_Name_Night_OwlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gece Kuşu`)
};

const zh_signals_badge_name_night_owl = /** @type {(inputs: Signals_Badge_Name_Night_OwlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`夜猫子`)
};

const ja_signals_badge_name_night_owl = /** @type {(inputs: Signals_Badge_Name_Night_OwlInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`夜ふかし`)
};

/**
* | output |
* | --- |
* | "Night Owl" |
*
* @param {Signals_Badge_Name_Night_OwlInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_badge_name_night_owl = /** @type {((inputs?: Signals_Badge_Name_Night_OwlInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Badge_Name_Night_OwlInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_badge_name_night_owl(inputs)
	if (locale === "de") return de_signals_badge_name_night_owl(inputs)
	if (locale === "fr") return fr_signals_badge_name_night_owl(inputs)
	if (locale === "it") return it_signals_badge_name_night_owl(inputs)
	if (locale === "nl") return nl_signals_badge_name_night_owl(inputs)
	if (locale === "pl") return pl_signals_badge_name_night_owl(inputs)
	if (locale === "pt") return pt_signals_badge_name_night_owl(inputs)
	if (locale === "ru") return ru_signals_badge_name_night_owl(inputs)
	if (locale === "sv") return sv_signals_badge_name_night_owl(inputs)
	if (locale === "tr") return tr_signals_badge_name_night_owl(inputs)
	if (locale === "zh") return zh_signals_badge_name_night_owl(inputs)
	if (locale === "ja") return ja_signals_badge_name_night_owl(inputs)
	return en_signals_badge_name_night_owl(inputs)
});
