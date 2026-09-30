/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Compat_Mode_Singleplayer_HintInputs */

const en_social_compat_mode_singleplayer_hint = /** @type {(inputs: Social_Compat_Mode_Singleplayer_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Playing alone.`)
};

const es_social_compat_mode_singleplayer_hint = /** @type {(inputs: Social_Compat_Mode_Singleplayer_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jugando en solitario.`)
};

const de_social_compat_mode_singleplayer_hint = /** @type {(inputs: Social_Compat_Mode_Singleplayer_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du spielst allein.`)
};

const fr_social_compat_mode_singleplayer_hint = /** @type {(inputs: Social_Compat_Mode_Singleplayer_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous jouez seul.`)
};

const it_social_compat_mode_singleplayer_hint = /** @type {(inputs: Social_Compat_Mode_Singleplayer_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Giochi da solo.`)
};

const nl_social_compat_mode_singleplayer_hint = /** @type {(inputs: Social_Compat_Mode_Singleplayer_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je speelt alleen.`)
};

const pl_social_compat_mode_singleplayer_hint = /** @type {(inputs: Social_Compat_Mode_Singleplayer_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Grasz sam.`)
};

const pt_social_compat_mode_singleplayer_hint = /** @type {(inputs: Social_Compat_Mode_Singleplayer_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jogando sozinho.`)
};

const ru_social_compat_mode_singleplayer_hint = /** @type {(inputs: Social_Compat_Mode_Singleplayer_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы играете один.`)
};

const sv_social_compat_mode_singleplayer_hint = /** @type {(inputs: Social_Compat_Mode_Singleplayer_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du spelar ensam.`)
};

const tr_social_compat_mode_singleplayer_hint = /** @type {(inputs: Social_Compat_Mode_Singleplayer_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tek başına oynuyorsun.`)
};

const zh_social_compat_mode_singleplayer_hint = /** @type {(inputs: Social_Compat_Mode_Singleplayer_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`独自游玩。`)
};

const ja_social_compat_mode_singleplayer_hint = /** @type {(inputs: Social_Compat_Mode_Singleplayer_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ひとりで遊ぶ。`)
};

/**
* | output |
* | --- |
* | "Playing alone." |
*
* @param {Social_Compat_Mode_Singleplayer_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_compat_mode_singleplayer_hint = /** @type {((inputs?: Social_Compat_Mode_Singleplayer_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Compat_Mode_Singleplayer_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_compat_mode_singleplayer_hint(inputs)
	if (locale === "de") return de_social_compat_mode_singleplayer_hint(inputs)
	if (locale === "fr") return fr_social_compat_mode_singleplayer_hint(inputs)
	if (locale === "it") return it_social_compat_mode_singleplayer_hint(inputs)
	if (locale === "nl") return nl_social_compat_mode_singleplayer_hint(inputs)
	if (locale === "pl") return pl_social_compat_mode_singleplayer_hint(inputs)
	if (locale === "pt") return pt_social_compat_mode_singleplayer_hint(inputs)
	if (locale === "ru") return ru_social_compat_mode_singleplayer_hint(inputs)
	if (locale === "sv") return sv_social_compat_mode_singleplayer_hint(inputs)
	if (locale === "tr") return tr_social_compat_mode_singleplayer_hint(inputs)
	if (locale === "zh") return zh_social_compat_mode_singleplayer_hint(inputs)
	if (locale === "ja") return ja_social_compat_mode_singleplayer_hint(inputs)
	return en_social_compat_mode_singleplayer_hint(inputs)
});
