/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_TrustedInputs */

const en_profile_trusted = /** @type {(inputs: Profile_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trusted`)
};

const es_profile_trusted = /** @type {(inputs: Profile_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De confianza`)
};

const de_profile_trusted = /** @type {(inputs: Profile_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vertrauenswürdig`)
};

const fr_profile_trusted = /** @type {(inputs: Profile_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De confiance`)
};

const it_profile_trusted = /** @type {(inputs: Profile_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Affidabile`)
};

const nl_profile_trusted = /** @type {(inputs: Profile_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vertrouwd`)
};

const pl_profile_trusted = /** @type {(inputs: Profile_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zaufany`)
};

const pt_profile_trusted = /** @type {(inputs: Profile_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De confiança`)
};

const ru_profile_trusted = /** @type {(inputs: Profile_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверенный`)
};

const sv_profile_trusted = /** @type {(inputs: Profile_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Betrodd`)
};

const tr_profile_trusted = /** @type {(inputs: Profile_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güvenilir`)
};

const zh_profile_trusted = /** @type {(inputs: Profile_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`可信`)
};

const ja_profile_trusted = /** @type {(inputs: Profile_TrustedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`信頼済み`)
};

/**
* | output |
* | --- |
* | "Trusted" |
*
* @param {Profile_TrustedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_trusted = /** @type {((inputs?: Profile_TrustedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_TrustedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_trusted(inputs)
	if (locale === "de") return de_profile_trusted(inputs)
	if (locale === "fr") return fr_profile_trusted(inputs)
	if (locale === "it") return it_profile_trusted(inputs)
	if (locale === "nl") return nl_profile_trusted(inputs)
	if (locale === "pl") return pl_profile_trusted(inputs)
	if (locale === "pt") return pt_profile_trusted(inputs)
	if (locale === "ru") return ru_profile_trusted(inputs)
	if (locale === "sv") return sv_profile_trusted(inputs)
	if (locale === "tr") return tr_profile_trusted(inputs)
	if (locale === "zh") return zh_profile_trusted(inputs)
	if (locale === "ja") return ja_profile_trusted(inputs)
	return en_profile_trusted(inputs)
});
