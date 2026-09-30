/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Compat_Mode_ClientInputs */

const en_social_compat_mode_client = /** @type {(inputs: Social_Compat_Mode_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multiplayer client`)
};

const es_social_compat_mode_client = /** @type {(inputs: Social_Compat_Mode_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cliente multijugador`)
};

const de_social_compat_mode_client = /** @type {(inputs: Social_Compat_Mode_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multiplayer-Client`)
};

const fr_social_compat_mode_client = /** @type {(inputs: Social_Compat_Mode_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Client multijoueur`)
};

const it_social_compat_mode_client = /** @type {(inputs: Social_Compat_Mode_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Client multigiocatore`)
};

const nl_social_compat_mode_client = /** @type {(inputs: Social_Compat_Mode_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multiplayer-client`)
};

const pl_social_compat_mode_client = /** @type {(inputs: Social_Compat_Mode_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klient w trybie wieloosobowym`)
};

const pt_social_compat_mode_client = /** @type {(inputs: Social_Compat_Mode_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cliente multijogador`)
};

const ru_social_compat_mode_client = /** @type {(inputs: Social_Compat_Mode_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Клиент мультиплеера`)
};

const sv_social_compat_mode_client = /** @type {(inputs: Social_Compat_Mode_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Klient i flerspelarläge`)
};

const tr_social_compat_mode_client = /** @type {(inputs: Social_Compat_Mode_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çok oyunculu istemci`)
};

const zh_social_compat_mode_client = /** @type {(inputs: Social_Compat_Mode_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`多人客户端`)
};

const ja_social_compat_mode_client = /** @type {(inputs: Social_Compat_Mode_ClientInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`マルチプレイの参加者`)
};

/**
* | output |
* | --- |
* | "Multiplayer client" |
*
* @param {Social_Compat_Mode_ClientInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_compat_mode_client = /** @type {((inputs?: Social_Compat_Mode_ClientInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Compat_Mode_ClientInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_compat_mode_client(inputs)
	if (locale === "de") return de_social_compat_mode_client(inputs)
	if (locale === "fr") return fr_social_compat_mode_client(inputs)
	if (locale === "it") return it_social_compat_mode_client(inputs)
	if (locale === "nl") return nl_social_compat_mode_client(inputs)
	if (locale === "pl") return pl_social_compat_mode_client(inputs)
	if (locale === "pt") return pt_social_compat_mode_client(inputs)
	if (locale === "ru") return ru_social_compat_mode_client(inputs)
	if (locale === "sv") return sv_social_compat_mode_client(inputs)
	if (locale === "tr") return tr_social_compat_mode_client(inputs)
	if (locale === "zh") return zh_social_compat_mode_client(inputs)
	if (locale === "ja") return ja_social_compat_mode_client(inputs)
	return en_social_compat_mode_client(inputs)
});
