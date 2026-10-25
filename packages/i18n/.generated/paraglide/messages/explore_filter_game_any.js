/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Filter_Game_AnyInputs */

const en_explore_filter_game_any = /** @type {(inputs: Explore_Filter_Game_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Both games`)
};

const es_explore_filter_game_any = /** @type {(inputs: Explore_Filter_Game_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ambos juegos`)
};

const de_explore_filter_game_any = /** @type {(inputs: Explore_Filter_Game_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beide Spiele`)
};

const fr_explore_filter_game_any = /** @type {(inputs: Explore_Filter_Game_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Les deux jeux`)
};

const it_explore_filter_game_any = /** @type {(inputs: Explore_Filter_Game_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Entrambi i giochi`)
};

const nl_explore_filter_game_any = /** @type {(inputs: Explore_Filter_Game_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beide spellen`)
};

const pl_explore_filter_game_any = /** @type {(inputs: Explore_Filter_Game_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obie gry`)
};

const pt_explore_filter_game_any = /** @type {(inputs: Explore_Filter_Game_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ambos os jogos`)
};

const ru_explore_filter_game_any = /** @type {(inputs: Explore_Filter_Game_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обе игры`)
};

const sv_explore_filter_game_any = /** @type {(inputs: Explore_Filter_Game_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Båda spelen`)
};

const tr_explore_filter_game_any = /** @type {(inputs: Explore_Filter_Game_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Her iki oyun`)
};

const zh_explore_filter_game_any = /** @type {(inputs: Explore_Filter_Game_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`两款游戏`)
};

const ja_explore_filter_game_any = /** @type {(inputs: Explore_Filter_Game_AnyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`両方のゲーム`)
};

/**
* | output |
* | --- |
* | "Both games" |
*
* @param {Explore_Filter_Game_AnyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_filter_game_any = /** @type {((inputs?: Explore_Filter_Game_AnyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Filter_Game_AnyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_filter_game_any(inputs)
	if (locale === "de") return de_explore_filter_game_any(inputs)
	if (locale === "fr") return fr_explore_filter_game_any(inputs)
	if (locale === "it") return it_explore_filter_game_any(inputs)
	if (locale === "nl") return nl_explore_filter_game_any(inputs)
	if (locale === "pl") return pl_explore_filter_game_any(inputs)
	if (locale === "pt") return pt_explore_filter_game_any(inputs)
	if (locale === "ru") return ru_explore_filter_game_any(inputs)
	if (locale === "sv") return sv_explore_filter_game_any(inputs)
	if (locale === "tr") return tr_explore_filter_game_any(inputs)
	if (locale === "zh") return zh_explore_filter_game_any(inputs)
	if (locale === "ja") return ja_explore_filter_game_any(inputs)
	return en_explore_filter_game_any(inputs)
});
