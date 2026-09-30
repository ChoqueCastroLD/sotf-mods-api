/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Explore_Multiplayer_Singleplayer_OnlyInputs */

const en_explore_multiplayer_singleplayer_only = /** @type {(inputs: Explore_Multiplayer_Singleplayer_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Single-player only`)
};

const es_explore_multiplayer_singleplayer_only = /** @type {(inputs: Explore_Multiplayer_Singleplayer_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo un jugador`)
};

const de_explore_multiplayer_singleplayer_only = /** @type {(inputs: Explore_Multiplayer_Singleplayer_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nur Einzelspieler`)
};

const fr_explore_multiplayer_singleplayer_only = /** @type {(inputs: Explore_Multiplayer_Singleplayer_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo uniquement`)
};

const it_explore_multiplayer_singleplayer_only = /** @type {(inputs: Explore_Multiplayer_Singleplayer_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo giocatore singolo`)
};

const nl_explore_multiplayer_singleplayer_only = /** @type {(inputs: Explore_Multiplayer_Singleplayer_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alleen singleplayer`)
};

const pl_explore_multiplayer_singleplayer_only = /** @type {(inputs: Explore_Multiplayer_Singleplayer_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tylko dla jednego gracza`)
};

const pt_explore_multiplayer_singleplayer_only = /** @type {(inputs: Explore_Multiplayer_Singleplayer_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Só um jogador`)
};

const ru_explore_multiplayer_singleplayer_only = /** @type {(inputs: Explore_Multiplayer_Singleplayer_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Только одиночная игра`)
};

const sv_explore_multiplayer_singleplayer_only = /** @type {(inputs: Explore_Multiplayer_Singleplayer_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bara enspelarläge`)
};

const tr_explore_multiplayer_singleplayer_only = /** @type {(inputs: Explore_Multiplayer_Singleplayer_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yalnızca tek oyunculu`)
};

const zh_explore_multiplayer_singleplayer_only = /** @type {(inputs: Explore_Multiplayer_Singleplayer_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`仅单人`)
};

const ja_explore_multiplayer_singleplayer_only = /** @type {(inputs: Explore_Multiplayer_Singleplayer_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`シングルプレイ専用`)
};

/**
* | output |
* | --- |
* | "Single-player only" |
*
* @param {Explore_Multiplayer_Singleplayer_OnlyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const explore_multiplayer_singleplayer_only = /** @type {((inputs?: Explore_Multiplayer_Singleplayer_OnlyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Explore_Multiplayer_Singleplayer_OnlyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_explore_multiplayer_singleplayer_only(inputs)
	if (locale === "de") return de_explore_multiplayer_singleplayer_only(inputs)
	if (locale === "fr") return fr_explore_multiplayer_singleplayer_only(inputs)
	if (locale === "it") return it_explore_multiplayer_singleplayer_only(inputs)
	if (locale === "nl") return nl_explore_multiplayer_singleplayer_only(inputs)
	if (locale === "pl") return pl_explore_multiplayer_singleplayer_only(inputs)
	if (locale === "pt") return pt_explore_multiplayer_singleplayer_only(inputs)
	if (locale === "ru") return ru_explore_multiplayer_singleplayer_only(inputs)
	if (locale === "sv") return sv_explore_multiplayer_singleplayer_only(inputs)
	if (locale === "tr") return tr_explore_multiplayer_singleplayer_only(inputs)
	if (locale === "zh") return zh_explore_multiplayer_singleplayer_only(inputs)
	if (locale === "ja") return ja_explore_multiplayer_singleplayer_only(inputs)
	return en_explore_multiplayer_singleplayer_only(inputs)
});
