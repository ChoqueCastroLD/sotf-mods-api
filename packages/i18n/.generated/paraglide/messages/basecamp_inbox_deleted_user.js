/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Basecamp_Inbox_Deleted_UserInputs */

const en_basecamp_inbox_deleted_user = /** @type {(inputs: Basecamp_Inbox_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`a deleted account`)
};

const es_basecamp_inbox_deleted_user = /** @type {(inputs: Basecamp_Inbox_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`una cuenta borrada`)
};

const de_basecamp_inbox_deleted_user = /** @type {(inputs: Basecamp_Inbox_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`einem gelöschten Konto`)
};

const fr_basecamp_inbox_deleted_user = /** @type {(inputs: Basecamp_Inbox_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`un compte supprimé`)
};

const it_basecamp_inbox_deleted_user = /** @type {(inputs: Basecamp_Inbox_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`un account eliminato`)
};

const nl_basecamp_inbox_deleted_user = /** @type {(inputs: Basecamp_Inbox_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`een verwijderd account`)
};

const pl_basecamp_inbox_deleted_user = /** @type {(inputs: Basecamp_Inbox_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`usuniętego konta`)
};

const pt_basecamp_inbox_deleted_user = /** @type {(inputs: Basecamp_Inbox_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`uma conta excluída`)
};

const ru_basecamp_inbox_deleted_user = /** @type {(inputs: Basecamp_Inbox_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`удалённого аккаунта`)
};

const sv_basecamp_inbox_deleted_user = /** @type {(inputs: Basecamp_Inbox_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`ett raderat konto`)
};

const tr_basecamp_inbox_deleted_user = /** @type {(inputs: Basecamp_Inbox_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`silinmiş bir hesap`)
};

const zh_basecamp_inbox_deleted_user = /** @type {(inputs: Basecamp_Inbox_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已删除的账号`)
};

const ja_basecamp_inbox_deleted_user = /** @type {(inputs: Basecamp_Inbox_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`削除されたアカウント`)
};

/**
* | output |
* | --- |
* | "a deleted account" |
*
* @param {Basecamp_Inbox_Deleted_UserInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const basecamp_inbox_deleted_user = /** @type {((inputs?: Basecamp_Inbox_Deleted_UserInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Basecamp_Inbox_Deleted_UserInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_basecamp_inbox_deleted_user(inputs)
	if (locale === "de") return de_basecamp_inbox_deleted_user(inputs)
	if (locale === "fr") return fr_basecamp_inbox_deleted_user(inputs)
	if (locale === "it") return it_basecamp_inbox_deleted_user(inputs)
	if (locale === "nl") return nl_basecamp_inbox_deleted_user(inputs)
	if (locale === "pl") return pl_basecamp_inbox_deleted_user(inputs)
	if (locale === "pt") return pt_basecamp_inbox_deleted_user(inputs)
	if (locale === "ru") return ru_basecamp_inbox_deleted_user(inputs)
	if (locale === "sv") return sv_basecamp_inbox_deleted_user(inputs)
	if (locale === "tr") return tr_basecamp_inbox_deleted_user(inputs)
	if (locale === "zh") return zh_basecamp_inbox_deleted_user(inputs)
	if (locale === "ja") return ja_basecamp_inbox_deleted_user(inputs)
	return en_basecamp_inbox_deleted_user(inputs)
});
