/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_2fa_ContinueInputs */

const en_settings_2fa_continue = /** @type {(inputs: Settings_2fa_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continue`)
};

const es_settings_2fa_continue = /** @type {(inputs: Settings_2fa_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continuar`)
};

const de_settings_2fa_continue = /** @type {(inputs: Settings_2fa_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weiter`)
};

const fr_settings_2fa_continue = /** @type {(inputs: Settings_2fa_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continuer`)
};

const it_settings_2fa_continue = /** @type {(inputs: Settings_2fa_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continua`)
};

const nl_settings_2fa_continue = /** @type {(inputs: Settings_2fa_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Doorgaan`)
};

const pl_settings_2fa_continue = /** @type {(inputs: Settings_2fa_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dalej`)
};

const pt_settings_2fa_continue = /** @type {(inputs: Settings_2fa_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Continuar`)
};

const ru_settings_2fa_continue = /** @type {(inputs: Settings_2fa_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Продолжить`)
};

const sv_settings_2fa_continue = /** @type {(inputs: Settings_2fa_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Fortsätt`)
};

const tr_settings_2fa_continue = /** @type {(inputs: Settings_2fa_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Devam`)
};

const zh_settings_2fa_continue = /** @type {(inputs: Settings_2fa_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`继续`)
};

const ja_settings_2fa_continue = /** @type {(inputs: Settings_2fa_ContinueInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`続ける`)
};

/**
* | output |
* | --- |
* | "Continue" |
*
* @param {Settings_2fa_ContinueInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_2fa_continue = /** @type {((inputs?: Settings_2fa_ContinueInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_2fa_ContinueInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_2fa_continue(inputs)
	if (locale === "de") return de_settings_2fa_continue(inputs)
	if (locale === "fr") return fr_settings_2fa_continue(inputs)
	if (locale === "it") return it_settings_2fa_continue(inputs)
	if (locale === "nl") return nl_settings_2fa_continue(inputs)
	if (locale === "pl") return pl_settings_2fa_continue(inputs)
	if (locale === "pt") return pt_settings_2fa_continue(inputs)
	if (locale === "ru") return ru_settings_2fa_continue(inputs)
	if (locale === "sv") return sv_settings_2fa_continue(inputs)
	if (locale === "tr") return tr_settings_2fa_continue(inputs)
	if (locale === "zh") return zh_settings_2fa_continue(inputs)
	if (locale === "ja") return ja_settings_2fa_continue(inputs)
	return en_settings_2fa_continue(inputs)
});
