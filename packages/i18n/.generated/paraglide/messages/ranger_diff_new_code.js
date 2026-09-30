/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ranger_Diff_New_CodeInputs */

const en_ranger_diff_new_code = /** @type {(inputs: Ranger_Diff_New_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`new code`)
};

const es_ranger_diff_new_code = /** @type {(inputs: Ranger_Diff_New_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`código nuevo`)
};

const de_ranger_diff_new_code = /** @type {(inputs: Ranger_Diff_New_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`neuer Code`)
};

const fr_ranger_diff_new_code = /** @type {(inputs: Ranger_Diff_New_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`nouveau code`)
};

const it_ranger_diff_new_code = /** @type {(inputs: Ranger_Diff_New_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`codice nuovo`)
};

const nl_ranger_diff_new_code = /** @type {(inputs: Ranger_Diff_New_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`nieuwe code`)
};

const pl_ranger_diff_new_code = /** @type {(inputs: Ranger_Diff_New_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`nowy kod`)
};

const pt_ranger_diff_new_code = /** @type {(inputs: Ranger_Diff_New_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`código novo`)
};

const ru_ranger_diff_new_code = /** @type {(inputs: Ranger_Diff_New_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`новый код`)
};

const sv_ranger_diff_new_code = /** @type {(inputs: Ranger_Diff_New_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ny kod`)
};

const tr_ranger_diff_new_code = /** @type {(inputs: Ranger_Diff_New_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`yeni kod`)
};

const zh_ranger_diff_new_code = /** @type {(inputs: Ranger_Diff_New_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新代码`)
};

const ja_ranger_diff_new_code = /** @type {(inputs: Ranger_Diff_New_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいコード`)
};

/**
* | output |
* | --- |
* | "new code" |
*
* @param {Ranger_Diff_New_CodeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ranger_diff_new_code = /** @type {((inputs?: Ranger_Diff_New_CodeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ranger_Diff_New_CodeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ranger_diff_new_code(inputs)
	if (locale === "de") return de_ranger_diff_new_code(inputs)
	if (locale === "fr") return fr_ranger_diff_new_code(inputs)
	if (locale === "it") return it_ranger_diff_new_code(inputs)
	if (locale === "nl") return nl_ranger_diff_new_code(inputs)
	if (locale === "pl") return pl_ranger_diff_new_code(inputs)
	if (locale === "pt") return pt_ranger_diff_new_code(inputs)
	if (locale === "ru") return ru_ranger_diff_new_code(inputs)
	if (locale === "sv") return sv_ranger_diff_new_code(inputs)
	if (locale === "tr") return tr_ranger_diff_new_code(inputs)
	if (locale === "zh") return zh_ranger_diff_new_code(inputs)
	if (locale === "ja") return ja_ranger_diff_new_code(inputs)
	return en_ranger_diff_new_code(inputs)
});
