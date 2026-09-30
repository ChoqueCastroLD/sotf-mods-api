/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Mod_Tags_LabelInputs */

const en_mod_tags_label = /** @type {(inputs: Mod_Tags_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags`)
};

const es_mod_tags_label = /** @type {(inputs: Mod_Tags_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etiquetas`)
};

const de_mod_tags_label = /** @type {(inputs: Mod_Tags_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags`)
};

const fr_mod_tags_label = /** @type {(inputs: Mod_Tags_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags`)
};

const it_mod_tags_label = /** @type {(inputs: Mod_Tags_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tag`)
};

const nl_mod_tags_label = /** @type {(inputs: Mod_Tags_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags`)
};

const pl_mod_tags_label = /** @type {(inputs: Mod_Tags_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tagi`)
};

const pt_mod_tags_label = /** @type {(inputs: Mod_Tags_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tags`)
};

const ru_mod_tags_label = /** @type {(inputs: Mod_Tags_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Теги`)
};

const sv_mod_tags_label = /** @type {(inputs: Mod_Tags_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Taggar`)
};

const tr_mod_tags_label = /** @type {(inputs: Mod_Tags_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etiketler`)
};

const zh_mod_tags_label = /** @type {(inputs: Mod_Tags_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`标签`)
};

const ja_mod_tags_label = /** @type {(inputs: Mod_Tags_LabelInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`タグ`)
};

/**
* | output |
* | --- |
* | "Tags" |
*
* @param {Mod_Tags_LabelInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_tags_label = /** @type {((inputs?: Mod_Tags_LabelInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Tags_LabelInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_tags_label(inputs)
	if (locale === "de") return de_mod_tags_label(inputs)
	if (locale === "fr") return fr_mod_tags_label(inputs)
	if (locale === "it") return it_mod_tags_label(inputs)
	if (locale === "nl") return nl_mod_tags_label(inputs)
	if (locale === "pl") return pl_mod_tags_label(inputs)
	if (locale === "pt") return pt_mod_tags_label(inputs)
	if (locale === "ru") return ru_mod_tags_label(inputs)
	if (locale === "sv") return sv_mod_tags_label(inputs)
	if (locale === "tr") return tr_mod_tags_label(inputs)
	if (locale === "zh") return zh_mod_tags_label(inputs)
	if (locale === "ja") return ja_mod_tags_label(inputs)
	return en_mod_tags_label(inputs)
});
