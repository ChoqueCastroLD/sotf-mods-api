/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Profile_Xp_Review_With_TextInputs */

const en_profile_xp_review_with_text = /** @type {(inputs: Profile_Xp_Review_With_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Review with at least 80 characters of text`)
};

const es_profile_xp_review_with_text = /** @type {(inputs: Profile_Xp_Review_With_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Reseña con al menos 80 caracteres de texto`)
};

const de_profile_xp_review_with_text = /** @type {(inputs: Profile_Xp_Review_With_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Bewertung mit mindestens 80 Zeichen Text`)
};

const fr_profile_xp_review_with_text = /** @type {(inputs: Profile_Xp_Review_With_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avis d’au moins 80 caractères de texte`)
};

const it_profile_xp_review_with_text = /** @type {(inputs: Profile_Xp_Review_With_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recensione con almeno 80 caratteri di testo`)
};

const nl_profile_xp_review_with_text = /** @type {(inputs: Profile_Xp_Review_With_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Review met minstens 80 tekens tekst`)
};

const pl_profile_xp_review_with_text = /** @type {(inputs: Profile_Xp_Review_With_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recenzja z co najmniej 80 znakami tekstu`)
};

const pt_profile_xp_review_with_text = /** @type {(inputs: Profile_Xp_Review_With_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Avaliação com pelo menos 80 caracteres de texto`)
};

const ru_profile_xp_review_with_text = /** @type {(inputs: Profile_Xp_Review_With_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Отзыв с текстом не короче 80 символов`)
};

const sv_profile_xp_review_with_text = /** @type {(inputs: Profile_Xp_Review_With_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Recension med minst 80 tecken text`)
};

const tr_profile_xp_review_with_text = /** @type {(inputs: Profile_Xp_Review_With_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`En az 80 karakter metin içeren inceleme`)
};

const zh_profile_xp_review_with_text = /** @type {(inputs: Profile_Xp_Review_With_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`撰写至少 80 个字符的评价`)
};

const ja_profile_xp_review_with_text = /** @type {(inputs: Profile_Xp_Review_With_TextInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`80 文字以上のテキスト付きレビュー`)
};

/**
* | output |
* | --- |
* | "Review with at least 80 characters of text" |
*
* @param {Profile_Xp_Review_With_TextInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const profile_xp_review_with_text = /** @type {((inputs?: Profile_Xp_Review_With_TextInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Profile_Xp_Review_With_TextInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_profile_xp_review_with_text(inputs)
	if (locale === "de") return de_profile_xp_review_with_text(inputs)
	if (locale === "fr") return fr_profile_xp_review_with_text(inputs)
	if (locale === "it") return it_profile_xp_review_with_text(inputs)
	if (locale === "nl") return nl_profile_xp_review_with_text(inputs)
	if (locale === "pl") return pl_profile_xp_review_with_text(inputs)
	if (locale === "pt") return pt_profile_xp_review_with_text(inputs)
	if (locale === "ru") return ru_profile_xp_review_with_text(inputs)
	if (locale === "sv") return sv_profile_xp_review_with_text(inputs)
	if (locale === "tr") return tr_profile_xp_review_with_text(inputs)
	if (locale === "zh") return zh_profile_xp_review_with_text(inputs)
	if (locale === "ja") return ja_profile_xp_review_with_text(inputs)
	return en_profile_xp_review_with_text(inputs)
});
