/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Kelvin_How_2Inputs */

const en_content_kelvin_how_2 = /** @type {(inputs: Content_Kelvin_How_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`In game, walk up to Kelvin and press E to open the notepad.`)
};

const es_content_kelvin_how_2 = /** @type {(inputs: Content_Kelvin_How_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En el juego, acércate a Kelvin y pulsa E para abrir el bloc de notas.`)
};

const de_content_kelvin_how_2 = /** @type {(inputs: Content_Kelvin_How_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Geh im Spiel zu Kelvin und drück E, um den Notizblock zu öffnen.`)
};

const fr_content_kelvin_how_2 = /** @type {(inputs: Content_Kelvin_How_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En jeu, approchez-vous de Kelvin et appuyez sur E pour ouvrir le bloc-notes.`)
};

const it_content_kelvin_how_2 = /** @type {(inputs: Content_Kelvin_How_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nel gioco avvicinati a Kelvin e premi E per aprire il blocco note.`)
};

const nl_content_kelvin_how_2 = /** @type {(inputs: Content_Kelvin_How_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Loop in de game naar Kelvin en druk op E om het notitieblok te openen.`)
};

const pl_content_kelvin_how_2 = /** @type {(inputs: Content_Kelvin_How_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`W grze podejdź do Kelvina i naciśnij E, aby otworzyć notatnik.`)
};

const pt_content_kelvin_how_2 = /** @type {(inputs: Content_Kelvin_How_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No jogo, vá até o Kelvin e pressione E para abrir o bloco de notas.`)
};

const ru_content_kelvin_how_2 = /** @type {(inputs: Content_Kelvin_How_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`В игре подойдите к Кельвину и нажмите E, чтобы открыть блокнот.`)
};

const sv_content_kelvin_how_2 = /** @type {(inputs: Content_Kelvin_How_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gå fram till Kelvin i spelet och tryck E för att öppna anteckningsblocket.`)
};

const tr_content_kelvin_how_2 = /** @type {(inputs: Content_Kelvin_How_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyunda Kelvin’in yanına git ve not defterini açmak için E’ye bas.`)
};

const zh_content_kelvin_how_2 = /** @type {(inputs: Content_Kelvin_How_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`在游戏中走到 Kelvin 身边，按 E 打开记事本。`)
};

const ja_content_kelvin_how_2 = /** @type {(inputs: Content_Kelvin_How_2Inputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ゲーム内でケルヴィンに近づき、E キーでメモ帳を開きます。`)
};

/**
* | output |
* | --- |
* | "In game, walk up to Kelvin and press E to open the notepad." |
*
* @param {Content_Kelvin_How_2Inputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_kelvin_how_2 = /** @type {((inputs?: Content_Kelvin_How_2Inputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Kelvin_How_2Inputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_kelvin_how_2(inputs)
	if (locale === "de") return de_content_kelvin_how_2(inputs)
	if (locale === "fr") return fr_content_kelvin_how_2(inputs)
	if (locale === "it") return it_content_kelvin_how_2(inputs)
	if (locale === "nl") return nl_content_kelvin_how_2(inputs)
	if (locale === "pl") return pl_content_kelvin_how_2(inputs)
	if (locale === "pt") return pt_content_kelvin_how_2(inputs)
	if (locale === "ru") return ru_content_kelvin_how_2(inputs)
	if (locale === "sv") return sv_content_kelvin_how_2(inputs)
	if (locale === "tr") return tr_content_kelvin_how_2(inputs)
	if (locale === "zh") return zh_content_kelvin_how_2(inputs)
	if (locale === "ja") return ja_content_kelvin_how_2(inputs)
	return en_content_kelvin_how_2(inputs)
});
