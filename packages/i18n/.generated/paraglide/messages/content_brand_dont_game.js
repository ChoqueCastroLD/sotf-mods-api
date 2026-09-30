/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Content_Brand_Dont_GameInputs */

const en_content_brand_dont_game = /** @type {(inputs: Content_Brand_Dont_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Combine it with the game’s official logo, key art or character names.`)
};

const es_content_brand_dont_game = /** @type {(inputs: Content_Brand_Dont_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No lo combines con el logo oficial del juego, su arte o los nombres de sus personajes.`)
};

const de_content_brand_dont_game = /** @type {(inputs: Content_Brand_Dont_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Es mit dem offiziellen Spiellogo, Artwork oder Figurennamen kombinieren.`)
};

const fr_content_brand_dont_game = /** @type {(inputs: Content_Brand_Dont_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`L’associer au logo officiel du jeu, à ses illustrations ou aux noms de ses personnages.`)
};

const it_content_brand_dont_game = /** @type {(inputs: Content_Brand_Dont_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non abbinarlo al logo ufficiale del gioco, alle sue illustrazioni o ai nomi dei personaggi.`)
};

const nl_content_brand_dont_game = /** @type {(inputs: Content_Brand_Dont_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het niet combineren met het officiële gamelogo, artwork of namen van personages.`)
};

const pl_content_brand_dont_game = /** @type {(inputs: Content_Brand_Dont_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie łącz go z oficjalnym logo gry, jej grafikami ani imionami postaci.`)
};

const pt_content_brand_dont_game = /** @type {(inputs: Content_Brand_Dont_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não combine com o logo oficial do jogo, as artes dele ou nomes de personagens.`)
};

const ru_content_brand_dont_game = /** @type {(inputs: Content_Brand_Dont_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Сочетать его с официальным логотипом игры, её артом или именами персонажей.`)
};

const sv_content_brand_dont_game = /** @type {(inputs: Content_Brand_Dont_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Att kombinera den med spelets officiella logotyp, grafik eller karaktärsnamn.`)
};

const tr_content_brand_dont_game = /** @type {(inputs: Content_Brand_Dont_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyunun resmî logosu, görselleri veya karakter adlarıyla birleştirme.`)
};

const zh_content_brand_dont_game = /** @type {(inputs: Content_Brand_Dont_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`不要与游戏官方标志、美术或角色名称组合使用。`)
};

const ja_content_brand_dont_game = /** @type {(inputs: Content_Brand_Dont_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ゲーム公式のロゴやアート、キャラクター名と組み合わせないでください。`)
};

/**
* | output |
* | --- |
* | "Combine it with the game’s official logo, key art or character names." |
*
* @param {Content_Brand_Dont_GameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const content_brand_dont_game = /** @type {((inputs?: Content_Brand_Dont_GameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Content_Brand_Dont_GameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_content_brand_dont_game(inputs)
	if (locale === "de") return de_content_brand_dont_game(inputs)
	if (locale === "fr") return fr_content_brand_dont_game(inputs)
	if (locale === "it") return it_content_brand_dont_game(inputs)
	if (locale === "nl") return nl_content_brand_dont_game(inputs)
	if (locale === "pl") return pl_content_brand_dont_game(inputs)
	if (locale === "pt") return pt_content_brand_dont_game(inputs)
	if (locale === "ru") return ru_content_brand_dont_game(inputs)
	if (locale === "sv") return sv_content_brand_dont_game(inputs)
	if (locale === "tr") return tr_content_brand_dont_game(inputs)
	if (locale === "zh") return zh_content_brand_dont_game(inputs)
	if (locale === "ja") return ja_content_brand_dont_game(inputs)
	return en_content_brand_dont_game(inputs)
});
