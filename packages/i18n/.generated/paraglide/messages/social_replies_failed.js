/* eslint-disable */
import { getLocale, experimentalStaticLocale } from '../runtime.js';

/** @typedef {import('../runtime.js').LocalizedString} LocalizedString */

/** @typedef {{}} Social_Replies_FailedInputs */

const en_social_replies_failed = /** @type {(inputs: Social_Replies_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Couldn’t load the replies. Try again.`)
};

const es_social_replies_failed = /** @type {(inputs: Social_Replies_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`No se pudieron cargar las respuestas. Inténtalo de nuevo.`)
};

const de_social_replies_failed = /** @type {(inputs: Social_Replies_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Die Antworten konnten nicht geladen werden. Versuch es erneut.`)
};

const fr_social_replies_failed = /** @type {(inputs: Social_Replies_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossible de charger les réponses. Réessayez.`)
};

const it_social_replies_failed = /** @type {(inputs: Social_Replies_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Impossibile caricare le risposte. Riprova.`)
};

const nl_social_replies_failed = /** @type {(inputs: Social_Replies_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`De antwoorden konden niet worden geladen. Probeer het opnieuw.`)
};

const pl_social_replies_failed = /** @type {(inputs: Social_Replies_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Nie udało się wczytać odpowiedzi. Spróbuj ponownie.`)
};

const pt_social_replies_failed = /** @type {(inputs: Social_Replies_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Não foi possível carregar as respostas. Tente de novo.`)
};

const ru_social_replies_failed = /** @type {(inputs: Social_Replies_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Не удалось загрузить ответы. Попробуйте снова.`)
};

const sv_social_replies_failed = /** @type {(inputs: Social_Replies_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Det gick inte att ladda svaren. Försök igen.`)
};

const tr_social_replies_failed = /** @type {(inputs: Social_Replies_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`Yanıtlar yüklenemedi. Tekrar dene.`)
};

const zh_social_replies_failed = /** @type {(inputs: Social_Replies_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`无法加载回复，请重试。`)
};

const ja_social_replies_failed = /** @type {(inputs: Social_Replies_FailedInputs) => LocalizedString} */ () => {
	return /** @type {LocalizedString} */ (`返信を読み込めませんでした。もう一度お試しください。`)
};

/**
* | output |
* | --- |
* | "Couldn’t load the replies. Try again." |
*
* @param {Social_Replies_FailedInputs} inputs
* @param {{ locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }} options
* @returns {LocalizedString}
*/
export const social_replies_failed = /** @type {((inputs?: Social_Replies_FailedInputs, options?: { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }) => LocalizedString) & import('../runtime.js').MessageMetadata<Social_Replies_FailedInputs, { locale?: "en" | "es" | "de" | "fr" | "it" | "nl" | "pl" | "pt" | "ru" | "sv" | "tr" | "zh" | "ja" }, {}>} */ ((inputs = {}, options = {}) => {
	const locale = experimentalStaticLocale ?? options.locale ?? getLocale()
	if (locale === "es") return es_social_replies_failed(inputs)
	if (locale === "de") return de_social_replies_failed(inputs)
	if (locale === "fr") return fr_social_replies_failed(inputs)
	if (locale === "it") return it_social_replies_failed(inputs)
	if (locale === "nl") return nl_social_replies_failed(inputs)
	if (locale === "pl") return pl_social_replies_failed(inputs)
	if (locale === "pt") return pt_social_replies_failed(inputs)
	if (locale === "ru") return ru_social_replies_failed(inputs)
	if (locale === "sv") return sv_social_replies_failed(inputs)
	if (locale === "tr") return tr_social_replies_failed(inputs)
	if (locale === "zh") return zh_social_replies_failed(inputs)
	if (locale === "ja") return ja_social_replies_failed(inputs)
	return en_social_replies_failed(inputs)
});
