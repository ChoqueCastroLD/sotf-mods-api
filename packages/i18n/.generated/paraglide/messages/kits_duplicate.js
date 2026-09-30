/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_DuplicateInputs */

const en_kits_duplicate = /** @type {(inputs: Kits_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duplicate`)
};

const es_kits_duplicate = /** @type {(inputs: Kits_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duplicar`)
};

const de_kits_duplicate = /** @type {(inputs: Kits_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duplizieren`)
};

const fr_kits_duplicate = /** @type {(inputs: Kits_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dupliquer`)
};

const it_kits_duplicate = /** @type {(inputs: Kits_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duplica`)
};

const nl_kits_duplicate = /** @type {(inputs: Kits_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dupliceren`)
};

const pl_kits_duplicate = /** @type {(inputs: Kits_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duplikuj`)
};

const pt_kits_duplicate = /** @type {(inputs: Kits_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duplicar`)
};

const ru_kits_duplicate = /** @type {(inputs: Kits_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Дублировать`)
};

const sv_kits_duplicate = /** @type {(inputs: Kits_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Duplicera`)
};

const tr_kits_duplicate = /** @type {(inputs: Kits_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Çoğalt`)
};

const zh_kits_duplicate = /** @type {(inputs: Kits_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建副本`)
};

const ja_kits_duplicate = /** @type {(inputs: Kits_DuplicateInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`複製`)
};

/**
* | output |
* | --- |
* | "Duplicate" |
*
* @param {Kits_DuplicateInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_duplicate = /** @type {((inputs?: Kits_DuplicateInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_DuplicateInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_duplicate(inputs)
	if (locale === "de") return de_kits_duplicate(inputs)
	if (locale === "fr") return fr_kits_duplicate(inputs)
	if (locale === "it") return it_kits_duplicate(inputs)
	if (locale === "nl") return nl_kits_duplicate(inputs)
	if (locale === "pl") return pl_kits_duplicate(inputs)
	if (locale === "pt") return pt_kits_duplicate(inputs)
	if (locale === "ru") return ru_kits_duplicate(inputs)
	if (locale === "sv") return sv_kits_duplicate(inputs)
	if (locale === "tr") return tr_kits_duplicate(inputs)
	if (locale === "zh") return zh_kits_duplicate(inputs)
	if (locale === "ja") return ja_kits_duplicate(inputs)
	return en_kits_duplicate(inputs)
});
