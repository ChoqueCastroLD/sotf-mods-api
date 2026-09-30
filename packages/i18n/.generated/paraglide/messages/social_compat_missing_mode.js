/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Compat_Missing_ModeInputs */

const en_social_compat_missing_mode = /** @type {(inputs: Social_Compat_Missing_ModeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose how you play.`)
};

const es_social_compat_missing_mode = /** @type {(inputs: Social_Compat_Missing_ModeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elige cómo juegas.`)
};

const de_social_compat_missing_mode = /** @type {(inputs: Social_Compat_Missing_ModeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wähle, wie du spielst.`)
};

const fr_social_compat_missing_mode = /** @type {(inputs: Social_Compat_Missing_ModeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisissez comment vous jouez.`)
};

const it_social_compat_missing_mode = /** @type {(inputs: Social_Compat_Missing_ModeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scegli come giochi.`)
};

const nl_social_compat_missing_mode = /** @type {(inputs: Social_Compat_Missing_ModeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kies hoe je speelt.`)
};

const pl_social_compat_missing_mode = /** @type {(inputs: Social_Compat_Missing_ModeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybierz, jak grasz.`)
};

const pt_social_compat_missing_mode = /** @type {(inputs: Social_Compat_Missing_ModeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha como você joga.`)
};

const ru_social_compat_missing_mode = /** @type {(inputs: Social_Compat_Missing_ModeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выберите, как вы играете.`)
};

const sv_social_compat_missing_mode = /** @type {(inputs: Social_Compat_Missing_ModeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välj hur du spelar.`)
};

const tr_social_compat_missing_mode = /** @type {(inputs: Social_Compat_Missing_ModeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nasıl oynadığını seç.`)
};

const zh_social_compat_missing_mode = /** @type {(inputs: Social_Compat_Missing_ModeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请选择你的游玩方式。`)
};

const ja_social_compat_missing_mode = /** @type {(inputs: Social_Compat_Missing_ModeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プレイ方法を選んでください。`)
};

/**
* | output |
* | --- |
* | "Choose how you play." |
*
* @param {Social_Compat_Missing_ModeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_compat_missing_mode = /** @type {((inputs?: Social_Compat_Missing_ModeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Compat_Missing_ModeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_compat_missing_mode(inputs)
	if (locale === "de") return de_social_compat_missing_mode(inputs)
	if (locale === "fr") return fr_social_compat_missing_mode(inputs)
	if (locale === "it") return it_social_compat_missing_mode(inputs)
	if (locale === "nl") return nl_social_compat_missing_mode(inputs)
	if (locale === "pl") return pl_social_compat_missing_mode(inputs)
	if (locale === "pt") return pt_social_compat_missing_mode(inputs)
	if (locale === "ru") return ru_social_compat_missing_mode(inputs)
	if (locale === "sv") return sv_social_compat_missing_mode(inputs)
	if (locale === "tr") return tr_social_compat_missing_mode(inputs)
	if (locale === "zh") return zh_social_compat_missing_mode(inputs)
	if (locale === "ja") return ja_social_compat_missing_mode(inputs)
	return en_social_compat_missing_mode(inputs)
});
