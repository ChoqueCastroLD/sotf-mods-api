/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Modpacks_Cover_LabelInputs */

const en_modpacks_cover_label = /** @type {(inputs: Modpacks_Cover_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cover`)
};

const es_modpacks_cover_label = /** @type {(inputs: Modpacks_Cover_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Portada`)
};

const de_modpacks_cover_label = /** @type {(inputs: Modpacks_Cover_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Titelbild`)
};

const fr_modpacks_cover_label = /** @type {(inputs: Modpacks_Cover_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couverture`)
};

const it_modpacks_cover_label = /** @type {(inputs: Modpacks_Cover_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copertina`)
};

const nl_modpacks_cover_label = /** @type {(inputs: Modpacks_Cover_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Omslag`)
};

const pl_modpacks_cover_label = /** @type {(inputs: Modpacks_Cover_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Okładka`)
};

const pt_modpacks_cover_label = /** @type {(inputs: Modpacks_Cover_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Capa`)
};

const ru_modpacks_cover_label = /** @type {(inputs: Modpacks_Cover_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Обложка`)
};

const sv_modpacks_cover_label = /** @type {(inputs: Modpacks_Cover_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Omslag`)
};

const tr_modpacks_cover_label = /** @type {(inputs: Modpacks_Cover_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kapak`)
};

const zh_modpacks_cover_label = /** @type {(inputs: Modpacks_Cover_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`封面`)
};

const ja_modpacks_cover_label = /** @type {(inputs: Modpacks_Cover_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`カバー`)
};

/**
* | output |
* | --- |
* | "Cover" |
*
* @param {Modpacks_Cover_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const modpacks_cover_label = /** @type {((inputs?: Modpacks_Cover_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Modpacks_Cover_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_modpacks_cover_label(inputs)
	if (locale === "de") return de_modpacks_cover_label(inputs)
	if (locale === "fr") return fr_modpacks_cover_label(inputs)
	if (locale === "it") return it_modpacks_cover_label(inputs)
	if (locale === "nl") return nl_modpacks_cover_label(inputs)
	if (locale === "pl") return pl_modpacks_cover_label(inputs)
	if (locale === "pt") return pt_modpacks_cover_label(inputs)
	if (locale === "ru") return ru_modpacks_cover_label(inputs)
	if (locale === "sv") return sv_modpacks_cover_label(inputs)
	if (locale === "tr") return tr_modpacks_cover_label(inputs)
	if (locale === "zh") return zh_modpacks_cover_label(inputs)
	if (locale === "ja") return ja_modpacks_cover_label(inputs)
	return en_modpacks_cover_label(inputs)
});
