/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Compat_ModeInputs */

const en_social_compat_mode = /** @type {(inputs: Social_Compat_ModeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`How do you play?`)
};

const es_social_compat_mode = /** @type {(inputs: Social_Compat_ModeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Cómo juegas?`)
};

const de_social_compat_mode = /** @type {(inputs: Social_Compat_ModeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wie spielst du?`)
};

const fr_social_compat_mode = /** @type {(inputs: Social_Compat_ModeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comment jouez-vous ?`)
};

const it_social_compat_mode = /** @type {(inputs: Social_Compat_ModeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Come giochi?`)
};

const nl_social_compat_mode = /** @type {(inputs: Social_Compat_ModeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hoe speel je?`)
};

const pl_social_compat_mode = /** @type {(inputs: Social_Compat_ModeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jak grasz?`)
};

const pt_social_compat_mode = /** @type {(inputs: Social_Compat_ModeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Como você joga?`)
};

const ru_social_compat_mode = /** @type {(inputs: Social_Compat_ModeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Как вы играете?`)
};

const sv_social_compat_mode = /** @type {(inputs: Social_Compat_ModeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hur spelar du?`)
};

const tr_social_compat_mode = /** @type {(inputs: Social_Compat_ModeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nasıl oynuyorsun?`)
};

const zh_social_compat_mode = /** @type {(inputs: Social_Compat_ModeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你怎么玩？`)
};

const ja_social_compat_mode = /** @type {(inputs: Social_Compat_ModeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プレイ方法は？`)
};

/**
* | output |
* | --- |
* | "How do you play?" |
*
* @param {Social_Compat_ModeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_compat_mode = /** @type {((inputs?: Social_Compat_ModeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Compat_ModeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_compat_mode(inputs)
	if (locale === "de") return de_social_compat_mode(inputs)
	if (locale === "fr") return fr_social_compat_mode(inputs)
	if (locale === "it") return it_social_compat_mode(inputs)
	if (locale === "nl") return nl_social_compat_mode(inputs)
	if (locale === "pl") return pl_social_compat_mode(inputs)
	if (locale === "pt") return pt_social_compat_mode(inputs)
	if (locale === "ru") return ru_social_compat_mode(inputs)
	if (locale === "sv") return sv_social_compat_mode(inputs)
	if (locale === "tr") return tr_social_compat_mode(inputs)
	if (locale === "zh") return zh_social_compat_mode(inputs)
	if (locale === "ja") return ja_social_compat_mode(inputs)
	return en_social_compat_mode(inputs)
});
