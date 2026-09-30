/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kitsocial_UnfollowedInputs */

const en_kitsocial_unfollowed = /** @type {(inputs: Kitsocial_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You stopped following this kit.`)
};

const es_kitsocial_unfollowed = /** @type {(inputs: Kitsocial_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dejaste de seguir este kit.`)
};

const de_kitsocial_unfollowed = /** @type {(inputs: Kitsocial_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du folgst diesem Kit nicht mehr.`)
};

const fr_kitsocial_unfollowed = /** @type {(inputs: Kitsocial_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous ne suivez plus ce kit.`)
};

const it_kitsocial_unfollowed = /** @type {(inputs: Kitsocial_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non segui più questo kit.`)
};

const nl_kitsocial_unfollowed = /** @type {(inputs: Kitsocial_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je volgt deze kit niet meer.`)
};

const pl_kitsocial_unfollowed = /** @type {(inputs: Kitsocial_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Przestałeś obserwować ten zestaw.`)
};

const pt_kitsocial_unfollowed = /** @type {(inputs: Kitsocial_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você deixou de seguir este kit.`)
};

const ru_kitsocial_unfollowed = /** @type {(inputs: Kitsocial_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы отписались от этого набора.`)
};

const sv_kitsocial_unfollowed = /** @type {(inputs: Kitsocial_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du följer inte längre det här kitet.`)
};

const tr_kitsocial_unfollowed = /** @type {(inputs: Kitsocial_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu kiti artık takip etmiyorsun.`)
};

const zh_kitsocial_unfollowed = /** @type {(inputs: Kitsocial_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你已取消关注此套件。`)
};

const ja_kitsocial_unfollowed = /** @type {(inputs: Kitsocial_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このキットのフォローを解除しました。`)
};

/**
* | output |
* | --- |
* | "You stopped following this kit." |
*
* @param {Kitsocial_UnfollowedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_unfollowed = /** @type {((inputs?: Kitsocial_UnfollowedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_UnfollowedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_unfollowed(inputs)
	if (locale === "de") return de_kitsocial_unfollowed(inputs)
	if (locale === "fr") return fr_kitsocial_unfollowed(inputs)
	if (locale === "it") return it_kitsocial_unfollowed(inputs)
	if (locale === "nl") return nl_kitsocial_unfollowed(inputs)
	if (locale === "pl") return pl_kitsocial_unfollowed(inputs)
	if (locale === "pt") return pt_kitsocial_unfollowed(inputs)
	if (locale === "ru") return ru_kitsocial_unfollowed(inputs)
	if (locale === "sv") return sv_kitsocial_unfollowed(inputs)
	if (locale === "tr") return tr_kitsocial_unfollowed(inputs)
	if (locale === "zh") return zh_kitsocial_unfollowed(inputs)
	if (locale === "ja") return ja_kitsocial_unfollowed(inputs)
	return en_kitsocial_unfollowed(inputs)
});
