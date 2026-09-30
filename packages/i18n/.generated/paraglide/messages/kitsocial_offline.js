/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kitsocial_OfflineInputs */

const en_kitsocial_offline = /** @type {(inputs: Kitsocial_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You appear to be offline.`)
};

const es_kitsocial_offline = /** @type {(inputs: Kitsocial_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Parece que no tienes conexión.`)
};

const de_kitsocial_offline = /** @type {(inputs: Kitsocial_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du scheinst offline zu sein.`)
};

const fr_kitsocial_offline = /** @type {(inputs: Kitsocial_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous semblez être hors ligne.`)
};

const it_kitsocial_offline = /** @type {(inputs: Kitsocial_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sembra che tu sia offline.`)
};

const nl_kitsocial_offline = /** @type {(inputs: Kitsocial_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je lijkt offline te zijn.`)
};

const pl_kitsocial_offline = /** @type {(inputs: Kitsocial_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wygląda na to, że jesteś offline.`)
};

const pt_kitsocial_offline = /** @type {(inputs: Kitsocial_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você parece estar offline.`)
};

const ru_kitsocial_offline = /** @type {(inputs: Kitsocial_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Похоже, вы не в сети.`)
};

const sv_kitsocial_offline = /** @type {(inputs: Kitsocial_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du verkar vara offline.`)
};

const tr_kitsocial_offline = /** @type {(inputs: Kitsocial_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çevrimdışı görünüyorsun.`)
};

const zh_kitsocial_offline = /** @type {(inputs: Kitsocial_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你似乎已离线。`)
};

const ja_kitsocial_offline = /** @type {(inputs: Kitsocial_OfflineInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`オフラインのようです。`)
};

/**
* | output |
* | --- |
* | "You appear to be offline." |
*
* @param {Kitsocial_OfflineInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_offline = /** @type {((inputs?: Kitsocial_OfflineInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_OfflineInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_offline(inputs)
	if (locale === "de") return de_kitsocial_offline(inputs)
	if (locale === "fr") return fr_kitsocial_offline(inputs)
	if (locale === "it") return it_kitsocial_offline(inputs)
	if (locale === "nl") return nl_kitsocial_offline(inputs)
	if (locale === "pl") return pl_kitsocial_offline(inputs)
	if (locale === "pt") return pt_kitsocial_offline(inputs)
	if (locale === "ru") return ru_kitsocial_offline(inputs)
	if (locale === "sv") return sv_kitsocial_offline(inputs)
	if (locale === "tr") return tr_kitsocial_offline(inputs)
	if (locale === "zh") return zh_kitsocial_offline(inputs)
	if (locale === "ja") return ja_kitsocial_offline(inputs)
	return en_kitsocial_offline(inputs)
});
