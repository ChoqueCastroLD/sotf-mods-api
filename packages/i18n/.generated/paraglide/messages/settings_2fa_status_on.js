/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_2fa_Status_OnInputs */

const en_settings_2fa_status_on = /** @type {(inputs: Settings_2fa_Status_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`On`)
};

const es_settings_2fa_status_on = /** @type {(inputs: Settings_2fa_Status_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Activada`)
};

const de_settings_2fa_status_on = /** @type {(inputs: Settings_2fa_Status_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`An`)
};

const fr_settings_2fa_status_on = /** @type {(inputs: Settings_2fa_Status_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Activée`)
};

const it_settings_2fa_status_on = /** @type {(inputs: Settings_2fa_Status_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Attiva`)
};

const nl_settings_2fa_status_on = /** @type {(inputs: Settings_2fa_Status_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aan`)
};

const pl_settings_2fa_status_on = /** @type {(inputs: Settings_2fa_Status_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Włączona`)
};

const pt_settings_2fa_status_on = /** @type {(inputs: Settings_2fa_Status_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ativada`)
};

const ru_settings_2fa_status_on = /** @type {(inputs: Settings_2fa_Status_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Включена`)
};

const sv_settings_2fa_status_on = /** @type {(inputs: Settings_2fa_Status_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`På`)
};

const tr_settings_2fa_status_on = /** @type {(inputs: Settings_2fa_Status_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Açık`)
};

const zh_settings_2fa_status_on = /** @type {(inputs: Settings_2fa_Status_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已开启`)
};

const ja_settings_2fa_status_on = /** @type {(inputs: Settings_2fa_Status_OnInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`オン`)
};

/**
* | output |
* | --- |
* | "On" |
*
* @param {Settings_2fa_Status_OnInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_2fa_status_on = /** @type {((inputs?: Settings_2fa_Status_OnInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_2fa_Status_OnInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_2fa_status_on(inputs)
	if (locale === "de") return de_settings_2fa_status_on(inputs)
	if (locale === "fr") return fr_settings_2fa_status_on(inputs)
	if (locale === "it") return it_settings_2fa_status_on(inputs)
	if (locale === "nl") return nl_settings_2fa_status_on(inputs)
	if (locale === "pl") return pl_settings_2fa_status_on(inputs)
	if (locale === "pt") return pt_settings_2fa_status_on(inputs)
	if (locale === "ru") return ru_settings_2fa_status_on(inputs)
	if (locale === "sv") return sv_settings_2fa_status_on(inputs)
	if (locale === "tr") return tr_settings_2fa_status_on(inputs)
	if (locale === "zh") return zh_settings_2fa_status_on(inputs)
	if (locale === "ja") return ja_settings_2fa_status_on(inputs)
	return en_settings_2fa_status_on(inputs)
});
