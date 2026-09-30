/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Vote_LabelInputs */

const en_social_vote_label = /** @type {(inputs: Social_Vote_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Helpful?`)
};

const es_social_vote_label = /** @type {(inputs: Social_Vote_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`¿Útil?`)
};

const de_social_vote_label = /** @type {(inputs: Social_Vote_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hilfreich?`)
};

const fr_social_vote_label = /** @type {(inputs: Social_Vote_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utile ?`)
};

const it_social_vote_label = /** @type {(inputs: Social_Vote_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utile?`)
};

const nl_social_vote_label = /** @type {(inputs: Social_Vote_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuttig?`)
};

const pl_social_vote_label = /** @type {(inputs: Social_Vote_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Pomocna?`)
};

const pt_social_vote_label = /** @type {(inputs: Social_Vote_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Útil?`)
};

const ru_social_vote_label = /** @type {(inputs: Social_Vote_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Полезно?`)
};

const sv_social_vote_label = /** @type {(inputs: Social_Vote_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hjälpsam?`)
};

const tr_social_vote_label = /** @type {(inputs: Social_Vote_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Faydalı mı?`)
};

const zh_social_vote_label = /** @type {(inputs: Social_Vote_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有帮助吗？`)
};

const ja_social_vote_label = /** @type {(inputs: Social_Vote_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`参考になった？`)
};

/**
* | output |
* | --- |
* | "Helpful?" |
*
* @param {Social_Vote_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_vote_label = /** @type {((inputs?: Social_Vote_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Vote_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_vote_label(inputs)
	if (locale === "de") return de_social_vote_label(inputs)
	if (locale === "fr") return fr_social_vote_label(inputs)
	if (locale === "it") return it_social_vote_label(inputs)
	if (locale === "nl") return nl_social_vote_label(inputs)
	if (locale === "pl") return pl_social_vote_label(inputs)
	if (locale === "pt") return pt_social_vote_label(inputs)
	if (locale === "ru") return ru_social_vote_label(inputs)
	if (locale === "sv") return sv_social_vote_label(inputs)
	if (locale === "tr") return tr_social_vote_label(inputs)
	if (locale === "zh") return zh_social_vote_label(inputs)
	if (locale === "ja") return ja_social_vote_label(inputs)
	return en_social_vote_label(inputs)
});
