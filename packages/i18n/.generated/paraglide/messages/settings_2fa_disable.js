/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_2fa_DisableInputs */

const en_settings_2fa_disable = /** @type {(inputs: Settings_2fa_DisableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Turn off`)
};

const es_settings_2fa_disable = /** @type {(inputs: Settings_2fa_DisableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desactivar`)
};

const de_settings_2fa_disable = /** @type {(inputs: Settings_2fa_DisableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deaktivieren`)
};

const fr_settings_2fa_disable = /** @type {(inputs: Settings_2fa_DisableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Désactiver`)
};

const it_settings_2fa_disable = /** @type {(inputs: Settings_2fa_DisableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Disattiva`)
};

const nl_settings_2fa_disable = /** @type {(inputs: Settings_2fa_DisableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uitschakelen`)
};

const pl_settings_2fa_disable = /** @type {(inputs: Settings_2fa_DisableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wyłącz`)
};

const pt_settings_2fa_disable = /** @type {(inputs: Settings_2fa_DisableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desativar`)
};

const ru_settings_2fa_disable = /** @type {(inputs: Settings_2fa_DisableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выключить`)
};

const sv_settings_2fa_disable = /** @type {(inputs: Settings_2fa_DisableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stäng av`)
};

const tr_settings_2fa_disable = /** @type {(inputs: Settings_2fa_DisableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kapat`)
};

const zh_settings_2fa_disable = /** @type {(inputs: Settings_2fa_DisableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`关闭`)
};

const ja_settings_2fa_disable = /** @type {(inputs: Settings_2fa_DisableInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`オフにする`)
};

/**
* | output |
* | --- |
* | "Turn off" |
*
* @param {Settings_2fa_DisableInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_2fa_disable = /** @type {((inputs?: Settings_2fa_DisableInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_2fa_DisableInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_2fa_disable(inputs)
	if (locale === "de") return de_settings_2fa_disable(inputs)
	if (locale === "fr") return fr_settings_2fa_disable(inputs)
	if (locale === "it") return it_settings_2fa_disable(inputs)
	if (locale === "nl") return nl_settings_2fa_disable(inputs)
	if (locale === "pl") return pl_settings_2fa_disable(inputs)
	if (locale === "pt") return pt_settings_2fa_disable(inputs)
	if (locale === "ru") return ru_settings_2fa_disable(inputs)
	if (locale === "sv") return sv_settings_2fa_disable(inputs)
	if (locale === "tr") return tr_settings_2fa_disable(inputs)
	if (locale === "zh") return zh_settings_2fa_disable(inputs)
	if (locale === "ja") return ja_settings_2fa_disable(inputs)
	return en_settings_2fa_disable(inputs)
});
