/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kits_Copy_CodeInputs */

const en_kits_copy_code = /** @type {(inputs: Kits_Copy_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copy kit code`)
};

const es_kits_copy_code = /** @type {(inputs: Kits_Copy_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiar código del kit`)
};

const de_kits_copy_code = /** @type {(inputs: Kits_Copy_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit-Code kopieren`)
};

const fr_kits_copy_code = /** @type {(inputs: Kits_Copy_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copier le code du kit`)
};

const it_kits_copy_code = /** @type {(inputs: Kits_Copy_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copia codice kit`)
};

const nl_kits_copy_code = /** @type {(inputs: Kits_Copy_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kitcode kopiëren`)
};

const pl_kits_copy_code = /** @type {(inputs: Kits_Copy_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiuj kod zestawu`)
};

const pt_kits_copy_code = /** @type {(inputs: Kits_Copy_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Copiar código do kit`)
};

const ru_kits_copy_code = /** @type {(inputs: Kits_Copy_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Скопировать код набора`)
};

const sv_kits_copy_code = /** @type {(inputs: Kits_Copy_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kopiera kitkod`)
};

const tr_kits_copy_code = /** @type {(inputs: Kits_Copy_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kit kodunu kopyala`)
};

const zh_kits_copy_code = /** @type {(inputs: Kits_Copy_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`复制套装代码`)
};

const ja_kits_copy_code = /** @type {(inputs: Kits_Copy_CodeInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キットコードをコピー`)
};

/**
* | output |
* | --- |
* | "Copy kit code" |
*
* @param {Kits_Copy_CodeInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kits_copy_code = /** @type {((inputs?: Kits_Copy_CodeInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kits_Copy_CodeInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kits_copy_code(inputs)
	if (locale === "de") return de_kits_copy_code(inputs)
	if (locale === "fr") return fr_kits_copy_code(inputs)
	if (locale === "it") return it_kits_copy_code(inputs)
	if (locale === "nl") return nl_kits_copy_code(inputs)
	if (locale === "pl") return pl_kits_copy_code(inputs)
	if (locale === "pt") return pt_kits_copy_code(inputs)
	if (locale === "ru") return ru_kits_copy_code(inputs)
	if (locale === "sv") return sv_kits_copy_code(inputs)
	if (locale === "tr") return tr_kits_copy_code(inputs)
	if (locale === "zh") return zh_kits_copy_code(inputs)
	if (locale === "ja") return ja_kits_copy_code(inputs)
	return en_kits_copy_code(inputs)
});
