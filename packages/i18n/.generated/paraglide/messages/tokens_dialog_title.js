/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Tokens_Dialog_TitleInputs */

const en_tokens_dialog_title = /** @type {(inputs: Tokens_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Create an access token`)
};

const es_tokens_dialog_title = /** @type {(inputs: Tokens_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crear un token de acceso`)
};

const de_tokens_dialog_title = /** @type {(inputs: Tokens_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zugriffstoken erstellen`)
};

const fr_tokens_dialog_title = /** @type {(inputs: Tokens_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Créer un jeton d’accès`)
};

const it_tokens_dialog_title = /** @type {(inputs: Tokens_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Crea un token di accesso`)
};

const nl_tokens_dialog_title = /** @type {(inputs: Tokens_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Toegangstoken maken`)
};

const pl_tokens_dialog_title = /** @type {(inputs: Tokens_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utwórz token dostępu`)
};

const pt_tokens_dialog_title = /** @type {(inputs: Tokens_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Criar um token de acesso`)
};

const ru_tokens_dialog_title = /** @type {(inputs: Tokens_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Создание токена доступа`)
};

const sv_tokens_dialog_title = /** @type {(inputs: Tokens_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Skapa en åtkomsttoken`)
};

const tr_tokens_dialog_title = /** @type {(inputs: Tokens_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Erişim belirteci oluştur`)
};

const zh_tokens_dialog_title = /** @type {(inputs: Tokens_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`创建访问令牌`)
};

const ja_tokens_dialog_title = /** @type {(inputs: Tokens_Dialog_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`アクセストークンを作成`)
};

/**
* | output |
* | --- |
* | "Create an access token" |
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
