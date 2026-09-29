/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Code_Turnstile_Required_TitleInputs */

const en_errors_code_turnstile_required_title = /** @type {(inputs: Errors_Code_Turnstile_Required_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Quick check`)
};

const es_errors_code_turnstile_required_title = /** @type {(inputs: Errors_Code_Turnstile_Required_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comprobación rápida`)
};

const de_errors_code_turnstile_required_title = /** @type {(inputs: Errors_Code_Turnstile_Required_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kurze Prüfung`)
};

const fr_errors_code_turnstile_required_title = /** @type {(inputs: Errors_Code_Turnstile_Required_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vérification rapide`)
};

const it_errors_code_turnstile_required_title = /** @type {(inputs: Errors_Code_Turnstile_Required_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Controllo rapido`)
};

const nl_errors_code_turnstile_required_title = /** @type {(inputs: Errors_Code_Turnstile_Required_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Snelle controle`)
};

const pl_errors_code_turnstile_required_title = /** @type {(inputs: Errors_Code_Turnstile_Required_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Szybka weryfikacja`)
};

const pt_errors_code_turnstile_required_title = /** @type {(inputs: Errors_Code_Turnstile_Required_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verificação rápida`)
};

const ru_errors_code_turnstile_required_title = /** @type {(inputs: Errors_Code_Turnstile_Required_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Быстрая проверка`)
};

const sv_errors_code_turnstile_required_title = /** @type {(inputs: Errors_Code_Turnstile_Required_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Snabb kontroll`)
};

const tr_errors_code_turnstile_required_title = /** @type {(inputs: Errors_Code_Turnstile_Required_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kısa bir kontrol`)
};

const zh_errors_code_turnstile_required_title = /** @type {(inputs: Errors_Code_Turnstile_Required_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`快速验证`)
};

const ja_errors_code_turnstile_required_title = /** @type {(inputs: Errors_Code_Turnstile_Required_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`簡単な確認`)
};

/**
* | output |
* | --- |
* | "Quick check" |
*
* @param {Errors_Code_Turnstile_Required_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const errors_code_turnstile_required_title = /** @type {((inputs?: Errors_Code_Turnstile_Required_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Errors_Code_Turnstile_Required_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_errors_code_turnstile_required_title(inputs)
	if (locale === "de") return de_errors_code_turnstile_required_title(inputs)
	if (locale === "fr") return fr_errors_code_turnstile_required_title(inputs)
	if (locale === "it") return it_errors_code_turnstile_required_title(inputs)
	if (locale === "nl") return nl_errors_code_turnstile_required_title(inputs)
	if (locale === "pl") return pl_errors_code_turnstile_required_title(inputs)
	if (locale === "pt") return pt_errors_code_turnstile_required_title(inputs)
	if (locale === "ru") return ru_errors_code_turnstile_required_title(inputs)
	if (locale === "sv") return sv_errors_code_turnstile_required_title(inputs)
	if (locale === "tr") return tr_errors_code_turnstile_required_title(inputs)
	if (locale === "zh") return zh_errors_code_turnstile_required_title(inputs)
	if (locale === "ja") return ja_errors_code_turnstile_required_title(inputs)
	return en_errors_code_turnstile_required_title(inputs)
});
