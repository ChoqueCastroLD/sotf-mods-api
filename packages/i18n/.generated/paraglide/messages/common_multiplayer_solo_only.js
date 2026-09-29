/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Common_Multiplayer_Solo_OnlyInputs */

const en_common_multiplayer_solo_only = /** @type {(inputs: Common_Multiplayer_Solo_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo only`)
};

const es_common_multiplayer_solo_only = /** @type {(inputs: Common_Multiplayer_Solo_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo un jugador`)
};

const de_common_multiplayer_solo_only = /** @type {(inputs: Common_Multiplayer_Solo_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nur Einzelspieler`)
};

const fr_common_multiplayer_solo_only = /** @type {(inputs: Common_Multiplayer_Solo_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo uniquement`)
};

const it_common_multiplayer_solo_only = /** @type {(inputs: Common_Multiplayer_Solo_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo giocatore singolo`)
};

const nl_common_multiplayer_solo_only = /** @type {(inputs: Common_Multiplayer_Solo_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alleen singleplayer`)
};

const pl_common_multiplayer_solo_only = /** @type {(inputs: Common_Multiplayer_Solo_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tylko gra solo`)
};

const pt_common_multiplayer_solo_only = /** @type {(inputs: Common_Multiplayer_Solo_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Só um jogador`)
};

const ru_common_multiplayer_solo_only = /** @type {(inputs: Common_Multiplayer_Solo_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Только одиночная игра`)
};

const sv_common_multiplayer_solo_only = /** @type {(inputs: Common_Multiplayer_Solo_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Endast solo`)
};

const tr_common_multiplayer_solo_only = /** @type {(inputs: Common_Multiplayer_Solo_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yalnızca tek oyunculu`)
};

const zh_common_multiplayer_solo_only = /** @type {(inputs: Common_Multiplayer_Solo_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`仅限单人`)
};

const ja_common_multiplayer_solo_only = /** @type {(inputs: Common_Multiplayer_Solo_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`シングルプレイ専用`)
};

/**
* | output |
* | --- |
* | "Solo only" |
*
* @param {Common_Multiplayer_Solo_OnlyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const common_multiplayer_solo_only = /** @type {((inputs?: Common_Multiplayer_Solo_OnlyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Common_Multiplayer_Solo_OnlyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_common_multiplayer_solo_only(inputs)
	if (locale === "de") return de_common_multiplayer_solo_only(inputs)
	if (locale === "fr") return fr_common_multiplayer_solo_only(inputs)
	if (locale === "it") return it_common_multiplayer_solo_only(inputs)
	if (locale === "nl") return nl_common_multiplayer_solo_only(inputs)
	if (locale === "pl") return pl_common_multiplayer_solo_only(inputs)
	if (locale === "pt") return pt_common_multiplayer_solo_only(inputs)
	if (locale === "ru") return ru_common_multiplayer_solo_only(inputs)
	if (locale === "sv") return sv_common_multiplayer_solo_only(inputs)
	if (locale === "tr") return tr_common_multiplayer_solo_only(inputs)
	if (locale === "zh") return zh_common_multiplayer_solo_only(inputs)
	if (locale === "ja") return ja_common_multiplayer_solo_only(inputs)
	return en_common_multiplayer_solo_only(inputs)
});
