/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_New_ModInputs */

const en_upload_new_mod = /** @type {(inputs: Upload_New_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`A mod or library`)
};

const es_upload_new_mod = /** @type {(inputs: Upload_New_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un mod o una librería`)
};

const de_upload_new_mod = /** @type {(inputs: Upload_New_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Einen Mod oder eine Bibliothek`)
};

const fr_upload_new_mod = /** @type {(inputs: Upload_New_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Un mod ou une bibliothèque`)
};

const it_upload_new_mod = /** @type {(inputs: Upload_New_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Una mod o una libreria`)
};

const nl_upload_new_mod = /** @type {(inputs: Upload_New_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een mod of bibliotheek`)
};

const pl_upload_new_mod = /** @type {(inputs: Upload_New_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Mod lub biblioteka`)
};

const pt_upload_new_mod = /** @type {(inputs: Upload_New_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Um mod ou biblioteca`)
};

const ru_upload_new_mod = /** @type {(inputs: Upload_New_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Мод или библиотеку`)
};

const sv_upload_new_mod = /** @type {(inputs: Upload_New_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En mod eller ett bibliotek`)
};

const tr_upload_new_mod = /** @type {(inputs: Upload_New_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bir mod ya da kütüphane`)
};

const zh_upload_new_mod = /** @type {(inputs: Upload_New_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`模组或前置库`)
};

const ja_upload_new_mod = /** @type {(inputs: Upload_New_ModInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`MODまたはライブラリ`)
};

/**
* | output |
* | --- |
* | "A mod or library" |
*
* @param {Upload_New_ModInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_new_mod = /** @type {((inputs?: Upload_New_ModInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_New_ModInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_new_mod(inputs)
	if (locale === "de") return de_upload_new_mod(inputs)
	if (locale === "fr") return fr_upload_new_mod(inputs)
	if (locale === "it") return it_upload_new_mod(inputs)
	if (locale === "nl") return nl_upload_new_mod(inputs)
	if (locale === "pl") return pl_upload_new_mod(inputs)
	if (locale === "pt") return pt_upload_new_mod(inputs)
	if (locale === "ru") return ru_upload_new_mod(inputs)
	if (locale === "sv") return sv_upload_new_mod(inputs)
	if (locale === "tr") return tr_upload_new_mod(inputs)
	if (locale === "zh") return zh_upload_new_mod(inputs)
	if (locale === "ja") return ja_upload_new_mod(inputs)
	return en_upload_new_mod(inputs)
});
