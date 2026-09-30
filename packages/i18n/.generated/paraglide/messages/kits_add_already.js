/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ name: NonNullable<unknown>, kit: NonNullable<unknown> }} Kits_Add_AlreadyInputs */

const en_kits_add_already = /** @type {(inputs: Kits_Add_AlreadyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} is already in “${i?.kit}”.`)
};

const es_kits_add_already = /** @type {(inputs: Kits_Add_AlreadyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} ya está en «${i?.kit}».`)
};

const de_kits_add_already = /** @type {(inputs: Kits_Add_AlreadyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} ist schon in „${i?.kit}“.`)
};

const fr_kits_add_already = /** @type {(inputs: Kits_Add_AlreadyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} est déjà dans « ${i?.kit} ».`)
};

const it_kits_add_already = /** @type {(inputs: Kits_Add_AlreadyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} è già in «${i?.kit}».`)
};

const nl_kits_add_already = /** @type {(inputs: Kits_Add_AlreadyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} zit al in ‘${i?.kit}’.`)
};

const pl_kits_add_already = /** @type {(inputs: Kits_Add_AlreadyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} jest już w „${i?.kit}”.`)
};

const pt_kits_add_already = /** @type {(inputs: Kits_Add_AlreadyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} já está em “${i?.kit}”.`)
};

const ru_kits_add_already = /** @type {(inputs: Kits_Add_AlreadyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} уже в наборе «${i?.kit}».`)
};

const sv_kits_add_already = /** @type {(inputs: Kits_Add_AlreadyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} finns redan i ”${i?.kit}”.`)
};

const tr_kits_add_already = /** @type {(inputs: Kits_Add_AlreadyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} zaten “${i?.kit}” içinde.`)
};

const zh_kits_add_already = /** @type {(inputs: Kits_Add_AlreadyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} 已在“${i?.kit}”中。`)
};

const ja_kits_add_already = /** @type {(inputs: Kits_Add_AlreadyInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`${i?.name} はすでに「${i?.kit}」に入っています。`)
};

/**
* | output |
* | --- |
* | "{name} is already in “{kit}”." |
*
* @param {Kits_Add_AlreadyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_add_already = /** @type {((inputs: Kits_Add_AlreadyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Add_AlreadyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_add_already(inputs)
	if (locale === "de") return de_kits_add_already(inputs)
	if (locale === "fr") return fr_kits_add_already(inputs)
	if (locale === "it") return it_kits_add_already(inputs)
	if (locale === "nl") return nl_kits_add_already(inputs)
	if (locale === "pl") return pl_kits_add_already(inputs)
	if (locale === "pt") return pt_kits_add_already(inputs)
	if (locale === "ru") return ru_kits_add_already(inputs)
	if (locale === "sv") return sv_kits_add_already(inputs)
	if (locale === "tr") return tr_kits_add_already(inputs)
	if (locale === "zh") return zh_kits_add_already(inputs)
	if (locale === "ja") return ja_kits_add_already(inputs)
	return en_kits_add_already(inputs)
});
