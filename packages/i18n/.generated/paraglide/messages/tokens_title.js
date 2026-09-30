/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tokens_TitleInputs */

const en_tokens_title = /** @type {(inputs: Tokens_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Access tokens`)
};

const es_tokens_title = /** @type {(inputs: Tokens_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tokens de acceso`)
};

const de_tokens_title = /** @type {(inputs: Tokens_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zugriffstoken`)
};

const fr_tokens_title = /** @type {(inputs: Tokens_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Jetons d’accès`)
};

const it_tokens_title = /** @type {(inputs: Tokens_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Token di accesso`)
};

const nl_tokens_title = /** @type {(inputs: Tokens_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toegangstokens`)
};

const pl_tokens_title = /** @type {(inputs: Tokens_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tokeny dostępu`)
};

const pt_tokens_title = /** @type {(inputs: Tokens_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tokens de acesso`)
};

const ru_tokens_title = /** @type {(inputs: Tokens_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Токены доступа`)
};

const sv_tokens_title = /** @type {(inputs: Tokens_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Åtkomsttokens`)
};

const tr_tokens_title = /** @type {(inputs: Tokens_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erişim belirteçleri`)
};

const zh_tokens_title = /** @type {(inputs: Tokens_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`访问令牌`)
};

const ja_tokens_title = /** @type {(inputs: Tokens_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アクセストークン`)
};

/**
* | output |
* | --- |
* | "Access tokens" |
*
* @param {Tokens_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const tokens_title = /** @type {((inputs?: Tokens_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tokens_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_tokens_title(inputs)
	if (locale === "de") return de_tokens_title(inputs)
	if (locale === "fr") return fr_tokens_title(inputs)
	if (locale === "it") return it_tokens_title(inputs)
	if (locale === "nl") return nl_tokens_title(inputs)
	if (locale === "pl") return pl_tokens_title(inputs)
	if (locale === "pt") return pt_tokens_title(inputs)
	if (locale === "ru") return ru_tokens_title(inputs)
	if (locale === "sv") return sv_tokens_title(inputs)
	if (locale === "tr") return tr_tokens_title(inputs)
	if (locale === "zh") return zh_tokens_title(inputs)
	if (locale === "ja") return ja_tokens_title(inputs)
	return en_tokens_title(inputs)
});
