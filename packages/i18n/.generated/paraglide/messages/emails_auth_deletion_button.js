/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_Deletion_ButtonInputs */

const en_emails_auth_deletion_button = /** @type {(inputs: Emails_Auth_Deletion_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancel the deletion`)
};

const es_emails_auth_deletion_button = /** @type {(inputs: Emails_Auth_Deletion_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancelar el borrado`)
};

const de_emails_auth_deletion_button = /** @type {(inputs: Emails_Auth_Deletion_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Löschung abbrechen`)
};

const fr_emails_auth_deletion_button = /** @type {(inputs: Emails_Auth_Deletion_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annuler la suppression`)
};

const it_emails_auth_deletion_button = /** @type {(inputs: Emails_Auth_Deletion_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Annulla l’eliminazione`)
};

const nl_emails_auth_deletion_button = /** @type {(inputs: Emails_Auth_Deletion_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verwijdering annuleren`)
};

const pl_emails_auth_deletion_button = /** @type {(inputs: Emails_Auth_Deletion_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Anuluj usunięcie`)
};

const pt_emails_auth_deletion_button = /** @type {(inputs: Emails_Auth_Deletion_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Cancelar a exclusão`)
};

const ru_emails_auth_deletion_button = /** @type {(inputs: Emails_Auth_Deletion_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отменить удаление`)
};

const sv_emails_auth_deletion_button = /** @type {(inputs: Emails_Auth_Deletion_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avbryt raderingen`)
};

const tr_emails_auth_deletion_button = /** @type {(inputs: Emails_Auth_Deletion_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Silmeyi iptal et`)
};

const zh_emails_auth_deletion_button = /** @type {(inputs: Emails_Auth_Deletion_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`取消删除`)
};

const ja_emails_auth_deletion_button = /** @type {(inputs: Emails_Auth_Deletion_ButtonInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`削除を取り消す`)
};

/**
* | output |
* | --- |
* | "Cancel the deletion" |
*
* @param {Emails_Auth_Deletion_ButtonInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_deletion_button = /** @type {((inputs?: Emails_Auth_Deletion_ButtonInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Deletion_ButtonInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_deletion_button(inputs)
	if (locale === "de") return de_emails_auth_deletion_button(inputs)
	if (locale === "fr") return fr_emails_auth_deletion_button(inputs)
	if (locale === "it") return it_emails_auth_deletion_button(inputs)
	if (locale === "nl") return nl_emails_auth_deletion_button(inputs)
	if (locale === "pl") return pl_emails_auth_deletion_button(inputs)
	if (locale === "pt") return pt_emails_auth_deletion_button(inputs)
	if (locale === "ru") return ru_emails_auth_deletion_button(inputs)
	if (locale === "sv") return sv_emails_auth_deletion_button(inputs)
	if (locale === "tr") return tr_emails_auth_deletion_button(inputs)
	if (locale === "zh") return zh_emails_auth_deletion_button(inputs)
	if (locale === "ja") return ja_emails_auth_deletion_button(inputs)
	return en_emails_auth_deletion_button(inputs)
});
