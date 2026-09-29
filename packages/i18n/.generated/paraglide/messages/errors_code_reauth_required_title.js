/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Code_Reauth_Required_TitleInputs */

const en_errors_code_reauth_required_title = /** @type {(inputs: Errors_Code_Reauth_Required_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirm it’s you`)
};

const es_errors_code_reauth_required_title = /** @type {(inputs: Errors_Code_Reauth_Required_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirma que eres tú`)
};

const de_errors_code_reauth_required_title = /** @type {(inputs: Errors_Code_Reauth_Required_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestätige, dass du es bist`)
};

const fr_errors_code_reauth_required_title = /** @type {(inputs: Errors_Code_Reauth_Required_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirmez votre identité`)
};

const it_errors_code_reauth_required_title = /** @type {(inputs: Errors_Code_Reauth_Required_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Conferma che sei tu`)
};

const nl_errors_code_reauth_required_title = /** @type {(inputs: Errors_Code_Reauth_Required_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bevestig dat jij het bent`)
};

const pl_errors_code_reauth_required_title = /** @type {(inputs: Errors_Code_Reauth_Required_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Potwierdź, że to ty`)
};

const pt_errors_code_reauth_required_title = /** @type {(inputs: Errors_Code_Reauth_Required_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirme que é você`)
};

const ru_errors_code_reauth_required_title = /** @type {(inputs: Errors_Code_Reauth_Required_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подтвердите, что это вы`)
};

const sv_errors_code_reauth_required_title = /** @type {(inputs: Errors_Code_Reauth_Required_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bekräfta att det är du`)
};

const tr_errors_code_reauth_required_title = /** @type {(inputs: Errors_Code_Reauth_Required_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sen olduğunu doğrula`)
};

const zh_errors_code_reauth_required_title = /** @type {(inputs: Errors_Code_Reauth_Required_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请确认是你本人`)
};

const ja_errors_code_reauth_required_title = /** @type {(inputs: Errors_Code_Reauth_Required_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`本人確認をしてください`)
};

/**
* | output |
* | --- |
* | "Confirm it’s you" |
*
* @param {Errors_Code_Reauth_Required_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_code_reauth_required_title = /** @type {((inputs?: Errors_Code_Reauth_Required_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Reauth_Required_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_code_reauth_required_title(inputs)
	if (locale === "de") return de_errors_code_reauth_required_title(inputs)
	if (locale === "fr") return fr_errors_code_reauth_required_title(inputs)
	if (locale === "it") return it_errors_code_reauth_required_title(inputs)
	if (locale === "nl") return nl_errors_code_reauth_required_title(inputs)
	if (locale === "pl") return pl_errors_code_reauth_required_title(inputs)
	if (locale === "pt") return pt_errors_code_reauth_required_title(inputs)
	if (locale === "ru") return ru_errors_code_reauth_required_title(inputs)
	if (locale === "sv") return sv_errors_code_reauth_required_title(inputs)
	if (locale === "tr") return tr_errors_code_reauth_required_title(inputs)
	if (locale === "zh") return zh_errors_code_reauth_required_title(inputs)
	if (locale === "ja") return ja_errors_code_reauth_required_title(inputs)
	return en_errors_code_reauth_required_title(inputs)
});
