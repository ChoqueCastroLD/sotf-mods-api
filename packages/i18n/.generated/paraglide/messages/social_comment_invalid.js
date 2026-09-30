/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Comment_InvalidInputs */

const en_social_comment_invalid = /** @type {(inputs: Social_Comment_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`This text can’t be saved. Check it and try again.`)
};

const es_social_comment_invalid = /** @type {(inputs: Social_Comment_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este texto no se puede guardar. Revísalo e inténtalo de nuevo.`)
};

const de_social_comment_invalid = /** @type {(inputs: Social_Comment_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Dieser Text kann nicht gespeichert werden. Prüfe ihn und versuch es erneut.`)
};

const fr_social_comment_invalid = /** @type {(inputs: Social_Comment_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Ce texte ne peut pas être enregistré. Vérifiez-le et réessayez.`)
};

const it_social_comment_invalid = /** @type {(inputs: Social_Comment_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Questo testo non può essere salvato. Controllalo e riprova.`)
};

const nl_social_comment_invalid = /** @type {(inputs: Social_Comment_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Deze tekst kan niet worden opgeslagen. Controleer hem en probeer het opnieuw.`)
};

const pl_social_comment_invalid = /** @type {(inputs: Social_Comment_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie można zapisać tego tekstu. Sprawdź go i spróbuj ponownie.`)
};

const pt_social_comment_invalid = /** @type {(inputs: Social_Comment_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Este texto não pode ser salvo. Revise e tente de novo.`)
};

const ru_social_comment_invalid = /** @type {(inputs: Social_Comment_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Этот текст нельзя сохранить. Проверьте его и попробуйте снова.`)
};

const sv_social_comment_invalid = /** @type {(inputs: Social_Comment_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Texten kan inte sparas. Kontrollera den och försök igen.`)
};

const tr_social_comment_invalid = /** @type {(inputs: Social_Comment_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bu metin kaydedilemiyor. Kontrol edip tekrar dene.`)
};

const zh_social_comment_invalid = /** @type {(inputs: Social_Comment_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法保存这段文字，请检查后重试。`)
};

const ja_social_comment_invalid = /** @type {(inputs: Social_Comment_InvalidInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`このテキストは保存できません。確認してもう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "This text can’t be saved. Check it and try again." |
*
* @param {Social_Comment_InvalidInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_comment_invalid = /** @type {((inputs?: Social_Comment_InvalidInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Comment_InvalidInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_comment_invalid(inputs)
	if (locale === "de") return de_social_comment_invalid(inputs)
	if (locale === "fr") return fr_social_comment_invalid(inputs)
	if (locale === "it") return it_social_comment_invalid(inputs)
	if (locale === "nl") return nl_social_comment_invalid(inputs)
	if (locale === "pl") return pl_social_comment_invalid(inputs)
	if (locale === "pt") return pt_social_comment_invalid(inputs)
	if (locale === "ru") return ru_social_comment_invalid(inputs)
	if (locale === "sv") return sv_social_comment_invalid(inputs)
	if (locale === "tr") return tr_social_comment_invalid(inputs)
	if (locale === "zh") return zh_social_comment_invalid(inputs)
	if (locale === "ja") return ja_social_comment_invalid(inputs)
	return en_social_comment_invalid(inputs)
});
