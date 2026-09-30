/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_Deleted_PreviewInputs */

const en_emails_auth_deleted_preview = /** @type {(inputs: Emails_Auth_Deleted_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Your personal data has been erased.`)
};

const es_emails_auth_deleted_preview = /** @type {(inputs: Emails_Auth_Deleted_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Tus datos personales se han eliminado.`)
};

const de_emails_auth_deleted_preview = /** @type {(inputs: Emails_Auth_Deleted_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deine persönlichen Daten wurden gelöscht.`)
};

const fr_emails_auth_deleted_preview = /** @type {(inputs: Emails_Auth_Deleted_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vos données personnelles ont été effacées.`)
};

const it_emails_auth_deleted_preview = /** @type {(inputs: Emails_Auth_Deleted_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`I tuoi dati personali sono stati cancellati.`)
};

const nl_emails_auth_deleted_preview = /** @type {(inputs: Emails_Auth_Deleted_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je persoonsgegevens zijn gewist.`)
};

const pl_emails_auth_deleted_preview = /** @type {(inputs: Emails_Auth_Deleted_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Twoje dane osobowe zostały usunięte.`)
};

const pt_emails_auth_deleted_preview = /** @type {(inputs: Emails_Auth_Deleted_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Seus dados pessoais foram apagados.`)
};

const ru_emails_auth_deleted_preview = /** @type {(inputs: Emails_Auth_Deleted_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ваши персональные данные стёрты.`)
};

const sv_emails_auth_deleted_preview = /** @type {(inputs: Emails_Auth_Deleted_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dina personuppgifter har raderats.`)
};

const tr_emails_auth_deleted_preview = /** @type {(inputs: Emails_Auth_Deleted_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kişisel verilerin silindi.`)
};

const zh_emails_auth_deleted_preview = /** @type {(inputs: Emails_Auth_Deleted_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你的个人数据已被清除。`)
};

const ja_emails_auth_deleted_preview = /** @type {(inputs: Emails_Auth_Deleted_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`個人データは消去されました。`)
};

/**
* | output |
* | --- |
* | "Your personal data has been erased." |
*
* @param {Emails_Auth_Deleted_PreviewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_deleted_preview = /** @type {((inputs?: Emails_Auth_Deleted_PreviewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Deleted_PreviewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_deleted_preview(inputs)
	if (locale === "de") return de_emails_auth_deleted_preview(inputs)
	if (locale === "fr") return fr_emails_auth_deleted_preview(inputs)
	if (locale === "it") return it_emails_auth_deleted_preview(inputs)
	if (locale === "nl") return nl_emails_auth_deleted_preview(inputs)
	if (locale === "pl") return pl_emails_auth_deleted_preview(inputs)
	if (locale === "pt") return pt_emails_auth_deleted_preview(inputs)
	if (locale === "ru") return ru_emails_auth_deleted_preview(inputs)
	if (locale === "sv") return sv_emails_auth_deleted_preview(inputs)
	if (locale === "tr") return tr_emails_auth_deleted_preview(inputs)
	if (locale === "zh") return zh_emails_auth_deleted_preview(inputs)
	if (locale === "ja") return ja_emails_auth_deleted_preview(inputs)
	return en_emails_auth_deleted_preview(inputs)
});
