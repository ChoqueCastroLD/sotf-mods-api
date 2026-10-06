/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Builds_UnfollowedInputs */

const en_builds_unfollowed = /** @type {(inputs: Builds_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You no longer follow this build.`)
};

const es_builds_unfollowed = /** @type {(inputs: Builds_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ya no sigues esta build.`)
};

const de_builds_unfollowed = /** @type {(inputs: Builds_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du folgst diesem Build nicht mehr.`)
};

const fr_builds_unfollowed = /** @type {(inputs: Builds_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous ne suivez plus cette build.`)
};

const it_builds_unfollowed = /** @type {(inputs: Builds_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non segui più questa build.`)
};

const nl_builds_unfollowed = /** @type {(inputs: Builds_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je volgt deze build niet meer.`)
};

const pl_builds_unfollowed = /** @type {(inputs: Builds_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie obserwujesz już tego builda.`)
};

const pt_builds_unfollowed = /** @type {(inputs: Builds_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você não segue mais esta build.`)
};

const ru_builds_unfollowed = /** @type {(inputs: Builds_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы отписались от этой постройки.`)
};

const sv_builds_unfollowed = /** @type {(inputs: Builds_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du följer inte längre det här bygget.`)
};

const tr_builds_unfollowed = /** @type {(inputs: Builds_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu yapıyı artık takip etmiyorsun.`)
};

const zh_builds_unfollowed = /** @type {(inputs: Builds_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你已取消关注此建筑。`)
};

const ja_builds_unfollowed = /** @type {(inputs: Builds_UnfollowedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`この建築のフォローを解除しました。`)
};

/**
* | output |
* | --- |
* | "You no longer follow this build." |
*
* @param {Builds_UnfollowedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const builds_unfollowed = /** @type {((inputs?: Builds_UnfollowedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Builds_UnfollowedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_builds_unfollowed(inputs)
	if (locale === "de") return de_builds_unfollowed(inputs)
	if (locale === "fr") return fr_builds_unfollowed(inputs)
	if (locale === "it") return it_builds_unfollowed(inputs)
	if (locale === "nl") return nl_builds_unfollowed(inputs)
	if (locale === "pl") return pl_builds_unfollowed(inputs)
	if (locale === "pt") return pt_builds_unfollowed(inputs)
	if (locale === "ru") return ru_builds_unfollowed(inputs)
	if (locale === "sv") return sv_builds_unfollowed(inputs)
	if (locale === "tr") return tr_builds_unfollowed(inputs)
	if (locale === "zh") return zh_builds_unfollowed(inputs)
	if (locale === "ja") return ja_builds_unfollowed(inputs)
	return en_builds_unfollowed(inputs)
});
