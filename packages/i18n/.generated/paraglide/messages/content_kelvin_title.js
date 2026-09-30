/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Kelvin_TitleInputs */

const en_content_kelvin_title = /** @type {(inputs: Content_Kelvin_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek: talk to Kelvin in game`)
};

const es_content_kelvin_title = /** @type {(inputs: Content_Kelvin_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek: habla con Kelvin en el juego`)
};

const de_content_kelvin_title = /** @type {(inputs: Content_Kelvin_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek: Mit Kelvin im Spiel reden`)
};

const fr_content_kelvin_title = /** @type {(inputs: Content_Kelvin_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek : parlez à Kelvin en jeu`)
};

const it_content_kelvin_title = /** @type {(inputs: Content_Kelvin_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek: parla con Kelvin nel gioco`)
};

const nl_content_kelvin_title = /** @type {(inputs: Content_Kelvin_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek: praat met Kelvin in de game`)
};

const pl_content_kelvin_title = /** @type {(inputs: Content_Kelvin_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek: rozmawiaj z Kelvinem w grze`)
};

const pt_content_kelvin_title = /** @type {(inputs: Content_Kelvin_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek: converse com o Kelvin no jogo`)
};

const ru_content_kelvin_title = /** @type {(inputs: Content_Kelvin_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek: говорите с Кельвином в игре`)
};

const sv_content_kelvin_title = /** @type {(inputs: Content_Kelvin_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek: prata med Kelvin i spelet`)
};

const tr_content_kelvin_title = /** @type {(inputs: Content_Kelvin_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek: oyunda Kelvin’le konuş`)
};

const zh_content_kelvin_title = /** @type {(inputs: Content_Kelvin_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek：在游戏中和 Kelvin 对话`)
};

const ja_content_kelvin_title = /** @type {(inputs: Content_Kelvin_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`KelvinSeek：ゲーム内でケルヴィンと話そう`)
};

/**
* | output |
* | --- |
* | "KelvinSeek: talk to Kelvin in game" |
*
* @param {Content_Kelvin_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_kelvin_title = /** @type {((inputs?: Content_Kelvin_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Kelvin_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_kelvin_title(inputs)
	if (locale === "de") return de_content_kelvin_title(inputs)
	if (locale === "fr") return fr_content_kelvin_title(inputs)
	if (locale === "it") return it_content_kelvin_title(inputs)
	if (locale === "nl") return nl_content_kelvin_title(inputs)
	if (locale === "pl") return pl_content_kelvin_title(inputs)
	if (locale === "pt") return pt_content_kelvin_title(inputs)
	if (locale === "ru") return ru_content_kelvin_title(inputs)
	if (locale === "sv") return sv_content_kelvin_title(inputs)
	if (locale === "tr") return tr_content_kelvin_title(inputs)
	if (locale === "zh") return zh_content_kelvin_title(inputs)
	if (locale === "ja") return ja_content_kelvin_title(inputs)
	return en_content_kelvin_title(inputs)
});
