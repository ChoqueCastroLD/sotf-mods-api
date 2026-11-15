/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Detail_MultiplayerInputs */

const en_modpacks_detail_multiplayer = /** @type {(inputs: Modpacks_Detail_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multiplayer`)
};

const es_modpacks_detail_multiplayer = /** @type {(inputs: Modpacks_Detail_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multijugador`)
};

const de_modpacks_detail_multiplayer = /** @type {(inputs: Modpacks_Detail_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multiplayer`)
};

const fr_modpacks_detail_multiplayer = /** @type {(inputs: Modpacks_Detail_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multijoueur`)
};

const it_modpacks_detail_multiplayer = /** @type {(inputs: Modpacks_Detail_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multigiocatore`)
};

const nl_modpacks_detail_multiplayer = /** @type {(inputs: Modpacks_Detail_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multiplayer`)
};

const pl_modpacks_detail_multiplayer = /** @type {(inputs: Modpacks_Detail_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tryb wieloosobowy`)
};

const pt_modpacks_detail_multiplayer = /** @type {(inputs: Modpacks_Detail_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multijogador`)
};

const ru_modpacks_detail_multiplayer = /** @type {(inputs: Modpacks_Detail_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мультиплеер`)
};

const sv_modpacks_detail_multiplayer = /** @type {(inputs: Modpacks_Detail_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multiplayer`)
};

const tr_modpacks_detail_multiplayer = /** @type {(inputs: Modpacks_Detail_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çok oyunculu`)
};

const zh_modpacks_detail_multiplayer = /** @type {(inputs: Modpacks_Detail_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`多人游戏`)
};

const ja_modpacks_detail_multiplayer = /** @type {(inputs: Modpacks_Detail_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`マルチプレイ`)
};

/**
* | output |
* | --- |
* | "Multiplayer" |
*
* @param {Modpacks_Detail_MultiplayerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_detail_multiplayer = /** @type {((inputs?: Modpacks_Detail_MultiplayerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Detail_MultiplayerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_detail_multiplayer(inputs)
	if (locale === "de") return de_modpacks_detail_multiplayer(inputs)
	if (locale === "fr") return fr_modpacks_detail_multiplayer(inputs)
	if (locale === "it") return it_modpacks_detail_multiplayer(inputs)
	if (locale === "nl") return nl_modpacks_detail_multiplayer(inputs)
	if (locale === "pl") return pl_modpacks_detail_multiplayer(inputs)
	if (locale === "pt") return pt_modpacks_detail_multiplayer(inputs)
	if (locale === "ru") return ru_modpacks_detail_multiplayer(inputs)
	if (locale === "sv") return sv_modpacks_detail_multiplayer(inputs)
	if (locale === "tr") return tr_modpacks_detail_multiplayer(inputs)
	if (locale === "zh") return zh_modpacks_detail_multiplayer(inputs)
	if (locale === "ja") return ja_modpacks_detail_multiplayer(inputs)
	return en_modpacks_detail_multiplayer(inputs)
});
