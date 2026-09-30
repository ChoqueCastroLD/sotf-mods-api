/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Kitsocial_Post_FailedInputs */

const en_kitsocial_post_failed = /** @type {(inputs: Kitsocial_Post_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`The comment could not be saved. Try again.`)
};

const es_kitsocial_post_failed = /** @type {(inputs: Kitsocial_Post_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudo guardar el comentario. Inténtalo de nuevo.`)
};

const de_kitsocial_post_failed = /** @type {(inputs: Kitsocial_Post_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Der Kommentar konnte nicht gespeichert werden. Versuche es erneut.`)
};

const fr_kitsocial_post_failed = /** @type {(inputs: Kitsocial_Post_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible d’enregistrer le commentaire. Réessayez.`)
};

const it_kitsocial_post_failed = /** @type {(inputs: Kitsocial_Post_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile salvare il commento. Riprova.`)
};

const nl_kitsocial_post_failed = /** @type {(inputs: Kitsocial_Post_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De reactie kon niet worden opgeslagen. Probeer het opnieuw.`)
};

const pl_kitsocial_post_failed = /** @type {(inputs: Kitsocial_Post_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się zapisać komentarza. Spróbuj ponownie.`)
};

const pt_kitsocial_post_failed = /** @type {(inputs: Kitsocial_Post_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível salvar o comentário. Tente novamente.`)
};

const ru_kitsocial_post_failed = /** @type {(inputs: Kitsocial_Post_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось сохранить комментарий. Попробуйте ещё раз.`)
};

const sv_kitsocial_post_failed = /** @type {(inputs: Kitsocial_Post_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Kommentaren kunde inte sparas. Försök igen.`)
};

const tr_kitsocial_post_failed = /** @type {(inputs: Kitsocial_Post_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yorum kaydedilemedi. Tekrar dene.`)
};

const zh_kitsocial_post_failed = /** @type {(inputs: Kitsocial_Post_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法保存评论，请重试。`)
};

const ja_kitsocial_post_failed = /** @type {(inputs: Kitsocial_Post_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`コメントを保存できませんでした。もう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "The comment could not be saved. Try again." |
*
* @param {Kitsocial_Post_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const kitsocial_post_failed = /** @type {((inputs?: Kitsocial_Post_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Kitsocial_Post_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_kitsocial_post_failed(inputs)
	if (locale === "de") return de_kitsocial_post_failed(inputs)
	if (locale === "fr") return fr_kitsocial_post_failed(inputs)
	if (locale === "it") return it_kitsocial_post_failed(inputs)
	if (locale === "nl") return nl_kitsocial_post_failed(inputs)
	if (locale === "pl") return pl_kitsocial_post_failed(inputs)
	if (locale === "pt") return pt_kitsocial_post_failed(inputs)
	if (locale === "ru") return ru_kitsocial_post_failed(inputs)
	if (locale === "sv") return sv_kitsocial_post_failed(inputs)
	if (locale === "tr") return tr_kitsocial_post_failed(inputs)
	if (locale === "zh") return zh_kitsocial_post_failed(inputs)
	if (locale === "ja") return ja_kitsocial_post_failed(inputs)
	return en_kitsocial_post_failed(inputs)
});
