/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Xp_Limit_Per_BuildInputs */

const en_profile_xp_limit_per_build = /** @type {(inputs: Profile_Xp_Limit_Per_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Once per game build`)
};

const es_profile_xp_limit_per_build = /** @type {(inputs: Profile_Xp_Limit_Per_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una vez por build del juego`)
};

const de_profile_xp_limit_per_build = /** @type {(inputs: Profile_Xp_Limit_Per_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Einmal pro Spiel-Build`)
};

const fr_profile_xp_limit_per_build = /** @type {(inputs: Profile_Xp_Limit_Per_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Une fois par build du jeu`)
};

const it_profile_xp_limit_per_build = /** @type {(inputs: Profile_Xp_Limit_Per_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una volta per build del gioco`)
};

const nl_profile_xp_limit_per_build = /** @type {(inputs: Profile_Xp_Limit_Per_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Eén keer per gamebuild`)
};

const pl_profile_xp_limit_per_build = /** @type {(inputs: Profile_Xp_Limit_Per_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raz na wersję gry`)
};

const pt_profile_xp_limit_per_build = /** @type {(inputs: Profile_Xp_Limit_Per_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Uma vez por build do jogo`)
};

const ru_profile_xp_limit_per_build = /** @type {(inputs: Profile_Xp_Limit_Per_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Один раз на сборку игры`)
};

const sv_profile_xp_limit_per_build = /** @type {(inputs: Profile_Xp_Limit_Per_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En gång per spelversion`)
};

const tr_profile_xp_limit_per_build = /** @type {(inputs: Profile_Xp_Limit_Per_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyun sürümü başına bir kez`)
};

const zh_profile_xp_limit_per_build = /** @type {(inputs: Profile_Xp_Limit_Per_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`每个游戏版本一次`)
};

const ja_profile_xp_limit_per_build = /** @type {(inputs: Profile_Xp_Limit_Per_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ゲームビルドごとに 1 回`)
};

/**
* | output |
* | --- |
* | "Once per game build" |
*
* @param {Profile_Xp_Limit_Per_BuildInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_xp_limit_per_build = /** @type {((inputs?: Profile_Xp_Limit_Per_BuildInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Xp_Limit_Per_BuildInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_xp_limit_per_build(inputs)
	if (locale === "de") return de_profile_xp_limit_per_build(inputs)
	if (locale === "fr") return fr_profile_xp_limit_per_build(inputs)
	if (locale === "it") return it_profile_xp_limit_per_build(inputs)
	if (locale === "nl") return nl_profile_xp_limit_per_build(inputs)
	if (locale === "pl") return pl_profile_xp_limit_per_build(inputs)
	if (locale === "pt") return pt_profile_xp_limit_per_build(inputs)
	if (locale === "ru") return ru_profile_xp_limit_per_build(inputs)
	if (locale === "sv") return sv_profile_xp_limit_per_build(inputs)
	if (locale === "tr") return tr_profile_xp_limit_per_build(inputs)
	if (locale === "zh") return zh_profile_xp_limit_per_build(inputs)
	if (locale === "ja") return ja_profile_xp_limit_per_build(inputs)
	return en_profile_xp_limit_per_build(inputs)
});
