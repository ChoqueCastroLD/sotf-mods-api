/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_2fa_EnableInputs */

const en_settings_2fa_enable = /** @type {(inputs: Settings_2fa_EnableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Turn on`)
};

const es_settings_2fa_enable = /** @type {(inputs: Settings_2fa_EnableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Activar`)
};

const de_settings_2fa_enable = /** @type {(inputs: Settings_2fa_EnableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktivieren`)
};

const fr_settings_2fa_enable = /** @type {(inputs: Settings_2fa_EnableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Activer`)
};

const it_settings_2fa_enable = /** @type {(inputs: Settings_2fa_EnableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Attiva`)
};

const nl_settings_2fa_enable = /** @type {(inputs: Settings_2fa_EnableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inschakelen`)
};

const pl_settings_2fa_enable = /** @type {(inputs: Settings_2fa_EnableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Włącz`)
};

const pt_settings_2fa_enable = /** @type {(inputs: Settings_2fa_EnableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ativar`)
};

const ru_settings_2fa_enable = /** @type {(inputs: Settings_2fa_EnableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Включить`)
};

const sv_settings_2fa_enable = /** @type {(inputs: Settings_2fa_EnableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aktivera`)
};

const tr_settings_2fa_enable = /** @type {(inputs: Settings_2fa_EnableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aç`)
};

const zh_settings_2fa_enable = /** @type {(inputs: Settings_2fa_EnableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`开启`)
};

const ja_settings_2fa_enable = /** @type {(inputs: Settings_2fa_EnableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`オンにする`)
};

/**
* | output |
* | --- |
* | "Turn on" |
*
* @param {Settings_2fa_EnableInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_2fa_enable = /** @type {((inputs?: Settings_2fa_EnableInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_2fa_EnableInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_2fa_enable(inputs)
	if (locale === "de") return de_settings_2fa_enable(inputs)
	if (locale === "fr") return fr_settings_2fa_enable(inputs)
	if (locale === "it") return it_settings_2fa_enable(inputs)
	if (locale === "nl") return nl_settings_2fa_enable(inputs)
	if (locale === "pl") return pl_settings_2fa_enable(inputs)
	if (locale === "pt") return pt_settings_2fa_enable(inputs)
	if (locale === "ru") return ru_settings_2fa_enable(inputs)
	if (locale === "sv") return sv_settings_2fa_enable(inputs)
	if (locale === "tr") return tr_settings_2fa_enable(inputs)
	if (locale === "zh") return zh_settings_2fa_enable(inputs)
	if (locale === "ja") return ja_settings_2fa_enable(inputs)
	return en_settings_2fa_enable(inputs)
});
