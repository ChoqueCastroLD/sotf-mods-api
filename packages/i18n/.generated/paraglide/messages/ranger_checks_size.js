/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{ size: NonNullable<unknown> }} Ranger_Checks_SizeInputs */

const en_ranger_checks_size = /** @type {(inputs: Ranger_Checks_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Unpacked ${i?.size}`)
};

const es_ranger_checks_size = /** @type {(inputs: Ranger_Checks_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Descomprimido ${i?.size}`)
};

const de_ranger_checks_size = /** @type {(inputs: Ranger_Checks_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Entpackt ${i?.size}`)
};

const fr_ranger_checks_size = /** @type {(inputs: Ranger_Checks_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Décompressé ${i?.size}`)
};

const it_ranger_checks_size = /** @type {(inputs: Ranger_Checks_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Decompresso ${i?.size}`)
};

const nl_ranger_checks_size = /** @type {(inputs: Ranger_Checks_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Uitgepakt ${i?.size}`)
};

const pl_ranger_checks_size = /** @type {(inputs: Ranger_Checks_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Po rozpakowaniu ${i?.size}`)
};

const pt_ranger_checks_size = /** @type {(inputs: Ranger_Checks_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Descompactado ${i?.size}`)
};

const ru_ranger_checks_size = /** @type {(inputs: Ranger_Checks_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`В распакованном виде ${i?.size}`)
};

const sv_ranger_checks_size = /** @type {(inputs: Ranger_Checks_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Uppackat ${i?.size}`)
};

const tr_ranger_checks_size = /** @type {(inputs: Ranger_Checks_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`Açılmış hâli ${i?.size}`)
};

const zh_ranger_checks_size = /** @type {(inputs: Ranger_Checks_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`解压后 ${i?.size}`)
};

const ja_ranger_checks_size = /** @type {(inputs: Ranger_Checks_SizeInputs) => LocalizedString} */ (i) => {
	return /** @type {LocalizedString} */ (`展開後 ${i?.size}`)
};

/**
* | output |
* | --- |
* | "Unpacked {size}" |
*
* @param {Ranger_Checks_SizeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_checks_size = /** @type {((inputs: Ranger_Checks_SizeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Checks_SizeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_checks_size(inputs)
	if (locale === "de") return de_ranger_checks_size(inputs)
	if (locale === "fr") return fr_ranger_checks_size(inputs)
	if (locale === "it") return it_ranger_checks_size(inputs)
	if (locale === "nl") return nl_ranger_checks_size(inputs)
	if (locale === "pl") return pl_ranger_checks_size(inputs)
	if (locale === "pt") return pt_ranger_checks_size(inputs)
	if (locale === "ru") return ru_ranger_checks_size(inputs)
	if (locale === "sv") return sv_ranger_checks_size(inputs)
	if (locale === "tr") return tr_ranger_checks_size(inputs)
	if (locale === "zh") return zh_ranger_checks_size(inputs)
	if (locale === "ja") return ja_ranger_checks_size(inputs)
	return en_ranger_checks_size(inputs)
});
