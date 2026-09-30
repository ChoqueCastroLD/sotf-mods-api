/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tokens_EmptyInputs */

const en_tokens_empty = /** @type {(inputs: Tokens_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You have no active access tokens.`)
};

const es_tokens_empty = /** @type {(inputs: Tokens_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No tienes tokens de acceso activos.`)
};

const de_tokens_empty = /** @type {(inputs: Tokens_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du hast keine aktiven Zugriffstoken.`)
};

const fr_tokens_empty = /** @type {(inputs: Tokens_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous n’avez aucun jeton d’accès actif.`)
};

const it_tokens_empty = /** @type {(inputs: Tokens_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Non hai token di accesso attivi.`)
};

const nl_tokens_empty = /** @type {(inputs: Tokens_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je hebt geen actieve toegangstokens.`)
};

const pl_tokens_empty = /** @type {(inputs: Tokens_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie masz aktywnych tokenów dostępu.`)
};

const pt_tokens_empty = /** @type {(inputs: Tokens_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você não tem tokens de acesso ativos.`)
};

const ru_tokens_empty = /** @type {(inputs: Tokens_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`У вас нет активных токенов доступа.`)
};

const sv_tokens_empty = /** @type {(inputs: Tokens_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du har inga aktiva åtkomsttokens.`)
};

const tr_tokens_empty = /** @type {(inputs: Tokens_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Etkin erişim belirtecin yok.`)
};

const zh_tokens_empty = /** @type {(inputs: Tokens_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你没有有效的访问令牌。`)
};

const ja_tokens_empty = /** @type {(inputs: Tokens_EmptyInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`有効なアクセストークンはありません。`)
};

/**
* | output |
* | --- |
* | "You have no active access tokens." |
*
* @param {Tokens_EmptyInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const tokens_empty = /** @type {((inputs?: Tokens_EmptyInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tokens_EmptyInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_tokens_empty(inputs)
	if (locale === "de") return de_tokens_empty(inputs)
	if (locale === "fr") return fr_tokens_empty(inputs)
	if (locale === "it") return it_tokens_empty(inputs)
	if (locale === "nl") return nl_tokens_empty(inputs)
	if (locale === "pl") return pl_tokens_empty(inputs)
	if (locale === "pt") return pt_tokens_empty(inputs)
	if (locale === "ru") return ru_tokens_empty(inputs)
	if (locale === "sv") return sv_tokens_empty(inputs)
	if (locale === "tr") return tr_tokens_empty(inputs)
	if (locale === "zh") return zh_tokens_empty(inputs)
	if (locale === "ja") return ja_tokens_empty(inputs)
	return en_tokens_empty(inputs)
});
