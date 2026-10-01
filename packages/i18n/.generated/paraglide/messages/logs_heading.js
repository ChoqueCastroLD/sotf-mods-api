/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Logs_HeadingInputs */

const en_logs_heading = /** @type {(inputs: Logs_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Share your game log`)
};

const es_logs_heading = /** @type {(inputs: Logs_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comparte el log de tu juego`)
};

const de_logs_heading = /** @type {(inputs: Logs_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Teile dein Spiel-Log`)
};

const fr_logs_heading = /** @type {(inputs: Logs_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Partagez le log de votre jeu`)
};

const it_logs_heading = /** @type {(inputs: Logs_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Condividi il log del tuo gioco`)
};

const nl_logs_heading = /** @type {(inputs: Logs_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deel je spellog`)
};

const pl_logs_heading = /** @type {(inputs: Logs_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Udostępnij log z gry`)
};

const pt_logs_heading = /** @type {(inputs: Logs_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Partilhe o log do seu jogo`)
};

const ru_logs_heading = /** @type {(inputs: Logs_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Поделитесь логом игры`)
};

const sv_logs_heading = /** @type {(inputs: Logs_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dela din spellogg`)
};

const tr_logs_heading = /** @type {(inputs: Logs_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyun logunu paylaş`)
};

const zh_logs_heading = /** @type {(inputs: Logs_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`分享你的游戏日志`)
};

const ja_logs_heading = /** @type {(inputs: Logs_HeadingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ゲームのログを共有`)
};

/**
* | output |
* | --- |
* | "Share your game log" |
*
* @param {Logs_HeadingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const logs_heading = /** @type {((inputs?: Logs_HeadingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Logs_HeadingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_logs_heading(inputs)
	if (locale === "de") return de_logs_heading(inputs)
	if (locale === "fr") return fr_logs_heading(inputs)
	if (locale === "it") return it_logs_heading(inputs)
	if (locale === "nl") return nl_logs_heading(inputs)
	if (locale === "pl") return pl_logs_heading(inputs)
	if (locale === "pt") return pt_logs_heading(inputs)
	if (locale === "ru") return ru_logs_heading(inputs)
	if (locale === "sv") return sv_logs_heading(inputs)
	if (locale === "tr") return tr_logs_heading(inputs)
	if (locale === "zh") return zh_logs_heading(inputs)
	if (locale === "ja") return ja_logs_heading(inputs)
	return en_logs_heading(inputs)
});
