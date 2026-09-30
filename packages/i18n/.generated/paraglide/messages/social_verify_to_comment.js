/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Verify_To_CommentInputs */

const en_social_verify_to_comment = /** @type {(inputs: Social_Verify_To_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verify your e-mail to comment.`)
};

const es_social_verify_to_comment = /** @type {(inputs: Social_Verify_To_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifica tu correo para comentar.`)
};

const de_social_verify_to_comment = /** @type {(inputs: Social_Verify_To_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bestätige deine E-Mail-Adresse, um zu kommentieren.`)
};

const fr_social_verify_to_comment = /** @type {(inputs: Social_Verify_To_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Vérifiez votre e-mail pour commenter.`)
};

const it_social_verify_to_comment = /** @type {(inputs: Social_Verify_To_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifica la tua e-mail per commentare.`)
};

const nl_social_verify_to_comment = /** @type {(inputs: Social_Verify_To_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bevestig je e-mailadres om te reageren.`)
};

const pl_social_verify_to_comment = /** @type {(inputs: Social_Verify_To_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Zweryfikuj e-mail, aby komentować.`)
};

const pt_social_verify_to_comment = /** @type {(inputs: Social_Verify_To_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifique seu e-mail para comentar.`)
};

const ru_social_verify_to_comment = /** @type {(inputs: Social_Verify_To_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Подтвердите e-mail, чтобы комментировать.`)
};

const sv_social_verify_to_comment = /** @type {(inputs: Social_Verify_To_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Verifiera din e-post för att kommentera.`)
};

const tr_social_verify_to_comment = /** @type {(inputs: Social_Verify_To_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yorum yapmak için e-postanı doğrula.`)
};

const zh_social_verify_to_comment = /** @type {(inputs: Social_Verify_To_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`验证邮箱后即可评论。`)
};

const ja_social_verify_to_comment = /** @type {(inputs: Social_Verify_To_CommentInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コメントするにはメールアドレスを確認してください。`)
};

/**
* | output |
* | --- |
* | "Verify your e-mail to comment." |
*
* @param {Social_Verify_To_CommentInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_verify_to_comment = /** @type {((inputs?: Social_Verify_To_CommentInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Verify_To_CommentInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_verify_to_comment(inputs)
	if (locale === "de") return de_social_verify_to_comment(inputs)
	if (locale === "fr") return fr_social_verify_to_comment(inputs)
	if (locale === "it") return it_social_verify_to_comment(inputs)
	if (locale === "nl") return nl_social_verify_to_comment(inputs)
	if (locale === "pl") return pl_social_verify_to_comment(inputs)
	if (locale === "pt") return pt_social_verify_to_comment(inputs)
	if (locale === "ru") return ru_social_verify_to_comment(inputs)
	if (locale === "sv") return sv_social_verify_to_comment(inputs)
	if (locale === "tr") return tr_social_verify_to_comment(inputs)
	if (locale === "zh") return zh_social_verify_to_comment(inputs)
	if (locale === "ja") return ja_social_verify_to_comment(inputs)
	return en_social_verify_to_comment(inputs)
});
