/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_Meta_TitleInputs */

const en_logs_meta_title = /** @type {(inputs: Logs_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Share a game log`)
};

const es_logs_meta_title = /** @type {(inputs: Logs_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comparte un log del juego`)
};

const de_logs_meta_title = /** @type {(inputs: Logs_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spiel-Log teilen`)
};

const fr_logs_meta_title = /** @type {(inputs: Logs_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Partager un log du jeu`)
};

const it_logs_meta_title = /** @type {(inputs: Logs_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Condividi un log del gioco`)
};

const nl_logs_meta_title = /** @type {(inputs: Logs_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deel een spellog`)
};

const pl_logs_meta_title = /** @type {(inputs: Logs_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Udostępnij log z gry`)
};

const pt_logs_meta_title = /** @type {(inputs: Logs_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Partilhe um log do jogo`)
};

const ru_logs_meta_title = /** @type {(inputs: Logs_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поделиться игровым логом`)
};

const sv_logs_meta_title = /** @type {(inputs: Logs_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dela en spellogg`)
};

const tr_logs_meta_title = /** @type {(inputs: Logs_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyun logu paylaş`)
};

const zh_logs_meta_title = /** @type {(inputs: Logs_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分享游戏日志`)
};

const ja_logs_meta_title = /** @type {(inputs: Logs_Meta_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ゲームのログを共有`)
};

/**
* | output |
* | --- |
* | "Share a game log" |
*
* @param {Logs_Meta_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_meta_title = /** @type {((inputs?: Logs_Meta_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_Meta_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_meta_title(inputs)
	if (locale === "de") return de_logs_meta_title(inputs)
	if (locale === "fr") return fr_logs_meta_title(inputs)
	if (locale === "it") return it_logs_meta_title(inputs)
	if (locale === "nl") return nl_logs_meta_title(inputs)
	if (locale === "pl") return pl_logs_meta_title(inputs)
	if (locale === "pt") return pt_logs_meta_title(inputs)
	if (locale === "ru") return ru_logs_meta_title(inputs)
	if (locale === "sv") return sv_logs_meta_title(inputs)
	if (locale === "tr") return tr_logs_meta_title(inputs)
	if (locale === "zh") return zh_logs_meta_title(inputs)
	if (locale === "ja") return ja_logs_meta_title(inputs)
	return en_logs_meta_title(inputs)
});
