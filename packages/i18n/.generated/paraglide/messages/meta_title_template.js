/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ title: NonNullable<unknown> }} Meta_Title_TemplateInputs */

const en_meta_title_template = /** @type {(inputs: Meta_Title_TemplateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} | SOTF Mods`)
};

const es_meta_title_template = /** @type {(inputs: Meta_Title_TemplateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} | SOTF Mods`)
};

const de_meta_title_template = /** @type {(inputs: Meta_Title_TemplateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} | SOTF Mods`)
};

const fr_meta_title_template = /** @type {(inputs: Meta_Title_TemplateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} | SOTF Mods`)
};

const it_meta_title_template = /** @type {(inputs: Meta_Title_TemplateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} | SOTF Mods`)
};

const nl_meta_title_template = /** @type {(inputs: Meta_Title_TemplateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} | SOTF Mods`)
};

const pl_meta_title_template = /** @type {(inputs: Meta_Title_TemplateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} | SOTF Mods`)
};

const pt_meta_title_template = /** @type {(inputs: Meta_Title_TemplateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} | SOTF Mods`)
};

const ru_meta_title_template = /** @type {(inputs: Meta_Title_TemplateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} | SOTF Mods`)
};

const sv_meta_title_template = /** @type {(inputs: Meta_Title_TemplateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} | SOTF Mods`)
};

const tr_meta_title_template = /** @type {(inputs: Meta_Title_TemplateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} | SOTF Mods`)
};

const zh_meta_title_template = /** @type {(inputs: Meta_Title_TemplateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} | SOTF Mods`)
};

const ja_meta_title_template = /** @type {(inputs: Meta_Title_TemplateInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.title} | SOTF Mods`)
};

/**
* | output |
* | --- |
* | "{title} \| SOTF Mods" |
*
* @param {Meta_Title_TemplateInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const meta_title_template = /** @type {((inputs: Meta_Title_TemplateInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Meta_Title_TemplateInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_meta_title_template(inputs)
	if (locale === "de") return de_meta_title_template(inputs)
	if (locale === "fr") return fr_meta_title_template(inputs)
	if (locale === "it") return it_meta_title_template(inputs)
	if (locale === "nl") return nl_meta_title_template(inputs)
	if (locale === "pl") return pl_meta_title_template(inputs)
	if (locale === "pt") return pt_meta_title_template(inputs)
	if (locale === "ru") return ru_meta_title_template(inputs)
	if (locale === "sv") return sv_meta_title_template(inputs)
	if (locale === "tr") return tr_meta_title_template(inputs)
	if (locale === "zh") return zh_meta_title_template(inputs)
	if (locale === "ja") return ja_meta_title_template(inputs)
	return en_meta_title_template(inputs)
});
