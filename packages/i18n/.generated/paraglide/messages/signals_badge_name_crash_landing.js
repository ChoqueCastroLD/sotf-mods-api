/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Signals_Badge_Name_Crash_LandingInputs */

const en_signals_badge_name_crash_landing = /** @type {(inputs: Signals_Badge_Name_Crash_LandingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crash Landing`)
};

const es_signals_badge_name_crash_landing = /** @type {(inputs: Signals_Badge_Name_Crash_LandingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aterrizaje forzoso`)
};

const de_signals_badge_name_crash_landing = /** @type {(inputs: Signals_Badge_Name_Crash_LandingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bruchlandung`)
};

const fr_signals_badge_name_crash_landing = /** @type {(inputs: Signals_Badge_Name_Crash_LandingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atterrissage forcé`)
};

const it_signals_badge_name_crash_landing = /** @type {(inputs: Signals_Badge_Name_Crash_LandingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Atterraggio di fortuna`)
};

const nl_signals_badge_name_crash_landing = /** @type {(inputs: Signals_Badge_Name_Crash_LandingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noodlanding`)
};

const pl_signals_badge_name_crash_landing = /** @type {(inputs: Signals_Badge_Name_Crash_LandingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Awaryjne lądowanie`)
};

const pt_signals_badge_name_crash_landing = /** @type {(inputs: Signals_Badge_Name_Crash_LandingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pouso forçado`)
};

const ru_signals_badge_name_crash_landing = /** @type {(inputs: Signals_Badge_Name_Crash_LandingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Аварийная посадка`)
};

const sv_signals_badge_name_crash_landing = /** @type {(inputs: Signals_Badge_Name_Crash_LandingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kraschlandning`)
};

const tr_signals_badge_name_crash_landing = /** @type {(inputs: Signals_Badge_Name_Crash_LandingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zorunlu İniş`)
};

const zh_signals_badge_name_crash_landing = /** @type {(inputs: Signals_Badge_Name_Crash_LandingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`迫降`)
};

const ja_signals_badge_name_crash_landing = /** @type {(inputs: Signals_Badge_Name_Crash_LandingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不時着`)
};

/**
* | output |
* | --- |
* | "Crash Landing" |
*
* @param {Signals_Badge_Name_Crash_LandingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const signals_badge_name_crash_landing = /** @type {((inputs?: Signals_Badge_Name_Crash_LandingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Signals_Badge_Name_Crash_LandingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_signals_badge_name_crash_landing(inputs)
	if (locale === "de") return de_signals_badge_name_crash_landing(inputs)
	if (locale === "fr") return fr_signals_badge_name_crash_landing(inputs)
	if (locale === "it") return it_signals_badge_name_crash_landing(inputs)
	if (locale === "nl") return nl_signals_badge_name_crash_landing(inputs)
	if (locale === "pl") return pl_signals_badge_name_crash_landing(inputs)
	if (locale === "pt") return pt_signals_badge_name_crash_landing(inputs)
	if (locale === "ru") return ru_signals_badge_name_crash_landing(inputs)
	if (locale === "sv") return sv_signals_badge_name_crash_landing(inputs)
	if (locale === "tr") return tr_signals_badge_name_crash_landing(inputs)
	if (locale === "zh") return zh_signals_badge_name_crash_landing(inputs)
	if (locale === "ja") return ja_signals_badge_name_crash_landing(inputs)
	return en_signals_badge_name_crash_landing(inputs)
});
