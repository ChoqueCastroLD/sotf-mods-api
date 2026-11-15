/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Manager_Fact_WindowsInputs */

const en_manager_fact_windows = /** @type {(inputs: Manager_Fact_WindowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Windows 10 and 11`)
};

const es_manager_fact_windows = /** @type {(inputs: Manager_Fact_WindowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Windows 10 y 11`)
};

const de_manager_fact_windows = /** @type {(inputs: Manager_Fact_WindowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Windows 10 und 11`)
};

const fr_manager_fact_windows = /** @type {(inputs: Manager_Fact_WindowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Windows 10 et 11`)
};

const it_manager_fact_windows = /** @type {(inputs: Manager_Fact_WindowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Windows 10 e 11`)
};

const nl_manager_fact_windows = /** @type {(inputs: Manager_Fact_WindowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Windows 10 en 11`)
};

const pl_manager_fact_windows = /** @type {(inputs: Manager_Fact_WindowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Windows 10 i 11`)
};

const pt_manager_fact_windows = /** @type {(inputs: Manager_Fact_WindowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Windows 10 e 11`)
};

const ru_manager_fact_windows = /** @type {(inputs: Manager_Fact_WindowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Windows 10 и 11`)
};

const sv_manager_fact_windows = /** @type {(inputs: Manager_Fact_WindowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Windows 10 och 11`)
};

const tr_manager_fact_windows = /** @type {(inputs: Manager_Fact_WindowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Windows 10 ve 11`)
};

const zh_manager_fact_windows = /** @type {(inputs: Manager_Fact_WindowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Windows 10 和 11`)
};

const ja_manager_fact_windows = /** @type {(inputs: Manager_Fact_WindowsInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Windows 10 / 11`)
};

/**
* | output |
* | --- |
* | "Windows 10 and 11" |
*
* @param {Manager_Fact_WindowsInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const manager_fact_windows = /** @type {((inputs?: Manager_Fact_WindowsInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Manager_Fact_WindowsInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_manager_fact_windows(inputs)
	if (locale === "de") return de_manager_fact_windows(inputs)
	if (locale === "fr") return fr_manager_fact_windows(inputs)
	if (locale === "it") return it_manager_fact_windows(inputs)
	if (locale === "nl") return nl_manager_fact_windows(inputs)
	if (locale === "pl") return pl_manager_fact_windows(inputs)
	if (locale === "pt") return pt_manager_fact_windows(inputs)
	if (locale === "ru") return ru_manager_fact_windows(inputs)
	if (locale === "sv") return sv_manager_fact_windows(inputs)
	if (locale === "tr") return tr_manager_fact_windows(inputs)
	if (locale === "zh") return zh_manager_fact_windows(inputs)
	if (locale === "ja") return ja_manager_fact_windows(inputs)
	return en_manager_fact_windows(inputs)
});
