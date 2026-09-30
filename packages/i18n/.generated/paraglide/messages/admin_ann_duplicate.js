/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Admin_Ann_DuplicateInputs */

const en_admin_ann_duplicate = /** @type {(inputs: Admin_Ann_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duplicate`)
};

const es_admin_ann_duplicate = /** @type {(inputs: Admin_Ann_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duplicar`)
};

const de_admin_ann_duplicate = /** @type {(inputs: Admin_Ann_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duplizieren`)
};

const fr_admin_ann_duplicate = /** @type {(inputs: Admin_Ann_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dupliquer`)
};

const it_admin_ann_duplicate = /** @type {(inputs: Admin_Ann_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duplica`)
};

const nl_admin_ann_duplicate = /** @type {(inputs: Admin_Ann_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dupliceren`)
};

const pl_admin_ann_duplicate = /** @type {(inputs: Admin_Ann_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duplikuj`)
};

const pt_admin_ann_duplicate = /** @type {(inputs: Admin_Ann_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duplicar`)
};

const ru_admin_ann_duplicate = /** @type {(inputs: Admin_Ann_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Дублировать`)
};

const sv_admin_ann_duplicate = /** @type {(inputs: Admin_Ann_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duplicera`)
};

const tr_admin_ann_duplicate = /** @type {(inputs: Admin_Ann_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çoğalt`)
};

const zh_admin_ann_duplicate = /** @type {(inputs: Admin_Ann_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`复制`)
};

const ja_admin_ann_duplicate = /** @type {(inputs: Admin_Ann_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`複製`)
};

/**
* | output |
* | --- |
* | "Duplicate" |
*
* @param {Admin_Ann_DuplicateInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ann_duplicate = /** @type {((inputs?: Admin_Ann_DuplicateInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ann_DuplicateInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ann_duplicate(inputs)
	if (locale === "de") return de_admin_ann_duplicate(inputs)
	if (locale === "fr") return fr_admin_ann_duplicate(inputs)
	if (locale === "it") return it_admin_ann_duplicate(inputs)
	if (locale === "nl") return nl_admin_ann_duplicate(inputs)
	if (locale === "pl") return pl_admin_ann_duplicate(inputs)
	if (locale === "pt") return pt_admin_ann_duplicate(inputs)
	if (locale === "ru") return ru_admin_ann_duplicate(inputs)
	if (locale === "sv") return sv_admin_ann_duplicate(inputs)
	if (locale === "tr") return tr_admin_ann_duplicate(inputs)
	if (locale === "zh") return zh_admin_ann_duplicate(inputs)
	if (locale === "ja") return ja_admin_ann_duplicate(inputs)
	return en_admin_ann_duplicate(inputs)
});
