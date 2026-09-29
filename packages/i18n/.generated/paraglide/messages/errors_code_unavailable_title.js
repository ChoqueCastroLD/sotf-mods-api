/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Code_Unavailable_TitleInputs */

const en_errors_code_unavailable_title = /** @type {(inputs: Errors_Code_Unavailable_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Base camp is down for a moment`)
};

const es_errors_code_unavailable_title = /** @type {(inputs: Errors_Code_Unavailable_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`El campamento está parado un momento`)
};

const de_errors_code_unavailable_title = /** @type {(inputs: Errors_Code_Unavailable_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Das Basislager ist kurz nicht erreichbar`)
};

const fr_errors_code_unavailable_title = /** @type {(inputs: Errors_Code_Unavailable_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Le camp de base est momentanément fermé`)
};

const it_errors_code_unavailable_title = /** @type {(inputs: Errors_Code_Unavailable_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Il campo base è fermo per un momento`)
};

const nl_errors_code_unavailable_title = /** @type {(inputs: Errors_Code_Unavailable_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Het basiskamp is even onbereikbaar`)
};

const pl_errors_code_unavailable_title = /** @type {(inputs: Errors_Code_Unavailable_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Obóz jest chwilowo niedostępny`)
};

const pt_errors_code_unavailable_title = /** @type {(inputs: Errors_Code_Unavailable_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`O acampamento está fora do ar por um momento`)
};

const ru_errors_code_unavailable_title = /** @type {(inputs: Errors_Code_Unavailable_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Лагерь ненадолго закрыт`)
};

const sv_errors_code_unavailable_title = /** @type {(inputs: Errors_Code_Unavailable_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Baslägret är nere en stund`)
};

const tr_errors_code_unavailable_title = /** @type {(inputs: Errors_Code_Unavailable_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ana kamp kısa süreliğine kapalı`)
};

const zh_errors_code_unavailable_title = /** @type {(inputs: Errors_Code_Unavailable_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`营地暂时关闭`)
};

const ja_errors_code_unavailable_title = /** @type {(inputs: Errors_Code_Unavailable_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ベースキャンプは一時的に閉鎖中です`)
};

/**
* | output |
* | --- |
* | "Base camp is down for a moment" |
*
* @param {Errors_Code_Unavailable_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_code_unavailable_title = /** @type {((inputs?: Errors_Code_Unavailable_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Unavailable_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_code_unavailable_title(inputs)
	if (locale === "de") return de_errors_code_unavailable_title(inputs)
	if (locale === "fr") return fr_errors_code_unavailable_title(inputs)
	if (locale === "it") return it_errors_code_unavailable_title(inputs)
	if (locale === "nl") return nl_errors_code_unavailable_title(inputs)
	if (locale === "pl") return pl_errors_code_unavailable_title(inputs)
	if (locale === "pt") return pt_errors_code_unavailable_title(inputs)
	if (locale === "ru") return ru_errors_code_unavailable_title(inputs)
	if (locale === "sv") return sv_errors_code_unavailable_title(inputs)
	if (locale === "tr") return tr_errors_code_unavailable_title(inputs)
	if (locale === "zh") return zh_errors_code_unavailable_title(inputs)
	if (locale === "ja") return ja_errors_code_unavailable_title(inputs)
	return en_errors_code_unavailable_title(inputs)
});
