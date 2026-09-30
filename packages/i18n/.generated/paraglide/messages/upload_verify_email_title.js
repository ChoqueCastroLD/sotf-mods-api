/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Upload_Verify_Email_TitleInputs */

const en_upload_verify_email_title = /** @type {(inputs: Upload_Verify_Email_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verify your email to publish.`)
};

const es_upload_verify_email_title = /** @type {(inputs: Upload_Verify_Email_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifica tu correo para publicar.`)
};

const de_upload_verify_email_title = /** @type {(inputs: Upload_Verify_Email_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestätige deine E-Mail, um zu veröffentlichen.`)
};

const fr_upload_verify_email_title = /** @type {(inputs: Upload_Verify_Email_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vérifiez votre e-mail pour publier.`)
};

const it_upload_verify_email_title = /** @type {(inputs: Upload_Verify_Email_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifica la tua email per pubblicare.`)
};

const nl_upload_verify_email_title = /** @type {(inputs: Upload_Verify_Email_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bevestig je e-mailadres om te publiceren.`)
};

const pl_upload_verify_email_title = /** @type {(inputs: Upload_Verify_Email_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Potwierdź e-mail, aby publikować.`)
};

const pt_upload_verify_email_title = /** @type {(inputs: Upload_Verify_Email_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirme seu e-mail para publicar.`)
};

const ru_upload_verify_email_title = /** @type {(inputs: Upload_Verify_Email_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подтвердите почту, чтобы публиковать.`)
};

const sv_upload_verify_email_title = /** @type {(inputs: Upload_Verify_Email_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bekräfta din e-post för att publicera.`)
};

const tr_upload_verify_email_title = /** @type {(inputs: Upload_Verify_Email_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yayınlamak için e-postanı doğrula.`)
};

const zh_upload_verify_email_title = /** @type {(inputs: Upload_Verify_Email_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`验证邮箱后才能发布。`)
};

const ja_upload_verify_email_title = /** @type {(inputs: Upload_Verify_Email_TitleInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`公開するにはメールアドレスを確認してください。`)
};

/**
* | output |
* | --- |
* | "Verify your email to publish." |
*
* @param {Upload_Verify_Email_TitleInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const upload_verify_email_title = /** @type {((inputs?: Upload_Verify_Email_TitleInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Upload_Verify_Email_TitleInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_upload_verify_email_title(inputs)
	if (locale === "de") return de_upload_verify_email_title(inputs)
	if (locale === "fr") return fr_upload_verify_email_title(inputs)
	if (locale === "it") return it_upload_verify_email_title(inputs)
	if (locale === "nl") return nl_upload_verify_email_title(inputs)
	if (locale === "pl") return pl_upload_verify_email_title(inputs)
	if (locale === "pt") return pt_upload_verify_email_title(inputs)
	if (locale === "ru") return ru_upload_verify_email_title(inputs)
	if (locale === "sv") return sv_upload_verify_email_title(inputs)
	if (locale === "tr") return tr_upload_verify_email_title(inputs)
	if (locale === "zh") return zh_upload_verify_email_title(inputs)
	if (locale === "ja") return ja_upload_verify_email_title(inputs)
	return en_upload_verify_email_title(inputs)
});
