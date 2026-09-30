/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ start: NonNullable<unknown> }} Admin_Ann_FromInputs */

const en_admin_ann_from = /** @type {(inputs: Admin_Ann_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`From ${i?.start}`)
};

const es_admin_ann_from = /** @type {(inputs: Admin_Ann_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Desde ${i?.start}`)
};

const de_admin_ann_from = /** @type {(inputs: Admin_Ann_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Ab ${i?.start}`)
};

const fr_admin_ann_from = /** @type {(inputs: Admin_Ann_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`À partir du ${i?.start}`)
};

const it_admin_ann_from = /** @type {(inputs: Admin_Ann_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Dal ${i?.start}`)
};

const nl_admin_ann_from = /** @type {(inputs: Admin_Ann_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Vanaf ${i?.start}`)
};

const pl_admin_ann_from = /** @type {(inputs: Admin_Ann_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Od ${i?.start}`)
};

const pt_admin_ann_from = /** @type {(inputs: Admin_Ann_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`A partir de ${i?.start}`)
};

const ru_admin_ann_from = /** @type {(inputs: Admin_Ann_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`С ${i?.start}`)
};

const sv_admin_ann_from = /** @type {(inputs: Admin_Ann_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Från ${i?.start}`)
};

const tr_admin_ann_from = /** @type {(inputs: Admin_Ann_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.start} itibarıyla`)
};

const zh_admin_ann_from = /** @type {(inputs: Admin_Ann_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`自 ${i?.start} 起`)
};

const ja_admin_ann_from = /** @type {(inputs: Admin_Ann_FromInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.start} から`)
};

/**
* | output |
* | --- |
* | "From {start}" |
*
* @param {Admin_Ann_FromInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const admin_ann_from = /** @type {((inputs: Admin_Ann_FromInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Admin_Ann_FromInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_admin_ann_from(inputs)
	if (locale === "de") return de_admin_ann_from(inputs)
	if (locale === "fr") return fr_admin_ann_from(inputs)
	if (locale === "it") return it_admin_ann_from(inputs)
	if (locale === "nl") return nl_admin_ann_from(inputs)
	if (locale === "pl") return pl_admin_ann_from(inputs)
	if (locale === "pt") return pt_admin_ann_from(inputs)
	if (locale === "ru") return ru_admin_ann_from(inputs)
	if (locale === "sv") return sv_admin_ann_from(inputs)
	if (locale === "tr") return tr_admin_ann_from(inputs)
	if (locale === "zh") return zh_admin_ann_from(inputs)
	if (locale === "ja") return ja_admin_ann_from(inputs)
	return en_admin_ann_from(inputs)
});
