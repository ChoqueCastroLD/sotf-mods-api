/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Compat_BuildInputs */

const en_social_compat_build = /** @type {(inputs: Social_Compat_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Game build`)
};

const es_social_compat_build = /** @type {(inputs: Social_Compat_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versión del juego`)
};

const de_social_compat_build = /** @type {(inputs: Social_Compat_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spiel-Build`)
};

const fr_social_compat_build = /** @type {(inputs: Social_Compat_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version du jeu`)
};

const it_social_compat_build = /** @type {(inputs: Social_Compat_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build del gioco`)
};

const nl_social_compat_build = /** @type {(inputs: Social_Compat_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gamebuild`)
};

const pl_social_compat_build = /** @type {(inputs: Social_Compat_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wersja gry`)
};

const pt_social_compat_build = /** @type {(inputs: Social_Compat_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build do jogo`)
};

const ru_social_compat_build = /** @type {(inputs: Social_Compat_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сборка игры`)
};

const sv_social_compat_build = /** @type {(inputs: Social_Compat_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spelversion`)
};

const tr_social_compat_build = /** @type {(inputs: Social_Compat_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyun sürümü`)
};

const zh_social_compat_build = /** @type {(inputs: Social_Compat_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`游戏版本`)
};

const ja_social_compat_build = /** @type {(inputs: Social_Compat_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ゲームのビルド`)
};

/**
* | output |
* | --- |
* | "Game build" |
*
* @param {Social_Compat_BuildInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_compat_build = /** @type {((inputs?: Social_Compat_BuildInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Compat_BuildInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_compat_build(inputs)
	if (locale === "de") return de_social_compat_build(inputs)
	if (locale === "fr") return fr_social_compat_build(inputs)
	if (locale === "it") return it_social_compat_build(inputs)
	if (locale === "nl") return nl_social_compat_build(inputs)
	if (locale === "pl") return pl_social_compat_build(inputs)
	if (locale === "pt") return pt_social_compat_build(inputs)
	if (locale === "ru") return ru_social_compat_build(inputs)
	if (locale === "sv") return sv_social_compat_build(inputs)
	if (locale === "tr") return tr_social_compat_build(inputs)
	if (locale === "zh") return zh_social_compat_build(inputs)
	if (locale === "ja") return ja_social_compat_build(inputs)
	return en_social_compat_build(inputs)
});
