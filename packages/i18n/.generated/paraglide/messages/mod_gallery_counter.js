/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ index: NonNullable<unknown>, total: NonNullable<unknown> }} Mod_Gallery_CounterInputs */

const en_mod_gallery_counter = /** @type {(inputs: Mod_Gallery_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.index} / ${i?.total}`)
};

const es_mod_gallery_counter = /** @type {(inputs: Mod_Gallery_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.index} / ${i?.total}`)
};

const de_mod_gallery_counter = /** @type {(inputs: Mod_Gallery_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.index} / ${i?.total}`)
};

const fr_mod_gallery_counter = /** @type {(inputs: Mod_Gallery_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.index} / ${i?.total}`)
};

const it_mod_gallery_counter = /** @type {(inputs: Mod_Gallery_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.index} / ${i?.total}`)
};

const nl_mod_gallery_counter = /** @type {(inputs: Mod_Gallery_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.index} / ${i?.total}`)
};

const pl_mod_gallery_counter = /** @type {(inputs: Mod_Gallery_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.index} / ${i?.total}`)
};

const pt_mod_gallery_counter = /** @type {(inputs: Mod_Gallery_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.index} / ${i?.total}`)
};

const ru_mod_gallery_counter = /** @type {(inputs: Mod_Gallery_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.index} / ${i?.total}`)
};

const sv_mod_gallery_counter = /** @type {(inputs: Mod_Gallery_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.index} / ${i?.total}`)
};

const tr_mod_gallery_counter = /** @type {(inputs: Mod_Gallery_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.index} / ${i?.total}`)
};

const zh_mod_gallery_counter = /** @type {(inputs: Mod_Gallery_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.index} / ${i?.total}`)
};

const ja_mod_gallery_counter = /** @type {(inputs: Mod_Gallery_CounterInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.index} / ${i?.total}`)
};

/**
* | output |
* | --- |
* | "{index} / {total}" |
*
* @param {Mod_Gallery_CounterInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const mod_gallery_counter = /** @type {((inputs: Mod_Gallery_CounterInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Mod_Gallery_CounterInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_mod_gallery_counter(inputs)
	if (locale === "de") return de_mod_gallery_counter(inputs)
	if (locale === "fr") return fr_mod_gallery_counter(inputs)
	if (locale === "it") return it_mod_gallery_counter(inputs)
	if (locale === "nl") return nl_mod_gallery_counter(inputs)
	if (locale === "pl") return pl_mod_gallery_counter(inputs)
	if (locale === "pt") return pt_mod_gallery_counter(inputs)
	if (locale === "ru") return ru_mod_gallery_counter(inputs)
	if (locale === "sv") return sv_mod_gallery_counter(inputs)
	if (locale === "tr") return tr_mod_gallery_counter(inputs)
	if (locale === "zh") return zh_mod_gallery_counter(inputs)
	if (locale === "ja") return ja_mod_gallery_counter(inputs)
	return en_mod_gallery_counter(inputs)
});
