/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Auth_Menu_UnverifiedInputs */

const en_auth_menu_unverified = /** @type {(inputs: Auth_Menu_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verify your email to comment, review and upload.`)
};

const es_auth_menu_unverified = /** @type {(inputs: Auth_Menu_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifica tu email para comentar, reseñar y subir mods.`)
};

const de_auth_menu_unverified = /** @type {(inputs: Auth_Menu_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestätige deine E-Mail, um zu kommentieren, zu rezensieren und hochzuladen.`)
};

const fr_auth_menu_unverified = /** @type {(inputs: Auth_Menu_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vérifiez votre e-mail pour commenter, donner votre avis et publier.`)
};

const it_auth_menu_unverified = /** @type {(inputs: Auth_Menu_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifica la tua email per commentare, recensire e caricare.`)
};

const nl_auth_menu_unverified = /** @type {(inputs: Auth_Menu_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bevestig je e-mailadres om te reageren, te recenseren en te uploaden.`)
};

const pl_auth_menu_unverified = /** @type {(inputs: Auth_Menu_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Potwierdź e-mail, aby komentować, recenzować i wgrywać mody.`)
};

const pt_auth_menu_unverified = /** @type {(inputs: Auth_Menu_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Confirme seu e-mail para comentar, avaliar e enviar mods.`)
};

const ru_auth_menu_unverified = /** @type {(inputs: Auth_Menu_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подтвердите email, чтобы комментировать, писать отзывы и загружать моды.`)
};

const sv_auth_menu_unverified = /** @type {(inputs: Auth_Menu_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bekräfta din e-post för att kommentera, recensera och ladda upp.`)
};

const tr_auth_menu_unverified = /** @type {(inputs: Auth_Menu_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yorum yapmak, inceleme yazmak ve yüklemek için e-postanı doğrula.`)
};

const zh_auth_menu_unverified = /** @type {(inputs: Auth_Menu_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`验证邮箱后即可评论、写评测和上传模组。`)
};

const ja_auth_menu_unverified = /** @type {(inputs: Auth_Menu_UnverifiedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コメント、レビュー、アップロードをするにはメールアドレスを確認してください。`)
};

/**
* | output |
* | --- |
* | "Verify your email to comment, review and upload." |
*
* @param {Auth_Menu_UnverifiedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const auth_menu_unverified = /** @type {((inputs?: Auth_Menu_UnverifiedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Auth_Menu_UnverifiedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_auth_menu_unverified(inputs)
	if (locale === "de") return de_auth_menu_unverified(inputs)
	if (locale === "fr") return fr_auth_menu_unverified(inputs)
	if (locale === "it") return it_auth_menu_unverified(inputs)
	if (locale === "nl") return nl_auth_menu_unverified(inputs)
	if (locale === "pl") return pl_auth_menu_unverified(inputs)
	if (locale === "pt") return pt_auth_menu_unverified(inputs)
	if (locale === "ru") return ru_auth_menu_unverified(inputs)
	if (locale === "sv") return sv_auth_menu_unverified(inputs)
	if (locale === "tr") return tr_auth_menu_unverified(inputs)
	if (locale === "zh") return zh_auth_menu_unverified(inputs)
	if (locale === "ja") return ja_auth_menu_unverified(inputs)
	return en_auth_menu_unverified(inputs)
});
