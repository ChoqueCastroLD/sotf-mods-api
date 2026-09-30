/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Compat_Col_BuildInputs */

const en_basecamp_compat_col_build = /** @type {(inputs: Basecamp_Compat_Col_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Game build`)
};

const es_basecamp_compat_col_build = /** @type {(inputs: Basecamp_Compat_Col_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build del juego`)
};

const de_basecamp_compat_col_build = /** @type {(inputs: Basecamp_Compat_Col_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spiel-Build`)
};

const fr_basecamp_compat_col_build = /** @type {(inputs: Basecamp_Compat_Col_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build du jeu`)
};

const it_basecamp_compat_col_build = /** @type {(inputs: Basecamp_Compat_Col_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build del gioco`)
};

const nl_basecamp_compat_col_build = /** @type {(inputs: Basecamp_Compat_Col_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gamebuild`)
};

const pl_basecamp_compat_col_build = /** @type {(inputs: Basecamp_Compat_Col_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build gry`)
};

const pt_basecamp_compat_col_build = /** @type {(inputs: Basecamp_Compat_Col_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build do jogo`)
};

const ru_basecamp_compat_col_build = /** @type {(inputs: Basecamp_Compat_Col_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Билд игры`)
};

const sv_basecamp_compat_col_build = /** @type {(inputs: Basecamp_Compat_Col_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spelbuild`)
};

const tr_basecamp_compat_col_build = /** @type {(inputs: Basecamp_Compat_Col_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyun sürümü`)
};

const zh_basecamp_compat_col_build = /** @type {(inputs: Basecamp_Compat_Col_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`游戏版本`)
};

const ja_basecamp_compat_col_build = /** @type {(inputs: Basecamp_Compat_Col_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ゲームビルド`)
};

/**
* | output |
* | --- |
* | "Game build" |
*
* @param {Basecamp_Compat_Col_BuildInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_compat_col_build = /** @type {((inputs?: Basecamp_Compat_Col_BuildInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Compat_Col_BuildInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_compat_col_build(inputs)
	if (locale === "de") return de_basecamp_compat_col_build(inputs)
	if (locale === "fr") return fr_basecamp_compat_col_build(inputs)
	if (locale === "it") return it_basecamp_compat_col_build(inputs)
	if (locale === "nl") return nl_basecamp_compat_col_build(inputs)
	if (locale === "pl") return pl_basecamp_compat_col_build(inputs)
	if (locale === "pt") return pt_basecamp_compat_col_build(inputs)
	if (locale === "ru") return ru_basecamp_compat_col_build(inputs)
	if (locale === "sv") return sv_basecamp_compat_col_build(inputs)
	if (locale === "tr") return tr_basecamp_compat_col_build(inputs)
	if (locale === "zh") return zh_basecamp_compat_col_build(inputs)
	if (locale === "ja") return ja_basecamp_compat_col_build(inputs)
	return en_basecamp_compat_col_build(inputs)
});
