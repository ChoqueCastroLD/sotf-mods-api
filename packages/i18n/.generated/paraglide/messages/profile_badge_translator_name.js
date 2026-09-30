/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Badge_Translator_NameInputs */

const en_profile_badge_translator_name = /** @type {(inputs: Profile_Badge_Translator_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Translator`)
};

const es_profile_badge_translator_name = /** @type {(inputs: Profile_Badge_Translator_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Traductor`)
};

const de_profile_badge_translator_name = /** @type {(inputs: Profile_Badge_Translator_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Übersetzer`)
};

const fr_profile_badge_translator_name = /** @type {(inputs: Profile_Badge_Translator_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Traducteur`)
};

const it_profile_badge_translator_name = /** @type {(inputs: Profile_Badge_Translator_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Traduttore`)
};

const nl_profile_badge_translator_name = /** @type {(inputs: Profile_Badge_Translator_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vertaler`)
};

const pl_profile_badge_translator_name = /** @type {(inputs: Profile_Badge_Translator_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tłumacz`)
};

const pt_profile_badge_translator_name = /** @type {(inputs: Profile_Badge_Translator_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tradutor`)
};

const ru_profile_badge_translator_name = /** @type {(inputs: Profile_Badge_Translator_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Переводчик`)
};

const sv_profile_badge_translator_name = /** @type {(inputs: Profile_Badge_Translator_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Översättare`)
};

const tr_profile_badge_translator_name = /** @type {(inputs: Profile_Badge_Translator_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çevirmen`)
};

const zh_profile_badge_translator_name = /** @type {(inputs: Profile_Badge_Translator_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`译者`)
};

const ja_profile_badge_translator_name = /** @type {(inputs: Profile_Badge_Translator_NameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`翻訳者`)
};

/**
* | output |
* | --- |
* | "Translator" |
*
* @param {Profile_Badge_Translator_NameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_badge_translator_name = /** @type {((inputs?: Profile_Badge_Translator_NameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Badge_Translator_NameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_badge_translator_name(inputs)
	if (locale === "de") return de_profile_badge_translator_name(inputs)
	if (locale === "fr") return fr_profile_badge_translator_name(inputs)
	if (locale === "it") return it_profile_badge_translator_name(inputs)
	if (locale === "nl") return nl_profile_badge_translator_name(inputs)
	if (locale === "pl") return pl_profile_badge_translator_name(inputs)
	if (locale === "pt") return pt_profile_badge_translator_name(inputs)
	if (locale === "ru") return ru_profile_badge_translator_name(inputs)
	if (locale === "sv") return sv_profile_badge_translator_name(inputs)
	if (locale === "tr") return tr_profile_badge_translator_name(inputs)
	if (locale === "zh") return zh_profile_badge_translator_name(inputs)
	if (locale === "ja") return ja_profile_badge_translator_name(inputs)
	return en_profile_badge_translator_name(inputs)
});
