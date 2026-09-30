/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Settings_BioInputs */

const en_settings_bio = /** @type {(inputs: Settings_BioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bio`)
};

const es_settings_bio = /** @type {(inputs: Settings_BioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Biografía`)
};

const de_settings_bio = /** @type {(inputs: Settings_BioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bio`)
};

const fr_settings_bio = /** @type {(inputs: Settings_BioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bio`)
};

const it_settings_bio = /** @type {(inputs: Settings_BioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bio`)
};

const nl_settings_bio = /** @type {(inputs: Settings_BioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bio`)
};

const pl_settings_bio = /** @type {(inputs: Settings_BioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bio`)
};

const pt_settings_bio = /** @type {(inputs: Settings_BioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bio`)
};

const ru_settings_bio = /** @type {(inputs: Settings_BioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`О себе`)
};

const sv_settings_bio = /** @type {(inputs: Settings_BioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bio`)
};

const tr_settings_bio = /** @type {(inputs: Settings_BioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Biyografi`)
};

const zh_settings_bio = /** @type {(inputs: Settings_BioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`简介`)
};

const ja_settings_bio = /** @type {(inputs: Settings_BioInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`自己紹介`)
};

/**
* | output |
* | --- |
* | "Bio" |
*
* @param {Settings_BioInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const settings_bio = /** @type {((inputs?: Settings_BioInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Settings_BioInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_settings_bio(inputs)
	if (locale === "de") return de_settings_bio(inputs)
	if (locale === "fr") return fr_settings_bio(inputs)
	if (locale === "it") return it_settings_bio(inputs)
	if (locale === "nl") return nl_settings_bio(inputs)
	if (locale === "pl") return pl_settings_bio(inputs)
	if (locale === "pt") return pt_settings_bio(inputs)
	if (locale === "ru") return ru_settings_bio(inputs)
	if (locale === "sv") return sv_settings_bio(inputs)
	if (locale === "tr") return tr_settings_bio(inputs)
	if (locale === "zh") return zh_settings_bio(inputs)
	if (locale === "ja") return ja_settings_bio(inputs)
	return en_settings_bio(inputs)
});
