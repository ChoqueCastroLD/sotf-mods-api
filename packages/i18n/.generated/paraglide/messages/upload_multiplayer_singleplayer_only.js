/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Multiplayer_Singleplayer_OnlyInputs */

const en_upload_multiplayer_singleplayer_only = /** @type {(inputs: Upload_Multiplayer_Singleplayer_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Single player only`)
};

const es_upload_multiplayer_singleplayer_only = /** @type {(inputs: Upload_Multiplayer_Singleplayer_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo un jugador`)
};

const de_upload_multiplayer_singleplayer_only = /** @type {(inputs: Upload_Multiplayer_Singleplayer_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nur Einzelspieler`)
};

const fr_upload_multiplayer_singleplayer_only = /** @type {(inputs: Upload_Multiplayer_Singleplayer_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo uniquement`)
};

const it_upload_multiplayer_singleplayer_only = /** @type {(inputs: Upload_Multiplayer_Singleplayer_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo giocatore singolo`)
};

const nl_upload_multiplayer_singleplayer_only = /** @type {(inputs: Upload_Multiplayer_Singleplayer_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alleen singleplayer`)
};

const pl_upload_multiplayer_singleplayer_only = /** @type {(inputs: Upload_Multiplayer_Singleplayer_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tylko jeden gracz`)
};

const pt_upload_multiplayer_singleplayer_only = /** @type {(inputs: Upload_Multiplayer_Singleplayer_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Só um jogador`)
};

const ru_upload_multiplayer_singleplayer_only = /** @type {(inputs: Upload_Multiplayer_Singleplayer_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Только одиночная игра`)
};

const sv_upload_multiplayer_singleplayer_only = /** @type {(inputs: Upload_Multiplayer_Singleplayer_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bara enspelare`)
};

const tr_upload_multiplayer_singleplayer_only = /** @type {(inputs: Upload_Multiplayer_Singleplayer_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yalnızca tek oyunculu`)
};

const zh_upload_multiplayer_singleplayer_only = /** @type {(inputs: Upload_Multiplayer_Singleplayer_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`仅单人`)
};

const ja_upload_multiplayer_singleplayer_only = /** @type {(inputs: Upload_Multiplayer_Singleplayer_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`シングルプレイ専用`)
};

/**
* | output |
* | --- |
* | "Single player only" |
*
* @param {Upload_Multiplayer_Singleplayer_OnlyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_multiplayer_singleplayer_only = /** @type {((inputs?: Upload_Multiplayer_Singleplayer_OnlyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Multiplayer_Singleplayer_OnlyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_multiplayer_singleplayer_only(inputs)
	if (locale === "de") return de_upload_multiplayer_singleplayer_only(inputs)
	if (locale === "fr") return fr_upload_multiplayer_singleplayer_only(inputs)
	if (locale === "it") return it_upload_multiplayer_singleplayer_only(inputs)
	if (locale === "nl") return nl_upload_multiplayer_singleplayer_only(inputs)
	if (locale === "pl") return pl_upload_multiplayer_singleplayer_only(inputs)
	if (locale === "pt") return pt_upload_multiplayer_singleplayer_only(inputs)
	if (locale === "ru") return ru_upload_multiplayer_singleplayer_only(inputs)
	if (locale === "sv") return sv_upload_multiplayer_singleplayer_only(inputs)
	if (locale === "tr") return tr_upload_multiplayer_singleplayer_only(inputs)
	if (locale === "zh") return zh_upload_multiplayer_singleplayer_only(inputs)
	if (locale === "ja") return ja_upload_multiplayer_singleplayer_only(inputs)
	return en_upload_multiplayer_singleplayer_only(inputs)
});
