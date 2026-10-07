/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ from: NonNullable<unknown>, to: NonNullable<unknown>, total: NonNullable<unknown> }} Ranger_Page_RangeInputs */

const en_ranger_page_range = /** @type {(inputs: Ranger_Page_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.from}–${i?.to} of ${i?.total}`)
};

const es_ranger_page_range = /** @type {(inputs: Ranger_Page_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.from}–${i?.to} de ${i?.total}`)
};

const de_ranger_page_range = /** @type {(inputs: Ranger_Page_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.from}–${i?.to} von ${i?.total}`)
};

const fr_ranger_page_range = /** @type {(inputs: Ranger_Page_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.from}–${i?.to} sur ${i?.total}`)
};

const it_ranger_page_range = /** @type {(inputs: Ranger_Page_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.from}–${i?.to} di ${i?.total}`)
};

const nl_ranger_page_range = /** @type {(inputs: Ranger_Page_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.from}–${i?.to} van ${i?.total}`)
};

const pl_ranger_page_range = /** @type {(inputs: Ranger_Page_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.from}–${i?.to} z ${i?.total}`)
};

const pt_ranger_page_range = /** @type {(inputs: Ranger_Page_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.from}–${i?.to} de ${i?.total}`)
};

const ru_ranger_page_range = /** @type {(inputs: Ranger_Page_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.from}–${i?.to} из ${i?.total}`)
};

const sv_ranger_page_range = /** @type {(inputs: Ranger_Page_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.from}–${i?.to} av ${i?.total}`)
};

const tr_ranger_page_range = /** @type {(inputs: Ranger_Page_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.from}–${i?.to} / ${i?.total}`)
};

const zh_ranger_page_range = /** @type {(inputs: Ranger_Page_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`第 ${i?.from}–${i?.to} 项，共 ${i?.total} 项`)
};

const ja_ranger_page_range = /** @type {(inputs: Ranger_Page_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.total} 件中 ${i?.from}–${i?.to} 件`)
};

/**
* | output |
* | --- |
* | "{from}–{to} of {total}" |
*
* @param {Ranger_Page_RangeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_page_range = /** @type {((inputs: Ranger_Page_RangeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Page_RangeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_page_range(inputs)
	if (locale === "de") return de_ranger_page_range(inputs)
	if (locale === "fr") return fr_ranger_page_range(inputs)
	if (locale === "it") return it_ranger_page_range(inputs)
	if (locale === "nl") return nl_ranger_page_range(inputs)
	if (locale === "pl") return pl_ranger_page_range(inputs)
	if (locale === "pt") return pt_ranger_page_range(inputs)
	if (locale === "ru") return ru_ranger_page_range(inputs)
	if (locale === "sv") return sv_ranger_page_range(inputs)
	if (locale === "tr") return tr_ranger_page_range(inputs)
	if (locale === "zh") return zh_ranger_page_range(inputs)
	if (locale === "ja") return ja_ranger_page_range(inputs)
	return en_ranger_page_range(inputs)
});
