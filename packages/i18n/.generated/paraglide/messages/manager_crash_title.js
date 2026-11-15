/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Crash_TitleInputs */

const en_manager_crash_title = /** @type {(inputs: Manager_Crash_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crashes`)
};

const es_manager_crash_title = /** @type {(inputs: Manager_Crash_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cierres del juego`)
};

const de_manager_crash_title = /** @type {(inputs: Manager_Crash_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abstürze`)
};

const fr_manager_crash_title = /** @type {(inputs: Manager_Crash_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plantages`)
};

const it_manager_crash_title = /** @type {(inputs: Manager_Crash_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crash`)
};

const nl_manager_crash_title = /** @type {(inputs: Manager_Crash_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crashes`)
};

const pl_manager_crash_title = /** @type {(inputs: Manager_Crash_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Awarie`)
};

const pt_manager_crash_title = /** @type {(inputs: Manager_Crash_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Travamentos`)
};

const ru_manager_crash_title = /** @type {(inputs: Manager_Crash_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вылеты`)
};

const sv_manager_crash_title = /** @type {(inputs: Manager_Crash_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Krascher`)
};

const tr_manager_crash_title = /** @type {(inputs: Manager_Crash_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çökmeler`)
};

const zh_manager_crash_title = /** @type {(inputs: Manager_Crash_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`崩溃`)
};

const ja_manager_crash_title = /** @type {(inputs: Manager_Crash_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`クラッシュ`)
};

/**
* | output |
* | --- |
* | "Crashes" |
*
* @param {Manager_Crash_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_crash_title = /** @type {((inputs?: Manager_Crash_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Crash_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_crash_title(inputs)
	if (locale === "de") return de_manager_crash_title(inputs)
	if (locale === "fr") return fr_manager_crash_title(inputs)
	if (locale === "it") return it_manager_crash_title(inputs)
	if (locale === "nl") return nl_manager_crash_title(inputs)
	if (locale === "pl") return pl_manager_crash_title(inputs)
	if (locale === "pt") return pt_manager_crash_title(inputs)
	if (locale === "ru") return ru_manager_crash_title(inputs)
	if (locale === "sv") return sv_manager_crash_title(inputs)
	if (locale === "tr") return tr_manager_crash_title(inputs)
	if (locale === "zh") return zh_manager_crash_title(inputs)
	if (locale === "ja") return ja_manager_crash_title(inputs)
	return en_manager_crash_title(inputs)
});
