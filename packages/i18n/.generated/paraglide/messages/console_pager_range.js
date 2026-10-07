/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ from: NonNullable<unknown>, to: NonNullable<unknown>, total: NonNullable<unknown> }} Console_Pager_RangeInputs */

const en_console_pager_range = /** @type {(inputs: Console_Pager_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.from}–${i?.to} of ${i?.total}`)
};

const es_console_pager_range = /** @type {(inputs: Console_Pager_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.from}–${i?.to} de ${i?.total}`)
};

const de_console_pager_range = /** @type {(inputs: Console_Pager_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.from}–${i?.to} von ${i?.total}`)
};

const fr_console_pager_range = /** @type {(inputs: Console_Pager_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.from}–${i?.to} sur ${i?.total}`)
};

const it_console_pager_range = /** @type {(inputs: Console_Pager_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.from}–${i?.to} di ${i?.total}`)
};

const nl_console_pager_range = /** @type {(inputs: Console_Pager_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.from}–${i?.to} van ${i?.total}`)
};

const pl_console_pager_range = /** @type {(inputs: Console_Pager_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.from}–${i?.to} z ${i?.total}`)
};

const pt_console_pager_range = /** @type {(inputs: Console_Pager_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.from}–${i?.to} de ${i?.total}`)
};

const ru_console_pager_range = /** @type {(inputs: Console_Pager_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.from}–${i?.to} из ${i?.total}`)
};

const sv_console_pager_range = /** @type {(inputs: Console_Pager_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.from}–${i?.to} av ${i?.total}`)
};

const tr_console_pager_range = /** @type {(inputs: Console_Pager_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.total} içinde ${i?.from}–${i?.to}`)
};

const zh_console_pager_range = /** @type {(inputs: Console_Pager_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`第 ${i?.from}–${i?.to} 项，共 ${i?.total} 项`)
};

const ja_console_pager_range = /** @type {(inputs: Console_Pager_RangeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.total} 件中 ${i?.from}–${i?.to} 件`)
};

/**
* | output |
* | --- |
* | "{from}–{to} of {total}" |
*
* @param {Console_Pager_RangeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const console_pager_range = /** @type {((inputs: Console_Pager_RangeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Console_Pager_RangeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_console_pager_range(inputs)
	if (locale === "de") return de_console_pager_range(inputs)
	if (locale === "fr") return fr_console_pager_range(inputs)
	if (locale === "it") return it_console_pager_range(inputs)
	if (locale === "nl") return nl_console_pager_range(inputs)
	if (locale === "pl") return pl_console_pager_range(inputs)
	if (locale === "pt") return pt_console_pager_range(inputs)
	if (locale === "ru") return ru_console_pager_range(inputs)
	if (locale === "sv") return sv_console_pager_range(inputs)
	if (locale === "tr") return tr_console_pager_range(inputs)
	if (locale === "zh") return zh_console_pager_range(inputs)
	if (locale === "ja") return ja_console_pager_range(inputs)
	return en_console_pager_range(inputs)
});
