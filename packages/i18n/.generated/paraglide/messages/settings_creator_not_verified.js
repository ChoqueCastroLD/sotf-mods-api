/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_Creator_Not_VerifiedInputs */

const en_settings_creator_not_verified = /** @type {(inputs: Settings_Creator_Not_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Not verified yet`)
};

const es_settings_creator_not_verified = /** @type {(inputs: Settings_Creator_Not_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Aún sin verificar`)
};

const de_settings_creator_not_verified = /** @type {(inputs: Settings_Creator_Not_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Noch nicht verifiziert`)
};

const fr_settings_creator_not_verified = /** @type {(inputs: Settings_Creator_Not_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pas encore vérifié`)
};

const it_settings_creator_not_verified = /** @type {(inputs: Settings_Creator_Not_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non ancora verificato`)
};

const nl_settings_creator_not_verified = /** @type {(inputs: Settings_Creator_Not_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nog niet geverifieerd`)
};

const pl_settings_creator_not_verified = /** @type {(inputs: Settings_Creator_Not_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeszcze niezweryfikowany`)
};

const pt_settings_creator_not_verified = /** @type {(inputs: Settings_Creator_Not_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ainda não verificado`)
};

const ru_settings_creator_not_verified = /** @type {(inputs: Settings_Creator_Not_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Пока не проверен`)
};

const sv_settings_creator_not_verified = /** @type {(inputs: Settings_Creator_Not_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Inte verifierad än`)
};

const tr_settings_creator_not_verified = /** @type {(inputs: Settings_Creator_Not_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Henüz doğrulanmadı`)
};

const zh_settings_creator_not_verified = /** @type {(inputs: Settings_Creator_Not_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`尚未认证`)
};

const ja_settings_creator_not_verified = /** @type {(inputs: Settings_Creator_Not_VerifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`未認証`)
};

/**
* | output |
* | --- |
* | "Not verified yet" |
*
* @param {Settings_Creator_Not_VerifiedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_creator_not_verified = /** @type {((inputs?: Settings_Creator_Not_VerifiedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_Creator_Not_VerifiedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_creator_not_verified(inputs)
	if (locale === "de") return de_settings_creator_not_verified(inputs)
	if (locale === "fr") return fr_settings_creator_not_verified(inputs)
	if (locale === "it") return it_settings_creator_not_verified(inputs)
	if (locale === "nl") return nl_settings_creator_not_verified(inputs)
	if (locale === "pl") return pl_settings_creator_not_verified(inputs)
	if (locale === "pt") return pt_settings_creator_not_verified(inputs)
	if (locale === "ru") return ru_settings_creator_not_verified(inputs)
	if (locale === "sv") return sv_settings_creator_not_verified(inputs)
	if (locale === "tr") return tr_settings_creator_not_verified(inputs)
	if (locale === "zh") return zh_settings_creator_not_verified(inputs)
	if (locale === "ja") return ja_settings_creator_not_verified(inputs)
	return en_settings_creator_not_verified(inputs)
});
