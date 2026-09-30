/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Compat_Mode_Host_HintInputs */

const en_social_compat_mode_host_hint = /** @type {(inputs: Social_Compat_Mode_Host_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You host the game for friends.`)
};

const es_social_compat_mode_host_hint = /** @type {(inputs: Social_Compat_Mode_Host_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tú alojas la partida para tus amigos.`)
};

const de_social_compat_mode_host_hint = /** @type {(inputs: Social_Compat_Mode_Host_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du hostest das Spiel für Freunde.`)
};

const fr_social_compat_mode_host_hint = /** @type {(inputs: Social_Compat_Mode_Host_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous hébergez la partie pour vos amis.`)
};

const it_social_compat_mode_host_hint = /** @type {(inputs: Social_Compat_Mode_Host_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ospiti la partita per gli amici.`)
};

const nl_social_compat_mode_host_hint = /** @type {(inputs: Social_Compat_Mode_Host_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jij host het spel voor vrienden.`)
};

const pl_social_compat_mode_host_hint = /** @type {(inputs: Social_Compat_Mode_Host_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hostujesz grę dla znajomych.`)
};

const pt_social_compat_mode_host_hint = /** @type {(inputs: Social_Compat_Mode_Host_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você hospeda a partida para os amigos.`)
};

const ru_social_compat_mode_host_hint = /** @type {(inputs: Social_Compat_Mode_Host_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы создаёте игру для друзей.`)
};

const sv_social_compat_mode_host_hint = /** @type {(inputs: Social_Compat_Mode_Host_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du är värd för dina vänner.`)
};

const tr_social_compat_mode_host_hint = /** @type {(inputs: Social_Compat_Mode_Host_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oyunu arkadaşların için sen kuruyorsun.`)
};

const zh_social_compat_mode_host_hint = /** @type {(inputs: Social_Compat_Mode_Host_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`由你为朋友开主机。`)
};

const ja_social_compat_mode_host_hint = /** @type {(inputs: Social_Compat_Mode_Host_HintInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`友だちのためにホストする。`)
};

/**
* | output |
* | --- |
* | "You host the game for friends." |
*
* @param {Social_Compat_Mode_Host_HintInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_compat_mode_host_hint = /** @type {((inputs?: Social_Compat_Mode_Host_HintInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Compat_Mode_Host_HintInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_compat_mode_host_hint(inputs)
	if (locale === "de") return de_social_compat_mode_host_hint(inputs)
	if (locale === "fr") return fr_social_compat_mode_host_hint(inputs)
	if (locale === "it") return it_social_compat_mode_host_hint(inputs)
	if (locale === "nl") return nl_social_compat_mode_host_hint(inputs)
	if (locale === "pl") return pl_social_compat_mode_host_hint(inputs)
	if (locale === "pt") return pt_social_compat_mode_host_hint(inputs)
	if (locale === "ru") return ru_social_compat_mode_host_hint(inputs)
	if (locale === "sv") return sv_social_compat_mode_host_hint(inputs)
	if (locale === "tr") return tr_social_compat_mode_host_hint(inputs)
	if (locale === "zh") return zh_social_compat_mode_host_hint(inputs)
	if (locale === "ja") return ja_social_compat_mode_host_hint(inputs)
	return en_social_compat_mode_host_hint(inputs)
});
