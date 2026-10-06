/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Deleted_UserInputs */

const en_social_deleted_user = /** @type {(inputs: Social_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deleted user`)
};

const es_social_deleted_user = /** @type {(inputs: Social_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuario eliminado`)
};

const de_social_deleted_user = /** @type {(inputs: Social_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gelöschter Benutzer`)
};

const fr_social_deleted_user = /** @type {(inputs: Social_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utilisateur supprimé`)
};

const it_social_deleted_user = /** @type {(inputs: Social_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utente eliminato`)
};

const nl_social_deleted_user = /** @type {(inputs: Social_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwijderde gebruiker`)
};

const pl_social_deleted_user = /** @type {(inputs: Social_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usunięty użytkownik`)
};

const pt_social_deleted_user = /** @type {(inputs: Social_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuário excluído`)
};

const ru_social_deleted_user = /** @type {(inputs: Social_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалённый пользователь`)
};

const sv_social_deleted_user = /** @type {(inputs: Social_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raderad användare`)
};

const tr_social_deleted_user = /** @type {(inputs: Social_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Silinmiş kullanıcı`)
};

const zh_social_deleted_user = /** @type {(inputs: Social_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已注销的用户`)
};

const ja_social_deleted_user = /** @type {(inputs: Social_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`削除されたユーザー`)
};

/**
* | output |
* | --- |
* | "Deleted user" |
*
* @param {Social_Deleted_UserInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_deleted_user = /** @type {((inputs?: Social_Deleted_UserInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Deleted_UserInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_deleted_user(inputs)
	if (locale === "de") return de_social_deleted_user(inputs)
	if (locale === "fr") return fr_social_deleted_user(inputs)
	if (locale === "it") return it_social_deleted_user(inputs)
	if (locale === "nl") return nl_social_deleted_user(inputs)
	if (locale === "pl") return pl_social_deleted_user(inputs)
	if (locale === "pt") return pt_social_deleted_user(inputs)
	if (locale === "ru") return ru_social_deleted_user(inputs)
	if (locale === "sv") return sv_social_deleted_user(inputs)
	if (locale === "tr") return tr_social_deleted_user(inputs)
	if (locale === "zh") return zh_social_deleted_user(inputs)
	if (locale === "ja") return ja_social_deleted_user(inputs)
	return en_social_deleted_user(inputs)
});
