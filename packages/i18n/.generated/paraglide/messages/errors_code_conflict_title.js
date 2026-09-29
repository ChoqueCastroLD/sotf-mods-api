/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Code_Conflict_TitleInputs */

const en_errors_code_conflict_title = /** @type {(inputs: Errors_Code_Conflict_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Someone got there first`)
};

const es_errors_code_conflict_title = /** @type {(inputs: Errors_Code_Conflict_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alguien llegó antes`)
};

const de_errors_code_conflict_title = /** @type {(inputs: Errors_Code_Conflict_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jemand war schneller`)
};

const fr_errors_code_conflict_title = /** @type {(inputs: Errors_Code_Conflict_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quelqu’un est passé avant vous`)
};

const it_errors_code_conflict_title = /** @type {(inputs: Errors_Code_Conflict_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Qualcuno è arrivato prima`)
};

const nl_errors_code_conflict_title = /** @type {(inputs: Errors_Code_Conflict_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Iemand was je voor`)
};

const pl_errors_code_conflict_title = /** @type {(inputs: Errors_Code_Conflict_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ktoś był szybszy`)
};

const pt_errors_code_conflict_title = /** @type {(inputs: Errors_Code_Conflict_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Alguém chegou antes`)
};

const ru_errors_code_conflict_title = /** @type {(inputs: Errors_Code_Conflict_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Кто-то успел раньше`)
};

const sv_errors_code_conflict_title = /** @type {(inputs: Errors_Code_Conflict_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Någon hann före`)
};

const tr_errors_code_conflict_title = /** @type {(inputs: Errors_Code_Conflict_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Biri senden önce davrandı`)
};

const zh_errors_code_conflict_title = /** @type {(inputs: Errors_Code_Conflict_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有人抢先一步`)
};

const ja_errors_code_conflict_title = /** @type {(inputs: Errors_Code_Conflict_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`先に誰かが変更しました`)
};

/**
* | output |
* | --- |
* | "Someone got there first" |
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
