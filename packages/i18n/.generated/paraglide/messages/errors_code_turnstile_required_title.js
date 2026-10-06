/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Errors_Code_Turnstile_Required_TitleInputs */

const en_errors_code_turnstile_required_title = /** @type {(inputs: Errors_Code_Turnstile_Required_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Security check`)
};

const es_errors_code_turnstile_required_title = /** @type {(inputs: Errors_Code_Turnstile_Required_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verificación de seguridad`)
};

const de_errors_code_turnstile_required_title = /** @type {(inputs: Errors_Code_Turnstile_Required_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sicherheitsprüfung`)
};

const fr_errors_code_turnstile_required_title = /** @type {(inputs: Errors_Code_Turnstile_Required_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vérification de sécurité`)
};

const it_errors_code_turnstile_required_title = /** @type {(inputs: Errors_Code_Turnstile_Required_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifica di sicurezza`)
};

const nl_errors_code_turnstile_required_title = /** @type {(inputs: Errors_Code_Turnstile_Required_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Beveiligingscontrole`)
};

const pl_errors_code_turnstile_required_title = /** @type {(inputs: Errors_Code_Turnstile_Required_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Weryfikacja bezpieczeństwa`)
};

const pt_errors_code_turnstile_required_title = /** @type {(inputs: Errors_Code_Turnstile_Required_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verificação de segurança`)
};

const ru_errors_code_turnstile_required_title = /** @type {(inputs: Errors_Code_Turnstile_Required_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверка безопасности`)
};

const sv_errors_code_turnstile_required_title = /** @type {(inputs: Errors_Code_Turnstile_Required_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Säkerhetskontroll`)
};

const tr_errors_code_turnstile_required_title = /** @type {(inputs: Errors_Code_Turnstile_Required_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Güvenlik kontrolü`)
};

const zh_errors_code_turnstile_required_title = /** @type {(inputs: Errors_Code_Turnstile_Required_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`安全验证`)
};

const ja_errors_code_turnstile_required_title = /** @type {(inputs: Errors_Code_Turnstile_Required_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`セキュリティチェック`)
};

/**
* | output |
* | --- |
* | "Security check" |
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
