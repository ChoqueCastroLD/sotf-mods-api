/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Verify_CheckingInputs */

const en_auth_verify_checking = /** @type {(inputs: Auth_Verify_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Checking your link…`)
};

const es_auth_verify_checking = /** @type {(inputs: Auth_Verify_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Comprobando tu enlace…`)
};

const de_auth_verify_checking = /** @type {(inputs: Auth_Verify_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Link wird geprüft…`)
};

const fr_auth_verify_checking = /** @type {(inputs: Auth_Verify_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vérification du lien…`)
};

const it_auth_verify_checking = /** @type {(inputs: Auth_Verify_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Controllo del link…`)
};

const nl_auth_verify_checking = /** @type {(inputs: Auth_Verify_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je link wordt gecontroleerd…`)
};

const pl_auth_verify_checking = /** @type {(inputs: Auth_Verify_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Sprawdzamy twój link…`)
};

const pt_auth_verify_checking = /** @type {(inputs: Auth_Verify_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verificando seu link…`)
};

const ru_auth_verify_checking = /** @type {(inputs: Auth_Verify_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Проверяем ссылку…`)
};

const sv_auth_verify_checking = /** @type {(inputs: Auth_Verify_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kontrollerar din länk…`)
};

const tr_auth_verify_checking = /** @type {(inputs: Auth_Verify_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bağlantın kontrol ediliyor…`)
};

const zh_auth_verify_checking = /** @type {(inputs: Auth_Verify_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`正在检查链接…`)
};

const ja_auth_verify_checking = /** @type {(inputs: Auth_Verify_CheckingInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`リンクを確認しています…`)
};

/**
* | output |
* | --- |
* | "Checking your link…" |
*
* @param {Auth_Verify_CheckingInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_verify_checking = /** @type {((inputs?: Auth_Verify_CheckingInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Verify_CheckingInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_verify_checking(inputs)
	if (locale === "de") return de_auth_verify_checking(inputs)
	if (locale === "fr") return fr_auth_verify_checking(inputs)
	if (locale === "it") return it_auth_verify_checking(inputs)
	if (locale === "nl") return nl_auth_verify_checking(inputs)
	if (locale === "pl") return pl_auth_verify_checking(inputs)
	if (locale === "pt") return pt_auth_verify_checking(inputs)
	if (locale === "ru") return ru_auth_verify_checking(inputs)
	if (locale === "sv") return sv_auth_verify_checking(inputs)
	if (locale === "tr") return tr_auth_verify_checking(inputs)
	if (locale === "zh") return zh_auth_verify_checking(inputs)
	if (locale === "ja") return ja_auth_verify_checking(inputs)
	return en_auth_verify_checking(inputs)
});
