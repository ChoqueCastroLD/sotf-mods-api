/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Email_InstantInputs */

const en_settings_email_instant = /** @type {(inputs: Settings_Email_InstantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Right away`)
};

const es_settings_email_instant = /** @type {(inputs: Settings_Email_InstantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Al momento`)
};

const de_settings_email_instant = /** @type {(inputs: Settings_Email_InstantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sofort`)
};

const fr_settings_email_instant = /** @type {(inputs: Settings_Email_InstantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Immédiatement`)
};

const it_settings_email_instant = /** @type {(inputs: Settings_Email_InstantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Subito`)
};

const nl_settings_email_instant = /** @type {(inputs: Settings_Email_InstantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Direct`)
};

const pl_settings_email_instant = /** @type {(inputs: Settings_Email_InstantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Od razu`)
};

const pt_settings_email_instant = /** @type {(inputs: Settings_Email_InstantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Na hora`)
};

const ru_settings_email_instant = /** @type {(inputs: Settings_Email_InstantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сразу`)
};

const sv_settings_email_instant = /** @type {(inputs: Settings_Email_InstantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Direkt`)
};

const tr_settings_email_instant = /** @type {(inputs: Settings_Email_InstantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hemen`)
};

const zh_settings_email_instant = /** @type {(inputs: Settings_Email_InstantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`立即`)
};

const ja_settings_email_instant = /** @type {(inputs: Settings_Email_InstantInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`すぐに`)
};

/**
* | output |
* | --- |
* | "Right away" |
*
* @param {Settings_Email_InstantInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_email_instant = /** @type {((inputs?: Settings_Email_InstantInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Email_InstantInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_email_instant(inputs)
	if (locale === "de") return de_settings_email_instant(inputs)
	if (locale === "fr") return fr_settings_email_instant(inputs)
	if (locale === "it") return it_settings_email_instant(inputs)
	if (locale === "nl") return nl_settings_email_instant(inputs)
	if (locale === "pl") return pl_settings_email_instant(inputs)
	if (locale === "pt") return pt_settings_email_instant(inputs)
	if (locale === "ru") return ru_settings_email_instant(inputs)
	if (locale === "sv") return sv_settings_email_instant(inputs)
	if (locale === "tr") return tr_settings_email_instant(inputs)
	if (locale === "zh") return zh_settings_email_instant(inputs)
	if (locale === "ja") return ja_settings_email_instant(inputs)
	return en_settings_email_instant(inputs)
});
