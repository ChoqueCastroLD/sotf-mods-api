/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Number_CompactInputs */

const en_settings_number_compact = /** @type {(inputs: Settings_Number_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Short`)
};

const es_settings_number_compact = /** @type {(inputs: Settings_Number_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abreviados`)
};

const de_settings_number_compact = /** @type {(inputs: Settings_Number_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kurz`)
};

const fr_settings_number_compact = /** @type {(inputs: Settings_Number_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abrégés`)
};

const it_settings_number_compact = /** @type {(inputs: Settings_Number_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abbreviati`)
};

const nl_settings_number_compact = /** @type {(inputs: Settings_Number_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kort`)
};

const pl_settings_number_compact = /** @type {(inputs: Settings_Number_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skrócone`)
};

const pt_settings_number_compact = /** @type {(inputs: Settings_Number_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Abreviados`)
};

const ru_settings_number_compact = /** @type {(inputs: Settings_Number_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сокращённо`)
};

const sv_settings_number_compact = /** @type {(inputs: Settings_Number_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Förkortade`)
};

const tr_settings_number_compact = /** @type {(inputs: Settings_Number_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kısaltılmış`)
};

const zh_settings_number_compact = /** @type {(inputs: Settings_Number_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`简写`)
};

const ja_settings_number_compact = /** @type {(inputs: Settings_Number_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`短縮`)
};

/**
* | output |
* | --- |
* | "Short" |
*
* @param {Settings_Number_CompactInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_number_compact = /** @type {((inputs?: Settings_Number_CompactInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Number_CompactInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_number_compact(inputs)
	if (locale === "de") return de_settings_number_compact(inputs)
	if (locale === "fr") return fr_settings_number_compact(inputs)
	if (locale === "it") return it_settings_number_compact(inputs)
	if (locale === "nl") return nl_settings_number_compact(inputs)
	if (locale === "pl") return pl_settings_number_compact(inputs)
	if (locale === "pt") return pt_settings_number_compact(inputs)
	if (locale === "ru") return ru_settings_number_compact(inputs)
	if (locale === "sv") return sv_settings_number_compact(inputs)
	if (locale === "tr") return tr_settings_number_compact(inputs)
	if (locale === "zh") return zh_settings_number_compact(inputs)
	if (locale === "ja") return ja_settings_number_compact(inputs)
	return en_settings_number_compact(inputs)
});
