/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Emails_Auth_Deletion_PreviewInputs */

const en_emails_auth_deletion_preview = /** @type {(inputs: Emails_Auth_Deletion_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`You can still change your mind.`)
};

const es_emails_auth_deletion_preview = /** @type {(inputs: Emails_Auth_Deletion_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Todavía puedes cambiar de idea.`)
};

const de_emails_auth_deletion_preview = /** @type {(inputs: Emails_Auth_Deletion_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du kannst es dir noch anders überlegen.`)
};

const fr_emails_auth_deletion_preview = /** @type {(inputs: Emails_Auth_Deletion_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vous pouvez encore changer d’avis.`)
};

const it_emails_auth_deletion_preview = /** @type {(inputs: Emails_Auth_Deletion_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Puoi ancora cambiare idea.`)
};

const nl_emails_auth_deletion_preview = /** @type {(inputs: Emails_Auth_Deletion_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Je kunt nog van gedachten veranderen.`)
};

const pl_emails_auth_deletion_preview = /** @type {(inputs: Emails_Auth_Deletion_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nadal możesz zmienić zdanie.`)
};

const pt_emails_auth_deletion_preview = /** @type {(inputs: Emails_Auth_Deletion_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Você ainda pode mudar de ideia.`)
};

const ru_emails_auth_deletion_preview = /** @type {(inputs: Emails_Auth_Deletion_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Вы ещё можете передумать.`)
};

const sv_emails_auth_deletion_preview = /** @type {(inputs: Emails_Auth_Deletion_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Du kan fortfarande ångra dig.`)
};

const tr_emails_auth_deletion_preview = /** @type {(inputs: Emails_Auth_Deletion_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Hâlâ fikrini değiştirebilirsin.`)
};

const zh_emails_auth_deletion_preview = /** @type {(inputs: Emails_Auth_Deletion_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`你仍然可以改变主意。`)
};

const ja_emails_auth_deletion_preview = /** @type {(inputs: Emails_Auth_Deletion_PreviewInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`まだ取り消すことができます。`)
};

/**
* | output |
* | --- |
* | "You can still change your mind." |
*
* @param {Emails_Auth_Deletion_PreviewInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const emails_auth_deletion_preview = /** @type {((inputs?: Emails_Auth_Deletion_PreviewInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Emails_Auth_Deletion_PreviewInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_emails_auth_deletion_preview(inputs)
	if (locale === "de") return de_emails_auth_deletion_preview(inputs)
	if (locale === "fr") return fr_emails_auth_deletion_preview(inputs)
	if (locale === "it") return it_emails_auth_deletion_preview(inputs)
	if (locale === "nl") return nl_emails_auth_deletion_preview(inputs)
	if (locale === "pl") return pl_emails_auth_deletion_preview(inputs)
	if (locale === "pt") return pt_emails_auth_deletion_preview(inputs)
	if (locale === "ru") return ru_emails_auth_deletion_preview(inputs)
	if (locale === "sv") return sv_emails_auth_deletion_preview(inputs)
	if (locale === "tr") return tr_emails_auth_deletion_preview(inputs)
	if (locale === "zh") return zh_emails_auth_deletion_preview(inputs)
	if (locale === "ja") return ja_emails_auth_deletion_preview(inputs)
	return en_emails_auth_deletion_preview(inputs)
});
