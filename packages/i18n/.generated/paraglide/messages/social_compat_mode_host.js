/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Compat_Mode_HostInputs */

const en_social_compat_mode_host = /** @type {(inputs: Social_Compat_Mode_HostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multiplayer host`)
};

const es_social_compat_mode_host = /** @type {(inputs: Social_Compat_Mode_HostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anfitrión multijugador`)
};

const de_social_compat_mode_host = /** @type {(inputs: Social_Compat_Mode_HostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multiplayer-Host`)
};

const fr_social_compat_mode_host = /** @type {(inputs: Social_Compat_Mode_HostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hôte multijoueur`)
};

const it_social_compat_mode_host = /** @type {(inputs: Social_Compat_Mode_HostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Host multigiocatore`)
};

const nl_social_compat_mode_host = /** @type {(inputs: Social_Compat_Mode_HostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Multiplayer-host`)
};

const pl_social_compat_mode_host = /** @type {(inputs: Social_Compat_Mode_HostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Host w trybie wieloosobowym`)
};

const pt_social_compat_mode_host = /** @type {(inputs: Social_Compat_Mode_HostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anfitrião multijogador`)
};

const ru_social_compat_mode_host = /** @type {(inputs: Social_Compat_Mode_HostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Хост мультиплеера`)
};

const sv_social_compat_mode_host = /** @type {(inputs: Social_Compat_Mode_HostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Värd i flerspelarläge`)
};

const tr_social_compat_mode_host = /** @type {(inputs: Social_Compat_Mode_HostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çok oyunculu sunucu sahibi`)
};

const zh_social_compat_mode_host = /** @type {(inputs: Social_Compat_Mode_HostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`多人主机`)
};

const ja_social_compat_mode_host = /** @type {(inputs: Social_Compat_Mode_HostInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`マルチプレイのホスト`)
};

/**
* | output |
* | --- |
* | "Multiplayer host" |
*
* @param {Social_Compat_Mode_HostInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_compat_mode_host = /** @type {((inputs?: Social_Compat_Mode_HostInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Compat_Mode_HostInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_compat_mode_host(inputs)
	if (locale === "de") return de_social_compat_mode_host(inputs)
	if (locale === "fr") return fr_social_compat_mode_host(inputs)
	if (locale === "it") return it_social_compat_mode_host(inputs)
	if (locale === "nl") return nl_social_compat_mode_host(inputs)
	if (locale === "pl") return pl_social_compat_mode_host(inputs)
	if (locale === "pt") return pt_social_compat_mode_host(inputs)
	if (locale === "ru") return ru_social_compat_mode_host(inputs)
	if (locale === "sv") return sv_social_compat_mode_host(inputs)
	if (locale === "tr") return tr_social_compat_mode_host(inputs)
	if (locale === "zh") return zh_social_compat_mode_host(inputs)
	if (locale === "ja") return ja_social_compat_mode_host(inputs)
	return en_social_compat_mode_host(inputs)
});
