/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Code_Conflict_TitleInputs */

const en_errors_code_conflict_title = /** @type {(inputs: Errors_Code_Conflict_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Changed in the meantime`)
};

const es_errors_code_conflict_title = /** @type {(inputs: Errors_Code_Conflict_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cambió mientras tanto`)
};

const de_errors_code_conflict_title = /** @type {(inputs: Errors_Code_Conflict_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zwischenzeitlich geändert`)
};

const fr_errors_code_conflict_title = /** @type {(inputs: Errors_Code_Conflict_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modifié entre-temps`)
};

const it_errors_code_conflict_title = /** @type {(inputs: Errors_Code_Conflict_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Modificato nel frattempo`)
};

const nl_errors_code_conflict_title = /** @type {(inputs: Errors_Code_Conflict_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Intussen gewijzigd`)
};

const pl_errors_code_conflict_title = /** @type {(inputs: Errors_Code_Conflict_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zmieniono w międzyczasie`)
};

const pt_errors_code_conflict_title = /** @type {(inputs: Errors_Code_Conflict_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alterado nesse meio-tempo`)
};

const ru_errors_code_conflict_title = /** @type {(inputs: Errors_Code_Conflict_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Изменено за это время`)
};

const sv_errors_code_conflict_title = /** @type {(inputs: Errors_Code_Conflict_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ändrades under tiden`)
};

const tr_errors_code_conflict_title = /** @type {(inputs: Errors_Code_Conflict_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu sırada değiştirildi`)
};

const zh_errors_code_conflict_title = /** @type {(inputs: Errors_Code_Conflict_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`内容已被更改`)
};

const ja_errors_code_conflict_title = /** @type {(inputs: Errors_Code_Conflict_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`その間に変更されました`)
};

/**
* | output |
* | --- |
* | "Changed in the meantime" |
*
* @param {Errors_Code_Conflict_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_code_conflict_title = /** @type {((inputs?: Errors_Code_Conflict_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Conflict_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_code_conflict_title(inputs)
	if (locale === "de") return de_errors_code_conflict_title(inputs)
	if (locale === "fr") return fr_errors_code_conflict_title(inputs)
	if (locale === "it") return it_errors_code_conflict_title(inputs)
	if (locale === "nl") return nl_errors_code_conflict_title(inputs)
	if (locale === "pl") return pl_errors_code_conflict_title(inputs)
	if (locale === "pt") return pt_errors_code_conflict_title(inputs)
	if (locale === "ru") return ru_errors_code_conflict_title(inputs)
	if (locale === "sv") return sv_errors_code_conflict_title(inputs)
	if (locale === "tr") return tr_errors_code_conflict_title(inputs)
	if (locale === "zh") return zh_errors_code_conflict_title(inputs)
	if (locale === "ja") return ja_errors_code_conflict_title(inputs)
	return en_errors_code_conflict_title(inputs)
});
