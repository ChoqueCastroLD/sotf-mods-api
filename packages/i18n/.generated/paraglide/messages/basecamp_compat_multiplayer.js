/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Compat_MultiplayerInputs */

const en_basecamp_compat_multiplayer = /** @type {(inputs: Basecamp_Compat_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multiplayer`)
};

const es_basecamp_compat_multiplayer = /** @type {(inputs: Basecamp_Compat_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multijugador`)
};

const de_basecamp_compat_multiplayer = /** @type {(inputs: Basecamp_Compat_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mehrspieler`)
};

const fr_basecamp_compat_multiplayer = /** @type {(inputs: Basecamp_Compat_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multijoueur`)
};

const it_basecamp_compat_multiplayer = /** @type {(inputs: Basecamp_Compat_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multigiocatore`)
};

const nl_basecamp_compat_multiplayer = /** @type {(inputs: Basecamp_Compat_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multiplayer`)
};

const pl_basecamp_compat_multiplayer = /** @type {(inputs: Basecamp_Compat_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tryb wieloosobowy`)
};

const pt_basecamp_compat_multiplayer = /** @type {(inputs: Basecamp_Compat_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multijogador`)
};

const ru_basecamp_compat_multiplayer = /** @type {(inputs: Basecamp_Compat_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мультиплеер`)
};

const sv_basecamp_compat_multiplayer = /** @type {(inputs: Basecamp_Compat_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Flerspelare`)
};

const tr_basecamp_compat_multiplayer = /** @type {(inputs: Basecamp_Compat_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çok oyunculu`)
};

const zh_basecamp_compat_multiplayer = /** @type {(inputs: Basecamp_Compat_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`多人游戏`)
};

const ja_basecamp_compat_multiplayer = /** @type {(inputs: Basecamp_Compat_MultiplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`マルチプレイ`)
};

/**
* | output |
* | --- |
* | "Multiplayer" |
*
* @param {Basecamp_Compat_MultiplayerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_compat_multiplayer = /** @type {((inputs?: Basecamp_Compat_MultiplayerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Compat_MultiplayerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_compat_multiplayer(inputs)
	if (locale === "de") return de_basecamp_compat_multiplayer(inputs)
	if (locale === "fr") return fr_basecamp_compat_multiplayer(inputs)
	if (locale === "it") return it_basecamp_compat_multiplayer(inputs)
	if (locale === "nl") return nl_basecamp_compat_multiplayer(inputs)
	if (locale === "pl") return pl_basecamp_compat_multiplayer(inputs)
	if (locale === "pt") return pt_basecamp_compat_multiplayer(inputs)
	if (locale === "ru") return ru_basecamp_compat_multiplayer(inputs)
	if (locale === "sv") return sv_basecamp_compat_multiplayer(inputs)
	if (locale === "tr") return tr_basecamp_compat_multiplayer(inputs)
	if (locale === "zh") return zh_basecamp_compat_multiplayer(inputs)
	if (locale === "ja") return ja_basecamp_compat_multiplayer(inputs)
	return en_basecamp_compat_multiplayer(inputs)
});
