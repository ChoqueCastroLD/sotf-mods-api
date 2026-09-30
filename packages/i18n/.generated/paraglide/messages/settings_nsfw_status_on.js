/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Nsfw_Status_OnInputs */

const en_settings_nsfw_status_on = /** @type {(inputs: Settings_Nsfw_Status_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Shown`)
};

const es_settings_nsfw_status_on = /** @type {(inputs: Settings_Nsfw_Status_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visible`)
};

const de_settings_nsfw_status_on = /** @type {(inputs: Settings_Nsfw_Status_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sichtbar`)
};

const fr_settings_nsfw_status_on = /** @type {(inputs: Settings_Nsfw_Status_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Affiché`)
};

const it_settings_nsfw_status_on = /** @type {(inputs: Settings_Nsfw_Status_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visibili`)
};

const nl_settings_nsfw_status_on = /** @type {(inputs: Settings_Nsfw_Status_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zichtbaar`)
};

const pl_settings_nsfw_status_on = /** @type {(inputs: Settings_Nsfw_Status_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Widoczne`)
};

const pt_settings_nsfw_status_on = /** @type {(inputs: Settings_Nsfw_Status_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visível`)
};

const ru_settings_nsfw_status_on = /** @type {(inputs: Settings_Nsfw_Status_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Показывается`)
};

const sv_settings_nsfw_status_on = /** @type {(inputs: Settings_Nsfw_Status_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Visas`)
};

const tr_settings_nsfw_status_on = /** @type {(inputs: Settings_Nsfw_Status_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gösteriliyor`)
};

const zh_settings_nsfw_status_on = /** @type {(inputs: Settings_Nsfw_Status_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`显示`)
};

const ja_settings_nsfw_status_on = /** @type {(inputs: Settings_Nsfw_Status_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`表示`)
};

/**
* | output |
* | --- |
* | "Shown" |
*
* @param {Settings_Nsfw_Status_OnInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_nsfw_status_on = /** @type {((inputs?: Settings_Nsfw_Status_OnInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Nsfw_Status_OnInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_nsfw_status_on(inputs)
	if (locale === "de") return de_settings_nsfw_status_on(inputs)
	if (locale === "fr") return fr_settings_nsfw_status_on(inputs)
	if (locale === "it") return it_settings_nsfw_status_on(inputs)
	if (locale === "nl") return nl_settings_nsfw_status_on(inputs)
	if (locale === "pl") return pl_settings_nsfw_status_on(inputs)
	if (locale === "pt") return pt_settings_nsfw_status_on(inputs)
	if (locale === "ru") return ru_settings_nsfw_status_on(inputs)
	if (locale === "sv") return sv_settings_nsfw_status_on(inputs)
	if (locale === "tr") return tr_settings_nsfw_status_on(inputs)
	if (locale === "zh") return zh_settings_nsfw_status_on(inputs)
	if (locale === "ja") return ja_settings_nsfw_status_on(inputs)
	return en_settings_nsfw_status_on(inputs)
});
