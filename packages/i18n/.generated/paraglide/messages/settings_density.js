/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_DensityInputs */

const en_settings_density = /** @type {(inputs: Settings_DensityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Density`)
};

const es_settings_density = /** @type {(inputs: Settings_DensityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Densidad`)
};

const de_settings_density = /** @type {(inputs: Settings_DensityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dichte`)
};

const fr_settings_density = /** @type {(inputs: Settings_DensityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Densité`)
};

const it_settings_density = /** @type {(inputs: Settings_DensityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Densità`)
};

const nl_settings_density = /** @type {(inputs: Settings_DensityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dichtheid`)
};

const pl_settings_density = /** @type {(inputs: Settings_DensityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gęstość`)
};

const pt_settings_density = /** @type {(inputs: Settings_DensityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Densidade`)
};

const ru_settings_density = /** @type {(inputs: Settings_DensityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Плотность`)
};

const sv_settings_density = /** @type {(inputs: Settings_DensityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Täthet`)
};

const tr_settings_density = /** @type {(inputs: Settings_DensityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yoğunluk`)
};

const zh_settings_density = /** @type {(inputs: Settings_DensityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`密度`)
};

const ja_settings_density = /** @type {(inputs: Settings_DensityInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`表示密度`)
};

/**
* | output |
* | --- |
* | "Density" |
*
* @param {Settings_DensityInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_density = /** @type {((inputs?: Settings_DensityInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_DensityInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_density(inputs)
	if (locale === "de") return de_settings_density(inputs)
	if (locale === "fr") return fr_settings_density(inputs)
	if (locale === "it") return it_settings_density(inputs)
	if (locale === "nl") return nl_settings_density(inputs)
	if (locale === "pl") return pl_settings_density(inputs)
	if (locale === "pt") return pt_settings_density(inputs)
	if (locale === "ru") return ru_settings_density(inputs)
	if (locale === "sv") return sv_settings_density(inputs)
	if (locale === "tr") return tr_settings_density(inputs)
	if (locale === "zh") return zh_settings_density(inputs)
	if (locale === "ja") return ja_settings_density(inputs)
	return en_settings_density(inputs)
});
