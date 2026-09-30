/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Summary_MultiplayerInputs */

const en_kits_summary_multiplayer = /** @type {(inputs: Kits_Summary_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multiplayer`)
};

const es_kits_summary_multiplayer = /** @type {(inputs: Kits_Summary_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multijugador`)
};

const de_kits_summary_multiplayer = /** @type {(inputs: Kits_Summary_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mehrspieler`)
};

const fr_kits_summary_multiplayer = /** @type {(inputs: Kits_Summary_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multijoueur`)
};

const it_kits_summary_multiplayer = /** @type {(inputs: Kits_Summary_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multigiocatore`)
};

const nl_kits_summary_multiplayer = /** @type {(inputs: Kits_Summary_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multiplayer`)
};

const pl_kits_summary_multiplayer = /** @type {(inputs: Kits_Summary_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tryb wieloosobowy`)
};

const pt_kits_summary_multiplayer = /** @type {(inputs: Kits_Summary_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multijogador`)
};

const ru_kits_summary_multiplayer = /** @type {(inputs: Kits_Summary_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мультиплеер`)
};

const sv_kits_summary_multiplayer = /** @type {(inputs: Kits_Summary_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flerspelare`)
};

const tr_kits_summary_multiplayer = /** @type {(inputs: Kits_Summary_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çok oyunculu`)
};

const zh_kits_summary_multiplayer = /** @type {(inputs: Kits_Summary_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`多人游戏`)
};

const ja_kits_summary_multiplayer = /** @type {(inputs: Kits_Summary_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`マルチプレイ`)
};

/**
* | output |
* | --- |
* | "Multiplayer" |
*
* @param {Kits_Summary_MultiplayerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_summary_multiplayer = /** @type {((inputs?: Kits_Summary_MultiplayerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Summary_MultiplayerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_summary_multiplayer(inputs)
	if (locale === "de") return de_kits_summary_multiplayer(inputs)
	if (locale === "fr") return fr_kits_summary_multiplayer(inputs)
	if (locale === "it") return it_kits_summary_multiplayer(inputs)
	if (locale === "nl") return nl_kits_summary_multiplayer(inputs)
	if (locale === "pl") return pl_kits_summary_multiplayer(inputs)
	if (locale === "pt") return pt_kits_summary_multiplayer(inputs)
	if (locale === "ru") return ru_kits_summary_multiplayer(inputs)
	if (locale === "sv") return sv_kits_summary_multiplayer(inputs)
	if (locale === "tr") return tr_kits_summary_multiplayer(inputs)
	if (locale === "zh") return zh_kits_summary_multiplayer(inputs)
	if (locale === "ja") return ja_kits_summary_multiplayer(inputs)
	return en_kits_summary_multiplayer(inputs)
});
