/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Tag_Group_PlayersInputs */

const en_explore_tag_group_players = /** @type {(inputs: Explore_Tag_Group_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Players`)
};

const es_explore_tag_group_players = /** @type {(inputs: Explore_Tag_Group_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jugadores`)
};

const de_explore_tag_group_players = /** @type {(inputs: Explore_Tag_Group_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spieler`)
};

const fr_explore_tag_group_players = /** @type {(inputs: Explore_Tag_Group_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Joueurs`)
};

const it_explore_tag_group_players = /** @type {(inputs: Explore_Tag_Group_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Giocatori`)
};

const nl_explore_tag_group_players = /** @type {(inputs: Explore_Tag_Group_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spelers`)
};

const pl_explore_tag_group_players = /** @type {(inputs: Explore_Tag_Group_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gracze`)
};

const pt_explore_tag_group_players = /** @type {(inputs: Explore_Tag_Group_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jogadores`)
};

const ru_explore_tag_group_players = /** @type {(inputs: Explore_Tag_Group_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Игроки`)
};

const sv_explore_tag_group_players = /** @type {(inputs: Explore_Tag_Group_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spelare`)
};

const tr_explore_tag_group_players = /** @type {(inputs: Explore_Tag_Group_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyuncular`)
};

const zh_explore_tag_group_players = /** @type {(inputs: Explore_Tag_Group_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`玩家`)
};

const ja_explore_tag_group_players = /** @type {(inputs: Explore_Tag_Group_PlayersInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`プレイヤー`)
};

/**
* | output |
* | --- |
* | "Players" |
*
* @param {Explore_Tag_Group_PlayersInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_tag_group_players = /** @type {((inputs?: Explore_Tag_Group_PlayersInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Tag_Group_PlayersInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_tag_group_players(inputs)
	if (locale === "de") return de_explore_tag_group_players(inputs)
	if (locale === "fr") return fr_explore_tag_group_players(inputs)
	if (locale === "it") return it_explore_tag_group_players(inputs)
	if (locale === "nl") return nl_explore_tag_group_players(inputs)
	if (locale === "pl") return pl_explore_tag_group_players(inputs)
	if (locale === "pt") return pt_explore_tag_group_players(inputs)
	if (locale === "ru") return ru_explore_tag_group_players(inputs)
	if (locale === "sv") return sv_explore_tag_group_players(inputs)
	if (locale === "tr") return tr_explore_tag_group_players(inputs)
	if (locale === "zh") return zh_explore_tag_group_players(inputs)
	if (locale === "ja") return ja_explore_tag_group_players(inputs)
	return en_explore_tag_group_players(inputs)
});
