/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Email_UnverifiedInputs */

const en_settings_email_unverified = /** @type {(inputs: Settings_Email_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not verified`)
};

const es_settings_email_unverified = /** @type {(inputs: Settings_Email_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sin verificar`)
};

const de_settings_email_unverified = /** @type {(inputs: Settings_Email_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nicht bestätigt`)
};

const fr_settings_email_unverified = /** @type {(inputs: Settings_Email_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non vérifiée`)
};

const it_settings_email_unverified = /** @type {(inputs: Settings_Email_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non verificato`)
};

const nl_settings_email_unverified = /** @type {(inputs: Settings_Email_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niet bevestigd`)
};

const pl_settings_email_unverified = /** @type {(inputs: Settings_Email_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Niepotwierdzony`)
};

const pt_settings_email_unverified = /** @type {(inputs: Settings_Email_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não verificado`)
};

const ru_settings_email_unverified = /** @type {(inputs: Settings_Email_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не подтверждён`)
};

const sv_settings_email_unverified = /** @type {(inputs: Settings_Email_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inte bekräftad`)
};

const tr_settings_email_unverified = /** @type {(inputs: Settings_Email_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Doğrulanmadı`)
};

const zh_settings_email_unverified = /** @type {(inputs: Settings_Email_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未验证`)
};

const ja_settings_email_unverified = /** @type {(inputs: Settings_Email_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未確認`)
};

/**
* | output |
* | --- |
* | "Not verified" |
*
* @param {Settings_Email_UnverifiedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_email_unverified = /** @type {((inputs?: Settings_Email_UnverifiedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Email_UnverifiedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_email_unverified(inputs)
	if (locale === "de") return de_settings_email_unverified(inputs)
	if (locale === "fr") return fr_settings_email_unverified(inputs)
	if (locale === "it") return it_settings_email_unverified(inputs)
	if (locale === "nl") return nl_settings_email_unverified(inputs)
	if (locale === "pl") return pl_settings_email_unverified(inputs)
	if (locale === "pt") return pt_settings_email_unverified(inputs)
	if (locale === "ru") return ru_settings_email_unverified(inputs)
	if (locale === "sv") return sv_settings_email_unverified(inputs)
	if (locale === "tr") return tr_settings_email_unverified(inputs)
	if (locale === "zh") return zh_settings_email_unverified(inputs)
	if (locale === "ja") return ja_settings_email_unverified(inputs)
	return en_settings_email_unverified(inputs)
});
