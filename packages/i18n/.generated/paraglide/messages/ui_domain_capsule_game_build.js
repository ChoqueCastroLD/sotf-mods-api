/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Capsule_Game_BuildInputs */

const en_ui_domain_capsule_game_build = /** @type {(inputs: Ui_Domain_Capsule_Game_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Game build`)
};

const es_ui_domain_capsule_game_build = /** @type {(inputs: Ui_Domain_Capsule_Game_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build del juego`)
};

const de_ui_domain_capsule_game_build = /** @type {(inputs: Ui_Domain_Capsule_Game_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spiel-Build`)
};

const fr_ui_domain_capsule_game_build = /** @type {(inputs: Ui_Domain_Capsule_Game_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build du jeu`)
};

const it_ui_domain_capsule_game_build = /** @type {(inputs: Ui_Domain_Capsule_Game_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build del gioco`)
};

const nl_ui_domain_capsule_game_build = /** @type {(inputs: Ui_Domain_Capsule_Game_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gamebuild`)
};

const pl_ui_domain_capsule_game_build = /** @type {(inputs: Ui_Domain_Capsule_Game_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build gry`)
};

const pt_ui_domain_capsule_game_build = /** @type {(inputs: Ui_Domain_Capsule_Game_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Build do jogo`)
};

const ru_ui_domain_capsule_game_build = /** @type {(inputs: Ui_Domain_Capsule_Game_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Билд игры`)
};

const sv_ui_domain_capsule_game_build = /** @type {(inputs: Ui_Domain_Capsule_Game_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spelbuild`)
};

const tr_ui_domain_capsule_game_build = /** @type {(inputs: Ui_Domain_Capsule_Game_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyun sürümü`)
};

const zh_ui_domain_capsule_game_build = /** @type {(inputs: Ui_Domain_Capsule_Game_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`游戏版本`)
};

const ja_ui_domain_capsule_game_build = /** @type {(inputs: Ui_Domain_Capsule_Game_BuildInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ゲームビルド`)
};

/**
* | output |
* | --- |
* | "Game build" |
*
* @param {Ui_Domain_Capsule_Game_BuildInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_capsule_game_build = /** @type {((inputs?: Ui_Domain_Capsule_Game_BuildInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Capsule_Game_BuildInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_capsule_game_build(inputs)
	if (locale === "de") return de_ui_domain_capsule_game_build(inputs)
	if (locale === "fr") return fr_ui_domain_capsule_game_build(inputs)
	if (locale === "it") return it_ui_domain_capsule_game_build(inputs)
	if (locale === "nl") return nl_ui_domain_capsule_game_build(inputs)
	if (locale === "pl") return pl_ui_domain_capsule_game_build(inputs)
	if (locale === "pt") return pt_ui_domain_capsule_game_build(inputs)
	if (locale === "ru") return ru_ui_domain_capsule_game_build(inputs)
	if (locale === "sv") return sv_ui_domain_capsule_game_build(inputs)
	if (locale === "tr") return tr_ui_domain_capsule_game_build(inputs)
	if (locale === "zh") return zh_ui_domain_capsule_game_build(inputs)
	if (locale === "ja") return ja_ui_domain_capsule_game_build(inputs)
	return en_ui_domain_capsule_game_build(inputs)
});
