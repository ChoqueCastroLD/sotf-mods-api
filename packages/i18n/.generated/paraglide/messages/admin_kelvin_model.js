/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Kelvin_ModelInputs */

const en_admin_kelvin_model = /** @type {(inputs: Admin_Kelvin_ModelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Model`)
};

const es_admin_kelvin_model = /** @type {(inputs: Admin_Kelvin_ModelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modelo`)
};

const de_admin_kelvin_model = /** @type {(inputs: Admin_Kelvin_ModelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modell`)
};

const fr_admin_kelvin_model = /** @type {(inputs: Admin_Kelvin_ModelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modèle`)
};

const it_admin_kelvin_model = /** @type {(inputs: Admin_Kelvin_ModelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modello`)
};

const nl_admin_kelvin_model = /** @type {(inputs: Admin_Kelvin_ModelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Model`)
};

const pl_admin_kelvin_model = /** @type {(inputs: Admin_Kelvin_ModelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Model`)
};

const pt_admin_kelvin_model = /** @type {(inputs: Admin_Kelvin_ModelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modelo`)
};

const ru_admin_kelvin_model = /** @type {(inputs: Admin_Kelvin_ModelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Модель`)
};

const sv_admin_kelvin_model = /** @type {(inputs: Admin_Kelvin_ModelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modell`)
};

const tr_admin_kelvin_model = /** @type {(inputs: Admin_Kelvin_ModelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Model`)
};

const zh_admin_kelvin_model = /** @type {(inputs: Admin_Kelvin_ModelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模型`)
};

const ja_admin_kelvin_model = /** @type {(inputs: Admin_Kelvin_ModelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`モデル`)
};

/**
* | output |
* | --- |
* | "Model" |
*
* @param {Admin_Kelvin_ModelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_kelvin_model = /** @type {((inputs?: Admin_Kelvin_ModelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Kelvin_ModelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_kelvin_model(inputs)
	if (locale === "de") return de_admin_kelvin_model(inputs)
	if (locale === "fr") return fr_admin_kelvin_model(inputs)
	if (locale === "it") return it_admin_kelvin_model(inputs)
	if (locale === "nl") return nl_admin_kelvin_model(inputs)
	if (locale === "pl") return pl_admin_kelvin_model(inputs)
	if (locale === "pt") return pt_admin_kelvin_model(inputs)
	if (locale === "ru") return ru_admin_kelvin_model(inputs)
	if (locale === "sv") return sv_admin_kelvin_model(inputs)
	if (locale === "tr") return tr_admin_kelvin_model(inputs)
	if (locale === "zh") return zh_admin_kelvin_model(inputs)
	if (locale === "ja") return ja_admin_kelvin_model(inputs)
	return en_admin_kelvin_model(inputs)
});
