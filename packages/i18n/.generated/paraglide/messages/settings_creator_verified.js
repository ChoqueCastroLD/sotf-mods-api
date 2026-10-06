/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Creator_VerifiedInputs */

const en_settings_creator_verified = /** @type {(inputs: Settings_Creator_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trusted`)
};

const es_settings_creator_verified = /** @type {(inputs: Settings_Creator_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De confianza`)
};

const de_settings_creator_verified = /** @type {(inputs: Settings_Creator_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vertrauenswürdig`)
};

const fr_settings_creator_verified = /** @type {(inputs: Settings_Creator_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De confiance`)
};

const it_settings_creator_verified = /** @type {(inputs: Settings_Creator_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Affidabile`)
};

const nl_settings_creator_verified = /** @type {(inputs: Settings_Creator_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vertrouwd`)
};

const pl_settings_creator_verified = /** @type {(inputs: Settings_Creator_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaufany`)
};

const pt_settings_creator_verified = /** @type {(inputs: Settings_Creator_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De confiança`)
};

const ru_settings_creator_verified = /** @type {(inputs: Settings_Creator_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверенный`)
};

const sv_settings_creator_verified = /** @type {(inputs: Settings_Creator_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Betrodd`)
};

const tr_settings_creator_verified = /** @type {(inputs: Settings_Creator_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güvenilir`)
};

const zh_settings_creator_verified = /** @type {(inputs: Settings_Creator_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可信`)
};

const ja_settings_creator_verified = /** @type {(inputs: Settings_Creator_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`信頼済み`)
};

/**
* | output |
* | --- |
* | "Trusted" |
*
* @param {Settings_Creator_VerifiedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_creator_verified = /** @type {((inputs?: Settings_Creator_VerifiedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Creator_VerifiedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_creator_verified(inputs)
	if (locale === "de") return de_settings_creator_verified(inputs)
	if (locale === "fr") return fr_settings_creator_verified(inputs)
	if (locale === "it") return it_settings_creator_verified(inputs)
	if (locale === "nl") return nl_settings_creator_verified(inputs)
	if (locale === "pl") return pl_settings_creator_verified(inputs)
	if (locale === "pt") return pt_settings_creator_verified(inputs)
	if (locale === "ru") return ru_settings_creator_verified(inputs)
	if (locale === "sv") return sv_settings_creator_verified(inputs)
	if (locale === "tr") return tr_settings_creator_verified(inputs)
	if (locale === "zh") return zh_settings_creator_verified(inputs)
	if (locale === "ja") return ja_settings_creator_verified(inputs)
	return en_settings_creator_verified(inputs)
});
