/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Compat_Col_StatusInputs */

const en_basecamp_compat_col_status = /** @type {(inputs: Basecamp_Compat_Col_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verdict`)
};

const es_basecamp_compat_col_status = /** @type {(inputs: Basecamp_Compat_Col_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veredicto`)
};

const de_basecamp_compat_col_status = /** @type {(inputs: Basecamp_Compat_Col_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Urteil`)
};

const fr_basecamp_compat_col_status = /** @type {(inputs: Basecamp_Compat_Col_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verdict`)
};

const it_basecamp_compat_col_status = /** @type {(inputs: Basecamp_Compat_Col_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verdetto`)
};

const nl_basecamp_compat_col_status = /** @type {(inputs: Basecamp_Compat_Col_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Oordeel`)
};

const pl_basecamp_compat_col_status = /** @type {(inputs: Basecamp_Compat_Col_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Werdykt`)
};

const pt_basecamp_compat_col_status = /** @type {(inputs: Basecamp_Compat_Col_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Veredito`)
};

const ru_basecamp_compat_col_status = /** @type {(inputs: Basecamp_Compat_Col_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вердикт`)
};

const sv_basecamp_compat_col_status = /** @type {(inputs: Basecamp_Compat_Col_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Omdöme`)
};

const tr_basecamp_compat_col_status = /** @type {(inputs: Basecamp_Compat_Col_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Karar`)
};

const zh_basecamp_compat_col_status = /** @type {(inputs: Basecamp_Compat_Col_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`结论`)
};

const ja_basecamp_compat_col_status = /** @type {(inputs: Basecamp_Compat_Col_StatusInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`判定`)
};

/**
* | output |
* | --- |
* | "Verdict" |
*
* @param {Basecamp_Compat_Col_StatusInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_compat_col_status = /** @type {((inputs?: Basecamp_Compat_Col_StatusInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Compat_Col_StatusInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_compat_col_status(inputs)
	if (locale === "de") return de_basecamp_compat_col_status(inputs)
	if (locale === "fr") return fr_basecamp_compat_col_status(inputs)
	if (locale === "it") return it_basecamp_compat_col_status(inputs)
	if (locale === "nl") return nl_basecamp_compat_col_status(inputs)
	if (locale === "pl") return pl_basecamp_compat_col_status(inputs)
	if (locale === "pt") return pt_basecamp_compat_col_status(inputs)
	if (locale === "ru") return ru_basecamp_compat_col_status(inputs)
	if (locale === "sv") return sv_basecamp_compat_col_status(inputs)
	if (locale === "tr") return tr_basecamp_compat_col_status(inputs)
	if (locale === "zh") return zh_basecamp_compat_col_status(inputs)
	if (locale === "ja") return ja_basecamp_compat_col_status(inputs)
	return en_basecamp_compat_col_status(inputs)
});
