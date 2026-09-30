/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tokens_Create_ActionInputs */

const en_tokens_create_action = /** @type {(inputs: Tokens_Create_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`New token`)
};

const es_tokens_create_action = /** @type {(inputs: Tokens_Create_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuevo token`)
};

const de_tokens_create_action = /** @type {(inputs: Tokens_Create_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Neuer Token`)
};

const fr_tokens_create_action = /** @type {(inputs: Tokens_Create_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nouveau jeton`)
};

const it_tokens_create_action = /** @type {(inputs: Tokens_Create_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nuovo token`)
};

const nl_tokens_create_action = /** @type {(inputs: Tokens_Create_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nieuw token`)
};

const pl_tokens_create_action = /** @type {(inputs: Tokens_Create_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nowy token`)
};

const pt_tokens_create_action = /** @type {(inputs: Tokens_Create_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Novo token`)
};

const ru_tokens_create_action = /** @type {(inputs: Tokens_Create_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Новый токен`)
};

const sv_tokens_create_action = /** @type {(inputs: Tokens_Create_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ny token`)
};

const tr_tokens_create_action = /** @type {(inputs: Tokens_Create_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yeni belirteç`)
};

const zh_tokens_create_action = /** @type {(inputs: Tokens_Create_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新建令牌`)
};

const ja_tokens_create_action = /** @type {(inputs: Tokens_Create_ActionInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`新しいトークン`)
};

/**
* | output |
* | --- |
* | "New token" |
*
* @param {Tokens_Create_ActionInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const tokens_create_action = /** @type {((inputs?: Tokens_Create_ActionInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tokens_Create_ActionInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_tokens_create_action(inputs)
	if (locale === "de") return de_tokens_create_action(inputs)
	if (locale === "fr") return fr_tokens_create_action(inputs)
	if (locale === "it") return it_tokens_create_action(inputs)
	if (locale === "nl") return nl_tokens_create_action(inputs)
	if (locale === "pl") return pl_tokens_create_action(inputs)
	if (locale === "pt") return pt_tokens_create_action(inputs)
	if (locale === "ru") return ru_tokens_create_action(inputs)
	if (locale === "sv") return sv_tokens_create_action(inputs)
	if (locale === "tr") return tr_tokens_create_action(inputs)
	if (locale === "zh") return zh_tokens_create_action(inputs)
	if (locale === "ja") return ja_tokens_create_action(inputs)
	return en_tokens_create_action(inputs)
});
