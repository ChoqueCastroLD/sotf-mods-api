/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Versions_Col_GameInputs */

const en_ui_domain_versions_col_game = /** @type {(inputs: Ui_Domain_Versions_Col_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Game`)
};

const es_ui_domain_versions_col_game = /** @type {(inputs: Ui_Domain_Versions_Col_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Juego`)
};

const de_ui_domain_versions_col_game = /** @type {(inputs: Ui_Domain_Versions_Col_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spiel`)
};

const fr_ui_domain_versions_col_game = /** @type {(inputs: Ui_Domain_Versions_Col_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jeu`)
};

const it_ui_domain_versions_col_game = /** @type {(inputs: Ui_Domain_Versions_Col_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gioco`)
};

const nl_ui_domain_versions_col_game = /** @type {(inputs: Ui_Domain_Versions_Col_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Game`)
};

const pl_ui_domain_versions_col_game = /** @type {(inputs: Ui_Domain_Versions_Col_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gra`)
};

const pt_ui_domain_versions_col_game = /** @type {(inputs: Ui_Domain_Versions_Col_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jogo`)
};

const ru_ui_domain_versions_col_game = /** @type {(inputs: Ui_Domain_Versions_Col_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Игра`)
};

const sv_ui_domain_versions_col_game = /** @type {(inputs: Ui_Domain_Versions_Col_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Spel`)
};

const tr_ui_domain_versions_col_game = /** @type {(inputs: Ui_Domain_Versions_Col_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyun`)
};

const zh_ui_domain_versions_col_game = /** @type {(inputs: Ui_Domain_Versions_Col_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`游戏`)
};

const ja_ui_domain_versions_col_game = /** @type {(inputs: Ui_Domain_Versions_Col_GameInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ゲーム`)
};

/**
* | output |
* | --- |
* | "Game" |
*
* @param {Ui_Domain_Versions_Col_GameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_versions_col_game = /** @type {((inputs?: Ui_Domain_Versions_Col_GameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Versions_Col_GameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_versions_col_game(inputs)
	if (locale === "de") return de_ui_domain_versions_col_game(inputs)
	if (locale === "fr") return fr_ui_domain_versions_col_game(inputs)
	if (locale === "it") return it_ui_domain_versions_col_game(inputs)
	if (locale === "nl") return nl_ui_domain_versions_col_game(inputs)
	if (locale === "pl") return pl_ui_domain_versions_col_game(inputs)
	if (locale === "pt") return pt_ui_domain_versions_col_game(inputs)
	if (locale === "ru") return ru_ui_domain_versions_col_game(inputs)
	if (locale === "sv") return sv_ui_domain_versions_col_game(inputs)
	if (locale === "tr") return tr_ui_domain_versions_col_game(inputs)
	if (locale === "zh") return zh_ui_domain_versions_col_game(inputs)
	if (locale === "ja") return ja_ui_domain_versions_col_game(inputs)
	return en_ui_domain_versions_col_game(inputs)
});
