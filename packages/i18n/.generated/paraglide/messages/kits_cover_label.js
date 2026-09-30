/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Cover_LabelInputs */

const en_kits_cover_label = /** @type {(inputs: Kits_Cover_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cover`)
};

const es_kits_cover_label = /** @type {(inputs: Kits_Cover_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Portada`)
};

const de_kits_cover_label = /** @type {(inputs: Kits_Cover_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titelbild`)
};

const fr_kits_cover_label = /** @type {(inputs: Kits_Cover_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couverture`)
};

const it_kits_cover_label = /** @type {(inputs: Kits_Cover_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copertina`)
};

const nl_kits_cover_label = /** @type {(inputs: Kits_Cover_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Omslag`)
};

const pl_kits_cover_label = /** @type {(inputs: Kits_Cover_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Okładka`)
};

const pt_kits_cover_label = /** @type {(inputs: Kits_Cover_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Capa`)
};

const ru_kits_cover_label = /** @type {(inputs: Kits_Cover_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обложка`)
};

const sv_kits_cover_label = /** @type {(inputs: Kits_Cover_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Omslag`)
};

const tr_kits_cover_label = /** @type {(inputs: Kits_Cover_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kapak`)
};

const zh_kits_cover_label = /** @type {(inputs: Kits_Cover_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`封面`)
};

const ja_kits_cover_label = /** @type {(inputs: Kits_Cover_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カバー`)
};

/**
* | output |
* | --- |
* | "Cover" |
*
* @param {Kits_Cover_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_cover_label = /** @type {((inputs?: Kits_Cover_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Cover_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_cover_label(inputs)
	if (locale === "de") return de_kits_cover_label(inputs)
	if (locale === "fr") return fr_kits_cover_label(inputs)
	if (locale === "it") return it_kits_cover_label(inputs)
	if (locale === "nl") return nl_kits_cover_label(inputs)
	if (locale === "pl") return pl_kits_cover_label(inputs)
	if (locale === "pt") return pt_kits_cover_label(inputs)
	if (locale === "ru") return ru_kits_cover_label(inputs)
	if (locale === "sv") return sv_kits_cover_label(inputs)
	if (locale === "tr") return tr_kits_cover_label(inputs)
	if (locale === "zh") return zh_kits_cover_label(inputs)
	if (locale === "ja") return ja_kits_cover_label(inputs)
	return en_kits_cover_label(inputs)
});
