/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Fact_MultiplayerInputs */

const en_mod_fact_multiplayer = /** @type {(inputs: Mod_Fact_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multiplayer`)
};

const es_mod_fact_multiplayer = /** @type {(inputs: Mod_Fact_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multijugador`)
};

const de_mod_fact_multiplayer = /** @type {(inputs: Mod_Fact_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mehrspieler`)
};

const fr_mod_fact_multiplayer = /** @type {(inputs: Mod_Fact_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multijoueur`)
};

const it_mod_fact_multiplayer = /** @type {(inputs: Mod_Fact_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multigiocatore`)
};

const nl_mod_fact_multiplayer = /** @type {(inputs: Mod_Fact_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multiplayer`)
};

const pl_mod_fact_multiplayer = /** @type {(inputs: Mod_Fact_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tryb wieloosobowy`)
};

const pt_mod_fact_multiplayer = /** @type {(inputs: Mod_Fact_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multijogador`)
};

const ru_mod_fact_multiplayer = /** @type {(inputs: Mod_Fact_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мультиплеер`)
};

const sv_mod_fact_multiplayer = /** @type {(inputs: Mod_Fact_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flerspelare`)
};

const tr_mod_fact_multiplayer = /** @type {(inputs: Mod_Fact_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çok oyunculu`)
};

const zh_mod_fact_multiplayer = /** @type {(inputs: Mod_Fact_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`多人游戏`)
};

const ja_mod_fact_multiplayer = /** @type {(inputs: Mod_Fact_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`マルチプレイ`)
};

/**
* | output |
* | --- |
* | "Multiplayer" |
*
* @param {Mod_Fact_MultiplayerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_fact_multiplayer = /** @type {((inputs?: Mod_Fact_MultiplayerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Fact_MultiplayerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_fact_multiplayer(inputs)
	if (locale === "de") return de_mod_fact_multiplayer(inputs)
	if (locale === "fr") return fr_mod_fact_multiplayer(inputs)
	if (locale === "it") return it_mod_fact_multiplayer(inputs)
	if (locale === "nl") return nl_mod_fact_multiplayer(inputs)
	if (locale === "pl") return pl_mod_fact_multiplayer(inputs)
	if (locale === "pt") return pt_mod_fact_multiplayer(inputs)
	if (locale === "ru") return ru_mod_fact_multiplayer(inputs)
	if (locale === "sv") return sv_mod_fact_multiplayer(inputs)
	if (locale === "tr") return tr_mod_fact_multiplayer(inputs)
	if (locale === "zh") return zh_mod_fact_multiplayer(inputs)
	if (locale === "ja") return ja_mod_fact_multiplayer(inputs)
	return en_mod_fact_multiplayer(inputs)
});
