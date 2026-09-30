/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Compat_Mode_SingleplayerInputs */

const en_social_compat_mode_singleplayer = /** @type {(inputs: Social_Compat_Mode_SingleplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Singleplayer`)
};

const es_social_compat_mode_singleplayer = /** @type {(inputs: Social_Compat_Mode_SingleplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un jugador`)
};

const de_social_compat_mode_singleplayer = /** @type {(inputs: Social_Compat_Mode_SingleplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Einzelspieler`)
};

const fr_social_compat_mode_singleplayer = /** @type {(inputs: Social_Compat_Mode_SingleplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo`)
};

const it_social_compat_mode_singleplayer = /** @type {(inputs: Social_Compat_Mode_SingleplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Giocatore singolo`)
};

const nl_social_compat_mode_singleplayer = /** @type {(inputs: Social_Compat_Mode_SingleplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Singleplayer`)
};

const pl_social_compat_mode_singleplayer = /** @type {(inputs: Social_Compat_Mode_SingleplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gra jednoosobowa`)
};

const pt_social_compat_mode_singleplayer = /** @type {(inputs: Social_Compat_Mode_SingleplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Um jogador`)
};

const ru_social_compat_mode_singleplayer = /** @type {(inputs: Social_Compat_Mode_SingleplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Одиночная игра`)
};

const sv_social_compat_mode_singleplayer = /** @type {(inputs: Social_Compat_Mode_SingleplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Enspelarläge`)
};

const tr_social_compat_mode_singleplayer = /** @type {(inputs: Social_Compat_Mode_SingleplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tek oyunculu`)
};

const zh_social_compat_mode_singleplayer = /** @type {(inputs: Social_Compat_Mode_SingleplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`单人`)
};

const ja_social_compat_mode_singleplayer = /** @type {(inputs: Social_Compat_Mode_SingleplayerInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`シングルプレイ`)
};

/**
* | output |
* | --- |
* | "Singleplayer" |
*
* @param {Social_Compat_Mode_SingleplayerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_compat_mode_singleplayer = /** @type {((inputs?: Social_Compat_Mode_SingleplayerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Compat_Mode_SingleplayerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_compat_mode_singleplayer(inputs)
	if (locale === "de") return de_social_compat_mode_singleplayer(inputs)
	if (locale === "fr") return fr_social_compat_mode_singleplayer(inputs)
	if (locale === "it") return it_social_compat_mode_singleplayer(inputs)
	if (locale === "nl") return nl_social_compat_mode_singleplayer(inputs)
	if (locale === "pl") return pl_social_compat_mode_singleplayer(inputs)
	if (locale === "pt") return pt_social_compat_mode_singleplayer(inputs)
	if (locale === "ru") return ru_social_compat_mode_singleplayer(inputs)
	if (locale === "sv") return sv_social_compat_mode_singleplayer(inputs)
	if (locale === "tr") return tr_social_compat_mode_singleplayer(inputs)
	if (locale === "zh") return zh_social_compat_mode_singleplayer(inputs)
	if (locale === "ja") return ja_social_compat_mode_singleplayer(inputs)
	return en_social_compat_mode_singleplayer(inputs)
});
