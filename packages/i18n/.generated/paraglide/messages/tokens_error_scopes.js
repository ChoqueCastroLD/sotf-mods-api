/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tokens_Error_ScopesInputs */

const en_tokens_error_scopes = /** @type {(inputs: Tokens_Error_ScopesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choose at least one permission.`)
};

const es_tokens_error_scopes = /** @type {(inputs: Tokens_Error_ScopesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Elige al menos un permiso.`)
};

const de_tokens_error_scopes = /** @type {(inputs: Tokens_Error_ScopesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wähle mindestens eine Berechtigung.`)
};

const fr_tokens_error_scopes = /** @type {(inputs: Tokens_Error_ScopesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Choisissez au moins une autorisation.`)
};

const it_tokens_error_scopes = /** @type {(inputs: Tokens_Error_ScopesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Scegli almeno un permesso.`)
};

const nl_tokens_error_scopes = /** @type {(inputs: Tokens_Error_ScopesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kies minstens één recht.`)
};

const pl_tokens_error_scopes = /** @type {(inputs: Tokens_Error_ScopesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Wybierz co najmniej jedno uprawnienie.`)
};

const pt_tokens_error_scopes = /** @type {(inputs: Tokens_Error_ScopesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Escolha pelo menos uma permissão.`)
};

const ru_tokens_error_scopes = /** @type {(inputs: Tokens_Error_ScopesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Выберите хотя бы одно право.`)
};

const sv_tokens_error_scopes = /** @type {(inputs: Tokens_Error_ScopesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Välj minst en behörighet.`)
};

const tr_tokens_error_scopes = /** @type {(inputs: Tokens_Error_ScopesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En az bir izin seç.`)
};

const zh_tokens_error_scopes = /** @type {(inputs: Tokens_Error_ScopesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`请至少选择一项权限。`)
};

const ja_tokens_error_scopes = /** @type {(inputs: Tokens_Error_ScopesInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`権限を1つ以上選択してください。`)
};

/**
* | output |
* | --- |
* | "Choose at least one permission." |
*
* @param {Tokens_Error_ScopesInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const tokens_error_scopes = /** @type {((inputs?: Tokens_Error_ScopesInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tokens_Error_ScopesInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_tokens_error_scopes(inputs)
	if (locale === "de") return de_tokens_error_scopes(inputs)
	if (locale === "fr") return fr_tokens_error_scopes(inputs)
	if (locale === "it") return it_tokens_error_scopes(inputs)
	if (locale === "nl") return nl_tokens_error_scopes(inputs)
	if (locale === "pl") return pl_tokens_error_scopes(inputs)
	if (locale === "pt") return pt_tokens_error_scopes(inputs)
	if (locale === "ru") return ru_tokens_error_scopes(inputs)
	if (locale === "sv") return sv_tokens_error_scopes(inputs)
	if (locale === "tr") return tr_tokens_error_scopes(inputs)
	if (locale === "zh") return zh_tokens_error_scopes(inputs)
	if (locale === "ja") return ja_tokens_error_scopes(inputs)
	return en_tokens_error_scopes(inputs)
});
