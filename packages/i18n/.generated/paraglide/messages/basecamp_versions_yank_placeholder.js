/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Versions_Yank_PlaceholderInputs */

const en_basecamp_versions_yank_placeholder = /** @type {(inputs: Basecamp_Versions_Yank_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crashes on game build 1.0.4`)
};

const es_basecamp_versions_yank_placeholder = /** @type {(inputs: Basecamp_Versions_Yank_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Se cierra en la build 1.0.4 del juego`)
};

const de_basecamp_versions_yank_placeholder = /** @type {(inputs: Basecamp_Versions_Yank_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Stürzt mit Spiel-Build 1.0.4 ab`)
};

const fr_basecamp_versions_yank_placeholder = /** @type {(inputs: Basecamp_Versions_Yank_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Plante sur le build 1.0.4 du jeu`)
};

const it_basecamp_versions_yank_placeholder = /** @type {(inputs: Basecamp_Versions_Yank_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Si blocca sulla build 1.0.4 del gioco`)
};

const nl_basecamp_versions_yank_placeholder = /** @type {(inputs: Basecamp_Versions_Yank_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crasht op gamebuild 1.0.4`)
};

const pl_basecamp_versions_yank_placeholder = /** @type {(inputs: Basecamp_Versions_Yank_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wywala się na buildzie gry 1.0.4`)
};

const pt_basecamp_versions_yank_placeholder = /** @type {(inputs: Basecamp_Versions_Yank_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Trava na build 1.0.4 do jogo`)
};

const ru_basecamp_versions_yank_placeholder = /** @type {(inputs: Basecamp_Versions_Yank_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вылетает на билде игры 1.0.4`)
};

const sv_basecamp_versions_yank_placeholder = /** @type {(inputs: Basecamp_Versions_Yank_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kraschar på spelets build 1.0.4`)
};

const tr_basecamp_versions_yank_placeholder = /** @type {(inputs: Basecamp_Versions_Yank_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyunun 1.0.4 sürümünde çöküyor`)
};

const zh_basecamp_versions_yank_placeholder = /** @type {(inputs: Basecamp_Versions_Yank_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在游戏版本 1.0.4 上崩溃`)
};

const ja_basecamp_versions_yank_placeholder = /** @type {(inputs: Basecamp_Versions_Yank_PlaceholderInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ゲームビルド 1.0.4 でクラッシュする`)
};

/**
* | output |
* | --- |
* | "Crashes on game build 1.0.4" |
*
* @param {Basecamp_Versions_Yank_PlaceholderInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_versions_yank_placeholder = /** @type {((inputs?: Basecamp_Versions_Yank_PlaceholderInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Versions_Yank_PlaceholderInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_versions_yank_placeholder(inputs)
	if (locale === "de") return de_basecamp_versions_yank_placeholder(inputs)
	if (locale === "fr") return fr_basecamp_versions_yank_placeholder(inputs)
	if (locale === "it") return it_basecamp_versions_yank_placeholder(inputs)
	if (locale === "nl") return nl_basecamp_versions_yank_placeholder(inputs)
	if (locale === "pl") return pl_basecamp_versions_yank_placeholder(inputs)
	if (locale === "pt") return pt_basecamp_versions_yank_placeholder(inputs)
	if (locale === "ru") return ru_basecamp_versions_yank_placeholder(inputs)
	if (locale === "sv") return sv_basecamp_versions_yank_placeholder(inputs)
	if (locale === "tr") return tr_basecamp_versions_yank_placeholder(inputs)
	if (locale === "zh") return zh_basecamp_versions_yank_placeholder(inputs)
	if (locale === "ja") return ja_basecamp_versions_yank_placeholder(inputs)
	return en_basecamp_versions_yank_placeholder(inputs)
});
