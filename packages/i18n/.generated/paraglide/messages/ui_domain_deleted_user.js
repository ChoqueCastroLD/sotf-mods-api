/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Ui_Domain_Deleted_UserInputs */

const en_ui_domain_deleted_user = /** @type {(inputs: Ui_Domain_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deleted user`)
};

const es_ui_domain_deleted_user = /** @type {(inputs: Ui_Domain_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuario eliminado`)
};

const de_ui_domain_deleted_user = /** @type {(inputs: Ui_Domain_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Gelöschter Nutzer`)
};

const fr_ui_domain_deleted_user = /** @type {(inputs: Ui_Domain_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utilisateur supprimé`)
};

const it_ui_domain_deleted_user = /** @type {(inputs: Ui_Domain_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Utente eliminato`)
};

const nl_ui_domain_deleted_user = /** @type {(inputs: Ui_Domain_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwijderde gebruiker`)
};

const pl_ui_domain_deleted_user = /** @type {(inputs: Ui_Domain_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usunięty użytkownik`)
};

const pt_ui_domain_deleted_user = /** @type {(inputs: Ui_Domain_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Usuário excluído`)
};

const ru_ui_domain_deleted_user = /** @type {(inputs: Ui_Domain_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Удалённый пользователь`)
};

const sv_ui_domain_deleted_user = /** @type {(inputs: Ui_Domain_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Raderad användare`)
};

const tr_ui_domain_deleted_user = /** @type {(inputs: Ui_Domain_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Silinmiş kullanıcı`)
};

const zh_ui_domain_deleted_user = /** @type {(inputs: Ui_Domain_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`已注销的用户`)
};

const ja_ui_domain_deleted_user = /** @type {(inputs: Ui_Domain_Deleted_UserInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`削除されたユーザー`)
};

/**
* | output |
* | --- |
* | "Deleted user" |
*
* @param {Ui_Domain_Deleted_UserInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const ui_domain_deleted_user = /** @type {((inputs?: Ui_Domain_Deleted_UserInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Ui_Domain_Deleted_UserInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_ui_domain_deleted_user(inputs)
	if (locale === "de") return de_ui_domain_deleted_user(inputs)
	if (locale === "fr") return fr_ui_domain_deleted_user(inputs)
	if (locale === "it") return it_ui_domain_deleted_user(inputs)
	if (locale === "nl") return nl_ui_domain_deleted_user(inputs)
	if (locale === "pl") return pl_ui_domain_deleted_user(inputs)
	if (locale === "pt") return pt_ui_domain_deleted_user(inputs)
	if (locale === "ru") return ru_ui_domain_deleted_user(inputs)
	if (locale === "sv") return sv_ui_domain_deleted_user(inputs)
	if (locale === "tr") return tr_ui_domain_deleted_user(inputs)
	if (locale === "zh") return zh_ui_domain_deleted_user(inputs)
	if (locale === "ja") return ja_ui_domain_deleted_user(inputs)
	return en_ui_domain_deleted_user(inputs)
});
