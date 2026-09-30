/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Requests_Fulfill_LabelInputs */

const en_requests_fulfill_label = /** @type {(inputs: Requests_Fulfill_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your published mod`)
};

const es_requests_fulfill_label = /** @type {(inputs: Requests_Fulfill_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tu mod publicado`)
};

const de_requests_fulfill_label = /** @type {(inputs: Requests_Fulfill_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dein veröffentlichter Mod`)
};

const fr_requests_fulfill_label = /** @type {(inputs: Requests_Fulfill_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Votre mod publié`)
};

const it_requests_fulfill_label = /** @type {(inputs: Requests_Fulfill_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il tuo mod pubblicato`)
};

const nl_requests_fulfill_label = /** @type {(inputs: Requests_Fulfill_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je gepubliceerde mod`)
};

const pl_requests_fulfill_label = /** @type {(inputs: Requests_Fulfill_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twój opublikowany mod`)
};

const pt_requests_fulfill_label = /** @type {(inputs: Requests_Fulfill_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seu mod publicado`)
};

const ru_requests_fulfill_label = /** @type {(inputs: Requests_Fulfill_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваш опубликованный мод`)
};

const sv_requests_fulfill_label = /** @type {(inputs: Requests_Fulfill_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Din publicerade mod`)
};

const tr_requests_fulfill_label = /** @type {(inputs: Requests_Fulfill_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yayımlanmış modunuz`)
};

const zh_requests_fulfill_label = /** @type {(inputs: Requests_Fulfill_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你已发布的模组`)
};

const ja_requests_fulfill_label = /** @type {(inputs: Requests_Fulfill_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開済みの MOD`)
};

/**
* | output |
* | --- |
* | "Your published mod" |
*
* @param {Requests_Fulfill_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const requests_fulfill_label = /** @type {((inputs?: Requests_Fulfill_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Requests_Fulfill_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_requests_fulfill_label(inputs)
	if (locale === "de") return de_requests_fulfill_label(inputs)
	if (locale === "fr") return fr_requests_fulfill_label(inputs)
	if (locale === "it") return it_requests_fulfill_label(inputs)
	if (locale === "nl") return nl_requests_fulfill_label(inputs)
	if (locale === "pl") return pl_requests_fulfill_label(inputs)
	if (locale === "pt") return pt_requests_fulfill_label(inputs)
	if (locale === "ru") return ru_requests_fulfill_label(inputs)
	if (locale === "sv") return sv_requests_fulfill_label(inputs)
	if (locale === "tr") return tr_requests_fulfill_label(inputs)
	if (locale === "zh") return zh_requests_fulfill_label(inputs)
	if (locale === "ja") return ja_requests_fulfill_label(inputs)
	return en_requests_fulfill_label(inputs)
});
