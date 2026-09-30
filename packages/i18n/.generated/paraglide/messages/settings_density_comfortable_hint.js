/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Density_Comfortable_HintInputs */

const en_settings_density_comfortable_hint = /** @type {(inputs: Settings_Density_Comfortable_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`More breathing room.`)
};

const es_settings_density_comfortable_hint = /** @type {(inputs: Settings_Density_Comfortable_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Más espacio para respirar.`)
};

const de_settings_density_comfortable_hint = /** @type {(inputs: Settings_Density_Comfortable_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mehr Luft zum Atmen.`)
};

const fr_settings_density_comfortable_hint = /** @type {(inputs: Settings_Density_Comfortable_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plus d’espace pour respirer.`)
};

const it_settings_density_comfortable_hint = /** @type {(inputs: Settings_Density_Comfortable_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Più spazio per respirare.`)
};

const nl_settings_density_comfortable_hint = /** @type {(inputs: Settings_Density_Comfortable_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Meer ademruimte.`)
};

const pl_settings_density_comfortable_hint = /** @type {(inputs: Settings_Density_Comfortable_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Więcej przestrzeni.`)
};

const pt_settings_density_comfortable_hint = /** @type {(inputs: Settings_Density_Comfortable_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mais espaço para respirar.`)
};

const ru_settings_density_comfortable_hint = /** @type {(inputs: Settings_Density_Comfortable_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Больше воздуха.`)
};

const sv_settings_density_comfortable_hint = /** @type {(inputs: Settings_Density_Comfortable_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mer andrum.`)
};

const tr_settings_density_comfortable_hint = /** @type {(inputs: Settings_Density_Comfortable_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Daha fazla nefes alanı.`)
};

const zh_settings_density_comfortable_hint = /** @type {(inputs: Settings_Density_Comfortable_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`留出更多空间。`)
};

const ja_settings_density_comfortable_hint = /** @type {(inputs: Settings_Density_Comfortable_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`余白を多めに。`)
};

/**
* | output |
* | --- |
* | "More breathing room." |
*
* @param {Settings_Density_Comfortable_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_density_comfortable_hint = /** @type {((inputs?: Settings_Density_Comfortable_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Density_Comfortable_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_density_comfortable_hint(inputs)
	if (locale === "de") return de_settings_density_comfortable_hint(inputs)
	if (locale === "fr") return fr_settings_density_comfortable_hint(inputs)
	if (locale === "it") return it_settings_density_comfortable_hint(inputs)
	if (locale === "nl") return nl_settings_density_comfortable_hint(inputs)
	if (locale === "pl") return pl_settings_density_comfortable_hint(inputs)
	if (locale === "pt") return pt_settings_density_comfortable_hint(inputs)
	if (locale === "ru") return ru_settings_density_comfortable_hint(inputs)
	if (locale === "sv") return sv_settings_density_comfortable_hint(inputs)
	if (locale === "tr") return tr_settings_density_comfortable_hint(inputs)
	if (locale === "zh") return zh_settings_density_comfortable_hint(inputs)
	if (locale === "ja") return ja_settings_density_comfortable_hint(inputs)
	return en_settings_density_comfortable_hint(inputs)
});
