/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_UnpinInputs */

const en_social_unpin = /** @type {(inputs: Social_UnpinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Unpin`)
};

const es_social_unpin = /** @type {(inputs: Social_UnpinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desfijar`)
};

const de_social_unpin = /** @type {(inputs: Social_UnpinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lösen`)
};

const fr_social_unpin = /** @type {(inputs: Social_UnpinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Désépingler`)
};

const it_social_unpin = /** @type {(inputs: Social_UnpinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Rimuovi dall’alto`)
};

const nl_social_unpin = /** @type {(inputs: Social_UnpinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Losmaken`)
};

const pl_social_unpin = /** @type {(inputs: Social_UnpinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Odepnij`)
};

const pt_social_unpin = /** @type {(inputs: Social_UnpinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Desafixar`)
};

const ru_social_unpin = /** @type {(inputs: Social_UnpinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Открепить`)
};

const sv_social_unpin = /** @type {(inputs: Social_UnpinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Lossa`)
};

const tr_social_unpin = /** @type {(inputs: Social_UnpinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sabitlemeyi kaldır`)
};

const zh_social_unpin = /** @type {(inputs: Social_UnpinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取消置顶`)
};

const ja_social_unpin = /** @type {(inputs: Social_UnpinInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ピン留めを解除`)
};

/**
* | output |
* | --- |
* | "Unpin" |
*
* @param {Social_UnpinInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_unpin = /** @type {((inputs?: Social_UnpinInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_UnpinInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_unpin(inputs)
	if (locale === "de") return de_social_unpin(inputs)
	if (locale === "fr") return fr_social_unpin(inputs)
	if (locale === "it") return it_social_unpin(inputs)
	if (locale === "nl") return nl_social_unpin(inputs)
	if (locale === "pl") return pl_social_unpin(inputs)
	if (locale === "pt") return pt_social_unpin(inputs)
	if (locale === "ru") return ru_social_unpin(inputs)
	if (locale === "sv") return sv_social_unpin(inputs)
	if (locale === "tr") return tr_social_unpin(inputs)
	if (locale === "zh") return zh_social_unpin(inputs)
	if (locale === "ja") return ja_social_unpin(inputs)
	return en_social_unpin(inputs)
});
