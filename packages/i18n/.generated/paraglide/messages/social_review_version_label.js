/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Review_Version_LabelInputs */

const en_social_review_version_label = /** @type {(inputs: Social_Review_Version_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version you used`)
};

const es_social_review_version_label = /** @type {(inputs: Social_Review_Version_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versión que usaste`)
};

const de_social_review_version_label = /** @type {(inputs: Social_Review_Version_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwendete Version`)
};

const fr_social_review_version_label = /** @type {(inputs: Social_Review_Version_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version utilisée`)
};

const it_social_review_version_label = /** @type {(inputs: Social_Review_Version_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versione usata`)
};

const nl_social_review_version_label = /** @type {(inputs: Social_Review_Version_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gebruikte versie`)
};

const pl_social_review_version_label = /** @type {(inputs: Social_Review_Version_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Używana wersja`)
};

const pt_social_review_version_label = /** @type {(inputs: Social_Review_Version_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Versão que você usou`)
};

const ru_social_review_version_label = /** @type {(inputs: Social_Review_Version_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Версия, которую вы использовали`)
};

const sv_social_review_version_label = /** @type {(inputs: Social_Review_Version_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Version du använde`)
};

const tr_social_review_version_label = /** @type {(inputs: Social_Review_Version_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kullandığın sürüm`)
};

const zh_social_review_version_label = /** @type {(inputs: Social_Review_Version_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你使用的版本`)
};

const ja_social_review_version_label = /** @type {(inputs: Social_Review_Version_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`使ったバージョン`)
};

/**
* | output |
* | --- |
* | "Version you used" |
*
* @param {Social_Review_Version_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_review_version_label = /** @type {((inputs?: Social_Review_Version_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Review_Version_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_review_version_label(inputs)
	if (locale === "de") return de_social_review_version_label(inputs)
	if (locale === "fr") return fr_social_review_version_label(inputs)
	if (locale === "it") return it_social_review_version_label(inputs)
	if (locale === "nl") return nl_social_review_version_label(inputs)
	if (locale === "pl") return pl_social_review_version_label(inputs)
	if (locale === "pt") return pt_social_review_version_label(inputs)
	if (locale === "ru") return ru_social_review_version_label(inputs)
	if (locale === "sv") return sv_social_review_version_label(inputs)
	if (locale === "tr") return tr_social_review_version_label(inputs)
	if (locale === "zh") return zh_social_review_version_label(inputs)
	if (locale === "ja") return ja_social_review_version_label(inputs)
	return en_social_review_version_label(inputs)
});
