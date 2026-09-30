/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Multiplayer_Singleplayer_OnlyInputs */

const en_ui_domain_multiplayer_singleplayer_only = /** @type {(inputs: Ui_Domain_Multiplayer_Singleplayer_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo only`)
};

const es_ui_domain_multiplayer_singleplayer_only = /** @type {(inputs: Ui_Domain_Multiplayer_Singleplayer_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo un jugador`)
};

const de_ui_domain_multiplayer_singleplayer_only = /** @type {(inputs: Ui_Domain_Multiplayer_Singleplayer_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nur Einzelspieler`)
};

const fr_ui_domain_multiplayer_singleplayer_only = /** @type {(inputs: Ui_Domain_Multiplayer_Singleplayer_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo uniquement`)
};

const it_ui_domain_multiplayer_singleplayer_only = /** @type {(inputs: Ui_Domain_Multiplayer_Singleplayer_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Solo giocatore singolo`)
};

const nl_ui_domain_multiplayer_singleplayer_only = /** @type {(inputs: Ui_Domain_Multiplayer_Singleplayer_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alleen singleplayer`)
};

const pl_ui_domain_multiplayer_singleplayer_only = /** @type {(inputs: Ui_Domain_Multiplayer_Singleplayer_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tylko gra solo`)
};

const pt_ui_domain_multiplayer_singleplayer_only = /** @type {(inputs: Ui_Domain_Multiplayer_Singleplayer_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Só um jogador`)
};

const ru_ui_domain_multiplayer_singleplayer_only = /** @type {(inputs: Ui_Domain_Multiplayer_Singleplayer_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Только одиночная игра`)
};

const sv_ui_domain_multiplayer_singleplayer_only = /** @type {(inputs: Ui_Domain_Multiplayer_Singleplayer_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Endast solo`)
};

const tr_ui_domain_multiplayer_singleplayer_only = /** @type {(inputs: Ui_Domain_Multiplayer_Singleplayer_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yalnızca tek oyunculu`)
};

const zh_ui_domain_multiplayer_singleplayer_only = /** @type {(inputs: Ui_Domain_Multiplayer_Singleplayer_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`仅限单人`)
};

const ja_ui_domain_multiplayer_singleplayer_only = /** @type {(inputs: Ui_Domain_Multiplayer_Singleplayer_OnlyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`シングルプレイ専用`)
};

/**
* | output |
* | --- |
* | "Solo only" |
*
* @param {Ui_Domain_Multiplayer_Singleplayer_OnlyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_multiplayer_singleplayer_only = /** @type {((inputs?: Ui_Domain_Multiplayer_Singleplayer_OnlyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Multiplayer_Singleplayer_OnlyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_multiplayer_singleplayer_only(inputs)
	if (locale === "de") return de_ui_domain_multiplayer_singleplayer_only(inputs)
	if (locale === "fr") return fr_ui_domain_multiplayer_singleplayer_only(inputs)
	if (locale === "it") return it_ui_domain_multiplayer_singleplayer_only(inputs)
	if (locale === "nl") return nl_ui_domain_multiplayer_singleplayer_only(inputs)
	if (locale === "pl") return pl_ui_domain_multiplayer_singleplayer_only(inputs)
	if (locale === "pt") return pt_ui_domain_multiplayer_singleplayer_only(inputs)
	if (locale === "ru") return ru_ui_domain_multiplayer_singleplayer_only(inputs)
	if (locale === "sv") return sv_ui_domain_multiplayer_singleplayer_only(inputs)
	if (locale === "tr") return tr_ui_domain_multiplayer_singleplayer_only(inputs)
	if (locale === "zh") return zh_ui_domain_multiplayer_singleplayer_only(inputs)
	if (locale === "ja") return ja_ui_domain_multiplayer_singleplayer_only(inputs)
	return en_ui_domain_multiplayer_singleplayer_only(inputs)
});
