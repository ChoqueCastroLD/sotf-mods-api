/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tokens_Create_SubmitInputs */

const en_tokens_create_submit = /** @type {(inputs: Tokens_Create_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create key`)
};

const es_tokens_create_submit = /** @type {(inputs: Tokens_Create_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crear clave`)
};

const de_tokens_create_submit = /** @type {(inputs: Tokens_Create_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Schlüssel erstellen`)
};

const fr_tokens_create_submit = /** @type {(inputs: Tokens_Create_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créer la clé`)
};

const it_tokens_create_submit = /** @type {(inputs: Tokens_Create_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crea chiave`)
};

const nl_tokens_create_submit = /** @type {(inputs: Tokens_Create_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sleutel maken`)
};

const pl_tokens_create_submit = /** @type {(inputs: Tokens_Create_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utwórz klucz`)
};

const pt_tokens_create_submit = /** @type {(inputs: Tokens_Create_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Criar chave`)
};

const ru_tokens_create_submit = /** @type {(inputs: Tokens_Create_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Создать ключ`)
};

const sv_tokens_create_submit = /** @type {(inputs: Tokens_Create_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skapa nyckel`)
};

const tr_tokens_create_submit = /** @type {(inputs: Tokens_Create_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anahtar oluştur`)
};

const zh_tokens_create_submit = /** @type {(inputs: Tokens_Create_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建密钥`)
};

const ja_tokens_create_submit = /** @type {(inputs: Tokens_Create_SubmitInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`キーを作成`)
};

/**
* | output |
* | --- |
* | "Create key" |
*
* @param {Tokens_Create_SubmitInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const tokens_create_submit = /** @type {((inputs?: Tokens_Create_SubmitInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tokens_Create_SubmitInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_tokens_create_submit(inputs)
	if (locale === "de") return de_tokens_create_submit(inputs)
	if (locale === "fr") return fr_tokens_create_submit(inputs)
	if (locale === "it") return it_tokens_create_submit(inputs)
	if (locale === "nl") return nl_tokens_create_submit(inputs)
	if (locale === "pl") return pl_tokens_create_submit(inputs)
	if (locale === "pt") return pt_tokens_create_submit(inputs)
	if (locale === "ru") return ru_tokens_create_submit(inputs)
	if (locale === "sv") return sv_tokens_create_submit(inputs)
	if (locale === "tr") return tr_tokens_create_submit(inputs)
	if (locale === "zh") return zh_tokens_create_submit(inputs)
	if (locale === "ja") return ja_tokens_create_submit(inputs)
	return en_tokens_create_submit(inputs)
});
