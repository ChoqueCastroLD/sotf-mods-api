/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Density_ComfortableInputs */

const en_settings_density_comfortable = /** @type {(inputs: Settings_Density_ComfortableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comfortable`)
};

const es_settings_density_comfortable = /** @type {(inputs: Settings_Density_ComfortableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cómoda`)
};

const de_settings_density_comfortable = /** @type {(inputs: Settings_Density_ComfortableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bequem`)
};

const fr_settings_density_comfortable = /** @type {(inputs: Settings_Density_ComfortableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confortable`)
};

const it_settings_density_comfortable = /** @type {(inputs: Settings_Density_ComfortableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comoda`)
};

const nl_settings_density_comfortable = /** @type {(inputs: Settings_Density_ComfortableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ruim`)
};

const pl_settings_density_comfortable = /** @type {(inputs: Settings_Density_ComfortableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wygodna`)
};

const pt_settings_density_comfortable = /** @type {(inputs: Settings_Density_ComfortableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confortável`)
};

const ru_settings_density_comfortable = /** @type {(inputs: Settings_Density_ComfortableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Свободная`)
};

const sv_settings_density_comfortable = /** @type {(inputs: Settings_Density_ComfortableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Luftig`)
};

const tr_settings_density_comfortable = /** @type {(inputs: Settings_Density_ComfortableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rahat`)
};

const zh_settings_density_comfortable = /** @type {(inputs: Settings_Density_ComfortableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`宽松`)
};

const ja_settings_density_comfortable = /** @type {(inputs: Settings_Density_ComfortableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ゆったり`)
};

/**
* | output |
* | --- |
* | "Comfortable" |
*
* @param {Settings_Density_ComfortableInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_density_comfortable = /** @type {((inputs?: Settings_Density_ComfortableInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Density_ComfortableInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_density_comfortable(inputs)
	if (locale === "de") return de_settings_density_comfortable(inputs)
	if (locale === "fr") return fr_settings_density_comfortable(inputs)
	if (locale === "it") return it_settings_density_comfortable(inputs)
	if (locale === "nl") return nl_settings_density_comfortable(inputs)
	if (locale === "pl") return pl_settings_density_comfortable(inputs)
	if (locale === "pt") return pt_settings_density_comfortable(inputs)
	if (locale === "ru") return ru_settings_density_comfortable(inputs)
	if (locale === "sv") return sv_settings_density_comfortable(inputs)
	if (locale === "tr") return tr_settings_density_comfortable(inputs)
	if (locale === "zh") return zh_settings_density_comfortable(inputs)
	if (locale === "ja") return ja_settings_density_comfortable(inputs)
	return en_settings_density_comfortable(inputs)
});
