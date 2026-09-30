/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ build: NonNullable<unknown> }} Landing_Readout_GameInputs */

const en_landing_readout_game = /** @type {(inputs: Landing_Readout_GameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Game ${i?.build}`)
};

const es_landing_readout_game = /** @type {(inputs: Landing_Readout_GameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Juego ${i?.build}`)
};

const de_landing_readout_game = /** @type {(inputs: Landing_Readout_GameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Spiel ${i?.build}`)
};

const fr_landing_readout_game = /** @type {(inputs: Landing_Readout_GameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Jeu ${i?.build}`)
};

const it_landing_readout_game = /** @type {(inputs: Landing_Readout_GameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gioco ${i?.build}`)
};

const nl_landing_readout_game = /** @type {(inputs: Landing_Readout_GameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Game ${i?.build}`)
};

const pl_landing_readout_game = /** @type {(inputs: Landing_Readout_GameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Gra ${i?.build}`)
};

const pt_landing_readout_game = /** @type {(inputs: Landing_Readout_GameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Jogo ${i?.build}`)
};

const ru_landing_readout_game = /** @type {(inputs: Landing_Readout_GameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Игра ${i?.build}`)
};

const sv_landing_readout_game = /** @type {(inputs: Landing_Readout_GameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Spel ${i?.build}`)
};

const tr_landing_readout_game = /** @type {(inputs: Landing_Readout_GameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Oyun ${i?.build}`)
};

const zh_landing_readout_game = /** @type {(inputs: Landing_Readout_GameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`游戏 ${i?.build}`)
};

const ja_landing_readout_game = /** @type {(inputs: Landing_Readout_GameInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`ゲーム ${i?.build}`)
};

/**
* | output |
* | --- |
* | "Game {build}" |
*
* @param {Landing_Readout_GameInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const landing_readout_game = /** @type {((inputs: Landing_Readout_GameInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Landing_Readout_GameInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_landing_readout_game(inputs)
	if (locale === "de") return de_landing_readout_game(inputs)
	if (locale === "fr") return fr_landing_readout_game(inputs)
	if (locale === "it") return it_landing_readout_game(inputs)
	if (locale === "nl") return nl_landing_readout_game(inputs)
	if (locale === "pl") return pl_landing_readout_game(inputs)
	if (locale === "pt") return pt_landing_readout_game(inputs)
	if (locale === "ru") return ru_landing_readout_game(inputs)
	if (locale === "sv") return sv_landing_readout_game(inputs)
	if (locale === "tr") return tr_landing_readout_game(inputs)
	if (locale === "zh") return zh_landing_readout_game(inputs)
	if (locale === "ja") return ja_landing_readout_game(inputs)
	return en_landing_readout_game(inputs)
});
