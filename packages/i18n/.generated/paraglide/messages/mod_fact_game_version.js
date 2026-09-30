/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Fact_Game_VersionInputs */

const en_mod_fact_game_version = /** @type {(inputs: Mod_Fact_Game_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Game version declared`)
};

const es_mod_fact_game_version = /** @type {(inputs: Mod_Fact_Game_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versión del juego declarada`)
};

const de_mod_fact_game_version = /** @type {(inputs: Mod_Fact_Game_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Angegebene Spielversion`)
};

const fr_mod_fact_game_version = /** @type {(inputs: Mod_Fact_Game_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version du jeu déclarée`)
};

const it_mod_fact_game_version = /** @type {(inputs: Mod_Fact_Game_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versione del gioco dichiarata`)
};

const nl_mod_fact_game_version = /** @type {(inputs: Mod_Fact_Game_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Opgegeven gameversie`)
};

const pl_mod_fact_game_version = /** @type {(inputs: Mod_Fact_Game_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deklarowana wersja gry`)
};

const pt_mod_fact_game_version = /** @type {(inputs: Mod_Fact_Game_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versão do jogo declarada`)
};

const ru_mod_fact_game_version = /** @type {(inputs: Mod_Fact_Game_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Заявленная версия игры`)
};

const sv_mod_fact_game_version = /** @type {(inputs: Mod_Fact_Game_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Angiven spelversion`)
};

const tr_mod_fact_game_version = /** @type {(inputs: Mod_Fact_Game_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Belirtilen oyun sürümü`)
};

const zh_mod_fact_game_version = /** @type {(inputs: Mod_Fact_Game_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`声明的游戏版本`)
};

const ja_mod_fact_game_version = /** @type {(inputs: Mod_Fact_Game_VersionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`対応ゲームバージョン（申告）`)
};

/**
* | output |
* | --- |
* | "Game version declared" |
*
* @param {Mod_Fact_Game_VersionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_fact_game_version = /** @type {((inputs?: Mod_Fact_Game_VersionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Fact_Game_VersionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_fact_game_version(inputs)
	if (locale === "de") return de_mod_fact_game_version(inputs)
	if (locale === "fr") return fr_mod_fact_game_version(inputs)
	if (locale === "it") return it_mod_fact_game_version(inputs)
	if (locale === "nl") return nl_mod_fact_game_version(inputs)
	if (locale === "pl") return pl_mod_fact_game_version(inputs)
	if (locale === "pt") return pt_mod_fact_game_version(inputs)
	if (locale === "ru") return ru_mod_fact_game_version(inputs)
	if (locale === "sv") return sv_mod_fact_game_version(inputs)
	if (locale === "tr") return tr_mod_fact_game_version(inputs)
	if (locale === "zh") return zh_mod_fact_game_version(inputs)
	if (locale === "ja") return ja_mod_fact_game_version(inputs)
	return en_mod_fact_game_version(inputs)
});
