/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Jams_Unfollow_DoneInputs */

const en_jams_unfollow_done = /** @type {(inputs: Jams_Unfollow_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You no longer follow this jam.`)
};

const es_jams_unfollow_done = /** @type {(inputs: Jams_Unfollow_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ya no sigues este jam.`)
};

const de_jams_unfollow_done = /** @type {(inputs: Jams_Unfollow_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du folgst dieser Jam nicht mehr.`)
};

const fr_jams_unfollow_done = /** @type {(inputs: Jams_Unfollow_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous ne suivez plus ce jam.`)
};

const it_jams_unfollow_done = /** @type {(inputs: Jams_Unfollow_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non segui più questo jam.`)
};

const nl_jams_unfollow_done = /** @type {(inputs: Jams_Unfollow_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je volgt deze jam niet meer.`)
};

const pl_jams_unfollow_done = /** @type {(inputs: Jams_Unfollow_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie obserwujesz już tego jamu.`)
};

const pt_jams_unfollow_done = /** @type {(inputs: Jams_Unfollow_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você não segue mais este jam.`)
};

const ru_jams_unfollow_done = /** @type {(inputs: Jams_Unfollow_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы больше не следите за этим джемом.`)
};

const sv_jams_unfollow_done = /** @type {(inputs: Jams_Unfollow_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du följer inte längre den här jammen.`)
};

const tr_jams_unfollow_done = /** @type {(inputs: Jams_Unfollow_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Artık bu jam'i takip etmiyorsunuz.`)
};

const zh_jams_unfollow_done = /** @type {(inputs: Jams_Unfollow_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你已取消关注本场 Jam。`)
};

const ja_jams_unfollow_done = /** @type {(inputs: Jams_Unfollow_DoneInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このジャムのフォローを解除しました。`)
};

/**
* | output |
* | --- |
* | "You no longer follow this jam." |
*
* @param {Jams_Unfollow_DoneInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const jams_unfollow_done = /** @type {((inputs?: Jams_Unfollow_DoneInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Jams_Unfollow_DoneInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_jams_unfollow_done(inputs)
	if (locale === "de") return de_jams_unfollow_done(inputs)
	if (locale === "fr") return fr_jams_unfollow_done(inputs)
	if (locale === "it") return it_jams_unfollow_done(inputs)
	if (locale === "nl") return nl_jams_unfollow_done(inputs)
	if (locale === "pl") return pl_jams_unfollow_done(inputs)
	if (locale === "pt") return pt_jams_unfollow_done(inputs)
	if (locale === "ru") return ru_jams_unfollow_done(inputs)
	if (locale === "sv") return sv_jams_unfollow_done(inputs)
	if (locale === "tr") return tr_jams_unfollow_done(inputs)
	if (locale === "zh") return zh_jams_unfollow_done(inputs)
	if (locale === "ja") return ja_jams_unfollow_done(inputs)
	return en_jams_unfollow_done(inputs)
});
