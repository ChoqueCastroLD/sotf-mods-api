/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ role: NonNullable<unknown> }} Mod_Install_MultiplayerInputs */

const en_mod_install_multiplayer = /** @type {(inputs: Mod_Install_MultiplayerInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Multiplayer: ${i?.role}.`)
};

const es_mod_install_multiplayer = /** @type {(inputs: Mod_Install_MultiplayerInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Multijugador: ${i?.role}.`)
};

const de_mod_install_multiplayer = /** @type {(inputs: Mod_Install_MultiplayerInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Mehrspieler: ${i?.role}.`)
};

const fr_mod_install_multiplayer = /** @type {(inputs: Mod_Install_MultiplayerInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Multijoueur : ${i?.role}.`)
};

const it_mod_install_multiplayer = /** @type {(inputs: Mod_Install_MultiplayerInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Multigiocatore: ${i?.role}.`)
};

const nl_mod_install_multiplayer = /** @type {(inputs: Mod_Install_MultiplayerInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Multiplayer: ${i?.role}.`)
};

const pl_mod_install_multiplayer = /** @type {(inputs: Mod_Install_MultiplayerInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Tryb wieloosobowy: ${i?.role}.`)
};

const pt_mod_install_multiplayer = /** @type {(inputs: Mod_Install_MultiplayerInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Multijogador: ${i?.role}.`)
};

const ru_mod_install_multiplayer = /** @type {(inputs: Mod_Install_MultiplayerInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Мультиплеер: ${i?.role}.`)
};

const sv_mod_install_multiplayer = /** @type {(inputs: Mod_Install_MultiplayerInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Flerspelare: ${i?.role}.`)
};

const tr_mod_install_multiplayer = /** @type {(inputs: Mod_Install_MultiplayerInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Çok oyunculu: ${i?.role}.`)
};

const zh_mod_install_multiplayer = /** @type {(inputs: Mod_Install_MultiplayerInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`多人游戏：${i?.role}。`)
};

const ja_mod_install_multiplayer = /** @type {(inputs: Mod_Install_MultiplayerInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`マルチプレイ：${i?.role}。`)
};

/**
* | output |
* | --- |
* | "Multiplayer: {role}." |
*
* @param {Mod_Install_MultiplayerInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_install_multiplayer = /** @type {((inputs: Mod_Install_MultiplayerInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Install_MultiplayerInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_install_multiplayer(inputs)
	if (locale === "de") return de_mod_install_multiplayer(inputs)
	if (locale === "fr") return fr_mod_install_multiplayer(inputs)
	if (locale === "it") return it_mod_install_multiplayer(inputs)
	if (locale === "nl") return nl_mod_install_multiplayer(inputs)
	if (locale === "pl") return pl_mod_install_multiplayer(inputs)
	if (locale === "pt") return pt_mod_install_multiplayer(inputs)
	if (locale === "ru") return ru_mod_install_multiplayer(inputs)
	if (locale === "sv") return sv_mod_install_multiplayer(inputs)
	if (locale === "tr") return tr_mod_install_multiplayer(inputs)
	if (locale === "zh") return zh_mod_install_multiplayer(inputs)
	if (locale === "ja") return ja_mod_install_multiplayer(inputs)
	return en_mod_install_multiplayer(inputs)
});
