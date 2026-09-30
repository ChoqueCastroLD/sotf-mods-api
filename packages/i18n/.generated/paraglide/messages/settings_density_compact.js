/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Density_CompactInputs */

const en_settings_density_compact = /** @type {(inputs: Settings_Density_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compact`)
};

const es_settings_density_compact = /** @type {(inputs: Settings_Density_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compacta`)
};

const de_settings_density_compact = /** @type {(inputs: Settings_Density_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kompakt`)
};

const fr_settings_density_compact = /** @type {(inputs: Settings_Density_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compacte`)
};

const it_settings_density_compact = /** @type {(inputs: Settings_Density_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compatta`)
};

const nl_settings_density_compact = /** @type {(inputs: Settings_Density_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compact`)
};

const pl_settings_density_compact = /** @type {(inputs: Settings_Density_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kompaktowa`)
};

const pt_settings_density_compact = /** @type {(inputs: Settings_Density_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Compacta`)
};

const ru_settings_density_compact = /** @type {(inputs: Settings_Density_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Компактная`)
};

const sv_settings_density_compact = /** @type {(inputs: Settings_Density_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kompakt`)
};

const tr_settings_density_compact = /** @type {(inputs: Settings_Density_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sıkı`)
};

const zh_settings_density_compact = /** @type {(inputs: Settings_Density_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`紧凑`)
};

const ja_settings_density_compact = /** @type {(inputs: Settings_Density_CompactInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コンパクト`)
};

/**
* | output |
* | --- |
* | "Compact" |
*
* @param {Settings_Density_CompactInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_density_compact = /** @type {((inputs?: Settings_Density_CompactInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Density_CompactInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_density_compact(inputs)
	if (locale === "de") return de_settings_density_compact(inputs)
	if (locale === "fr") return fr_settings_density_compact(inputs)
	if (locale === "it") return it_settings_density_compact(inputs)
	if (locale === "nl") return nl_settings_density_compact(inputs)
	if (locale === "pl") return pl_settings_density_compact(inputs)
	if (locale === "pt") return pt_settings_density_compact(inputs)
	if (locale === "ru") return ru_settings_density_compact(inputs)
	if (locale === "sv") return sv_settings_density_compact(inputs)
	if (locale === "tr") return tr_settings_density_compact(inputs)
	if (locale === "zh") return zh_settings_density_compact(inputs)
	if (locale === "ja") return ja_settings_density_compact(inputs)
	return en_settings_density_compact(inputs)
});
