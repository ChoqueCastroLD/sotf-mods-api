/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tokens_Dialog_TitleInputs */

const en_tokens_dialog_title = /** @type {(inputs: Tokens_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create an API key`)
};

const es_tokens_dialog_title = /** @type {(inputs: Tokens_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crear una clave de API`)
};

const de_tokens_dialog_title = /** @type {(inputs: Tokens_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API-Schlüssel erstellen`)
};

const fr_tokens_dialog_title = /** @type {(inputs: Tokens_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créer une clé d’API`)
};

const it_tokens_dialog_title = /** @type {(inputs: Tokens_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crea una chiave API`)
};

const nl_tokens_dialog_title = /** @type {(inputs: Tokens_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Een API-sleutel maken`)
};

const pl_tokens_dialog_title = /** @type {(inputs: Tokens_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utwórz klucz API`)
};

const pt_tokens_dialog_title = /** @type {(inputs: Tokens_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Criar uma chave de API`)
};

const ru_tokens_dialog_title = /** @type {(inputs: Tokens_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Создать API-ключ`)
};

const sv_tokens_dialog_title = /** @type {(inputs: Tokens_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skapa en API-nyckel`)
};

const tr_tokens_dialog_title = /** @type {(inputs: Tokens_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API anahtarı oluştur`)
};

const zh_tokens_dialog_title = /** @type {(inputs: Tokens_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建 API 密钥`)
};

const ja_tokens_dialog_title = /** @type {(inputs: Tokens_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`API キーを作成`)
};

/**
* | output |
* | --- |
* | "Create an API key" |
*
* @param {Tokens_Dialog_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const tokens_dialog_title = /** @type {((inputs?: Tokens_Dialog_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Tokens_Dialog_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_tokens_dialog_title(inputs)
	if (locale === "de") return de_tokens_dialog_title(inputs)
	if (locale === "fr") return fr_tokens_dialog_title(inputs)
	if (locale === "it") return it_tokens_dialog_title(inputs)
	if (locale === "nl") return nl_tokens_dialog_title(inputs)
	if (locale === "pl") return pl_tokens_dialog_title(inputs)
	if (locale === "pt") return pt_tokens_dialog_title(inputs)
	if (locale === "ru") return ru_tokens_dialog_title(inputs)
	if (locale === "sv") return sv_tokens_dialog_title(inputs)
	if (locale === "tr") return tr_tokens_dialog_title(inputs)
	if (locale === "zh") return zh_tokens_dialog_title(inputs)
	if (locale === "ja") return ja_tokens_dialog_title(inputs)
	return en_tokens_dialog_title(inputs)
});
